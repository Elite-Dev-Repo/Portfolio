import { useEffect } from "react";

export function Sabilytics() {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.sabilytics.com/script.js";
    script.setAttribute("data-site", "tp0almkyqgly");
    script.setAttribute("data-domain", "oyenekanemmanuel.xyz");
    document.head.appendChild(script);
  }, []);

  return null;
}
