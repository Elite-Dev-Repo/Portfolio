import React, { useEffect, useRef } from "react";

const StarfieldHero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let stars = [];

    // --- Configuration ---
    const STAR_COUNT = 100; // Number of grains
    const CONNECTION_DIST = 120; // Distance for constellation lines
    const FALL_SPEED = 0.5; // Base falling speed

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
      initStars();
    };

    const initStars = () => {
      stars = Array.from({ length: STAR_COUNT }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 1, // Tiny grains
        speed: Math.random() * 1.5 + FALL_SPEED,
        opacity: Math.random() * 0.5 + 0.5,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star, i) => {
        // 1. Update Position (Falling logic)
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = -5;
          star.x = Math.random() * canvas.width;
        }

        // 2. Draw the Grain
        ctx.fillStyle = `rgba(255,255,255, ${star.opacity})`;
        ctx.fillRect(star.x, star.y, star.size, star.size); // Square grains look more industrial

        // 3. Constellation Lines
        for (let j = i + 1; j < stars.length; j++) {
          const other = stars[j];
          const dx = star.x - other.x;
          const dy = star.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DIST) {
            ctx.beginPath();
            // Very faint lines to match your 0.03 opacity grid
            ctx.strokeStyle = `rgba(0, 95, 115, ${
              (1 - dist / CONNECTION_DIST) * 0.3
            })`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(star.x, star.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      style={{ pointerEvents: "none" }}
    />
  );
};

export default StarfieldHero;
