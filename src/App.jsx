import React, {useState, useEffect} from "react";
import {Home, User, Code, Briefcase, Mail} from "lucide-react";
import {BiLogoTailwindCss} from "react-icons/bi";
import {projects} from "../src/utils/projectsData";
import {ExternalLink, Github} from "lucide-react";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  const skills = [
    {
      name: "VS Code",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
      name: "Tailwind CSS",
      icon: <BiLogoTailwindCss />,
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "PHP",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    },
    {
      name: "Laravel",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
  ];

  const menuItems = [
    {id: "home", label: "Home", icon: Home},
    {id: "about", label: "Tentang", icon: User},
    {id: "skills", label: "Skills", icon: Code},
    {id: "projects", label: "Projek", icon: Briefcase},
    {id: "contact", label: "Kontak", icon: Mail},
  ];

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({behavior: "smooth", block: "start"});
    }
  };

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const {offsetTop, offsetHeight} = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-gray-100">
      {/* Floating Sidebar - Centered */}
      <nav className="fixed top-1/2 -translate-x -translate-y-1/2 z-50">
        <div className="flex flex-col space-y-4 bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-4 shadow-2xl">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group relative p-4 rounded-xl transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-blue-500/50"
                    : "bg-gray-700/30 hover:bg-gray-700/50"
                }`}
                title={item.label}
              >
                <Icon
                  size={24}
                  className={`${
                    activeSection === item.id
                      ? "text-white"
                      : "text-gray-400 group-hover:text-white"
                  } transition-colors`}
                />

                {/* Tooltip */}
                <span className="absolute left-full ml-4 px-3 py-2 bg-gray-800 text-sm rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gray-700">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Main Content - All Sections Visible */}
      <main className="ml-0">
        {/* Home Section */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center p-8 md:p-16"
        >
          <div className="max-w-5xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* KIRI - Text Content */}
              <div className="space-y-8 order-2 lg:order-1">
                <div className="space-y-4">
                  <p className="text-xl md:text-2xl text-gray-400 font-light">
                    Halo, saya
                  </p>
                  <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
                    Muhamad Rizky Abdilah
                  </h1>
                  <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
                    Frontend Developer
                  </p>
                </div>

                <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl">
                  Passionate dalam menciptakan pengalaman web yang indah dan
                  interaktif. Saya mengubah ide menjadi kenyataan dengan kode
                  yang clean dan design yang modern.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <a href="cv.pdf" target="_blank" rel="noopener noreferrer">
                    <button className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold text-white hover:shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-105">
                      Download CV
                    </button>
                  </a>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="px-8 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl font-semibold text-gray-300 hover:border-blue-500/50 transition-all hover:scale-105"
                  >
                    Hubungi Saya
                  </button>
                </div>
              </div>

              {/* KANAN - Photo with Creative Background */}
              <div className="flex items-center justify-center lg:justify-end order-1 lg:order-1">
                <div className="relative w-80 max-w-md">
                  {/* Animated Gradient Orbs Background */}
                  <div className="absolute inset-0 -z-10">
                    <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
                    <div
                      className="absolute -bottom-10 -left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse"
                      style={{animationDelay: "1s"}}
                    ></div>
                    <div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse"
                      style={{animationDelay: "2s"}}
                    ></div>
                  </div>

                  {/* Geometric Shapes */}
                  <div className="absolute inset-0 overflow-visible">
                    <div
                      className="absolute -top-6 -right-6 w-24 h-24 border-2 border-blue-400/40 rounded-xl rotate-12 animate-spin"
                      style={{animationDuration: "20s"}}
                    ></div>
                    <div
                      className="absolute -bottom-8 -left-8 w-20 h-20 border-2 border-purple-400/40 rounded-full animate-bounce"
                      style={{animationDuration: "4s"}}
                    ></div>
                    <div className="absolute top-1/3 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-lg rotate-45"></div>
                    <div className="absolute bottom-1/4 -left-6 w-12 h-12 bg-gradient-to-br from-pink-500/30 to-purple-500/30 rounded-full"></div>
                  </div>

                  {/* Main Photo Container */}
                  <div className="relative z-10">
                    {/* Outer Glow */}
                    <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-3xl blur-2xl"></div>

                    {/* Photo Frame */}
                    <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-md border-2 border-gray-700/50 rounded-3xl p-3 hover:border-blue-500/70 transition-all duration-500 group">
                      <div className="relative w-full aspect-[3/4] bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl overflow-hidden">
                        {/* Your Photo Here - Replace with your image */}
                        <img
                          src="/foto.jpg"
                          alt="Muhamad Rizky Abdilah"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent"></div>
                      </div>
                    </div>

                    {/* Floating Badge */}
                    <div
                      className="absolute -bottom-6 -right-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-5 shadow-2xl shadow-blue-500/50 animate-bounce"
                      style={{animationDuration: "3s"}}
                    >
                      <p className="text-3xl">💻</p>
                    </div>

                    {/* Top Left Accent */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl shadow-lg shadow-pink-500/50"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About Section */}
        <section
          id="about"
          className="min-h-screen flex items-center justify-center p-8 md:p-12"
        >
          <div className="max-w-4xl">
            <h2 className="text-5xl md:text-6xl flex justify-center font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-10">
              <p className="text-xl text-gray-300 leading-relaxed mb-5">
                Saya adalah Sarjana Komputer dari Universitas Islam Negeri
                Sumatera Utara (IPK 3,47) dengan minat yang kuat pada
                pengembangan web modern. Perjalanan saya dimulai dari membuat
                website statis sederhana, hingga kini fokus membangun aplikasi
                web yang lebih terstruktur dan scalable menggunakan Laravel,
                React, dan Tailwind CSS.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed mb-5">
                Saya terbiasa mengembangkan fitur mulai dari sisi frontend
                menggunakan React dan Tailwind untuk antarmuka yang bersih dan
                responsif, hingga backend berbasis PHP Laravel untuk mengelola
                logic aplikasi dan integrasi database.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                Saya terus memperdalam pemahaman tentang arsitektur aplikasi,
                API integration, reusable component, state management, serta
                workflow pengembangan yang rapi menggunakan Git. Fokus saya
                adalah membangun aplikasi yang tidak hanya berfungsi, tetapi
                juga memiliki struktur kode yang bersih, mudah dikembangkan, dan
                nyaman digunakan.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="min-h-screen flex items-center justify-center p-8 md:p-16"
        >
          <div className="max-w-5xl w-full">
            <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Tools & Skills
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/30 transition-all hover:-translate-y-1"
                >
                  <div className="w-20 h-20 rounded-full bg-gray-700/40 flex items-center justify-center mb-4 shadow-lg shadow-blue-500/10">
                    {typeof skill.icon === "string" ? (
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-10 h-10"
                      />
                    ) : (
                      <div className="text-5xl text-blue-400">{skill.icon}</div>
                    )}
                  </div>

                  <span className="text-gray-200 text-lg font-semibold">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="min-h-screen flex items-center justify-center p-8 md:p-12 lg:pl-32 py-20">
          <div className="max-w-6xl w-full">
            <h2 className="text-5xl md:text-6xl font-bold mb-12 pb-4 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Project
            </h2>

            {/* Featured Project - Full Width */}
            {projects
              .filter((p) => p.featured)
              .map((project, index) => (
                <div
                  key={`featured-${index}`}
                  className="mb-12 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/30 rounded-3xl overflow-hidden hover:border-blue-400/50 transition-all group"
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="h-80 md:h-96 overflow-hidden bg-gray-700 relative order-2 md:order-1">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                      <div className="absolute top-4 left-4 px-4 py-2 bg-yellow-500/90 text-gray-900 rounded-full text-sm font-bold">
                        ⭐ Featured
                      </div>
                    </div>
                    <div className="p-8 md:p-12 flex flex-col justify-center order-1 md:order-2">
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-3 mb-8">
                        {project.tech.map((tech, i) => (
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
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center gap-2 transform hover:scale-105 transition-all font-medium"
                        >
                          <ExternalLink size={18} />
                          Live Demo
                        </a>
                        <a
                          href={project.githubLink}
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
              {projects
                .filter((p) => !p.featured)
                .map((project, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all group hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
                  >
                    <div className="h-48 overflow-hidden bg-gray-700 relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Overlay dengan tombol */}
                      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center gap-2 transform hover:scale-110 transition-all text-sm font-medium"
                        >
                          <ExternalLink size={16} />
                          Demo
                        </a>
                        <a
                          href={project.githubLink}
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
                        {project.title}
                      </h3>
                      <p className="text-gray-400 mb-4 text-sm line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
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

        {/* Contact Section */}
        <section
          id="contact"
          className="min-h-screen flex items-center justify-center p-8 md:p-16"
        >
          <div className="max-w-4xl w-full">
            <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Hubungi Saya
            </h2>
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-10">
              <p className="text-xl text-gray-300 mb-10 text-center">
                Tertarik untuk berkolaborasi atau punya pertanyaan? Jangan ragu
                untuk menghubungi saya!
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-6 p-6 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-all">
                  <div className="p-4 bg-blue-500/20 rounded-xl">
                    <Mail className="text-blue-400" size={32} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email</p>
                    <p className="text-xl text-gray-200">
                      your.email@example.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-6 p-6 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-all">
                  <div className="p-4 bg-purple-500/20 rounded-xl">
                    <User className="text-purple-400" size={32} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Lokasi</p>
                    <p className="text-xl text-gray-200">Indonesia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
