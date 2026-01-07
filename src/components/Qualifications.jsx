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
      position: "Elite DEV",
      place: "",
      duration: "2023 - Till Date",
    },
    {
      position: "B.Sc, Philosophy",
      place: "Lagos State University",
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
        <div id="qualifications" className=" cont my-9">
          <h2 className=" abt-me relative text-[8em] uppercase font-semibold text-[#ffffffef]">
            <a className="relative"> QUALIFICATIONS</a>
          </h2>

          <p className="absolute text-[.9em] right-[2em] w-125 tracking-widest opacity-65 bottom-[1.5em] capitalize italic">
            If the perfection of a virtue is found in the removal of the tragedy
            that requires it, is charity's ultimate moral achievement its own
            disappearance?
            <br />
            <span className="text-secondary">- ELITE</span>
          </p>

          <div className="border p-3 rounded-full">
            <a href="#qual" onClick={toggleShow}>
              {" "}
              <MoveDown />
            </a>
          </div>
        </div>
        <div
          id="qual"
          className={` relative cont flex flex-row justify-center items-center ${
            show ? "block" : "hidden"
          }`}
        >
          <div className="absolute left-[1em] bottom-[2em] flex flex-col gap-6">
            <h4 className="text-white font-bold text-[12px]">
              {" "}
              TECHNOLOGIES I WORK WITH :
            </h4>

            <div className="grid grid-cols-2 gap-5">
              {techs.map((tech) => {
                return (
                  <div className="">
                    <p className="text-[15px] flex items-center gap-2 text-[#ffffff8f]">
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

          <div className=" cont">
            <div className="cont">
              <h4 className="text-white text-2xl font-semibold text-start underline underline-offset-6">
                {" "}
                QUALIFICATIONS
              </h4>

              <div className="grid grid-cols-2 gap-5">
                {qual.map((qual) => {
                  return (
                    <div>
                      <h5 key={qual.place}>{qual.position}</h5>
                      <p className="opacity-55">
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
