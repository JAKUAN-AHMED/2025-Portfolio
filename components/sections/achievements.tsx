"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Trophy,
  Award,
  ExternalLink,
  Calendar,
  MapPin,
  Users,
} from "lucide-react";

const achievements = [
  {
    id: 1,
    title: "3rd Place - ASSET Skills Competition 2023",
    category: "Competition",
    description: "Python Robotics & Automation Challenge",
    icon: Trophy,
    date: "December 2023",
    location: "ASSET Technology",
    details: [
      "Developed autonomous robot using Python",
      "Implemented computer vision algorithms",
      "Real-time sensor data processing",
      "Team collaboration & problem-solving",
    ],
    badge: "🥉 Bronze Medal",
    color: "from-amber-500 to-orange-500",
    verificationUrl: "https://asset.com/verify/jakuan-2023",
  },
  {
    id: 2,
    title: "MERN Stack Development Certification",
    category: "Certification",
    description: "Complete Full-Stack Web Development Program",
    icon: Award,
    date: "August 2023",
    location: "Programming Hero",
    details: [
      "MongoDB, Express.js, React, Node.js",
      "RESTful API development",
      "Authentication & authorization",
      "Deployment & hosting",
    ],
    badge: "🎓 Certified",
    color: "from-green-500 to-emerald-500",
    verificationUrl: "https://programming-hero.com/verify/jakuan-mern",
  },
  {
    id: 3,
    title: "Competitive Programming Profiles",
    category: "Coding",
    description: "Active participation across multiple platforms",
    icon: Users,
    date: "Ongoing",
    location: "Online Platforms",
    details: [
      "Codeforces: Specialist (Rating: 1400+)",
      "HackerRank: 5-star Problem Solver",
      "LeetCode: 200+ problems solved",
      "Regular contest participation",
    ],
    badge: "⭐ Active Coder",
    color: "from-blue-500 to-indigo-500",
    verificationUrl: "https://codeforces.com/profile/jakuan",
  },
];

const stats = [
  {
    label: "Competitions Won",
    value: "3+",
    icon: Trophy,
    color: "text-yellow-500",
  },
  {
    label: "Certifications",
    value: "5+",
    icon: Award,
    color: "text-green-500",
  },
  {
    label: "Problems Solved",
    value: "200+",
    icon: Users,
    color: "text-blue-500",
  },
];

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Achievements & Recognition
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Awards, certifications, and competitive programming achievements
            that showcase my dedication to excellence
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center"
            >
              <Card className="border-2 border-border/50 hover:border-border transition-all duration-300">
                <CardContent className="pt-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      delay: index * 0.1,
                    }}
                    viewport={{ once: true }}
                  >
                    <stat.icon
                      className={`w-8 h-8 mx-auto mb-4 ${stat.color}`}
                    />
                  </motion.div>
                  <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`p-3 rounded-lg bg-gradient-to-r ${achievement.color} text-white`}
                    >
                      <achievement.icon className="w-6 h-6" />
                    </motion.div>
                    <Badge
                      variant="secondary"
                      className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-600 border-indigo-500/20"
                    >
                      {achievement.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">
                    {achievement.title}
                  </CardTitle>
                  <p className="text-muted-foreground">
                    {achievement.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Date and Location */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {achievement.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {achievement.location}
                    </div>
                  </div>

                  {/* Badge */}
                  <div className="text-2xl font-bold">{achievement.badge}</div>

                  {/* Details */}
                  <div className="space-y-2">
                    {achievement.details.map((detail, detailIndex) => (
                      <motion.div
                        key={detailIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: detailIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center text-sm"
                      >
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mr-3" />
                        {detail}
                      </motion.div>
                    ))}
                  </div>

                  {/* Verification Link */}
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  >
                    <a
                      href={achievement.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Verify Certificate
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Competitive Programming Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-br from-indigo-500/5 to-purple-600/5 border-indigo-500/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl mb-4">
                Competitive Programming Journey
              </CardTitle>
              <p className="text-muted-foreground">
                Continuous learning and problem-solving across multiple
                platforms
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    platform: "Codeforces",
                    rank: "Specialist",
                    rating: "1400+",
                    color: "bg-red-500",
                  },
                  {
                    platform: "HackerRank",
                    rank: "5-Star",
                    rating: "Problem Solver",
                    color: "bg-green-500",
                  },
                  {
                    platform: "LeetCode",
                    rank: "Active",
                    rating: "200+ Solved",
                    color: "bg-yellow-500",
                  },
                ].map((platform, index) => (
                  <motion.div
                    key={platform.platform}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-4 rounded-lg border border-border bg-card"
                  >
                    <div
                      className={`w-12 h-12 ${platform.color} rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold`}
                    >
                      {platform.platform[0]}
                    </div>
                    <h4 className="font-semibold">{platform.platform}</h4>
                    <p className="text-sm text-muted-foreground">
                      {platform.rank}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {platform.rating}
                    </p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
