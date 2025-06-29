import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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

export default function Index() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-hero-gradient-from to-hero-gradient-to flex items-center justify-center px-4">
        {/* Background pattern/decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-32 left-16 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-white/10 rounded-full blur-lg"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Trusted{" "}
                  <span className="bg-black text-white px-3 py-1 rounded-lg inline-block">
                    Partner
                  </span>{" "}
                  for Your Website{" "}
                  <span className="bg-black text-white px-3 py-1 rounded-lg inline-block">
                    Development
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-700 max-w-lg">
                  Full-stack developer specializing in modern web technologies.
                  Diploma in Computer Science & Technology.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg rounded-full"
                >
                  Schedule a Call
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-6 text-lg rounded-full"
                >
                  View Portfolio
                </Button>
              </div>
            </div>

            {/* Right side - Profile section */}
            <div className="relative">
              <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 border border-white/30">
                <div className="flex items-center gap-4 mb-6">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src="" alt="Jakuan Ahmed" />
                    <AvatarFallback className="bg-black text-white text-xl font-bold">
                      JA
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Jakuan Ahmed
                    </h3>
                    <p className="text-gray-700">Full Stack Developer</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">📧</span>
                    </div>
                    <span className="text-gray-800">Get in touch</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">🎓</span>
                    </div>
                    <span className="text-gray-800">Diploma in CST</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">💼</span>
                    </div>
                    <span className="text-gray-800">
                      Available for projects
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-skills-bg py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-skills-text mb-4">
              My Extensive List of Skills
            </h2>
            <p className="text-skills-text-secondary text-lg max-w-2xl mx-auto">
              Technologies and frameworks I work with to build modern, scalable
              applications
            </p>
          </div>

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
                    <Button
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-xs"
                    >
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-lg rounded-full"
            >
              View All Skills
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
