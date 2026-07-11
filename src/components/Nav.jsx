import React from "react";
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
  const navItems = navLinks.map((link) => {
    return (
      <li className="border-r border-white/30 pr-5" key={link.name}>
        <a
          href={`/#${link.name.toLowerCase()}`}
          className="nav-link max-sm:text-[12px] text-tertiary hover:text-secondary transition"
        >
          {link.name}
        </a>
      </li>
    );
  });

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-screen w-fit mx-auto h-[60px] bg-white/5 border border-white/20 top-5 sticky z-50 backdrop-blur-[2px]"
    >
      <div className="px-5 flex justify-between items-center h-full max-sm:gap-2 gap-10 ">
        {navItems}

        <div className="text-3xl">
          {" "}
          <a href="https://github.com/Elite-Dev-Repo" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Nav;
