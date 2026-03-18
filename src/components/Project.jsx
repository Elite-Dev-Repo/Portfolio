import React, { useEffect, useState } from "react";
import works from "../data";
import Nav from "./Nav";
import Footer from "./Footer";
import { useParams, Link } from "react-router-dom";

function Project() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    // Find the project that matches the ID in the URL
    const selectedProject = works.find((p) => p.id === id);
    setProject(selectedProject);

    // Scroll to top on load
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>
          Project not found.{" "}
          <Link to="/" className="text-blue-500">
            Go back
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div className=" min-h-screen">
      <Nav />

      <main className="max-w-6xl mx-auto px-6 py-20">
        {/* Header Section */}
        <div className="mb-12">
          <span className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
            {project.label}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mt-2">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-2 mt-6">
            {project.techs.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-black text-white text-xs font-medium rounded-full border border-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Project Image */}
        <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-xl mb-16">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Description & Links */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Overview</h3>
              <p className="text-gray-600 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-block text-center bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                Visit Live Project
              </a>
              <a
                href={project.git}
                target="_blank"
                rel="noreferrer"
                className="inline-block text-center border border-gray-200 text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                View Source Code
              </a>
            </div>
          </div>

          {/* Right Column: How I Made It */}
          <div className="lg:col-span-2 bg-gray-50 p-8 md:p-12 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 underline decoration-secondary underline-offset-8">
              How I Made It
            </h3>
            <div className="prose prose-lg text-gray-700 leading-loose">
              {project.howIMadeIt ? (
                <p>{project.howIMadeIt}</p>
              ) : (
                <p>
                  Technical breakdown for this project is currently being
                  documented.
                </p>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Project;
