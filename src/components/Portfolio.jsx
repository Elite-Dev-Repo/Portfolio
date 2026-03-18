import { ArrowRight, ExternalLink } from "lucide-react";
import { useState } from "react";
import works from "../data";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Portfolio() {
  const [filter, setFilter] = useState("");

  const categories = ["All", "Full Stack", "Front End"];

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
          id="projects"
          className=" mx-auto px-5 max-h-[60vh] my-9 flex flex-col items-center justify-center relative"
        >
          <motion.h2
            initial={{ opacity: 0, y: -70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className=" abt-me text-[6.7em] relative max-sm:text-[2.8em] max-lg:text-[6em] uppercase font-semibold text-tertiary text-center"
          >
            <a className="relative"> MY PROJECTS</a>
          </motion.h2>
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
                    className=" bg-tertiary max-sm:text-[.8em] text-primary font-semibold px-5 py-2 text-[1em] hover:bg-secondary hover:text-[var(--color-primary)] transition duration-300 ease-in-out"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 cont mt-[4em] ">
              {works.map((work, index) => (
                <motion.div
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  key={index}
                  className={`h-fit border overflow-hidden  border-tertiary rounded-lg flex flex-col gap-2 bg-tertiary ${filter === "" || filter === work.label ? "flex" : "hidden"}`}
                >
                  <Link to={`/project/${work.id}`}>
                    <div className="relative">
                      <img
                        className="h-full  hover:scale-105 hover:opacity-70 transition duration-300 ease-in-out object-cover mx-auto"
                        src={work.image}
                        alt=""
                      />
                    </div>
                  </Link>
                  <div className="w-[95%] mx-auto flex flex-col  gap-3 px-3 py-2 ">
                    <h3 className=" text-[1.3em] capitalize font-semibold text-left tracking-wide line-clamp-1 text-[var(--color-primary)] ">
                      {work.title}
                    </h3>

                    <div className="flex flex-col gap-2 items-center">
                      <Link
                        to={`/project/${work.id}`}
                        className="hover:underline underline-offset-5 decoration-primary"
                      >
                        <p className=" text-sm font-extralight  w-full mx-auto text-[var(--color-primary)]/70 line-clamp-3 ">
                          {work.description}
                        </p>
                      </Link>
                      <div className=" flex flex gap-2 p-5 flex-wrap ">
                        {work.techs.map((tech) => (
                          <p
                            key={tech}
                            className=" bg-[#000] flex items-center line-clamp-1 justify-center p-2 rounded-sm text-[var(--color-primary)] text-[11px] max-sm:text-[11px] tracking-normal"
                          >
                            {tech}
                          </p>
                        ))}
                      </div>

                      <div className="mb-4 flex w-full justify-between">
                        {" "}
                        <button className="rounded-md  text-md flex gap-2 items-center font-light bg-[var(--color-primary)] text-tertiary px-3 py-1.5 hover:bg-tertiary border hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition duration-300 ease-in-out">
                          <a
                            href={work.link}
                            target="_blank"
                            className="uppercase tracking-wide"
                          >
                            Visit Site{" "}
                          </a>
                          <span>
                            <ExternalLink size={18} strokeWidth={1.5} />
                          </span>
                        </button>{" "}
                        <button className=" text-[var(--color-primary)] transition duration-300 ease-in-out">
                          <a
                            href={work.git}
                            target="_blank"
                            className="text-3xl"
                          >
                            <i className="fa-brands fa-github"></i>
                          </a>
                          <span className="font-extralight"></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
