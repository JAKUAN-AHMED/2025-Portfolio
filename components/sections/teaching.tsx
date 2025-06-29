"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Award, TrendingUp } from "lucide-react";

const teachingStats = [
  {
    number: "50+",
    label: "Juniors Taught",
    description: "Students mentored in programming",
    icon: Users,
    color: "from-blue-500 to-indigo-500",
  },
  {
    number: "7x",
    label: "Class Representative",
    description: "Elected leadership positions",
    icon: Award,
    color: "from-purple-500 to-pink-500",
  },
  {
    number: "3+",
    label: "Years Experience",
    description: "Teaching and mentoring",
    icon: BookOpen,
    color: "from-green-500 to-emerald-500",
  },
  {
    number: "95%",
    label: "Success Rate",
    description: "Students passing with good grades",
    icon: TrendingUp,
    color: "from-orange-500 to-red-500",
  },
];

const activities = [
  {
    title: "Computer Club Leadership",
    role: "President & Lead Instructor",
    period: "2022 - Present",
    description:
      "Leading the college computer club, organizing workshops, and mentoring students in modern web development technologies.",
    achievements: [
      "Organized 15+ technical workshops",
      "Mentored 50+ junior students",
      "Increased club membership by 300%",
      "Established partnerships with tech companies",
    ],
    icon: "👨‍💻",
  },
  {
    title: "Programming Workshops",
    role: "Workshop Facilitator",
    period: "2021 - Present",
    description:
      "Conducting regular programming workshops covering web development, data structures, and problem-solving techniques.",
    achievements: [
      "Delivered 25+ technical sessions",
      "Created curriculum for beginners",
      "Helped students secure internships",
      "Built learning community of 100+ members",
    ],
    icon: "🎓",
  },
  {
    title: "Peer Tutoring Program",
    role: "Senior Tutor",
    period: "2020 - Present",
    description:
      "Providing one-on-one tutoring sessions and group study sessions for computer science subjects.",
    achievements: [
      "Improved student pass rates by 40%",
      "Specialized in DSA and web development",
      "Created study materials and resources",
      "Established mentorship network",
    ],
    icon: "📚",
  },
];

export function TeachingSection() {
  return (
    <section id="teaching" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Teaching & Leadership
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about sharing knowledge and empowering the next
            generation of developers
          </p>
        </motion.div>

        {/* Teaching Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {teachingStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center border-2 border-border/50 hover:border-border transition-all duration-300 group">
                <CardContent className="pt-6">
                  <motion.div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center text-white`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon className="w-8 h-8" />
                  </motion.div>
                  <motion.h3
                    className="text-3xl font-bold mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    {stat.number}
                  </motion.h3>
                  <h4 className="font-semibold mb-1">{stat.label}</h4>
                  <p className="text-sm text-muted-foreground">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Teaching Activities */}
        <div className="space-y-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="grid lg:grid-cols-3 gap-0">
                  {/* Activity Icon and Header */}
                  <div className="lg:col-span-1 bg-gradient-to-br from-indigo-500/10 to-purple-600/10 p-8 flex flex-col justify-center items-center text-center">
                    <motion.div
                      className="text-6xl mb-4"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {activity.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
                    <Badge
                      variant="secondary"
                      className="mb-2 bg-indigo-500/10 text-indigo-600 border-indigo-500/20"
                    >
                      {activity.role}
                    </Badge>
                    <p className="text-sm text-muted-foreground">
                      {activity.period}
                    </p>
                  </div>

                  {/* Activity Details */}
                  <div className="lg:col-span-2 p-8">
                    <p className="text-foreground mb-6 leading-relaxed text-lg">
                      {activity.description}
                    </p>

                    <div>
                      <h4 className="font-semibold mb-4 text-muted-foreground uppercase tracking-wide text-sm">
                        Key Achievements
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {activity.achievements.map((achievement, achIndex) => (
                          <motion.div
                            key={achIndex}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: achIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              {achievement}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="bg-gradient-to-br from-indigo-500/5 to-purple-600/5 border-indigo-500/20 max-w-2xl mx-auto">
            <CardContent className="pt-8">
              <motion.div
                className="text-4xl mb-4"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                📖
              </motion.div>
              <h3 className="text-2xl font-bold mb-4">
                Interested in Learning?
              </h3>
              <p className="text-muted-foreground mb-6">
                I'm always excited to share knowledge and help aspiring
                developers grow. Whether you need mentoring, want to join our
                workshops, or have questions about programming - feel free to
                reach out!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Badge
                  variant="secondary"
                  className="px-4 py-2 text-base bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-600 border-green-500/20"
                >
                  💚 Always accepting new students
                </Badge>
                <Badge
                  variant="secondary"
                  className="px-4 py-2 text-base bg-gradient-to-r from-blue-500/10 to-indigo-500/10 text-blue-600 border-blue-500/20"
                >
                  🚀 Free mentoring sessions available
                </Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
