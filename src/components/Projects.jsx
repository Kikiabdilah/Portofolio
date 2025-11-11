import react from "react";
import  projectsData  from "../utils/projectsData"
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center p-8 md:p-12 lg:pl-32 py-20"
    >
      <div className="max-w-6xl w-full">
        <h2 className="text-5xl md:text-6xl font-bold mb-12 pb-4 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Project
        </h2>

        {/* Featured Project - Full Width */}
        {projectsData
          .filter((p) => p.featured)
          .map((projectsData, index) => (
            <div
              key={`featured-${index}`}
              className="mb-12 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/30 rounded-3xl overflow-hidden hover:border-blue-400/50 transition-all group"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="h-80 md:h-96 overflow-hidden bg-gray-700 relative order-2 md:order-1">
                  <img
                    src={projectsData.image}
                    alt={projectsData.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4 px-4 py-2 bg-yellow-500/90 text-gray-900 rounded-full text-sm font-bold">
                    ⭐ Featured
                  </div>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center order-1 md:order-2">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
                    {projectsData.title}
                  </h3>
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    {projectsData.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {projectsData.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-400/30 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={projectsData.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center gap-2 transform hover:scale-105 transition-all font-medium"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                    <a
                      href={projectsData.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg flex items-center gap-2 transform hover:scale-105 transition-all font-medium"
                    >
                      <Github size={18} />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}

        {/* Other Projects - Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData
            .filter((p) => !p.featured)
            .map((projectsData, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all group hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="h-48 overflow-hidden bg-gray-700 relative">
                  <img
                    src={projectsData.image}
                    alt={projectsData.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay dengan tombol */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <a
                      href={projectsData.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center gap-2 transform hover:scale-110 transition-all text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                    <a
                      href={projectsData.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg flex items-center gap-2 transform hover:scale-110 transition-all text-sm font-medium"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-100 mb-2">
                    {projectsData.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm line-clamp-2">
                    {projectsData.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {projectsData.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs border border-blue-500/30 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
