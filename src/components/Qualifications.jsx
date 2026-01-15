import { Circle, MoveDown, MoveDownIcon } from "lucide-react";
import React from "react";
import { useState } from "react";
Circle;

MoveDown;
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
      position: "B.Sc, Philosophy",
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

  const [show, setShow] = useState(false);

  function toggleShow() {
    setShow((prev) => !prev);
  }

  return (
    <div>
      <section className="flex-col">
        <div
          id="qualifications"
          className=" relative cont my-9 flex flex-col items-center justify-center relative"
        >
          <h2 className=" abt-me text-[7em] relative max-sm:text-[2.5em] max-lg:text-[6em] uppercase font-semibold text-tertiary text-center">
            <a className="relative"> QUALIFICATIONS</a>
          </h2>

          <p className="relative md:absolute text-[.9em] md:right-[2em] w-full px-5 md:px-0 md:w-125 tracking-widest opacity-90 md:bottom-[1.5em] capitalize italic text-center md:text-right mt-4 md:mt-0">
            If the perfection of a virtue is found in the removal of the tragedy
            that requires it, is charity's ultimate moral achievement its own
            disappearance?
            <br />
            <span className="text-secondary">- ELITE</span>
          </p>

          <a href="#qual" onClick={toggleShow}>
            <div className="border p-3 rounded-full  md:bottom-[-3em] absolute bottom-[2em] left-[50%]">
              {" "}
              <MoveDown />
            </div>
          </a>
        </div>
        <div
          id="qual"
          className={` relative cont flex flex-col md:flex-row items-center justify-center gap-10 md:gap-0 ${
            show ? "block" : "hidden"
          }`}
        >
          <div className="relative md:absolute md:left-[40%] md:bottom-[1em] flex flex-col items-center gap-6 w-full md:w-auto px-5 md:px-0">
            <h4 className="text-tertiary font-bold text-[12px]">
              {" "}
              TECHNOLOGIES I WORK WITH :
            </h4>

            <div className="grid grid-cols-2 gap-5">
              {techs.map((tech) => {
                return (
                  <div className="">
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
          </div>

          <div className=" cont w-full">
            <div className="cont w-full">
              <h4 className="text-tertiary text-2xl font-semibold mb-6 md:mb-0">
                QUALIFICATIONS
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full place-items-center">
                {qual.map((qual) => {
                  return (
                    <div className="flex flex-col items-center">
                      <h5 key={qual.place}>{qual.position}</h5>
                      <p className="opacity-85 text-tertiary">
                        {qual.place ? qual.place : ""}
                      </p>
                      <p className="text-secondary">{qual.duration}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Qualifications;
