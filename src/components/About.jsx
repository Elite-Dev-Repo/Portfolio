import { MoveDown, MoveDownIcon } from "lucide-react";
import { motion } from "framer-motion";
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
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="cont md:w-[100%] flex-1 w-full max-sm:py-5 max-sm:w-full "
          >
            <h4 className="text-2xl font-semibold opacity-95 text-start underline underline-offset-8">
              The Developer behind the screen.
            </h4>

            <p className="leading-7 tracking-wide text-[15px] mt-4">
              <span className="text-4xl font-light">I</span>’m{" "}
              <span className="text-[var(--color-secondary)]">
                Oyenekan Emmanuel
              </span>
              , a Fullstack Developer based in{" "}
              <span className="text-[var(--color-secondary)]">
                Lagos, Nigeria
              </span>
              . With{" "}
              <span className="text-[var(--color-secondary)]">5 years</span> of
              experience, I specialize in building seamless digital experiences
              using
              <span className="text-[var(--color-secondary)]">
                {" "}
                React, TypeScript, and Django
              </span>
              .
            </p>

            <p className="leading-7 tracking-wide text-[15px] mt-4">
              From high-converting e-commerce stores to intricate UI/UX
              projects, I focus on turning complex problems into elegant,
              functional code. Whether I'm scaling robust applications or
              deploying rapid solutions, I ensure every build is polished and
              performant.
            </p>

            <p className="leading-7 tracking-wide text-[15px] mt-4">
              When I’m not coding, you’ll find me over a{" "}
              <span className="italic">chess board</span> or discovering new
              music—pursuits that keep my logic sharp and my creativity in
              rhythm.
            </p>
          </motion.div>

          <motion.div
            initial={{ filter: "blur(50px)" }}
            whileInView={{ filter: "blur(0px)" }}
            transition={{ duration: 0.5 }}
            className="img-cont cont md:w-[40%] flex-1 max-sm:w-full  md:w-full flex items-center justify-center"
          >
            <img src={Elite} alt="" className="max-sm:w-full object-cover" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default About;
