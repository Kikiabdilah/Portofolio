import React from "react";
import { Mail, User } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center p-6 md:p-8"
    >
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl md:text-6xl pb-4 font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Hubungi Saya
        </h2>

        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 md:p-10">
          <p className="text-lg md:text-xl text-gray-300 mb-6 text-center">
            Tertarik untuk berdiskusi atau berkolaborasi?
          </p>

          <div className="space-y-4">
            {/* EMAIL */}
            <div className="flex items-start gap-4 p-4 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-all">
              <div className="p-3 bg-blue-500/20 rounded-xl shrink-0">
                <Mail className="text-blue-400" size={22} />
              </div>
              <div className="min-w-0">
                <p className="text-sm text-gray-400 mb-1">Email</p>
                <p className="text-base md:text-xl text-gray-200 break-all">
                  Kiensa1234@gmail.com
                </p>
              </div>
            </div>

            {/* LOKASI */}
            <div className="flex items-start gap-4 p-4 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-all">
              <div className="p-3 bg-purple-500/20 rounded-xl shrink-0">
                <User className="text-purple-400" size={22} />
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Lokasi</p>
                <p className="text-base md:text-xl text-gray-200">
                  Indonesia
                </p>
              </div>
            </div>
          </div>

          {/* SOCIAL */}
          <div className="flex justify-center gap-6 mt-8">
            <a
              href="https://github.com/Kikiabdilah"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-700/40 rounded-full hover:bg-gray-600/60 transition-all hover:scale-110"
            >
              <FaGithub size={26} className="text-white" />
            </a>

            <a
              href="https://www.linkedin.com/in/m-rizky-abdilah/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-blue-600/40 rounded-full hover:bg-blue-600/70 transition-all hover:scale-110"
            >
              <FaLinkedin size={26} className="text-blue-300" />
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
