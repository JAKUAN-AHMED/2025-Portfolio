"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Badge } from "@/components/ui/badge";

const skills = [
  {
    name: "Next.js",
    category: "frontend",
    level: 90,
    size: "text-4xl",
    color: "from-black to-gray-800",
  },
  {
    name: "React",
    category: "frontend",
    level: 92,
    size: "text-3xl",
    color: "from-blue-500 to-blue-700",
  },
  {
    name: "TypeScript",
    category: "language",
    level: 88,
    size: "text-3xl",
    color: "from-blue-600 to-indigo-600",
  },
  {
    name: "Node.js",
    category: "backend",
    level: 85,
    size: "text-3xl",
    color: "from-green-500 to-green-700",
  },
  {
    name: "TailwindCSS",
    category: "frontend",
    level: 95,
    size: "text-2xl",
    color: "from-cyan-500 to-teal-500",
  },
  {
    name: "MongoDB",
    category: "database",
    level: 80,
    size: "text-2xl",
    color: "from-green-600 to-emerald-600",
  },
  {
    name: "Express",
    category: "backend",
    level: 83,
    size: "text-xl",
    color: "from-gray-600 to-gray-800",
  },
  {
    name: "Shadcn",
    category: "tools",
    level: 85,
    size: "text-xl",
    color: "from-zinc-800 to-black",
  },
  {
    name: "Python",
    category: "language",
    level: 75,
    size: "text-lg",
    color: "from-yellow-500 to-orange-500",
  },
  {
    name: "DSA",
    category: "concept",
    level: 78,
    size: "text-lg",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "PostgreSQL",
    category: "database",
    level: 75,
    size: "text-base",
    color: "from-blue-700 to-indigo-800",
  },
  {
    name: "MySQL",
    category: "database",
    level: 70,
    size: "text-base",
    color: "from-orange-500 to-red-500",
  },
];

const FloatingParticle = ({ index }: { index: number }) => {
  return (
    <motion.div
      className="absolute w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-20"
      initial={{
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }}
      animate={{
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }}
      transition={{
        duration: 20 + Math.random() * 20,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};

const SkillBubble = ({ skill, index }: { skill: any; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [30, -30]));
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-30, 30]));

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(event.clientX - centerX);
    mouseY.set(event.clientY - centerY);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative cursor-pointer"
    >
      <motion.div
        whileHover={{ scale: 1.2, z: 50 }}
        className={`
          ${skill.size} font-bold px-6 py-3 rounded-full
          bg-gradient-to-r ${skill.color} text-white
          shadow-lg hover:shadow-2xl transition-all duration-300
          backdrop-blur-sm border border-white/20
          transform-gpu
        `}
        style={{
          transform: isHovered ? "translateZ(20px)" : "translateZ(0px)",
        }}
      >
        {skill.name}

        {/* Glow effect */}
        <motion.div
          className={`absolute inset-0 rounded-full bg-gradient-to-r ${skill.color} opacity-0 blur-xl`}
          animate={{ opacity: isHovered ? 0.6 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Skill level indicator */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: isHovered ? 1 : 0 }}
          className="absolute -top-2 -right-2 bg-white/90 text-black text-xs font-bold px-2 py-1 rounded-full"
        >
          {skill.level}%
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const OrbitingSkill = ({
  skill,
  radius,
  speed,
}: {
  skill: any;
  radius: number;
  speed: number;
}) => {
  return (
    <motion.div
      className="absolute left-1/2 top-1/2"
      animate={{ rotate: 360 }}
      transition={{
        duration: speed,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <motion.div
        className={`relative w-4 h-4 rounded-full bg-gradient-to-r ${skill.color}`}
        style={{
          x: radius,
          y: 0,
        }}
        whileHover={{ scale: 3 }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
        >
          {skill.name}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export function SkillsCloud() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const categoryColors = {
    frontend: "from-blue-500 to-cyan-500",
    backend: "from-green-500 to-emerald-500",
    database: "from-green-600 to-teal-600",
    language: "from-purple-500 to-pink-500",
    tools: "from-gray-500 to-zinc-500",
    concept: "from-indigo-500 to-purple-500",
  };

  if (!mounted) return null;

  return (
    <section
      id="skills"
      className="py-20 bg-skills-bg relative overflow-hidden"
    >
      {/* Floating Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <FloatingParticle key={i} index={i} />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-skills-text mb-4">
            Interactive Skills Universe
          </h2>
          <p className="text-skills-text-secondary text-lg max-w-2xl mx-auto">
            Explore my technical expertise in an immersive 3D environment
          </p>
        </motion.div>

        {/* Main Skills Cloud */}
        <div
          ref={containerRef}
          className="relative min-h-[600px] perspective-1000"
          style={{ perspective: "1000px" }}
        >
          {/* Central Skills Cloud */}
          <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-6 p-8">
            {skills.map((skill, index) => (
              <SkillBubble key={skill.name} skill={skill} index={index} />
            ))}
          </div>

          {/* Orbiting Skills (Desktop only) */}
          <div className="hidden lg:block absolute inset-0">
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              {skills.slice(0, 6).map((skill, index) => (
                <OrbitingSkill
                  key={`orbit-${skill.name}`}
                  skill={skill}
                  radius={200 + index * 30}
                  speed={20 + index * 5}
                />
              ))}
            </div>
          </div>

          {/* Central Glow Effect */}
          <motion.div
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          />
        </div>

        {/* Category Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mt-16"
        >
          {Object.entries(categoryColors).map(([category, gradient]) => (
            <motion.div
              key={category}
              whileHover={{ scale: 1.05, y: -2 }}
              className="group"
            >
              <Badge
                variant="secondary"
                className={`px-6 py-3 bg-gradient-to-r ${gradient} text-white border-0 capitalize text-base font-semibold shadow-lg group-hover:shadow-xl transition-all duration-300`}
              >
                {category}
              </Badge>
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive Instructions */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-skills-text-secondary">
            💡 Hover over skills to see proficiency levels and 3D effects
          </p>
        </motion.div>
      </div>
    </section>
  );
}
