"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Moon,
  Sun,
  Home,
  User,
  Briefcase,
  Trophy,
  Mail,
  GraduationCap,
} from "lucide-react";
import { useTheme } from "next-themes";

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { theme, setTheme } = "next-themes";

  useEffect(() => {
    setMounted(true);

    // Observer for active section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 },
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const navItems = [
    {
      href: "#hero",
      label: "Home",
      icon: Home,
      gradient: "from-blue-500 to-indigo-600",
      id: "hero",
    },
    {
      href: "#skills",
      label: "Skills",
      icon: User,
      gradient: "from-purple-500 to-pink-600",
      id: "skills",
    },
    {
      href: "#projects",
      label: "Projects",
      icon: Briefcase,
      gradient: "from-green-500 to-emerald-600",
      id: "projects",
    },
    {
      href: "#achievements",
      label: "Achievements",
      icon: Trophy,
      gradient: "from-yellow-500 to-orange-600",
      id: "achievements",
    },
    {
      href: "#teaching",
      label: "Teaching",
      icon: GraduationCap,
      gradient: "from-red-500 to-rose-600",
      id: "teaching",
    },
    {
      href: "#contact",
      label: "Contact",
      icon: Mail,
      gradient: "from-cyan-500 to-blue-600",
      id: "contact",
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* Logo in top left */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed top-6 left-6 z-50"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-xl font-bold gradient-text bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20"
        >
          Jakuan Ahmed
        </motion.div>
      </motion.div>

      {/* macOS-style Dock Sidebar */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50"
      >
        <motion.div
          className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-3 shadow-2xl"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex flex-col space-y-3">
            {navItems.map((item, index) => (
              <motion.button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="relative group"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {/* App Icon */}
                <div
                  className={`
                  w-12 h-12 rounded-xl flex items-center justify-center
                  bg-gradient-to-br ${item.gradient} 
                  shadow-lg group-hover:shadow-xl transition-all duration-300
                  ${activeSection === item.id ? "ring-2 ring-white/50 scale-110" : ""}
                `}
                >
                  <item.icon className="w-6 h-6 text-white" />
                </div>

                {/* Tooltip */}
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 
                           bg-black/90 text-white text-sm px-3 py-1 rounded-lg
                           whitespace-nowrap pointer-events-none"
                >
                  {item.label}
                  <div
                    className="absolute left-full top-1/2 transform -translate-y-1/2 
                                border-l-4 border-l-black/90 border-y-4 border-y-transparent"
                  />
                </motion.div>

                {/* Active Indicator */}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -right-1 top-1/2 transform -translate-y-1/2 
                             w-1 h-6 bg-white rounded-full"
                  />
                )}
              </motion.button>
            ))}

            {/* Divider */}
            <div className="h-px bg-white/20 my-2" />

            {/* Theme Toggle */}
            <motion.button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="relative group"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center
                           bg-gradient-to-br from-gray-600 to-gray-800 
                           shadow-lg group-hover:shadow-xl transition-all duration-300"
              >
                {theme === "light" ? (
                  <Moon className="w-6 h-6 text-white" />
                ) : (
                  <Sun className="w-6 h-6 text-white" />
                )}
              </div>

              {/* Tooltip */}
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 
                         bg-black/90 text-white text-sm px-3 py-1 rounded-lg
                         whitespace-nowrap pointer-events-none"
              >
                {theme === "light" ? "Dark Mode" : "Light Mode"}
                <div
                  className="absolute left-full top-1/2 transform -translate-y-1/2 
                              border-l-4 border-l-black/90 border-y-4 border-y-transparent"
                />
              </motion.div>
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
