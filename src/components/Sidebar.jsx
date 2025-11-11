import react from "react";
import menuItems from "../utils/menuItems";

export default function Sidebar({activeSection, setActiveSection, scrollToSection}) {
  return (
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
  );
}
