import React from "react";
import { motion } from "framer-motion";
import {
  JavaScriptIcon,
  Typescript01Icon,
  ReactIcon,
  TailwindcssIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Database,
  Layers,
  Globe,
  Code2,
  Terminal,
  Cpu,
  Smartphone,
  Wrench,
} from "lucide-react";

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
      position: "Elite DEV",
      place: "",
      duration: "2021 - 2025",
    },
  ];

  const stackData = [
    {
      title: "Frontend",
      categoryIcon: Globe,
      data: [
        { name: "JavaScript", huge: JavaScriptIcon },
        { name: "TypeScript", huge: Typescript01Icon },
        { name: "React.js", huge: ReactIcon },
        { name: "Next.js", huge: Typescript01Icon },
        { name: "TailwindCSS", huge: TailwindcssIcon },
        { name: "HTML / CSS", lucide: Code2 },
      ],
    },
    {
      title: "Backend",
      categoryIcon: Cpu,
      data: [
        { name: "Python", lucide: Code2 },
        { name: "Django", lucide: Code2 },
        { name: "DRF", lucide: Code2 },
        { name: "Next.js", lucide: Code2 },
        { name: "PostgreSQL", lucide: Database },
        { name: "Redis", lucide: Database },
      ],
    },
    {
      title: "Mobile",
      categoryIcon: Smartphone,
      data: [
        { name: "React Native", huge: ReactIcon },
        { name: "Expo", lucide: Code2 },
      ],
    },
    {
      title: "Tools & Ecosystem",
      categoryIcon: Wrench,
      data: [
        { name: "Postman" },
        { name: "VS Code" },
        { name: "Playwright" },
        { name: "Celery" },
        { name: "ShadcnUI", lucide: Layers },
        { name: "Supabase", lucide: Database },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="py-20 bg-secondary text-tertiary">
      {/* Qualifications Section */}
      <section className="flex flex-col mb-32">
        <div
          id="qualifications"
          className="relative mx-auto px-5 my-9 flex flex-col items-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: -70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                className="flex flex-col items-center"
              >
                <h5 className="text-xl font-medium text-center">
                  {item.position}
                </h5>
                <p className="opacity-70 text-center">{item.place || ""}</p>
                <p className="text-primary font-mono mt-2">{item.duration}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modernized Technologies / Tech Stack Section */}
      {/* Technologies Section */}
      <section id="tech-stack" className="w-full max-w-6xl mx-auto px-5">
        <div className="flex flex-col items-center mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[5em] max-sm:text-[2.8em] uppercase font-semibold text-center leading-none"
          >
            Technologies
          </motion.h3>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-5"
        >
          {stackData
            .flatMap((category) => category.data)
            .filter(
              (item, index, self) =>
                index === self.findIndex((tech) => tech.name === item.name),
            )
            .map((item, index) => (
              <motion.div
                key={item.name}
                variants={itemVariants}
                className="group flex items-center gap-3 py-3 border-b border-tertiary/10"
              >
                <span className="text-primary font-mono text-xs opacity-60">
                  0{index + 1}
                </span>

                <span className="text-base md:text-lg font-medium group-hover:text-primary transition-colors duration-200">
                  {item.name}
                </span>
              </motion.div>
            ))}
        </motion.div>
      </section>
    </div>
  );
}

export default Qualifications;
