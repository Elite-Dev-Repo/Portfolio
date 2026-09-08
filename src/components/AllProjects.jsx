import {
  ArrowRight,
  ExternalLink,
  MoveLeft,
  MoveRight,
  MoveUpRight,
} from "lucide-react";
import { useState, useEffect } from "react";
import works from "../data";

import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import Nav from "./Nav";
import Contact from "./Contact";

function AllProjects() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Full Stack", "Front End"];
  const techColors = [
    "bg-[#2a0c62] text-white",
    "bg-[#ffcc00] text-secondary",
    "bg-green-400 text-secondary",
    "bg-primary text-secondary",
    "bg-tertiary text-secondary",
    "bg-teal-600 text-white",
    "bg-[#ff7418] text-secondary",
    "bg-[#FFCA3A] text-secondary",
    "bg-[#FE5FC2] text-secondary",
  ];

  const rotateTag = (i) => {
    if (i === 1) {
      return "rotate-6";
    } else if (i === 2) {
      return "-rotate-6";
    } else {
      return "-rotate-12";
    }
  };

  const randomColor = () => {
    let num = Math.floor(Math.random() * techColors.length);
    return techColors[num];
  };

  useEffect(() => {
    randomColor();
    rotateTag();
  }, []);

  // Filter the works array based on the selected category
  const filteredWorks =
    filter === "All" ? works : works.filter((work) => work.label === filter);

  return (
    <div className="bg-secondary">
      <section
        className="cont py-10"
        style={{ display: "block", overflow: "visible" }}
      >
        <div className="w-full h-10">
          {" "}
          <p
            onClick={() => navigate(-1)}
            className="flex items-center justify-center w-fit gap-3"
          >
            {" "}
            <MoveLeft size={19} /> Go Back
          </p>
        </div>
        <div className="m-0 z-10 mx-auto px-5 flex flex-col items-center justify-center relative bg-secondary py-4 w-full">
          <motion.h2
            initial={{ opacity: 0, y: -70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className=" abt-me text-[6.7em] relative max-sm:text-[2.8em] max-lg:text-[6em] uppercase font-semibold text-primary text-center"
          >
            My Projects
          </motion.h2>
        </div>

        <div className={`cont relative mt-[2em] w-full block mb-5`}>
          <div className="w-full ">
            <div className="  flex w-full items-center justify-around gap-9">
              <div className=" flex flex-row gap-2 ">
                {categories.map((category, index) => (
                  <button
                    onClick={() => setFilter(category)}
                    key={index}
                    className={` border max-sm:text-[.8em] font-semibold px-5 py-2 text-[1em] rounded-full hover:bg-secondary hover:text-[var(--color-tertiary)] transition duration-300 ease-in-out ${
                      filter === category
                        ? "bg-secondary text-tertiary"
                        : "bg-tertiary text-secondary"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="w-full  flex flex-col mt-[4em] items-center ">
              {filteredWorks.map((work, index) => (
                <Link to={`/project/${work.id}`} className="w-full">
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    key={work.id || index}
                    className={` transition-colors md:h-fit shadow-[0_0_15px_rgba(255,255,255,0.1)] w-full max-w-screen shadow-secondary/3 border-y border-white/20 p-4 flex items-center justify-around gap-12 mx-auto group hover:bg-primary hover:text-secondary`}
                  >
                    <div className=" mx-auto flex flex-col gap-3 px-3 py-2 ">
                      {" "}
                      <h3 className="flex-1 text-[1.3em] group-hover:text-secondary capitalize font-semibold text-left tracking-wide line-clamp text-primary ">
                        {work.title}
                      </h3>
                      <div className="flex flex-col gap-2 items-center">
                        <Link to={`/project/${work.id}`} className="">
                          <p className=" text-sm font-light w-full mx-auto group-hover:text-secondary text-primary/80 tracking-wide line-clamp-2 ">
                            {work.description}
                          </p>
                        </Link>
                        <div className="w-full flex items-center justify-start gap-2 p-5 flex-wrap">
                          {work.techs.slice(0, 3).map((tech, i) => (
                            <p
                              style={{ borderRadius: "50px 50px 50px 0px" }}
                              key={i}
                              className={`${randomColor()} ${rotateTag(i)} transform font-semibold rounded-full flex items-center line-clamp-1 justify-center px-3 py-1 text-secondary text-[11px] max-sm:text-[11px] tracking-normal`}
                            >
                              {tech}
                            </p>
                          ))}

                          {work.techs.length > 3 && (
                            <div className="text-primary h-8 w-10 bg-black flex items-center justify-center rounded-sm text-[11px] max-sm:text-[11px] tracking-normal">
                              {`+ ${work.techs.length - 3}`}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="mb-4 flex  justify-between">
                      <button className="rounded-full text-sm flex font-light border border-primary/40 bg-tertiary group-hover:text-primary group-hover:bg-secondary text-secondary h-10 w-10 items-center justify-center transition duration-300 ease-in-out">
                        <a
                          href={work.link}
                          target="_blank"
                          rel="noreferrer"
                          className="uppercase font-light tracking-wide"
                        ></a>
                        <span>
                          <MoveUpRight size={18} strokeWidth={1.5} />
                        </span>
                      </button>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </div>
  );
}

export default AllProjects;
