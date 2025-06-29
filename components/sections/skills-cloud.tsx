"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  {
    name: "HTML & CSS",
    icon: "🌐",
    description: "Markup & Styling",
  },
  {
    name: "JavaScript",
    icon: "⚡",
    description: "Dynamic Programming",
  },
  {
    name: "Next.js",
    icon: "🚀",
    description: "React Framework",
  },
  {
    name: "Node.js",
    icon: "💚",
    description: "Server Runtime",
  },
  {
    name: "Shadcn",
    icon: "🎨",
    description: "UI Components",
  },
  {
    name: "Ant Design",
    icon: "🐜",
    description: "Design System",
  },
  {
    name: "Express.js",
    icon: "🚂",
    description: "Web Framework",
  },
  {
    name: "PostgreSQL",
    icon: "🐘",
    description: "Database",
  },
  {
    name: "MySQL",
    icon: "🗄️",
    description: "Database",
  },
  {
    name: "C++",
    icon: "⚙️",
    description: "Programming",
  },
  {
    name: "DSA",
    icon: "🧮",
    description: "Algorithms",
  },
];

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
            My Extensive List of Skills
          </h2>
          <p className="text-skills-text-secondary text-lg max-w-2xl mx-auto">
            Technologies and frameworks I work with to build modern, scalable
            applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="bg-skills-card-bg border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-2xl">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-skills-text font-semibold text-lg">
                      {skill.name}
                    </h3>
                    <p className="text-skills-text-secondary text-sm">
                      {skill.description}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full ${
                          i < 4 ? "bg-blue-500" : "bg-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-xs"
                  >
                    Learn More
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Badge
            variant="secondary"
            className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-lg rounded-full"
          >
            View All Skills
          </Badge>
        </div>
      </div>
    </section>
  );
}
