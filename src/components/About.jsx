import { MoveDown } from "lucide-react";
import React from "react";
import { useState } from "react";

MoveDown;

function About() {
  const [show, setShow] = useState(false);

  function toggleShow() {
    setShow((prev) => !prev);
  }

  return (
    <div>
      <section className="flex-col">
        <div id="about" className=" cont my-9">
          <h2 className=" abt-me relative text-[8em] uppercase font-semibold text-[#ffffffef]">
            <a className="relative"> About Me</a>
          </h2>

          <p className="absolute right-[4em] w-[500px] tracking-widest opacity-65 bottom-[1.5em] capitalize italic">
            See the difference without losing peace.
            <br />
            <span className="text-[#fff7]">- ELITE</span>
          </p>

          <div className="border p-3 rounded-full">
            <a href="#me" onClick={toggleShow}>
              {" "}
              <MoveDown />
            </a>
          </div>
        </div>
        <div
          id="me"
          className={`about cont flex flex-row ${show ? "block" : "hidden"}`}
        >
          <div className="cont border border-[#fff8]">
            <h4 className="text-2xl font-semibold opacity-40 text-start underline underline-offset-6">
              {" "}
              The Developer behind the screen.
            </h4>

            <p className="leading-7 tracking-widest text-[15px] ">
              I’m <span className="text-[#ff018f]"> Oyenekan Emmanuel</span> , a
              Fullstack Developer hailing from the tech hub of{" "}
              <span className="text-[#ff018f]"> Lagos, Nigeria</span>. I thrive
              at the intersection of logic and creativity, turning complex
              problems into elegant, functional websites. With deep proficiency
              in{" "}
              <span className="text-[#ff018f]">
                React, TypeScript, and Django
              </span>{" "}
              , I have spent years perfecting the art of the "complete build."
              My portfolio spans from highly interactive UI/UX projects to fully
              functional blogs and high-converting e-commerce stores. I also
              leverage Wix for clients needing rapid, high-quality deployments
              without compromising on design. Beyond the code, I am a chess
              player which keeps my analytical mind sharp and a music enthusiast
              with a passion for discovering great sounds. I believe every
              project, like a good melody, should have a perfect rhythm.{" "}
            </p>
          </div>

          <div className="img-cont cont "></div>
        </div>
      </section>
    </div>
  );
}

export default About;
