import React from "react";

const Who = () => {
  return (
    <section className="d-grid relative overflow-hidden">
      <div className="cont py-20">
        <div className="w-full max-w-4xl space-y-16 z-10">
          {/* Header Section */}
          <div className="space-y-6 about">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
              Who is 
              <span className="text-[var(--color-secondary)] animate-flicker">
                Elite Dev?
              </span>

            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-[var(--color-tertiary)] opacity-90">
              <span className="font-bold border-b border-[var(--color-secondary)]">
                Oyenekan Oluwapelumi Emmanuel
              </span>
              , also known as{" "}
              <span className="text-[var(--color-secondary)]">Elite Dev</span>,
              is a full-stack software engineer specializing in building
              scalable SaaS platforms, real-time systems, and fintech
              applications.
            </p>
            <p className="text-sm md:text-base opacity-70 leading-relaxed max-w-2xl">
              He is known for combining strong backend architecture with
              high-performance frontend systems, using technologies like React,
              TypeScript, Django, and PostgreSQL to build production-grade web
              applications.
            </p>
          </div>

          {/* What I Do Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold uppercase tracking-widest abt-me inline-block">
                What does Elite Dev do?
              </h2>
              <div className="pt-4 space-y-4">
                <p className="text-sm opacity-80">
                  Elite Dev designs and builds complex software systems with a
                  focus on:
                </p>
                <ul className="space-y-3">
                  {[
                    "Real-time web applications (WebSockets, live systems)",
                    "SaaS product engineering",
                    "Fintech integrations (payments, subscriptions, webhooks)",
                    "Scalable backend architecture using Django and Django REST Framework",
                    "Modern frontend systems with React and TypeScript",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 group">
                      <span className="h-1.5 w-1.5 bg-[var(--color-secondary)]"></span>
                      <span className="text-sm opacity-80">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm italic border-l-2 border-[var(--color-secondary)] pl-4 opacity-70">
                  His work emphasizes performance, clean architecture, and
                  intuitive user experience, ensuring applications are both
                  technically robust and user-friendly.
                </p>
              </div>
            </div>

            {/* Engineering Approach */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold uppercase tracking-widest abt-me inline-block">
                Engineering Approach
              </h2>
              <div className="pt-4 space-y-6">
                <ul className="space-y-2 text-sm opacity-80">
                  <li>• Writing clean, maintainable, and scalable code</li>
                  <li>• Designing systems with clear separation of concerns</li>
                  <li>
                    • Optimizing performance at both frontend and backend levels
                  </li>
                  <li>
                    • Building applications that are production-ready, not just
                    prototypes
                  </li>
                </ul>
                <div className="space-y-2">
                  <p className="text-xs font-bold text-[var(--color-secondary)] uppercase">
                    Advanced Concepts:
                  </p>
                  <p className="text-sm opacity-70">
                    Optimized database queries, Algorithmic problem solving
                    (e.g., debt minimization), and Real-time data
                    synchronization patterns.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Notable Projects */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold uppercase tracking-widest abt-me inline-block">
              Notable Projects
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {[
                {
                  title: "Paystack for Django",
                  desc: "A comprehensive developer resource that provides structured, production-ready patterns for integrating Paystack with Django and Django REST Framework. It covers transactions, subscriptions, and secure webhook handling—filling a major gap in existing documentation.",
                },
                {
                  title: "Akant",
                  desc: "A full-stack expense management SaaS that simplifies group debts using a greedy min-cash-flow algorithm. It allows users to track shared expenses, automate settlements, and manage payments efficiently.",
                },
                {
                  title: "Lemur",
                  desc: "A scalable, Reddit-style forum platform for tech communities. Built with performance-focused backend architecture and a modular frontend system designed for real-time interaction patterns.",
                },
                {
                  title: "OfferTrail",
                  desc: "A job application tracking platform that helps users manage opportunities with structured data, real-time filtering, and a clean dashboard interface.",
                },
                {
                  title: "LearnStack",
                  desc: "A community-driven platform for discovering and sharing curated educational content, helping users find high-quality learning resources faster.",
                },
              ].map((project) => (
                <div
                  key={project.title}
                  className="cta p-6 rounded-sm border-opacity-10 hover:border-[var(--color-secondary)] transition-all group"
                >
                  <h3 className="text-xl font-bold text-[var(--color-secondary)] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm opacity-70 leading-relaxed group-hover:opacity-100 transition-opacity">
                    {project.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Summary */}
          <div className="p-8 bg-white/5 border border-white/10 rounded-sm space-y-6">
            <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--color-secondary)]">
              Tech Stack
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h4 className="text-[10px] uppercase opacity-50 mb-2">Core</h4>
                <ul className="text-xs space-y-1">
                  <li>React</li>
                  <li>TypeScript</li>
                  <li>Django</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>
              <div>
                <h4 className="text-[10px] uppercase opacity-50 mb-2">
                  Frontend
                </h4>
                <ul className="text-xs space-y-1">
                  <li>TailwindCSS</li>
                  <li>ShadCN UI</li>
                  <li>Framer Motion</li>
                </ul>
              </div>
              <div>
                <h4 className="text-[10px] uppercase opacity-50 mb-2">
                  Backend
                </h4>
                <ul className="text-xs space-y-1">
                  <li>JWT Auth</li>
                  <li>Service-layer</li>
                  <li>REST API</li>
                </ul>
              </div>
              <div>
                <h4 className="text-[10px] uppercase opacity-50 mb-2">
                  Integrations
                </h4>
                <ul className="text-xs space-y-1">
                  <li>Paystack</li>
                  <li>Email systems</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer Info */}
          <div className="pt-12 border-t border-white/10 space-y-8">
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div className="space-y-2">
                <p className="text-xs font-bold uppercase tracking-widest">
                  Location
                </p>
                <p className="text-sm opacity-70 italic">Nigeria</p>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-bold uppercase tracking-widest text-right md:text-left">
                  Open Source & Work
                </p>
                <a
                  href="https://github.com/Elite-Dev-Repo"
                  className="text-sm hover:text-[var(--color-secondary)] transition-colors block underline underline-offset-4"
                >
                  https://github.com/Elite-Dev-Repo
                </a>
              </div>
            </div>

            <div className="space-y-4 opacity-50">
              <p className="text-[10px] uppercase tracking-[0.2em]">Summary</p>
              <p className="text-sm leading-relaxed">
                Elite Dev is a full-stack engineer focused on building
                high-quality, scalable software systems that solve real-world
                problems—especially in SaaS, real-time applications, and
                fintech. He combines technical depth with strong product
                thinking to create applications that are both powerful and easy
                to use.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Who;
