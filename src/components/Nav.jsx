import React from "react";
import { motion } from "framer-motion";
import { ScrollText, GraduationCap, PhoneForwarded } from "lucide-react";

const Nav = () => {
  const navLinks = [
    {
      name: "About",
      icon: <ScrollText />,
    },
    {
      name: "Qualifications",
      icon: <GraduationCap />,
    },
    {
      name: "Contact",
      icon: <PhoneForwarded />,
    },
  ];
  const navItems = navLinks.map((link) => {
    return (
      <li className="border-r border-black/30 pr-5" key={link.name}>
        <a
          href={`#${link.name.toLowerCase()}`}
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
      className="max-w-screen w-fit mx-auto h-[60px] bg-[var(--color-primary)]/50 border border-black/20 top-5 sticky z-50 backdrop-blur-[2px]"
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
