import react from "react";
import {Mail, User} from "lucide-react";
import {FaGithub, FaLinkedin} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center p-8 md:p-8"
    >
      <div className="max-w-4xl w-full">
        <h2 className="text-5xl md:text-6xl pb-4 font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Hubungi Saya
        </h2>

        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-10">
          <p className="text-xl text-gray-300 mb-4 text-center">
            Tertarik untuk berdiskusi atau berkolaborasi?
          </p>

          <div className="space-y-3 mb-2">
            <div className="flex items-center space-x-6 p-2 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-all">
              <div className="p-4 bg-blue-500/20 rounded-xl">
                <Mail className="text-blue-400" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Email</p>
                <p className="text-xl text-gray-200">Kiensa1234@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-6 p-2 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-all">
              <div className="p-4 bg-purple-500/20 rounded-xl">
                <User className="text-purple-400" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Lokasi</p>
                <p className="text-xl text-gray-200">Indonesia</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-6 mt-4">
            <a
              href="https://github.com/Kikiabdilah"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-700/40 rounded-full hover:bg-gray-600/60 transition-all hover:scale-110"
            >
              <FaGithub size={28} className="text-white" />
            </a>

            <a
              href="https://www.linkedin.com/in/m-rizky-abdilah/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-blue-600/40 rounded-full hover:bg-blue-600/70 transition-all hover:scale-110"
            >
              <FaLinkedin size={28} className="text-blue-300" />
            </a>
          </div>
        </div>

        <p className="text-center text-gray-500 mt-10 text-sm">
          © 2025 Muhamad Rizky
        </p>
      </div>
    </section>
  );
}
