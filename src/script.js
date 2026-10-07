(async function fastMoneyInjector() {
  const TARGET_MONEY = 6035998417; // Target balance
  let currentStep = 250000; // Conservative initial step to reduce 409s
  const MIN_STEP = 10000; // Lower floor step size

  console.log("🚀 Starting Safe-Limit Finder & Auto Loop...");

  // Helper to safely parse JSON response bodies without throwing on empty responses
  async function safeParseJson(res) {
    try {
      const text = await res.text();
      return text ? JSON.parse(text) : {};
    } catch (e) {
      console.warn("Could not parse JSON response:", e);
      return {};
    }
  }

  // Fetch fresh initial state from server
  async function getLatestSave() {
    try {
      const res = await fetch("/api/save", { method: "GET" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await safeParseJson(res);
    } catch (e) {
      console.error("Failed to fetch fresh save:", e);
      return null;
    }
  }

  let saveData = await getLatestSave();
  if (!saveData || !saveData.game) {
    console.error(
      "❌ Failed to fetch base save state. Make sure you are logged in.",
    );
    return;
  }

  let currentMoney = saveData.game.money || 0;
  console.log(
    `💰 Initial Balance: $${currentMoney.toLocaleString()} | Target: $${TARGET_MONEY.toLocaleString()}`,
  );

  let consecutiveSuccesses = 0;

  while (currentMoney < TARGET_MONEY) {
    let attemptDelta = Math.min(currentStep, TARGET_MONEY - currentMoney);
    let updatedGame = JSON.parse(JSON.stringify(saveData.game));

    // Increment target values
    updatedGame.money = currentMoney + attemptDelta;
    if (!updatedGame.stats) updatedGame.stats = {};
    updatedGame.stats.earnedToday =
      (updatedGame.stats.earnedToday || 0) + attemptDelta;
    updatedGame.stats.earnedTotal =
      (updatedGame.stats.earnedTotal || 0) + attemptDelta;

    let payload = {
      game: updatedGame,
      base: saveData.base || Date.now(),
    };

    try {
      let res = await fetch("/api/save", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.status === 200 || res.ok) {
        let resData = await safeParseJson(res);

        if (resData && resData.game) {
          saveData = resData;
          currentMoney = saveData.game.money ?? currentMoney + attemptDelta;
        } else {
          currentMoney += attemptDelta;
          const freshSave = await getLatestSave();
          if (freshSave) saveData = freshSave;
        }

        consecutiveSuccesses++;
        console.log(
          `✅ Success (+${attemptDelta.toLocaleString()}) ➔ Total: $${currentMoney.toLocaleString()}`,
        );

        // Scale up only on 5 consecutive clean acceptances
        if (consecutiveSuccesses >= 5) {
          currentStep = Math.floor(currentStep * 1.25);
          consecutiveSuccesses = 0;
          console.log(
            `📈 Testing higher safe limit: +${currentStep.toLocaleString()}`,
          );
        }

        await new Promise((r) => setTimeout(r, 200)); // Rate limit buffer
      } else if (res.status === 409) {
        // Conflict handling: scale down step size and fetch latest server save & timestamp
        consecutiveSuccesses = 0;
        currentStep = Math.max(MIN_STEP, Math.floor(currentStep / 2));
        console.warn(
          `⚠️ 409 Conflict! High step rejected. Scaling down to +${currentStep.toLocaleString()}`,
        );

        // Refetch latest save to restore baseline timestamp
        const freshSave = await getLatestSave();
        if (freshSave && freshSave.game) {
          saveData = freshSave;
          currentMoney = freshSave.game.money || currentMoney;
        }

        await new Promise((r) => setTimeout(r, 500)); // Backoff before retrying
      } else {
        console.error(`Unexpected HTTP status: ${res.status}`);
        const freshSave = await getLatestSave();
        if (freshSave) saveData = freshSave;
        await new Promise((r) => setTimeout(r, 1000));
      }
    } catch (err) {
      console.error("Network loop error:", err);
      await new Promise((r) => setTimeout(r, 1000));
    }
  }

  console.log("🎉 Target reached! Reloading page to update UI...");
})();
