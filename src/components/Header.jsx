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
import { motion } from "framer-motion";
import StarfieldHero from "./StarFieldHero";
import resume from "../assets/resume.pdf";

function Header() {
  // useEffect(() => {
  //   alert("hello");
  // }, []);

  const proof = [
    {
      name: "JavaScript",
      icon: <i className="fa-brands fa-node-js"></i>,
    },
    {
      name: "React Js",
      icon: <i className="fa-brands fa-react"></i>,
    },
    {
      name: "Django",
      icon: <i className="fa-brands fa-python"></i>,
    },
    {
      name: "TypeScript",
      icon: "",
    },
    {
      name: "Wix",
      icon: <i className="fa-brands fa-wix"></i>,
    },
    {
      name: "HTML/ CSS",
      icon: <i className="fa-solid fa-code"></i>,
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

  // const socialList = [
  //   {
  //     name: "Twitter",
  //     link: `https://x.com/elite_developer`,
  //     icon: <i class="fa-brands fa-x-twitter"></i>,
  //   },
  //   {
  //     name: "LinkedIn",
  //     link: `https://x.com/elite_developer`,
  //     icon: <i class="fa-brands fa-linkedin"></i>,
  //   },

  //   {
  //     name: "Tiktok",
  //     link: `https://x.com/elite_developer`,
  //     icon: <i class="fa-brands fa-tiktok"></i>,
  //   },

  //   {
  //     name: "Instagram",
  //     link: `https://x.com/elite_developer`,
  //     icon: <i class="fa-brands fa-instagram"></i>,
  //   },
  // ];

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
    <>
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-screen w-fit mx-auto h-[60px] bg-white/20 border border-black/20 top-5 sticky z-5 backdrop-blur-[2px]"
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
      <header className="d-grid text-tertiary relative overflow-hidden min-h-[screen] max-sm:min-h-[calc(100vh+10em)]  max-lg:min-h-[calc(100vh+10em)] ">
        <StarfieldHero />

        <div className="px-5">
          <main className=" w-full min-h-screen md:h-screen flex flex-col md:block items-center md:items-stretch justify-center relative pt-24 md:pt-0 gap-10 md:gap-0 pb-10 md:pb-0">
            <motion.div
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className=" w-fit mx-auto  md:mt-15 flex items-center gap-3 px-3 py-1 border border-tertiary/20 bg-tertiary/[0.03] rounded-full"
            >
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span>
              </div>
              <span className="font-mono text-[10px] tracking-widest uppercase font-bold px-2">
                FullStack Website Developer
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center md:absolute text-5xl md:text-[5em] md:left-1/2 md:-translate-x-1/2  font-semibold md:mt-[.4em] order-1 md:order-0 text-center w-full md:w-auto"
            >
              <div className="bg-tertiary text-primary text-[25px] px-3 py-1">
                I am
              </div>
              <div className="">
                Oyenekan<span className="opacity-65"> Emmanuel</span>
              </div>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="list py-4 md:py-8 flex flex-col gap-4 relative md:absolute md:bottom-[8em] md:left-[2em] items-center md:items-start text-center md:text-left order-2 md:order-0 w-full md:w-auto px-4 md:px-0"
            >
              <p className="text-tertiary sm:text-[.9rem] md:text-[1rem]">
                Frontend Development, Backend Development, Wix Development.{" "}
                <br /> SEO friendly websites, Modern and Responsive.
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
                    className="flex items-center gap-2 px-6 py-3 text-tertiary border border-tertiary shad"
                  >
                    Message Me <Send />
                  </a>
                </button>
              </div>
            </motion.div>
            <div className="trust py-4  md:py-8 flex flex-col gap-4 bottom-[7em] relative md:absolute max-lg:bottom-[-3em] md:right-[2em] items-center md:items-end order-3 md:order-0 w-full md:w-auto">
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
    </>
  );
}

export default Header;
