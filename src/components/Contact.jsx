import { motion } from "framer-motion";
import { MoveUpRight } from "lucide-react";

function Contact() {
  const contact = [
    {
      icon: <i className="fa-brands fa-github"></i>,
      name: "Github",
      link: "https://github.com/Elite-Dev-Repo",
    },
    {
      icon: <i className="fa-brands fa-linkedin"></i>,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/oyenekan-emmanuel/",
    },
    // {
    //   icon: <i className="fa-brands fa-instagram"></i>,
    //   name: "Instagram",
    //   link: "https://www.instagram.com/_elite.dev_",
    // },
    {
      icon: <i className="fa-brands fa-x-twitter"></i>,
      name: "X",
      link: "https://x.com/elite_developer",
    },
    {
      icon: <i className="fa-regular fa-envelope"></i>,
      name: "Email",
      link: "mailto:oyenekantomiwa2@gmail.com",
    },
    {
      icon: <i className="fa-brands fa-whatsapp"></i>,
      name: "Whatsapp",
      link: "https://wa.me/2349167686804",
    },
  ];

  // bg-[#2a0c62] text-white",
  //   "bg-[#ffcc00] text-secondary",
  //   "bg-green-400 text-secondary",
  //   "bg-primary text-secondary",
  //   "bg-tertiary text-secondary",
  //   "bg-teal-600 text-white",
  //   "bg-[#FA7410] text-secondary",
  //   "bg-[#FFCA3A] text-secondary",
  //   "bg-[#FE5FC2] text-secondary",

  const colorPerIndex = (i) => {
    if (i === 0) {
      return "bg-[#FE5FC2]";
    } else if (i === 3) {
      return "bg-teal-600";
    } else if (i === 2) {
      return "bg-green-400";
    } else if (i === 4) {
      return "bg-orange-400";
    } else {
      return "bg-tertiary";
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen w-screen flex  items-center justify-center bg-secondary"
    >
      <div className="w-100 h-100 bg-tertiary/10 rounded-full absolute left-20 top-10 blur-3xl"></div>
      <div className="cont w-full h-full flex flex-col md:flex-row items-center justify-center ">
        <div className="flex-1 w-full h-full flex flex-col p-5 justify-center gap-3 ">
          <h3 className="uppercase text-4xl">
            <span className="w-full flex items-center gap-4">
              Let's work{" "}
              <span className="p-3 flex items-center justify-center bg-tertiary text-secondary rounded-full">
                <MoveUpRight size={25} strokeWidth={2.5} />
              </span>
            </span>{" "}
            <br /> Together.
          </h3>
          <p>
            I'm currently available for new opportunities and collaborations.
            Let's create something amazing that brings results.{" "}
          </p>

          <p className="border-y border-tertiary p-2 w-fit">
            Availance for Freelance roles
          </p>
        </div>
        <div className="flex-1 w-full h-full flex flex-col items-start justify-center gap-6">
          {contact.map((c, i) => {
            return (
              <motion.div
                initial={{ x: "0px", y: "0px" }}
                whileInView={{ x: "24px", y: "10px" }}
                transition={{ delay: 0.1 * i }}
                key={i}
                className="flex items-center justify-center gap-4"
              >
                <div className="h-13 w-13 flex items-center justify-center border border-tertiary rounded-full">
                  {c.icon}
                </div>
                <div className="flex flex-col items-start">
                  <p className="text-tertiary font-semibold">{c.name}</p>
                  <p className="tracking-wide">
                    {c.link
                      .replace("mailto:", "")
                      .replace("https://wa.me/", "+")}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    // <section
    // id="contact"
    // className=" h-screen w-screen flex items-center justify-center bg-secondary"
    // >
    // <div className="cont">
    //   {/* <motion.h2
    //     initial={{ opacity: 0, scale: 0.5 }}
    //     whileInView={{ opacity: 1, scale: 1 }}
    //     transition={{ duration: 0.5 }}
    //     className="text-[8em] font-bold max-sm:text-2xl max-sm:font-light text-center mt-5"
    //   >
    //   </motion.h2> */}
    //   <div className="flex flex-col gap-x-3 gap-y-8">
    //     <div className="w-full gap-3 flex">
    //       {contact.slice(0, 2).map((item, index) => (
    //         <motion.div
    //           initial={{ opacity: 0, y: 70 }}
    //           whileInView={{ opacity: 1, y: 0 }}
    //           transition={{ duration: 0.5, delay: index * 0.2 }}
    //           key={index}
    //           style={{ gridAutoFlow: "" }}
    //           className={`h-50 flex-1 p-6 relative text-secondary border border-transparent hover:border-black/40 rounded-xl flex flex-col justify-center items-center ${colorPerIndex(index)} ${index < 2 && "col-span-2"}`}
    //         >
    //           <a
    //             href={item.link}
    //             className="text-[2.5em] font-light"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             {item.icon}
    //           </a>
    //           <p className="text-center">{item.name}</p>

    //           {/* <div className="absolute w-[50%] flex items-end pb-3 justify-around bg-primary h-[40%] bottom-0 right-0 rounded-sm">
    //           <a href="">Visit </a>
    //           <div className="h-8 w-8 rounded-full bg-secondary"></div>
    //         </div> */}
    //         </motion.div>
    //       ))}
    //     </div>
    //     <div className="flex w-full gap-3 items-center">
    //       {contact.slice(2, 5).map((item, index) => (
    //         <motion.div
    //           initial={{ opacity: 0, y: 70 }}
    //           whileInView={{ opacity: 1, y: 0 }}
    //           transition={{ duration: 0.5, delay: index * 0.2 }}
    //           key={index}
    //           style={{ gridAutoFlow: "" }}
    //           className={`h-50 p-6 relative grow text-secondary border border-transparent hover:border-black/40 rounded-xl flex flex-col justify-center items-center ${colorPerIndex(index)} ${index < 2 && "col-span-2"}`}
    //         >
    //           <a
    //             href={item.link}
    //             className="text-[2.5em] font-light"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             {item.icon}
    //           </a>
    //           <p className="text-center">{item.name}</p>
    //         </motion.div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    // </section>
  );
}

export default Contact;
