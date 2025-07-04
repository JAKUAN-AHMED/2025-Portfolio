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
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Suspense fallback={<LoadingSpinner />}>
        <Navbar />
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
      </Suspense>
    </main>
  );
}
