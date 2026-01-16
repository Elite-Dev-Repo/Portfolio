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
import { useState, useEffect } from "react";
import StarfieldHero from "./StarFieldHero";
import resume from "../assets/resume.pdf";

import elitelogo from "../assets/elitelogo.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // useEffect(() => {
  //   alert("hello");
  // }, []);

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
        className="text-[15px] flex items-center gap-3 text-tertiary"
      >
        <span className="text-3xl text-tertiary opacity-90">
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
          className="nav-link transition  text-tertiary hover:text-secondary cursor-none transition"
        >
          {link.name}
        </a>
      </li>
    );
  });

  return (
    <header className=" text-tertiary relative overflow-hidden min-h-[screen] max-sm:min-h-[calc(100vh+10em)]  max-lg:min-h-[calc(100vh+10em)] ">
      <StarfieldHero />
      <nav className="nav justify-between md:justify-center gap-[10%] items-center relative z-50">
        <div className="font-bold">
          {" "}
          <a href="#">
            <img src={elitelogo} alt="" className="w-[3em] md:w-[3em]" />
          </a>
        </div>
        <ul className="hidden md:flex gap-6">{navItems}</ul>

        {/* Mobile Toggle */}
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className=" absolute top-[80px] left-0 w-full h-[calc(100vh-80px)] bg-primary flex flex-col items-center justify-start pt-20 gap-8 z-40 transition-all duration-300">
            <ul className="flex flex-col gap-8 text-2xl text-center">
              {navItems}
            </ul>
          </div>
        )}
      </nav>

      <div className="px-5">
        <main className="w-full min-h-screen md:h-screen flex flex-col md:block items-center md:items-stretch justify-center relative pt-24 md:pt-0 gap-10 md:gap-0 pb-10 md:pb-0">
          <h1 className="flex flex-col items-center md:absolute text-4xl md:text-[6em] md:left-1/2 md:-translate-x-1/2 font-semibold md:mt-[.3em] order-1 md:order-0 text-center w-full md:w-auto">
            <div className="bg-tertiary text-primary text-[25px] px-3 py-1">
              I am
            </div>
            <div className="">
              Oyenekan<span className="opacity-65"> Emmanuel</span>
            </div>
          </h1>

          <div className="list py-4 md:py-8 flex flex-col gap-4 relative md:absolute md:bottom-[6em] md:left-[2em] items-center md:items-start text-center md:text-left order-2 md:order-0 w-full md:w-auto px-4 md:px-0">
            <h3 className="text-xl md:text-[1.2rem] font-semibold tracking-wider uppercase text-secondary">
              FullStack Website Developer
            </h3>
            <p className="text-tertiary sm:text-[.9rem] md:text-[1rem]">
              Frontend Development, Backend Development, Wix Development. <br />{" "}
              SEO friendly websites, Modern and Responsive.
            </p>
            <div className="ctas flex flex-wrap justify-center md:justify-start gap-8">
              <button className="sm:text-[.9rem] md:text-[1rem]">
                <a
                  href={resume}
                  className=" gap-2 flex items-center px-6 py-3 text-primary bg-tertiary"
                >
                  Download Resume
                  <span>
                    <Download className="text-primary" />
                  </span>
                </a>
              </button>
              <button className="sm:text-[.9rem] md:text-[1rem]">
                <a
                  href="mailto:oyenekantomiwa2@gmail.com"
                  target="_blank"
                  className="flex items-center gap-2 px-6 py-3 text-tertiary border border-tertiary"
                >
                  Message Me <Send />
                </a>
              </button>
            </div>
          </div>

          <div className="trust py-4 md:py-8 flex flex-col gap-4 bottom-[4em] relative md:absolute max-lg:bottom-[-3em] md:right-[2em] items-center md:items-end order-3 md:order-0 w-full md:w-auto">
            <h3 className="text-center text-tertiary text-sm uppercase tracking-widest">
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
