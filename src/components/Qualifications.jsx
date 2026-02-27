import React from "react";
import { motion } from "framer-motion";
import {
  JavaScriptIcon,
  Typescript01Icon,
  ReactIcon,
  TailwindcssIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Database, Layers, Globe, Code2, Circle } from "lucide-react";

function Qualifications() {
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

  // Tech stack data
  // Using Hugeicons where available, Lucide components as fallbacks
  const techData = [
    { name: "JavaScript", huge: JavaScriptIcon },
    { name: "TypeScript", huge: Typescript01Icon },
    { name: "React", huge: ReactIcon },
    { name: "Wix", lucide: Globe },
    { name: "Django", lucide: Code2 },
    { name: "TailwindCSS", huge: TailwindcssIcon },
    { name: "Supabase", lucide: Database },
    { name: "ShadcnUI", lucide: Layers },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 10 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  return (
    <div className="py-20 bg-background text-tertiary">
      {/* Qualifications Section */}
      <section className="flex flex-col mb-32">
        <div
          id="qualifications"
          className="relative mx-auto px-5 my-9 flex flex-col items-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: -70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[7em] max-sm:text-[2.5em] max-lg:text-[6em] uppercase font-semibold text-center leading-none"
          >
            Qualifications
          </motion.h2>
        </div>

        <div className="w-full max-w-6xl mx-auto px-5 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 place-items-center">
            {qual.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                className="flex flex-col items-center"
              >
                <h5 className="text-xl font-medium text-center">
                  {item.position}
                </h5>
                <p className="opacity-70 text-center">{item.place || ""}</p>
                <p className="text-secondary font-mono mt-2">{item.duration}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className="flex flex-col items-center px-5">
        <div className="w-full max-w-5xl">
          <div className="flex flex-col items-center gap-3 mb-16">
            <h4 className="font-bold text-md tracking-[0.4em] uppercase opacity-50 text-secondary">
              Tech Stack
            </h4>
            <div className="h-[1px] w-12 bg-secondary" />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
            {techData.map((tech) => (
              <motion.div
                variants={itemVariants}
                key={tech.name}
                className="group relative aspect-square flex flex-col items-center justify-center gap-4 border border-tertiary/10 rounded-2xl bg-tertiary/[0.01] hover:bg-tertiary/[0.03] hover:border-secondary/40 transition-all duration-300 ease-out"
              >
                <div className="text-tertiary group-hover:text-secondary group-hover:scale-110 transition-all duration-300">
                  {tech.huge ? (
                    <HugeiconsIcon icon={tech.huge} size={40} />
                  ) : (
                    <tech.lucide size={40} strokeWidth={1.5} />
                  )}
                </div>

                <p className="text-[11px] tracking-[0.2em] uppercase font-bold opacity-40 group-hover:opacity-100 group-hover:text-secondary transition-all">
                  {tech.name}
                </p>

                {/* Corner Dot decoration */}
                <div className="absolute top-3 right-3">
                  <Circle
                    size={4}
                    className="fill-secondary text-secondary opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Qualifications;
