function Contact() {
  const contact = [
    {
      icon: <i class="fa-brands fa-github"></i>,
      name: "Github",
      link: "https://github.com/Elite-Dev-Repo",
    },
    {
      icon: <i class="fa-brands fa-linkedin"></i>,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/oyenekan-emmanuel-63a43725b/",
    },
    {
      icon: <i class="fa-brands fa-instagram"></i>,
      name: "Instagram",
      link: "https://www.instagram.com/_elite.dev_",
    },
    {
      icon: <i class="fa-brands fa-x-twitter"></i>,
      name: "X",
      link: "https://x.com/elite_developer",
    },
    {
      icon: <i class="fa-regular fa-envelope"></i>,
      name: "Email",
      link: "mailto:oyenekantomiwa2@gmail.com",
    },
    {
      icon: <i class="fa-brands fa-whatsapp"></i>,
      name: "Whatsapp",
      link: "https://wa.me/2349167686804",
    },
  ];

  return (
    <section id="contact" className="border-t-[1px] border-t-[#ffffff7a]">
      <div className="cont">
        <h2 className="text-4xl font-bold max-sm:text-2xl max-sm:font-light text-center mt-5">
          Give me a message let's work together
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-3 gap-9">
          {contact.map((item, index) => (
            <div
              key={index}
              className=" p-6 border border-transparent hover:border-black/40  transition-all rounded-lg flex flex-col justify-center items-center"
            >
              <a
                href={item.link}
                className="text-[2.5em] font-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
              <p className="text-center">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
