"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";

const skills = [
  {
    name: "React",
    category: "frontend",
    level: 92,
    gradient: "from-cyan-400 to-blue-500",
    radius: 180,
  },
  {
    name: "Next.js",
    category: "frontend",
    level: 90,
    gradient: "from-gray-900 to-gray-700 dark:from-white dark:to-gray-300",
    radius: 220,
  },
  {
    name: "TypeScript",
    category: "language",
    level: 88,
    gradient: "from-blue-600 to-blue-800",
    radius: 160,
  },
  {
    name: "JavaScript",
    category: "frontend",
    level: 85,
    gradient: "from-yellow-400 to-yellow-600",
    radius: 200,
  },
  {
    name: "Node.js",
    category: "backend",
    level: 85,
    gradient: "from-green-500 to-green-700",
    radius: 240,
  },
  {
    name: "TailwindCSS",
    category: "frontend",
    level: 95,
    gradient: "from-cyan-500 to-teal-600",
    radius: 140,
  },
  {
    name: "MongoDB",
    category: "database",
    level: 80,
    gradient: "from-green-600 to-green-800",
    radius: 260,
  },
  {
    name: "Express",
    category: "backend",
    level: 83,
    gradient: "from-gray-600 to-gray-800",
    radius: 120,
  },
  {
    name: "Python",
    category: "language",
    level: 75,
    gradient: "from-blue-500 to-yellow-500",
    radius: 280,
  },
  {
    name: "HTML & CSS",
    category: "frontend",
    level: 90,
    gradient: "from-orange-500 to-red-600",
    radius: 100,
  },
  {
    name: "Shadcn/ui",
    category: "tools",
    level: 85,
    gradient:
      "from-slate-600 to-slate-800 dark:from-slate-400 dark:to-slate-600",
    radius: 300,
  },
  {
    name: "DSA",
    category: "concept",
    level: 78,
    gradient: "from-purple-500 to-pink-600",
    radius: 320,
  },
];

export function SkillsCloud() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState<string | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document
        .getElementById("skills-cloud")
        ?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: e.clientX - rect.left - rect.width / 2,
          y: e.clientY - rect.top - rect.height / 2,
        });
      }
    };

    const skillsSection = document.getElementById("skills-cloud");
    skillsSection?.addEventListener("mousemove", handleMouseMove);

    return () =>
      skillsSection?.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Interactive Skills Universe
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Watch my skills orbit in a dynamic cloud. Hover to interact and see
            proficiency levels come to life!
          </p>
        </motion.div>

        {/* Circular Skills Cloud */}
        <div
          id="skills-cloud"
          className="relative h-[600px] flex items-center justify-center overflow-hidden"
        >
          {/* Central Hub */}
          <motion.div
            className="absolute z-10 w-24 h-24 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center shadow-2xl"
            animate={{
              scale: [1, 1.1, 1],
              rotate: 360,
            }}
            transition={{
              scale: { duration: 2, repeat: Infinity },
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            }}
          >
            <span className="text-white font-bold text-sm">Skills</span>
          </motion.div>

          {/* Orbiting Skills */}
          {skills.map((skill, index) => {
            const angle = (index * 360) / skills.length;
            const orbitRadius = skill.radius * 0.8;

            return (
              <motion.div
                key={skill.name}
                className="absolute"
                animate={{
                  rotate: 360,
                  x: Math.cos((angle * Math.PI) / 180) * orbitRadius,
                  y: Math.sin((angle * Math.PI) / 180) * orbitRadius,
                }}
                transition={{
                  rotate: {
                    duration: 30 + index * 2,
                    repeat: Infinity,
                    ease: "linear",
                  },
                  x: {
                    duration: 30 + index * 2,
                    repeat: Infinity,
                    ease: "linear",
                  },
                  y: {
                    duration: 30 + index * 2,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
                whileHover={{
                  scale: 1.3,
                  zIndex: 20,
                }}
                onHoverStart={() => setIsHovered(skill.name)}
                onHoverEnd={() => setIsHovered(null)}
                className="cursor-pointer"
              >
                <motion.div
                  className={`
                    relative w-16 h-16 rounded-full bg-gradient-to-r ${skill.gradient}
                    flex items-center justify-center shadow-lg border-2 border-white/20
                    backdrop-blur-sm
                  `}
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    rotate: {
                      duration: 30 + index * 2,
                      repeat: Infinity,
                      ease: "linear",
                    },
                  }}
                >
                  <span className="text-white text-xs font-semibold text-center leading-3">
                    {skill.name.split(" ").map((word, i) => (
                      <div key={i}>{word}</div>
                    ))}
                  </span>

                  {/* Skill Level Ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-4 border-white/30"
                    style={{
                      background: `conic-gradient(from 0deg, rgba(255,255,255,0.8) ${skill.level}%, transparent ${skill.level}%)`,
                    }}
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  {/* Hover Tooltip */}
                  {isHovered === skill.name && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: -25 }}
                      className="absolute top-0 transform -translate-y-full left-1/2 -translate-x-1/2"
                    >
                      <div className="bg-foreground text-background px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-xl">
                        {skill.level}% Proficiency
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-foreground" />
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            );
          })}

          {/* Orbital Paths (subtle) */}
          {Array.from({ length: 4 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute border border-muted/20 rounded-full"
              style={{
                width: (120 + i * 60) * 2,
                height: (120 + i * 60) * 2,
              }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 40 + i * 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Category Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mt-12"
        >
          {[...new Set(skills.map((skill) => skill.category))].map(
            (category) => (
              <Badge
                key={category}
                variant="outline"
                className="px-4 py-2 capitalize bg-background/80 backdrop-blur-sm"
              >
                {category}
              </Badge>
            ),
          )}
        </motion.div>

        {/* Interactive Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-muted-foreground">
            🚀 {skills.length} Technologies • ⭐ Average Proficiency:{" "}
            {Math.round(
              skills.reduce((acc, skill) => acc + skill.level, 0) /
                skills.length,
            )}
            %
          </p>
        </motion.div>
      </div>
    </section>
  );
}
