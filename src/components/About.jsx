import { MoveDown, MoveDownIcon } from "lucide-react";
import React from "react";

import Elite from "../assets/Elite.jpeg";

MoveDown;

function About() {
  return (
    <div>
      <section className="flex-col">
        <div
          id="about"
          className={`about mt-[2em] cont max-sm:flex-col md:flex-col  max-md:flex-col w-full flex min-lg:flex-row block`}
        >
          <div className="cont md:w-[100%] flex-1 w-full max-sm:py-5 max-sm:w-full ">
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

          <div className="img-cont cont md:w-[40%] flex-1 max-sm:w-full  md:w-full flex items-center justify-center">
            <img src={Elite} alt="" className="max-sm:w-full object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
