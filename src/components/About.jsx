import react from "react";

export default function About() {
  return (
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
            Saya adalah Sarjana Komputer dari Universitas Islam Negeri Sumatera
            Utara (IPK 3,47) dengan minat yang kuat pada pengembangan web
            modern. Perjalanan saya dimulai dari membuat website statis
            sederhana, hingga kini fokus membangun aplikasi web yang lebih
            terstruktur dan scalable menggunakan Laravel, React, dan Tailwind
            CSS.
          </p>
          <p className="text-xl text-gray-300 leading-relaxed mb-5">
            Saya terbiasa mengembangkan fitur mulai dari sisi frontend
            menggunakan React dan Tailwind untuk antarmuka yang bersih dan
            responsif, hingga backend berbasis PHP Laravel untuk mengelola logic
            aplikasi dan integrasi database.
          </p>
          <p className="text-xl text-gray-300 leading-relaxed">
            Saya terus memperdalam pemahaman tentang arsitektur aplikasi, API
            integration, reusable component, state management, serta workflow
            pengembangan yang rapi menggunakan Git. Fokus saya adalah membangun
            aplikasi yang tidak hanya berfungsi, tetapi juga memiliki struktur
            kode yang bersih, mudah dikembangkan, dan nyaman digunakan.
          </p>
        </div>
      </div>
    </section>
  );
}
