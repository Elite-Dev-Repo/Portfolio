import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Nav = () => {
  const navLinks = [
    {
      name: "About",
    },
    {
      name: "Projects",
    },
    {
      name: "Contact",
    },
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = navLinks.map((link) => {
    return (
      <li className="border-r border-white/30 pr-5" key={link.name}>
        <a
          href={`/#${link.name.toLowerCase()}`}
          className="nav-link max-sm:text-[12px] text-secondary hover:text-secondary/50 transition"
        >
          {link.name}
        </a>
      </li>
    );
  });

  useEffect(() => {
    const handleScroll = () => {
      const height = window.innerHeight;
      if (window.scrollY > height) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`max-w-screen w-fit mx-auto h-[60px]  border border-secondary/20 top-5 sticky z-50 backdrop-blur-[2px] ${isScrolled ? "bg-primary" : "bg-white/5"}`}
    >
      <div className="px-5 flex justify-between items-center h-full max-sm:gap-2 gap-10 ">
        {navItems}

        <div className="text-3xl">
          {" "}
          <a href="https://github.com/Elite-Dev-Repo" target="_blank">
            <i className="fa-brands fa-github text-secondary"></i>
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Nav;
