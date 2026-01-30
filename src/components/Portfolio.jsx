import { ArrowRight, ExternalLink } from "lucide-react";
import { useState } from "react";
import reactwind from "../assets/reactwind.png";
import weebschat from "../assets/weebschat.png";
import tabbiebites from "../assets/tabbiebites.png";
import enigma from "../assets/enigma.png";
import rantsarena from "../assets/rantsarena.png";
import dashboard from "../assets/dashboard.png";
function Portfolio() {
  // const [show, setShow] = useState(false);
  const [filter, setFilter] = useState("");

  // function toggleShow() {
  //   setShow((prev) => !prev);
  // }

  const categories = ["All", "Full Stack", "Wix", "Front End"];

  const works = [
    {
      image: enigma,
      title: "Enigma | the action agent.",
      description:
        "An AI-driven automation interface designed to streamline complex workflows. It features a high-performance landing page with interactive elements focused on conversion and user action.",
      techs: ["React .js", "TailwindCSS", "JavaScript"],
      link: "https://enigma.pxxl.click/",
      label: "Full Stack",
    },
    {
      image: dashboard,
      title: "Dashboard",
      description:
        "A high-performance analytics interface designed for data-driven decision-making. This dashboard features a responsive layout and modular component architecture, ensuring seamless data visualization across all device types while maintaining strict type safety.",
      techs: ["React .js", "TailwindCSS", "Typescript"],
      link: "https://enigma-analytics.pxxl.click/",
      label: "Front End",
    },

    {
      image: rantsarena,
      title: "Rantsarena",
      description:
        "A dynamic social platform where users can share thoughts in real-time. Built with Supabase for instant data synchronization and secure authentication across a seamless UI.",
      techs: ["TypeScript", "TailwindCSS", "Supabase"],
      link: "https://rantsarena.pxxl.click/",
      label: "Full Stack",
    },

    {
      image: tabbiebites,
      title: "Tabbiebites",
      description:
        "A sleek, mobile-friendly landing page for a boutique bakery. Designed to showcase culinary products with high-fidelity imagery and a focus on essential decision-making details.",
      techs: ["React .js", "TailwindCSS", "JavaScript"],
      link: "https://tabbiebites.pxxl.click/",
      label: "Front End",
    },

    {
      image: weebschat,
      title: "Weebschat",
      description:
        "A full-featured chat application built for community engagement. Utilizing Django and PostgreSQL, it handles real-time messaging and persistent user data with ease.",
      techs: ["Vanilla Js", "Django", "PostgreSQL"],
      link: "https://chatapp-rdia.onrender.com/",
      label: "Full Stack",
    },

    {
      image: reactwind,
      title: "Reactwind",
      description:
        "A developer-centric utility tool or component library landing page. It emphasizes speed, utility-first styling, and modern React patterns for rapid UI development.",
      techs: ["React .js", "TailwindCSS", "JavaScript"],
      link: "https://reactwind-two.vercel.app/",
      label: "Front End",
    },
  ];
  function filterProj(category) {
    if (category === "All") {
      return setFilter("");
    } else {
      setFilter(category);
    }
  }

  categories.forEach;
  return (
    <div>
      <section className="flex-col">
        <div
          id="portfolio"
          className=" mx-auto px-5 h-[60vh] my-9 flex flex-col items-center justify-center relative"
        >
          <h2 className=" abt-me text-[7em] relative max-sm:text-[2.8em] max-lg:text-[6em] uppercase font-semibold text-tertiary text-center">
            <a className="relative"> MY PORTFOLIO</a>
          </h2>
        </div>
        <div
          id="port"
          className={` relative mt-[2em] w-full flex flex-row justify-center items-center mb-5`}
        >
          <div className="">
            <div className="flex w-full justify-center items-stretch">
              <div className=" flex flex-row gap-2 ">
                {categories.map((category, index) => (
                  <button
                    onClick={() => {
                      filterProj(category);
                    }}
                    key={index}
                    className=" bg-tertiary max-sm:text-[.8em] text-primary font-semibold px-5 py-2 text-[1em] hover:bg-secondary hover:text-white transition duration-300 ease-in-out"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className=" grid grid-cols-1 lg:grid-cols-3 gap-2 cont mt-[4em] ">
              {works.map((work, index) => (
                <div
                  key={index}
                  className={`h-fit border border-tertiary rounded-lg flex flex-col gap-2 bg-tertiary ${filter === "" || filter === work.label ? "flex" : "hidden"}`}
                >
                  <div className=" img-container relative">
                    <img
                      className=" w-[95%] rounded-lg mt-4 object-cover mx-auto"
                      src={work.image}
                      alt=""
                    />
                  </div>
                  <div className="w-[95%] mx-auto flex flex-col gap-2">
                    <h3 className=" text-[1.3em] capitalize font-semibold text-left tracking-wide text-white ">
                      {work.title}
                    </h3>

                    <div className="flex flex-col gap-2 items-center">
                      <p className=" text-sm font-extralight opacity-70  w-full mx-auto text-white line-clamp-3 ">
                        {work.description}
                      </p>
                      <div className=" flex flex-row gap-2 p-5 ">
                        {work.techs.map((tech) => (
                          <p
                            key={tech}
                            className=" bg-[#000] p-2 rounded-sm text-white text-[11px] max-sm:text-[11px] tracking-wide"
                          >
                            {tech}
                          </p>
                        ))}
                      </div>

                      <div className="mb-4 flex w-full justify-between">
                        {" "}
                        <button className="rounded-lg flex gap-2 items-center font-light bg-white text-tertiary px-3 py-1.5 text-[1em] hover:gap-3 transition duration-300 ease-in-out">
                          <a
                            href={work.link}
                            target="_blank"
                            className="text-sm"
                          >
                            Visit Site{" "}
                          </a>
                          <span>
                            <ArrowRight size={16} strokeWidth={1.3} />
                          </span>
                        </button>{" "}
                        <button className="rounded-lg flex gap-2 items-center font-light bg-transparent border border-primary/50 px-3 py-1.5 text-[1em] text-white transition duration-300 ease-in-out">
                          <a
                            href={work.link}
                            target="_blank"
                            className="text-sm"
                          >
                            View Repo{" "}
                          </a>
                          <span className="font-extralight">
                            <ExternalLink size={18} strokeWidth={1.5} />
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
