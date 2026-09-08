import { MoveDown, MoveDownIcon, MoveRight } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

import resume from "../assets/01_Oyenekan_Oluwapelumi_Emmanuel_Resume.pdf";
import elite2 from "../assets/elite2.jpg";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  JavaScriptIcon,
  CodeFolderIcon,
  PythonIcon,
  ShadcnSquareIcon,
  ReactIcon,
  HtmlFile01FreeIcons,
} from "@hugeicons/core-free-icons";
import { MessageCircleHeartIcon } from "lucide-react";

function About() {
  const proof = [
    {
      name: "JavaScript",
      icon: <HugeiconsIcon icon={JavaScriptIcon} size={24} strokeWidth={1.5} />,
    },
    {
      name: "React.Js",
      icon: <HugeiconsIcon icon={ReactIcon} size={24} strokeWidth={1.5} />,
    },
    {
      name: "Django",
      icon: <HugeiconsIcon icon={PythonIcon} size={24} strokeWidth={1.5} />,
    },
    {
      name: "TypeScript",
      icon: <HugeiconsIcon icon={CodeFolderIcon} size={24} strokeWidth={1.5} />,
    },
    {
      name: "Next.Js",
      icon: <HugeiconsIcon icon={ReactIcon} size={24} strokeWidth={1.5} />,
    },
    {
      name: "Shadcn",
      icon: (
        <HugeiconsIcon icon={ShadcnSquareIcon} size={24} strokeWidth={1.5} />
      ),
    },
    {
      name: "HTML/ CSS",
      icon: (
        <HugeiconsIcon icon={HtmlFile01FreeIcons} size={24} strokeWidth={1.5} />
      ),
    },
  ];

  const proofitem = proof.map((proof) => {
    return (
      <p
        key={proof.name}
        className="text-[15px] font-bold flex items-center gap-[2em] text-secondary"
      >
        <span className="text-3xl">{proof.icon}</span> {proof.name}
      </p>
    );
  });

  return (
    <div className="bg-secondary">
      <section className=" min-h-screen w-screen flex flex-col items-center justify-center lg:min-h-screen lg:h-auto overflow-hidden py-10">
        <div
          id="about"
          className="about cont w-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mt-[2em]"
        >
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 w-full flex flex-col gap-4 py-5 text-primary"
          >
            <h4 className="text-2xl font-semibold opacity-95 text-start underline underline-offset-8">
              The Developer behind the screen.
            </h4>

            <p className="leading-7 tracking-wider text-[19px]">
              <span className="text-4xl font-light">I</span>’m{" "}
              <span className="text-[var(--color-tertiary)]">
                Oyenekan Emmanuel
              </span>
              , a Fullstack Developer based in{" "}
              <span className="text-[var(--color-tertiary)]">
                Lagos, Nigeria
              </span>
              . With{" "}
              <span className="text-[var(--color-tertiary)]">3 years</span> of
              experience, I specialize in building seamless digital experiences
              using
              <span className="text-[var(--color-tertiary)]">
                {" "}
                Next.js, React.js , TypeScript, and Django. <br />{" "}
              </span>
              From high-converting e-commerce stores, to intricate UI/UX
              projects, I focus on turning complex problems into elegant,
              functional code.
              <br /> Whether I'm scaling robust applications or deploying rapid
              solutions, I ensure every build is polished and performant. When
              I’m not coding, you’ll find me over a{" "}
              <span className="italic">chess board</span> or discovering new
              music pursuits that keep my logic sharp and my creativity in
              rhythm.
            </p>

            <div className="w-full p-2 flex items-center justify-start gap-2">
              {" "}
              <a
                // style={{ borderRadius: "50px 50px 50px 0px" }}
                href={resume}
                className="px-6 py-2 bg-tertiary text-secondary rounded-full"
              >
                Download Resume
              </a>
              <a
                href={resume}
                className=" h-11 w-11 bg-tertiary rounded-full text-secondary flex items-center justify-center gap-3"
              >
                <span className=" rounded-full h-8  w-8 flex items-center justify-center text-secondary">
                  <MoveRight size={19} />
                </span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ filter: "blur(50px)" }}
            whileInView={{ filter: "blur(0px)" }}
            transition={{ duration: 0.5 }}
            className="img-cont flex-1 w-full max-w-[350px] flex items-center justify-center shrink-0"
          >
            <img
              src={elite2}
              alt=""
              className="w-full object-contain grayscale rounded-full rounded-tl-none"
            />
          </motion.div>
        </div>
      </section>

      <div className="h-16 w-full bg-tertiary relative overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="w-fit h-full flex"
        >
          {Array(4)
            .fill(null)
            .map(() => {
              return (
                <div className="w-screen h-full overflow-hidden flex items-center  justify-around">
                  {proofitem}
                </div>
              );
            })}
        </motion.div>
      </div>
    </div>
  );
}

export default About;
