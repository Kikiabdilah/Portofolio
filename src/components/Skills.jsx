import React from "react";
import skills from "../utils/skills";

export default function Skills() {
  return (
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
  );
}
