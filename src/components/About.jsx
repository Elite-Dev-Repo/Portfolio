import { MoveDown, MoveDownIcon } from "lucide-react";
import React from "react";
import { useState } from "react";
import Elite from "../assets/Elite.jpeg";

MoveDown;

function About() {
  const [show, setShow] = useState(false);

  function toggleShow() {
    setShow((prev) => !prev);
  }

  return (
    <div>
      <section className="flex-col">
        <div
          id="about"
          className=" cont my-9 flex flex-col items-center justify-center relative"
        >
          <h2 className=" max-sm:text-[2.5em] abt-me relative text-[7em] md:text-[8em] uppercase font-semibold text-tertiary text-center">
            <a className="relative"> About Me</a>
          </h2>

          <p className="relative md:absolute md:right-[4em] w-full md:w-[500px] tracking-widest md:bottom-[1.5em] capitalize italic px-5 md:px-0 text-center md:text-right mt-4 md:mt-0">
            See the difference without losing peace.
            <br />
            <span className="text-secondary"> - ELITE</span>
          </p>
          <a href="#me" className="" onClick={toggleShow}>
            <div className="border p-3 rounded-full  md:bottom-[-3em] absolute bottom-[2em] left-[50%]">
              {" "}
              <MoveDown />
            </div>
          </a>
        </div>
        <div
          id="me"
          className={`about mt-[2em] cont max-sm:flex-col-reverse md:flex-col-reverse  max-md:flex-col w-full flex min-lg:flex-row ${
            show ? "block" : "hidden"
          }`}
        >
          <div className="cont w-[40%] md:w-full max-sm:py-5 max-sm:w-full ">
            <h4 className="text-2xl font-semibold opacity-95  text-start underline underline-offset-6">
              {" "}
              The Developer behind the screen.
            </h4>

            <p className="leading-7 tracking-widest text-[15px] ">
              I’m{" "}
              <span className="text-[var(--color-secondary)]">
                {" "}
                Oyenekan Emmanuel
              </span>{" "}
              , a Fullstack Developer from{" "}
              <span className="text-[var(--color-secondary)]">
                {" "}
                Lagos, Nigeria
              </span>
              . I thrive at the intersection of logic and creativity, turning
              complex problems into elegant, functional websites. With deep
              proficiency in{" "}
              <span className="text-[var(--color-secondary)]">
                React, TypeScript, and Django
              </span>{" "}
              , I have spent years perfecting the art of the "complete build."
              with{" "}
              <span className="text-[var(--color-secondary)]"> 5 Years</span> of
              experience My portfolio spans from highly interactive UI/UX
              projects to fully functional blogs and high-converting e-commerce
              stores. I also leverage Wix for clients needing rapid,
              high-quality deployments without compromising on design. Beyond
              the code, I am a chess player which keeps my analytical mind sharp
              and a music enthusiast with a passion for discovering great
              sounds. I believe every project, like a good melody, should have a
              perfect rhythm.{" "}
            </p>
          </div>

          <div className="img-cont cont w-[40%] max-sm:w-full md:w-full flex items-center justify-center">
            <img src={Elite} alt="" className="max-sm:w-full " />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
