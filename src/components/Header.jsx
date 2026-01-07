import {
  Rss,
  House,
  GraduationCap,
  PhoneForwarded,
  ScrollText,
  Download,
  Send,
} from "lucide-react";

import logo from "../assets/logo.png";

function Header() {
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
    <header className="text-white">
      <nav className="nav justify-around items-center">
        <div className="font-bold">
          {" "}
          <a href="#">
            <img src={logo} alt="" className="w-[5em]" />
          </a>
        </div>
        <ul className="flex gap-6">{navItems}</ul>
        <a
          href="#"
          className="uppercase px-7 rounded border py-2 bg-secondary text-white flex gap-3 items-center font-semibold hover:border transition cursor-none border-secondary"
        >
          Blog
        </a>
      </nav>

      <div className="px-5 ">
        <main className="w-full h-screen flex flex-col justify-between relative">
          <h1 className="opacity-60 absolute text-[9em] left-1/2 -translate-x-1/2 font-semibold mt-[.3em]">
            ELITE<span className="">.Dev</span>
          </h1>

          <div className="list py-8 flex flex-col gap-4 absolute bottom-[6em] left-[2em]">
            <h3 className="text-2xl font-semibold tracking-wider uppercase text-secondary">
              FullStack Website Developer
            </h3>
            <p className="text-[#ffffff7a]">
              Frontend Development, Backend Development, Wix Development. <br />{" "}
              SEO friendly websites, Modern and Responsive.
            </p>
            <div className="ctas flex gap-8">
              <button>
                <a
                  href="#"
                  className=" gap-2 flex items-center px-6 py-3 text-primary bg-[#fff]"
                >
                  Download Resume
                  <span>
                    <Download className="text-secondary" />
                  </span>
                </a>
              </button>
              <button className=" ">
                <a
                  href="#"
                  className="flex items-center gap-2 px-6 py-3 text-white border border-white"
                >
                  Message Me <Send />
                </a>
              </button>
            </div>
          </div>

          <div className=" flex flex-col gap-6 items-end absolute right-[3em] top-[9em]">
            {socials}
          </div>

          <div className="trust py-8 flex flex-col gap-4 absolute bottom-[6em] right-[2em]">
            <h3 className="text-center text-[#ffffff7a] text-sm uppercase tracking-widest">
              Trusted By Hundreds of People Worldwide.
            </h3>

            {/* Marquee Wrapper */}
            <div className="relative flex overflow-hidden w-[500px] [--gap:3rem] [gap:var(--gap)]">
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
