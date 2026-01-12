import { Circle, MoveDown } from "lucide-react";
import { useState } from "react";
import reactwind from "../assets/reactwind.png";
import weebschat from "../assets/weebschat.png";
import tabbiebites from "../assets/tabbiebites.png";

function Qualifications() {
  const [show, setShow] = useState(false);

  function toggleShow() {
    setShow((prev) => !prev);
  }

  const categories = ["All", "Wix", "Front End", "Back End"];

  const works = [
    {
      image: tabbiebites,
      description: "Landing Page for a Bakery",
      techs: ["React .js", "TailwindCSS", "JavaScript"],
      link: "https://tabbiebites.pxxl.click/",
      label: "front end",
    },

    {
      image: weebschat,
      description: "FullStack Chat Application",
      techs: ["Vanilla Js", "Django", "PostgreSQL"],
      link: "https://chatapp-rdia.onrender.com/",
      label: "FullStack",
    },
    {
      image: reactwind,
      description: "basic landing page Website for a company",
      techs: ["React .js", "TailwindCSS", "JavaScript"],
      link: "https://reactwind-two.vercel.app/",
      label: "front end",
    },
    {
      image: reactwind,
      description: "basic landing page Website for a company",
      techs: ["React .js", "TailwindCSS", "JavaScript"],
      link: "https://reactwind-two.vercel.app/",
      label: "front end",
    },
  ];

  return (
    <div>
      <section className="flex-col">
        <div
          id="portfolio"
          className=" cont my-9 flex flex-col items-center justify-center relative"
        >
          <h2 className=" abt-me text-[8em] relative max-sm:text-[2.8em] max-lg:text-[6em] uppercase font-semibold text-[#ffffffef] text-center">
            <a className="relative"> MY PORTFOLIO</a>
          </h2>
          <p className="relative md:absolute text-[.9em] md:right-[2em] w-full px-5 md:px-0 md:w-125 tracking-widest opacity-65 md:bottom-[1.5em] capitalize italic text-center md:text-right mt-4 md:mt-0">
            Have a cat walk on a hot stove and it will never walk on a hot
            stove, it won't even walk on a cold stove.
            <br />
            <span className="text-secondary">- Anonymous</span>
          </p>

          <div className="border p-3 rounded-full absolute bottom-[2em] left-[50%]">
            <a href="#port" onClick={toggleShow}>
              {" "}
              <MoveDown />
            </a>
          </div>
        </div>
        <div
          id="port"
          className={` relative flex flex-row justify-center items-center ${
            show ? "block" : "hidden"
          } mb-5`}
        >
          <div className="">
            <div className=" flex flex-row gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className=" bg-white max-sm:text-[.8em] text-secondary font-semibold px-5 py-2 text-[1em] hover:bg-secondary hover:text-white transition duration-300 ease-in-out"
                >
                  {category}
                </button>
              ))}
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 cont mt-[4em]">
              {works.map((work, index) => (
                <div
                  key={index}
                  className=" border border-white rounded-lg flex flex-col gap-2"
                >
                  <div className=" img-container relative">
                    <button className=" hidden absolute top-[50%] left-[50%] z-10 translate-y-[-50%] translate-x-[-50%] bg-white text-secondary font-semibold px-5 py-2 text-[1em] hover:bg-secondary hover:text-white transition duration-300 ease-in-out">
                      <a href={work.link} target="_blank">
                        View Project
                      </a>
                    </button>
                    <img
                      className=" w-full h-[20em] object-cover"
                      src={work.image}
                      alt=""
                    />
                  </div>

                  <div className="flex flex-col gap-2 items-center">
                    <p className=" text-[1em] capitalize font-light text-center tracking-wide ">
                      {work.description}
                    </p>
                    <div className=" flex flex-row gap-2 p-5">
                      {work.techs.map((tech) => (
                        <p
                          key={tech}
                          className=" bg-secondary p-2 rounded-full text-light text-[.9em] max-sm:text-[.8em] hover:bg-white hover:text-secondary transition duration-300 ease-in-out"
                        >
                          {tech}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Qualifications;
