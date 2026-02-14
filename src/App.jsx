import React, { useEffect } from "react"; // Added React hooks
import { motion } from "framer-motion"; // Added Framer Motion
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Qualifications from "./components/Qualifications.jsx";
import Footer from "./components/Footer.jsx";

// Supermouse imports
import { Supermouse } from "@supermousejs/core";
import { Dot } from "@supermousejs/dot";
import { SmartRing } from "@supermousejs/labs";
import { Stick } from "@supermousejs/stick";

function App() {
  // Initialize Supermouse inside useEffect so it only runs once the component mounts
  useEffect(() => {
    const app = new Supermouse({
      hideCursor: true,
    });

    app
      .use(Stick({ padding: 15 }))
      .use(Dot({ size: 6, color: "#222", hideOnShape: true }))
      .use(
        SmartRing({
          size: 30,
          color: "#222",
          enableSkew: true,
          enableScale: true,
        }),
      );

    // Optional: Cleanup if the library supports it to prevent memory leaks
    // return () => app.destroy();
  }, []);

  return (
    <>
      <Header />

      <motion.div
        initial={{ filter: "blur(15px)" }}
        animate={{ filter: "blur(0px)" }}
        transition={{ duration: 0.5 }}
      >
        <About />
        <Portfolio />
        <Qualifications />
        <Contact />
        <Footer />
      </motion.div>
    </>
  );
}

export default App;
