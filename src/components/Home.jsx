import react from "react";

export default function Home() {
  return (
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
              interaktif. Saya mengubah ide menjadi kenyataan dengan kode yang
              clean dan design yang modern.
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
  );
}
