import React, {useState, useEffect} from "react";
import {Home, User, Code, Briefcase, Mail} from "lucide-react";
import {BiLogoTailwindCss} from "react-icons/bi";

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
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Platform e-commerce modern dengan fitur pembayaran terintegrasi dan dashboard admin.",
      tech: ["React", "Node.js", "MongoDB"],
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=250&fit=crop",
    },
    {
      title: "Task Management App",
      description:
        "Aplikasi manajemen tugas dengan drag-and-drop interface dan kolaborasi tim.",
      tech: ["React", "Firebase", "Tailwind"],
      image:
        "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=400&h=250&fit=crop",
    },
    {
      title: "Portfolio Website",
      description:
        "Website portofolio responsif dengan animasi smooth dan desain minimalis.",
      tech: ["React", "CSS3", "Framer Motion"],
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop",
    },
    {
      title: "Weather Dashboard",
      description:
        "Dashboard cuaca real-time dengan visualisasi data dan prediksi 7 hari.",
      tech: ["React", "API Integration", "Chart.js"],
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
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
          <div className="text-center max-w-7xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-br from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Hi, Welcome To My Portofolio
            </h1>
            <p className="text-2xl md:text-3xl text-gray-400 mb-12">
              Membangun pengalaman digital yang menakjubkan
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all hover:scale-105">
                <div className="text-5xl font-bold text-blue-400 mb-3">3+</div>
                <p className="text-gray-400 text-lg">Tahun Pengalaman</p>
              </div>
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all hover:scale-105">
                <div className="text-5xl font-bold text-purple-400 mb-3">
                  50+
                </div>
                <p className="text-gray-400 text-lg">Projek Selesai</p>
              </div>
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-pink-500/50 transition-all hover:scale-105">
                <div className="text-5xl font-bold text-pink-400 mb-3">30+</div>
                <p className="text-gray-400 text-lg">Klien Puas</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="min-h-screen flex items-center justify-center p-8 md:p-16"
        >
          <div className="max-w-4xl">
            <h2 className="text-5xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-10">
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Saya adalah seorang web developer yang passionate dalam
                menciptakan aplikasi web yang indah, responsif, dan
                user-friendly. Dengan pengalaman lebih dari 3 tahun di bidang
                pengembangan web, saya telah mengerjakan berbagai projek dari
                startup hingga perusahaan besar.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                Saya selalu antusias untuk mempelajari teknologi baru dan
                menghadapi tantangan yang membantu saya berkembang sebagai
                developer. Fokus saya adalah menulis kode yang bersih,
                maintainable, dan mengikuti best practices.
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
          className="min-h-screen flex items-center justify-center p-8 md:p-16"
        >
          <div className="max-w-6xl w-full">
            <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Projek Saya
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all group hover:scale-105"
                >
                  <div className="h-56 overflow-hidden bg-gray-700">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-100 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-6 text-lg">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/30 font-medium"
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
