import {
  Rss,
  House,
  GraduationCap,
  PhoneForwarded,
  ScrollText,
  Download,
  Send,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

import elitelogo from "../assets/elitelogo.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const proof = [
    {
      name: "JavaScript",
      icon: <i class="fa-brands fa-node-js"></i>,
    },
    {
      name: "React Js",
      icon: <i class="fa-brands fa-react"></i>,
    },
    {
      name: "Django",
      icon: <i class="fa-brands fa-python"></i>,
    },
    {
      name: "TypeScript",
      icon: "",
    },
    {
      name: "Wix",
      icon: <i class="fa-brands fa-wix"></i>,
    },
    {
      name: "HTML/ CSS",
      icon: <i class="fa-solid fa-code"></i>,
    },
  ];

  const proofitem = proof.map((proof) => {
    return (
      <p
        key={proof.name}
        className="text-[15px] flex items-center gap-3 text-[#ffffff73]"
      >
        <span className="text-3xl text-white opacity-65">
          {proof.icon ? proof.icon : <i className="fa-solid fa-code"></i>}
        </span>{" "}
        {proof.name}
      </p>
    );
  });

  const socialList = [
    {
      name: "Twitter",
      link: `https://x.com/elite_developer`,
      icon: <i class="fa-brands fa-x-twitter"></i>,
    },
    {
      name: "LinkedIn",
      link: `https://x.com/elite_developer`,
      icon: <i class="fa-brands fa-linkedin"></i>,
    },

    {
      name: "Tiktok",
      link: `https://x.com/elite_developer`,
      icon: <i class="fa-brands fa-tiktok"></i>,
    },

    {
      name: "Instagram",
      link: `https://x.com/elite_developer`,
      icon: <i class="fa-brands fa-instagram"></i>,
    },
  ];

  const socials = socialList.map((social) => {
    return (
      <a
        key={social.name}
        href={social.link}
        target="_blank"
        className=" flex items-center gap-2 socials font-extralight transition"
      >
        <p className=" text-[1em] social-name opacity-0">{social.name} </p>
        <span className="social-icon text-[1.5em] ">{social.icon}</span>
      </a>
    );
  });

  const navLinks = [
    {
      name: "Home",
      icon: <House />,
    },
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
      <li className="" key={link.name}>
        <a
          href={`#${link.name.toLowerCase()}`}
          className="nav-link transition  text-[#ffffff73] hover:text-secondary cursor-none transition"
        >
          {link.name}
        </a>
      </li>
    );
  });

  return (
    <header className="text-white relative overflow-hidden min-h-[screen] max-sm:min-h-[calc(100vh+10em)]  max-lg:min-h-[calc(100vh+10em)]">
      <nav className="nav justify-between md:justify-around items-center relative z-50">
        <div className="font-bold">
          {" "}
          <a href="#">
            <img src={elitelogo} alt="" className="w-[4em] md:w-[5em]" />
          </a>
        </div>
        <ul className="hidden md:flex gap-6">{navItems}</ul>
        <a
          href="/blog"
          className="hidden md:flex uppercase px-7 rounded border py-2 bg-secondary text-white gap-3 items-center font-semibold hover:border transition cursor-none border-secondary"
        >
          Blog
        </a>

        {/* Mobile Toggle */}
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="absolute top-[80px] left-0 w-full h-[calc(100vh-80px)] bg-primary flex flex-col items-center justify-start pt-20 gap-8 z-40 transition-all duration-300">
            <ul className="flex flex-col gap-8 text-2xl text-center">
              {navItems}
            </ul>
            <a
              href="/blog"
              className="uppercase px-7 rounded border py-2 bg-secondary text-white flex gap-3 items-center font-semibold hover:border transition cursor-none border-secondary text-xl"
            >
              Blog
            </a>
          </div>
        )}
      </nav>

      <div className="px-5 ">
        <main className="w-full min-h-screen md:h-screen flex flex-col md:block items-center md:items-stretch justify-center relative pt-24 md:pt-0 gap-10 md:gap-0 pb-10 md:pb-0">
          <h1 className="opacity-60 relative md:absolute text-6xl md:text-[9em] md:left-1/2 md:-translate-x-1/2 font-semibold md:mt-[.3em] order-1 md:order-0 text-center w-full md:w-auto">
            ELITE<span className="">.Dev</span>
          </h1>

          <div className="list py-4 md:py-8 flex flex-col gap-4 relative md:absolute md:bottom-[6em] md:left-[2em] items-center md:items-start text-center md:text-left order-2 md:order-0 w-full md:w-auto px-4 md:px-0">
            <h3 className="text-xl md:text-[1.2rem] font-semibold tracking-wider uppercase text-secondary">
              FullStack Website Developer
            </h3>
            <p className="text-[#ffffff7a] sm:text-[.9rem] md:text-[1rem]">
              Frontend Development, Backend Development, Wix Development. <br />{" "}
              SEO friendly websites, Modern and Responsive.
            </p>
            <div className="ctas flex flex-wrap justify-center md:justify-start gap-8">
              <button className="sm:text-[.9rem] md:text-[1rem]">
                <a
                  href="#"
                  className=" gap-2 flex items-center px-6 py-3 text-primary bg-white"
                >
                  Download Resume
                  <span>
                    <Download className="text-secondary" />
                  </span>
                </a>
              </button>
              <button className="sm:text-[.9rem] md:text-[1rem]">
                <a
                  href="mailto:oyenekantomiwa2@gmail.com"
                  target="_blank"
                  className="flex items-center gap-2 px-6 py-3 text-white border border-white"
                >
                  Message Me <Send />
                </a>
              </button>
            </div>
          </div>

          <div className=" max-lg:hidden flex flex-row md:flex-col gap-6 items-center md:items-end relative md:absolute md:right-[1em] md:top-[9em] order-4 md:order-0 mt-6 md:mt-0">
            {socials}
          </div>

          <div className="trust py-4 md:py-8 flex flex-col gap-4 bottom-[4em] relative md:absolute max-lg:bottom-[-3em] md:right-[2em] items-center md:items-end order-3 md:order-0 w-full md:w-auto">
            <h3 className="text-center text-[#ffffff7a] text-sm uppercase tracking-widest">
              Trusted By Hundreds of People Worldwide.
            </h3>

            {/* Marquee Wrapper */}
            <div className="relative flex overflow-hidden w-full max-w-[500px] md:w-[500px] [--gap:3rem] [gap:var(--gap)]">
              {/* First set of items */}
              <div className="flex shrink-0 items-center justify-around [gap:var(--gap)] animate-marquee min-w-full">
                {proofitem}
              </div>

              {/* Duplicate set of items (Required for infinite loop) */}
              <div
                aria-hidden="true"
                className="flex shrink-0 items-center justify-around [gap:var(--gap)] animate-marquee min-w-full"
              >
                {proofitem}
              </div>
            </div>

            {/* Your existing style tag stays here */}
            <style
              dangerouslySetInnerHTML={{
                __html: `
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-100% - var(--gap))); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `,
              }}
            />
          </div>

          <style
            dangerouslySetInnerHTML={{
              __html: `
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(calc(-100% - var(--gap))); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
        `,
            }}
          />
        </main>
      </div>
    </header>
  );
}

export default Header;
