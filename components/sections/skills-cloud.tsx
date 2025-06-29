"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  {
    name: "HTML & CSS",
    category: "frontend",
    level: 90,
    color: "bg-orange-500 text-white",
  },
  {
    name: "JavaScript",
    category: "frontend",
    level: 85,
    color: "bg-yellow-500 text-black",
  },
  {
    name: "Next.js",
    category: "frontend",
    level: 90,
    color: "bg-black text-white",
  },
  {
    name: "Node.js",
    category: "backend",
    level: 85,
    color: "bg-green-500 text-white",
  },
  {
    name: "MongoDB",
    category: "database",
    level: 80,
    color: "bg-green-600 text-white",
  },
  {
    name: "React",
    category: "frontend",
    level: 92,
    color: "bg-blue-500 text-white",
  },
  {
    name: "TypeScript",
    category: "language",
    level: 88,
    color: "bg-blue-600 text-white",
  },
  {
    name: "TailwindCSS",
    category: "frontend",
    level: 95,
    color: "bg-cyan-500 text-white",
  },
  {
    name: "Shadcn",
    category: "tools",
    level: 85,
    color: "bg-zinc-800 text-white",
  },
  {
    name: "Express",
    category: "backend",
    level: 83,
    color: "bg-gray-600 text-white",
  },
  {
    name: "Python",
    category: "language",
    level: 75,
    color: "bg-yellow-500 text-black",
  },
  {
    name: "DSA",
    category: "concept",
    level: 78,
    color: "bg-purple-500 text-white",
  },
];

const categoryColors = {
  frontend: "from-blue-500 to-cyan-500",
  backend: "from-green-500 to-emerald-500",
  database: "from-green-600 to-teal-600",
  language: "from-purple-500 to-pink-500",
  tools: "from-gray-500 to-zinc-500",
  concept: "from-indigo-500 to-purple-500",
};

export function SkillsCloud() {
  return (
    <section id="skills" className="py-20 bg-skills-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-skills-text mb-4">
            Interactive Skills Cloud
          </h2>
          <p className="text-skills-text-secondary text-lg max-w-2xl mx-auto">
            Hover over skills to see proficiency levels and explore my technical
            expertise
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
              <Card className="bg-skills-card-bg border-gray-700 hover:border-gray-500 transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <motion.div
                    className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${skill.color}`}
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {skill.name}
                  </motion.div>

                  {/* Skill Level Bar */}
                  <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                    <motion.div
                      className={`h-2 rounded-full bg-gradient-to-r ${categoryColors[skill.category as keyof typeof categoryColors]}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>

                  <p className="text-skills-text-secondary text-xs capitalize">
                    {skill.category}
                  </p>

                  {/* Level indicator - shows on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="mt-2 text-skills-text text-sm font-bold"
                  >
                    {skill.level}%
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Category Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {Object.entries(categoryColors).map(([category, gradient]) => (
            <Badge
              key={category}
              variant="secondary"
              className={`px-4 py-2 bg-gradient-to-r ${gradient} text-white border-0 capitalize`}
            >
              {category}
            </Badge>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
