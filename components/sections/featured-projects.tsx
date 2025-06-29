"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  Play,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Fabelica",
    subtitle: "Full-stack E-commerce Platform",
    description:
      "A comprehensive e-commerce solution with role-based access control, subscription system, and advanced shop management features.",
    tech: ["Next.js", "Node.js", "MongoDB", "Stripe", "TypeScript"],
    features: [
      "Role-based access control",
      "Subscription management system",
      "Advanced shop management",
      "Payment integration",
      "Real-time notifications",
    ],
    liveUrl: "https://schedul.pro",
    githubUrl: "https://github.com/SMTech24-official/barber_shop",
    image: "/api/placeholder/600/400",
    category: "Full-stack",
    status: "Live",
    demoVideo: "/videos/fabelica-demo.mp4",
  },
  {
    id: 2,
    title: "Ethereal Scribbles",
    subtitle: "Payment Integration Platform",
    description:
      "A sophisticated platform with Shurjopay integration, comprehensive admin dashboards, and advanced product management systems.",
    tech: ["React", "Redux", "Node.js", "Shurjopay", "Express"],
    features: [
      "Shurjopay payment integration",
      "Admin dashboard system",
      "Product management",
      "User authentication",
      "Order tracking",
    ],
    liveUrl: "https://ethereal-frontend-mauve.vercel.app/",
    githubUrl: "https://github.com/JAKUAN-AHMED/Stationery-Shop-Server",
    image: "/public/ethereal.png",
    category: "Frontend",
    status: "Live",
    demoVideo: "/videos/ethereal-demo.mp4",
  },
  {
    id: 3,
    title: "DubaiPulse",
    subtitle: "Event Management Platform",
    description:
      "Modern event platform built with Next.js and TypeScript, featuring event galleries, workshop bookings, and real-time updates.",
    tech: ["Next.js", "TypeScript", "Prisma", "MongoDB", "TailwindCSS"],
    features: [
      "Event gallery management",
      "Workshop booking system",
      "Real-time event updates",
      "User registration",
      "Event analytics",
    ],
    liveUrl: "https://arteventsdubai.com/",
    githubUrl: "https://github.com/SMTech24-official/Event-Listing",
    image: "/public/Art Events Dubai.png",
    category: "Full-stack",
    status: "Live",
    demoVideo: "/videos/dubaipulse-demo.mp4",
  },
];

export function FeaturedProjects() {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const project = projects[currentProject];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcase of my recent work with live demos and detailed
            implementations
          </p>
        </motion.div>

        {/* Project Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="overflow-hidden bg-card border-border">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Project Image/Video */}
                  <div className="relative group">
                    <div className="aspect-video bg-gradient-to-br from-indigo-500/20 to-purple-600/20 flex items-center justify-center">
                      {/* Placeholder for project image */}
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden"
                      >
                        <div className="text-6xl font-bold text-white/20">
                          {project.title[0]}
                        </div>

                        {/* Play button for demo video */}
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                        >
                          <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                            <Play className="w-8 h-8 text-white" />
                          </div>
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <CardContent className="p-8">
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge
                          variant="secondary"
                          className="bg-indigo-500/10 text-indigo-500 border-indigo-500/20"
                        >
                          {project.category}
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="bg-green-500/10 text-green-500 border-green-500/20"
                        >
                          {project.status}
                        </Badge>
                      </div>
                      <h3 className="text-3xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-lg mb-4">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="border-muted-foreground/20"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {project.features.slice(0, 3).map((feature, index) => (
                          <motion.li
                            key={feature}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center text-sm text-muted-foreground"
                          >
                            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-3" />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <Button
                        asChild
                        className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700"
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button variant="outline" asChild>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Source Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevProject}
              className="rounded-full"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            {/* Project Indicators */}
            <div className="flex space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentProject
                      ? "bg-indigo-500 scale-125"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextProject}
              className="rounded-full"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Project Counter */}
          <div className="text-center mt-4 text-muted-foreground">
            {currentProject + 1} of {projects.length}
          </div>
        </div>
      </div>
    </section>
  );
}
