"use client"

import { useState, useEffect, useRef } from "react"
import { Dancing_Script } from "next/font/google"

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
})
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code,
  Palette,
  Database,
  Smartphone,
  Server,
  ChevronDown,
  Send,
  Globe,
  Layers,
  Zap,
  Cloud,
  GitBranch,
  Cpu,
  FileCode,
  Braces,
  Layout,
  Menu,
  X,
} from "lucide-react"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [animatedElements, setAnimatedElements] = useState<string[]>([])
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    setIsVisible(true)

    // Intersection Observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimatedElements((prev) => [...prev, entry.target.id])
          }
        })
      },
      { threshold: 0.1 },
    )

    // Observe all elements with data-animate attribute
    document.querySelectorAll("[data-animate]").forEach((el) => {
      if (observerRef.current && el.id) {
        observerRef.current.observe(el)
      }
    })

    const handleScroll = () => {
      const sections = ["home", "about", "education", "skills", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  const isAnimated = (id: string) => animatedElements.includes(id)

  const skills = [
    { name: "Next.js", level: 95, icon: Globe, color: "#fff" },
    { name: "React", level: 92, icon: Code, color: "#61DAFB" },
    { name: "TypeScript", level: 88, icon: FileCode, color: "#3178C6" },
    { name: "JavaScript", level: 90, icon: Braces, color: "#F7DF1E" },
    { name: "Node.js", level: 85, icon: Server, color: "#339933" },
    { name: "Python", level: 80, icon: Code, color: "#3776AB" },
    { name: "MongoDB", level: 78, icon: Database, color: "#47A248" },
    { name: "PostgreSQL", level: 82, icon: Database, color: "#336791" },
    { name: "AWS", level: 75, icon: Cloud, color: "#FF9900" },
    { name: "Docker", level: 70, icon: Layers, color: "#2496ED" },
    { name: "Git", level: 90, icon: GitBranch, color: "#F05032" },
    { name: "Tailwind CSS", level: 93, icon: Palette, color: "#06B6D4" },
    { name: "GraphQL", level: 72, icon: Zap, color: "#E10098" },
    { name: "React Native", level: 68, icon: Smartphone, color: "#61DAFB" },
    { name: "Vue.js", level: 65, icon: Layout, color: "#4FC08D" },
    { name: "Express.js", level: 85, icon: Server, color: "#ffffff" },
    { name: "Redux", level: 80, icon: Cpu, color: "#764ABC" },
    { name: "Figma", level: 88, icon: Palette, color: "#F24E1E" },
  ]

  const projects = [
    {
      title: "AI-Powered Short Video Generator",
      description:
        "A full-stack AI-powered video generation platform built with Next.js, React, Tailwind CSS, and Convex. Users can input scripts or ideas to generate short videos automatically. Includes authentication, dashboard, video history, and credit-based usage system.",
      image: "/videogen.png",
      tech: ["Next.js", "React", "Tailwind CSS", "Convex", "Inngest", "Gemini", "AIGurulab"],
      github: "https://github.com/ashish-2106/Short-Video-Generator.git",
      live: "https://shortvideo.yourdomain.com",

    },
    {
      title: "Derma Vision: AI Chatbot (Voice & Vision)",
      description:
        "An AI-powered dermatology assistant that uses the Meta LLaMA 4 Scout 17B model to analyze skin images and support intelligent voice interaction. Built with Gradio, Firebase, and SQLite, it includes user authentication, history of all queries, and the ability to generate and send diagnostic reports to doctors.",
      image: "/dermavision.png",
      tech: ["Python", "Gradio", "Whisper AI", "gTTS", "SQLite", "Firebase", "LLaMA 4 Scout 17B"],
      github: "https://github.com/ashish-2106/Derma-Vision-Ai-Medical-chatbot-voice-vision.git",
      live: "https://dermavision.yourdomain.com",


    },
    {
      title: "Password Manager",
      description:
        "A user-friendly password manager built with Next.js, Clerk, Tailwind CSS, and ShadCN UI. Features include secure password storage, generation, cloud syncing via Clerk, biometric authentication, and encrypted vault sharing. Provides real-time breach alerts and an intuitive, responsive UI for seamless password management.",
      image: "/passmanager.png",
      tech: ["Next.js", "Clerk", "Tailwind CSS", "ShadCN UI", "Encryption"],
      github: "https://github.com/ashish-2106/Password-Manager.git",
      live: "https://passwordvault.yourdomain.com",

    },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">

            <div
              className="text-4xl font-bold animate-pulse bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text tracking-wide drop-shadow-lg"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              Ashish
            </div>
           





            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "education", "skills", "projects", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 hover:text-gray-300 ${activeSection === item ? "text-white" : "text-gray-400"
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-gray-300 transition-colors duration-300"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0 overflow-hidden"
              }`}
          >
            <div className="flex flex-col space-y-4 pt-4 border-t border-white/10">
              {["home", "about", "education", "skills", "projects", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    scrollToSection(item)
                    setIsMobileMenuOpen(false)
                  }}
                  className={`capitalize text-left py-2 px-4 rounded-lg transition-all duration-300 hover:bg-white/10 ${activeSection === item ? "text-white bg-white/5" : "text-gray-400"
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
        <div
          className={`text-center z-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white animate-pulse">Ashish</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-fade-in">
            Full Stack Developer & UI/UX Designer
          </p>
          <p className="text-lg mb-12 text-gray-400 max-w-2xl mx-auto">
            Crafting digital experiences with modern technologies and creative design
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-black hover:bg-gray-900 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 border border-white/20 hover:border-white/40 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="bg-white text-black hover:bg-gray-100 hover:scale-105 hover:shadow-lg px-8 py-3 rounded-full transition-all duration-300 animate-slide-up"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
              Get In Touch
            </Button>


          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div
            id="about-header"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${isAnimated("about-header") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">About Me</h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div
                id="about-card-1"
                data-animate
                className={`backdrop-blur-md bg-white/5 p-8 rounded-2xl border border-white/10 transition-all duration-700 ${isAnimated("about-card-1") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                  } hover:border-white/20 hover:transform hover:scale-105`}
              >
                <p className="text-lg leading-relaxed text-gray-300">
                  I'm a passionate full-stack developer with over 5 years of experience creating digital solutions that
                  make a difference. I specialize in modern web technologies and have a keen eye for design.
                </p>
              </div>
              <div
                id="about-card-2"
                data-animate
                className={`backdrop-blur-md bg-white/5 p-8 rounded-2xl border border-white/10 transition-all duration-700 ${isAnimated("about-card-2") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                  } hover:border-white/20 hover:transform hover:scale-105`}
                style={{ transitionDelay: "0.2s" }}
              >
                <p className="text-lg leading-relaxed text-gray-300">
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                  or sharing knowledge with the developer community.
                </p>
              </div>
            </div>
            <div
              id="about-image"
              data-animate
              className={`relative transition-all duration-700 ${isAnimated("about-image") ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
            >
              <div className="backdrop-blur-md bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <img
                  src="me.jpg?height=200&width=200"
                  alt="Profile"
                  className="w-full h-80 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div
            id="education-header"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${isAnimated("education-header") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Education</h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-white/30"></div>

            {/* College Education */}
            <div
              id="education-college"
              data-animate
              className={`relative flex flex-col md:flex-row items-start md:items-center mb-16 transition-all duration-700 ${isAnimated("education-college") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-black z-10"></div>

              {/* Content */}
              <div className="ml-16 md:ml-0 md:w-1/2 md:pr-8 md:text-right">
                <div className="bg-black border border-white/20 p-6 rounded-xl hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex flex-col md:items-end">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-black border border-white/30 rounded-lg flex items-center justify-center overflow-hidden mr-4 md:order-2 md:ml-4 md:mr-0">
                        <img
                          src="/newlbs.jpg?height=100&width=100"
                          alt="University Logo"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="md:text-right">
                        <h3 className="text-xl font-bold text-white">New LBS School</h3>
                        <p className="text-gray-400 text-sm">2010 - 2021</p>
                      </div>
                    </div>
                    <div className="md:text-right">
                      <p className="text-gray-300 mb-2">Higher Secondary School</p>
                      <div className="flex items-center mb-3 md:justify-end">
                        <span className="px-3 py-1 bg-white text-black rounded-full text-sm font-semibold">98.80%</span>
                      </div>
                      <p className="text-gray-400 text-sm mb-3">
                        Completed Higher Secondary Education (Class 12) with Physics, Chemistry, and Mathematics (PCM) from New LBS School. Built a strong academic foundation in science and analytical thinking.
                      </p>
                      <div className="flex flex-wrap gap-2 md:justify-end">
                        <span className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs">Top Performer</span>
                        <span className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs">Participated in Science and Math Competitions

                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* High School Education */}
            <div
              id="education-highschool"
              data-animate
              className={`relative flex flex-col md:flex-row items-start md:items-center mb-16 transition-all duration-700 ${isAnimated("education-highschool") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              style={{ transitionDelay: "0.2s" }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-black z-10"></div>

              {/* Content */}
              <div className="ml-16 md:ml-0 md:w-1/2 md:pl-8 md:ml-auto">
                <div className="bg-black border border-white/20 p-6 rounded-xl hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex flex-col">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-black border border-white/30 rounded-lg flex items-center justify-center overflow-hidden mr-4">
                        <img
                          src="/srm.jpg?height=50&width=50"
                          alt="School Logo"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">SRM University</h3>
                        <p className="text-gray-400 text-sm">2022 - 2026</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-300 mb-2">Bachelor of Science in Computer Science</p>
                      <div className="flex items-center mb-3">
                        <span className="px-3 py-1 bg-white text-black rounded-full text-sm font-semibold">9.23 CGPA</span>
                      </div>
                      <p className="text-gray-400 text-sm mb-3">
                        Pursuing B.Tech in Computer Science and Engineering with a strong interest in Artificial Intelligence, Machine Learning, and Full Stack Development. Actively working on projects and continuously exploring new technologies
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs">Csi Core Team Member</span>
                        <span className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs">
                          Contributed to Departmental Tech Events and Hackathons
                        </span>
                        <span className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs">
                          Enthusiastic Learner in AI/ML and Web Development
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div
            id="skills-header"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${isAnimated("skills-header") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Skills & Technologies</h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                id={`skill-${index}`}
                data-animate
                className={`backdrop-blur-md bg-white/5 p-6 rounded-2xl border border-white/10 transition-all duration-700 ${isAnimated(`skill-${index}`) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  } hover:border-white/20 hover:transform hover:scale-105 group`}
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-center mb-4">
                  <div
                    className="p-2 rounded-lg bg-black border border-white/20 mr-3"
                    style={{ borderColor: `${skill.color}40` }}
                  >
                    <skill.icon className="w-5 h-5" style={{ color: skill.color }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-white">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                  </div>
                </div>
                <div className="w-full bg-black border border-white/10 rounded-full h-2">
                  <div
                    className="h-2 rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse"
                    style={{
                      width: `${skill.level}%`,
                      backgroundColor: skill.color,
                      boxShadow: `0 0 10px ${skill.color}80`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div
            id="projects-header"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${isAnimated("projects-header") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Featured Projects</h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                id={`project-${index}`}
                data-animate
                className={`backdrop-blur-md bg-white/5 border-white/10 overflow-hidden transition-all duration-700 ${isAnimated(`project-${index}`) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  } hover:border-white/20 hover:transform hover:scale-105 group`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <h4 className="text-white font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">

                      </h4>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-black border border-white/20 text-gray-300 rounded-full text-xs transition-all duration-300 hover:border-white/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button
                        size="sm"
                        className="w-full bg-white text-black border border-gray-300 hover:bg-gray-100 hover:border-gray-500 group-hover:animate-pulse"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </a>

                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button
                        size="sm"
                        className="w-full bg-black hover:bg-gray-900 text-white border border-white/20 hover:border-white/40 group-hover:animate-pulse"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </Button>
                    </a>
                  </div>

                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div
            id="contact-header"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${isAnimated("contact-header") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Get In Touch</h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div
              id="contact-info"
              data-animate
              className={`space-y-8 transition-all duration-700 ${isAnimated("contact-info") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
            >
              <div className="backdrop-blur-md bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
                <h3 className="text-2xl font-bold mb-6 text-white">Let's Work Together</h3>
                <p className="text-gray-300 mb-6">
                  I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your
                  ideas to life.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center group">
                    <Mail className="w-5 h-5 text-gray-400 mr-3 group-hover:text-white transition-colors duration-300" />
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      ashish.jhajharia2106@gmail.com
                    </span>
                  </div>
                  <div className="flex items-center group">
                    <Phone className="w-5 h-5 text-gray-400 mr-3 group-hover:text-white transition-colors duration-300" />
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      +91 8290893008
                    </span>
                  </div>
                  <div className="flex items-center group">
                    <MapPin className="w-5 h-5 text-gray-400 mr-3 group-hover:text-white transition-colors duration-300" />
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      Jhunjhunu,Rajasthan
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="contact-form"
              data-animate
              className={`transition-all duration-700 ${isAnimated("contact-form") ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
            >
              <div className="backdrop-blur-md bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <form className="space-y-6">
                  <div className="overflow-hidden">
                    <Input
                      placeholder="Your Name"
                      className="bg-black border-white/20 text-white placeholder:text-gray-400 focus:border-white transition-all duration-300 hover:border-white/40"
                    />
                  </div>
                  <div className="overflow-hidden">
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className="bg-black border-white/20 text-white placeholder:text-gray-400 focus:border-white transition-all duration-300 hover:border-white/40"
                    />
                  </div>
                  <div className="overflow-hidden">
                    <Input
                      placeholder="Subject"
                      className="bg-black border-white/20 text-white placeholder:text-gray-400 focus:border-white transition-all duration-300 hover:border-white/40"
                    />
                  </div>
                  <div className="overflow-hidden">
                    <Textarea
                      placeholder="Your Message"
                      rows={5}
                      className="bg-black border-white/20 text-white placeholder:text-gray-400 focus:border-white transition-all duration-300 hover:border-white/40 resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-black hover:bg-gray-900 text-white py-3 transition-all duration-300 transform hover:scale-105 border border-white/20 hover:border-white/40"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-white">Ashish</h3>
              <p className="text-gray-400 mt-2">Full Stack Developer & UI/UX Designer</p>
            </div>

            <div className="flex space-x-6">
              <a
                href="https://github.com/ashish-2106" target="_blank"
                className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110 hover:rotate-6"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/ashish2106/" target="_blank"
                className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110 hover:rotate-6"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110 hover:rotate-6"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110 hover:rotate-6"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Ashish. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
