import { Circle, MoveDown } from "lucide-react";
import { useState } from "react";
import reactwind from "../assets/reactwind.png";

function Qualifications() {
  const [show, setShow] = useState(false);

  function toggleShow() {
    setShow((prev) => !prev);
  }

  const categories = ["All", "Wix", "Front End", "Back End"];

  const works = [
    {
      image: reactwind,
      description: "basic landing page Website for a company",
      techs: ["React .js", "TailwindCSS", "JavaScript"],
      link: "https://reactwind-two.vercel.app/",
    },

    {
      image: reactwind,
      description: "basic landing page Website for a company",
      techs: ["React .js", "TailwindCSS", "JavaScript"],
      link: "https://reactwind-two.vercel.app/",
    },
    {
      image: reactwind,
      description: "basic landing page Website for a company",
      techs: ["React .js", "TailwindCSS", "JavaScript"],
      link: "https://reactwind-two.vercel.app/",
    },
    {
      image: reactwind,
      description: "basic landing page Website for a company",
      techs: ["React .js", "TailwindCSS", "JavaScript"],
      link: "https://reactwind-two.vercel.app/",
    },
  ];

  return (
    <div>
      <section className="flex-col">
        <div id="portfolio" className=" cont my-9">
          <h2 className=" abt-me relative text-[8em] uppercase font-semibold text-[#ffffffef]">
            <a className="relative"> MY PORTFOLIO</a>
          </h2>

          <p className="absolute text-[.9em] right-[2em] w-125 tracking-widest opacity-65 bottom-[1.5em] capitalize italic">
            Have a cat walk on a hot stove and it will never walk on a hot
            stove, it won't even walk on a cold stove.
            <br />
            <span className="text-secondary">- Anonymous</span>
          </p>

          <div className="border p-3 rounded-full">
            <a href="#port" onClick={toggleShow}>
              {" "}
              <MoveDown />
            </a>
          </div>
        </div>
        <div
          id="port"
          className={` relative cont flex flex-row justify-center items-center ${
            show ? "block" : "hidden"
          }`}
        >
          <div className="cont g">
            <div className=" flex flex-row gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className=" bg-white text-secondary font-semibold px-5 py-2 text-[1em] hover:bg-secondary hover:text-white transition duration-300 ease-in-out"
                >
                  {category}
                </button>
              ))}
            </div>
            <div className=" grid grid-cols-2 gap-4 cont mt-[4em]">
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
                    <p className=" text-[1em] capitalize font-light tracking-wider ">
                      {work.description}
                    </p>
                    <div className=" flex flex-row gap-2 p-5">
                      {work.techs.map((tech) => (
                        <p
                          key={tech}
                          className=" bg-secondary px-5 py-2 rounded-full text-light text-[.9em] hover:bg-white hover:text-secondary transition duration-300 ease-in-out"
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
