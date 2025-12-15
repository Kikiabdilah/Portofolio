import React, {useState} from "react";
import {Menu, X} from "lucide-react";
import menuItems from "../utils/menuItems";

export default function Sidebar({activeSection, scrollToSection}) {
  const [open, setOpen] = useState(false);

  const handleClick = (id) => {
    scrollToSection(id);
    setOpen(false); // auto close di mobile
  };

  return (
    <>
      {/* ===== HAMBURGER (MOBILE) ===== */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-4 right-4 z-50 md:hidden bg-gray-800 p-3 rounded-xl border border-gray-700"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* ===== SIDEBAR DESKTOP ===== */}
      <nav className="hidden md:flex fixed top-1/2 -translate-y-1/2 left-4 z-40">
        <div className="flex flex-col space-y-4 bg-gray-800/40 backdrop-blur border border-gray-700 rounded-2xl p-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={`p-4 rounded-xl transition ${
                  activeSection === item.id
                    ? "bg-blue-600"
                    : "bg-gray-700 hover:bg-gray-600"
                }`}
              >
                <Icon size={22} />
              </button>
            );
          })}
        </div>
      </nav>

      {/* ===== MENU MOBILE ===== */}
      {open && (
        <div className="fixed inset-0 z-40 md:hidden bg-black/60">
          <div className="absolute right-0 top-0 h-full w-64 bg-gray-900 p-6 border-l border-gray-700">
            <h2 className="text-lg font-semibold mb-6">Menu</h2>

            <div className="flex flex-col gap-3">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleClick(item.id)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg ${
                      activeSection === item.id
                        ? "bg-blue-600"
                        : "bg-gray-800 hover:bg-gray-700"
                    }`}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
