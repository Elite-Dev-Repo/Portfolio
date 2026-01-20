import { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Qualifications from "./components/Qualifications.jsx";
import Footer from "./components/Footer.jsx";

import { Supermouse } from "@supermousejs/core";
import { Dot } from "@supermousejs/dot";
import { SmartRing } from "@supermousejs/labs";
import { Stick } from "@supermousejs/stick";

const app = new Supermouse({
  hideCursor: true,
});

app
  .use(
    Stick({
      padding: 10,
    }),
  )
  .use(
    Dot({
      size: 8,
      color: "#000000",
      hideOnShape: true,
    }),
  )
  .use(
    SmartRing({
      size: 30,
      color: "#000000",
      enableSkew: true,
    }),
  );
// function TorchlightCursor() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   const [on, setOn] = useState(false);

//   function toggleLight() {
//     setOn((prev) => !prev);
//     console.log(on);
//   }

//   return (
//     <>
//       {/* Torchlight overlay */}
//       <div
//         className={`${
//           on ? "block" : "hidden"
//         } fixed top-0 left-0 w-full h-full pointer-events-none z-9999 animate-flicker
//         `}
//         style={{
//           background: `radial-gradient(circle 600px at ${position.x}px ${position.y}px, transparent 10%, rgba(0, 0, 0, 0.98) 80%)`,
//         }}
//       />

//       <i
//         onClick={toggleLight}
//         style={{
//           filter: on
//             ? "drop-shadow(0 0 8px rgba(255, 215, 0, 0.8)) drop-shadow(0 0 15px rgba(255, 215, 0, 0.4))"
//             : "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))",
//           transition: "filter 0.3s ease, color 0.3s ease",
//           fontSize: "1.5rem",
//         }}
//         className={`z-10001 absolute top-[1.2em] right-[2em] fa-${
//           on ? "solid" : "regular"
//         } fa-lightbulb ${!on ? "text-[#0007]" : "text-black"}`}
//       ></i>

//       {/* Bulb dot */}
//       <div
//         className=" sticky z-[10001] w-[10px] h-[10px] bg-[rgba(0,0,0,0.24)] rounded-full pointer-events-none z-[10000]"
//         style={{
//           left: `${position.x}px`,
//           top: `${position.y}px`,
//           transform: "translate(-50%, -50%)",
//           boxShadow: "0 0 20px 5px #111",
//         }}
//       />
//     </>
//   );
// }

function App() {
  return (
    <>
      <Header />
      <About />
      <Qualifications />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
