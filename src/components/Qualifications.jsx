import { Circle } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";
// import { useState } from "react";
Circle;

function Qualifications() {
  const techs = [
    "JavaScript",
    "TypeScript",
    "React",
    "Wix",
    "Node .js",
    "Django",
  ];
  const qual = [
    {
      position: "B.A, Philosophy",
      place: "Lagos State University",
      duration: "2022 - 2025",
    },
    {
      position: "Bofheart Creative Studios",
      place: "Web Developer",
      duration: "2021 - Till Date",
    },
    {
      position: "Enigma",
      place: "Founder",
      duration: "2023 - Till Date",
    },
    {
      position: "Elite DEV",
      place: "",
      duration: "2021 - 2025",
    },
  ];

  return (
    <div>
      <section className="flex-col">
        <div
          id="qualifications"
          className=" relative mx-auto px-5 h-[60vh] my-9 flex flex-col items-center justify-center relative"
        >
          <motion.h2
            initial={{ opacity: 0, y: -70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className=" abt-me text-[7em] relative max-sm:text-[2.5em] max-lg:text-[6em] uppercase font-semibold text-tertiary text-center"
          >
            <a className="relative"> QUALIFICATIONS</a>
          </motion.h2>
        </div>
        <div
          id="qual"
          className={` relative cont flex flex-col md:flex-row items-center justify-center gap-10 md:gap-0`}
        >
          <div className=" cont w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full place-items-center">
              {qual.map((qual) => {
                return (
                  <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    key={qual.duration}
                    className="flex flex-col items-center"
                  >
                    <h5 key={qual.place} className="text-tertiary text-center">
                      {qual.position}
                    </h5>
                    <p className="opacity-85 text-tertiary text-center">
                      {qual.place ? qual.place : ""}
                    </p>
                    <p className="text-secondary">{qual.duration}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative md:absolute md:left-[40%] md:bottom-[1em] flex flex-col items-center gap-6 w-full md:w-auto px-5 md:px-0"
          >
            <h4 className="text-tertiary font-bold text-[12px]">
              {" "}
              TECHNOLOGIES I WORK WITH :
            </h4>

            <div className="grid grid-cols-2 gap-5">
              {techs.map((tech) => {
                return (
                  <div className="" key={tech}>
                    <p className="text-[15px] flex items-center gap-2 text-tertiary">
                      {" "}
                      <span>
                        <Circle
                          size={10}
                          strokeWidth={3}
                          className="text-secondary"
                        />
                      </span>{" "}
                      {tech}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Qualifications;
