"use client";

import { Suspense } from "react";
import { motion } from "framer-motion";
import { HeroSection } from "@/components/sections/hero-section";
import { SkillsCloud } from "@/components/sections/skills-cloud";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { AchievementsSection } from "@/components/sections/achievements";
import { TeachingSection } from "@/components/sections/teaching";
import { ContactSection } from "@/components/sections/contact";
import { Navbar } from "@/components/navbar";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

function LoadingSpinner() {
  return (
    <div
      className="flex items-center justify-center min-h-screen"
      role="status"
      aria-label="Loading content"
    >
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>
      <Suspense fallback={<LoadingSpinner />}>
        <Navbar />
        <main
          id="main-content"
          className="min-h-screen"
          role="main"
          aria-label="Portfolio content"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <HeroSection />
            <SkillsCloud />
            <FeaturedProjects />
            <AchievementsSection />
            <TeachingSection />
            <ContactSection />
          </motion.div>
        </main>
      </Suspense>
    </>
  );
}
