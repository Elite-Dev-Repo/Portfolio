import {
  AtSign,
  Download,
  Flame,
  Hash,
  Palette,
  Send,
  SunSnow,
} from "lucide-react";
import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { NaturalFoodIcon, Rotate360Icon } from "@hugeicons/core-free-icons";

import StarfieldHero from "./StarFieldHero";
// import touch from "../assets/touch.png";

function Header() {
  return (
    <>
      <header className="d-grid text-secondary relative overflow-hidden min-h-screen w-screen">
        <div className="w-80 h-80 bg-secondary/20 absolute right-30 top-20 blur-3xl pointer-events-none"></div>
        <StarfieldHero> </StarfieldHero>
        <div className="h-screen cont relative top-5">
          <main className=" cont h-screen flex flex-col items-center relative pt-24 md:pt-12 gap-10 pb-20 text-center">
            <motion.div
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-fit tracking-wider mx-auto flex items-center mt-10 gap-3 border-2 border-secondary bg-secondary rounded-sm"
            >
              <div className="rounded-sm flex text-[12px] font-bold items-center gap-2 px-2 py-1 bg-tertiary text-secondary">
                <p>Elite</p>
                <span>
                  <HugeiconsIcon icon={NaturalFoodIcon} strokeWidth={1} />
                </span>
              </div>

              <span className="text-[10px] text-white tracking-wide uppercase px-3">
                FullStack Website Developer
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-5xl md:text-[3.4em] font-semibold text-center w-full"
            >
              <div className="">
                <p className="flex gap-x-3 items-center justify-center ">
                  Turning Ideas
                </p>
                <p className="opacity-75 "> Into Reality.</p>
              </div>
            </motion.h1>

            <div className="w-190  max-w-screen h-80 relative">
              <motion.div
                initial={{ x: "-120px" }}
                whileInView={{ x: "0px" }}
                transition={{ duration: 0.5 }}
                className="absolute left-5 bottom-0 w-15 h-15 bg-purple-600 flex items-center justify-center rounded-full"
              >
                <Flame size={32} />
              </motion.div>

              <motion.div
                initial={{ x: "-120px", y: "-20px", opacity: 0 }}
                whileInView={{
                  x: "0px",
                  y: "0px",
                  opacity: 1,
                  rotate: "360deg",
                }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute left-41 bottom-12 w-15 h-15 bg-[#FFCA3A] flex items-center justify-center rounded-full"
              >
                <Palette size={32} />
              </motion.div>

              <motion.div
                initial={{ x: "-20px", y: "-40px", opacity: 0 }}
                whileInView={{
                  x: "0px",
                  y: "0px",
                  opacity: 1,
                }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="px-5 py-2.5 md:text-sm text-[11px] bg-teal-400 left-49 font-semibold rotate-5 bottom-24 absolute rounded-full"
              >
                {" "}
                SEO Optimized
              </motion.div>

              <motion.div
                initial={{ x: "-120px", opacity: 0 }}
                whileInView={{ x: "0px", opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="px-5 py-2.5 md:text-sm text-[11px] bg-orange-500 font-semibold rotate-30 bottom-10 absolute rounded-full"
              >
                {" "}
                Software Development
              </motion.div>

              <motion.div
                initial={{ x: "-10px", y: "100px", opacity: 0 }}
                whileInView={{
                  x: "0px",
                  y: "0px",
                  opacity: 1,
                }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="left-49 px-5 py-2.5 md:text-sm text-[11px] bg-secondary text-primary font-semibold -rotate-22 bottom-8 absolute rounded-full"
              >
                {" "}
                Frontend Development
              </motion.div>

              <motion.div
                initial={{ x: "-120px", y: "-20px", opacity: 0 }}
                whileInView={{
                  x: "0px",
                  y: "0px",
                  opacity: 1,
                  rotate: "360deg",
                }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute right-67 bottom-14 w-15 h-15 bg-orange-400 flex items-center justify-center rounded-full"
              >
                <SunSnow size={32} />
              </motion.div>

              <motion.div
                initial={{ x: "120px", y: "-20px", opacity: 0 }}
                whileInView={{
                  x: "0px",
                  y: "0px",
                  opacity: 1,
                  rotate: "360deg",
                }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute right-52 bottom-18 w-15 h-15  bg-blue-400 flex items-center justify-center rounded-full"
              >
                <Hash size={32} />
              </motion.div>

              <motion.div
                initial={{ x: "10px", y: "100px", opacity: 0 }}
                whileInView={{
                  x: "0px",
                  y: "0px",
                  opacity: 1,
                }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="left-86 px-5 py-2.5 md:text-sm text-[11px] bg-tertiary text-secondary font-semibold bottom-2 absolute rounded-full"
              >
                {" "}
                API Integration
              </motion.div>
              <motion.div
                initial={{ x: "120px", opacity: 0 }}
                whileInView={{ x: "0px", opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="right-20 px-5 py-2.5 -rotate-15 bottom-11 md:text-sm text-[11px] bg-yellow-400 text-secondary font-semibold  absolute rounded-full"
              >
                {" "}
                Backend Development
              </motion.div>
              <motion.div
                initial={{ x: "120px" }}
                whileInView={{ x: "0px" }}
                transition={{ duration: 0.5 }}
                className="absolute right-15 bottom-0 w-15 h-15 bg-[#FE5FC2] flex items-center justify-center rounded-full"
              >
                <AtSign size={32} />
              </motion.div>
            </div>
          </main>
        </div>{" "}
      </header>
    </>
  );
}

/* <header className="d-grid text-secondary relative overflow-hidden min-h-screen -mt-20 w-screen">
  <div className="w-80 h-80 bg-secondary/20 absolute right-30 top-20 blur-3xl pointer-events-none"></div>
  <StarfieldHero> </StarfieldHero>
  <div className="h-screen cont relative top-15">
    <main className=" cont min-h-screen flex flex-col items-center relative pt-24 md:pt-12 gap-10 pb-20 text-center">
      <motion.div
        initial={{ opacity: 0, x: -120 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-fit tracking-wider mx-auto flex items-center mt-10 gap-3 border-2 border-secondary bg-secondary rounded-sm"
      >
        <div className="rounded-sm flex text-[12px] font-bold items-center gap-2 px-2 py-1 bg-tertiary text-secondary">
          <p>Elite</p>
          <span>
            <HugeiconsIcon icon={NaturalFoodIcon} strokeWidth={1} />
          </span>
        </div>

        <span className="text-[11px] text-white tracking-normal uppercase px-3">
          FullStack Website Developer
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-5xl md:text-[4em] font-semibold text-center w-full"
      >
        <div className="">
          <p className="flex gap-x-3 items-center justify-center">
            Turning{" "}
            <span className="animate-bounce p-3 flex items-center justify-center rounded-full bg-tertiary text-secondary">
              <HugeiconsIcon icon={Rotate360Icon} size={29} strokeWidth={2.5} />
            </span>{" "}
            Ideas{" "}
          </p>
          <span className="opacity-75 ">
            {" "}
            <br /> Into Reality.
          </span>
        </div>
      </motion.h1>

      <div className="absolute w-screen h-screen top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inset-x-0 -bottom-10 flex justify-center pointer-events-none overflow-hidden px-5">
        <img
          src={touch}
          alt=""
          className=" w-full max-w-[1280px] mx-auto object-cover relative -bottom-40"
        />
      </div>
    </main>
  </div>{" "}
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
</header>; */

export default Header;
