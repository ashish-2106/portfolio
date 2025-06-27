"use client"

import { useState, useEffect, useRef } from "react"
import { Dancing_Script } from "next/font/google"
import emailjs from '@emailjs/browser'

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
  Instagram,
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
  InstagramIcon,
  Settings,
  Boxes,
} from "lucide-react"
import toast from "react-hot-toast"


export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [animatedElements, setAnimatedElements] = useState<string[]>([])
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const observerRef = useRef<IntersectionObserver | null>(null)

  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_tsmx689",         // Replace with your actual service ID
        "template_jx8zbc9",        // Replace with your template ID
        formRef.current,
        "SeHoyFspTzAq2B6Zr"        // Replace with your public key
      )
      .then(
        () => {

          toast.success("Message sent successfully!");
          formRef.current?.reset();
        },
        (error) => {
          toast.error("Failed to send message. Please try again.");
          console.error("EmailJS Error:", error);
        }
      );
  };


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
    { name: "Docker", level: 80, icon: Layers, color: "#2496ED" },
    { name: "Git", level: 90, icon: GitBranch, color: "#F05032" },
    { name: "Tailwind CSS", level: 93, icon: Palette, color: "#06B6D4" },
    { name: "GraphQL", level: 72, icon: Zap, color: "#E10098" },
    { name: "React Native", level: 68, icon: Smartphone, color: "#61DAFB" },
    { name: "Vue.js", level: 65, icon: Layout, color: "#4FC08D" },
    { name: "Express.js", level: 85, icon: Server, color: "#ffffff" },
    { name: "Redux", level: 80, icon: Cpu, color: "#764ABC" },
    { name: "Figma", level: 75, icon: Palette, color: "#F24E1E" },
    { name: "Jenkins", level: 78, icon: Settings, color: "#D24939" },
    { name: "Terraform", level: 74, icon: Boxes, color: "#623CE4" },
    { name: "Kubernetes", level: 82, icon: Cloud, color: "#326CE5" },

  ]

  const projects = [
    {
      title: "AI-Powered Short Video Generator",
      description:
        "A full-stack AI-powered video generation platform built with Next.js, React, Tailwind CSS, and Convex. Users can input scripts or ideas to generate short videos automatically. Includes authentication, dashboard, video history, and credit-based usage system.",
      image: "/videogen.png",
      tech: ["Next.js", "React", "Tailwind CSS", "Convex", "Inngest", "Gemini", "AIGurulab"],
      github: "https://github.com/ashish-2106/Short-Video-Generator.git",
      live: "/coming-soon",
    },
    {
      title: "Derma Vision: AI Chatbot (Voice & Vision)",
      description:
        "An AI-powered dermatology assistant that uses the Meta LLaMA 4 Scout 17B model to analyze skin images and support intelligent voice interaction. Built with Gradio, Firebase, and SQLite, it includes user authentication, history of all queries, and the ability to generate and send diagnostic reports to doctors.",
      image: "/dermavision.png",
      tech: ["Python", "Gradio", "Whisper AI", "gTTS", "SQLite", "Firebase", "LLaMA 4 Scout 17B"],
      github: "https://github.com/ashish-2106/Derma-Vision-Ai-Medical-chatbot-voice-vision.git",
      live: "/coming-soon",


    },
    {
      title: "Password Manager",
      description:
        "A user-friendly password manager built with Next.js, Clerk, Tailwind CSS, and ShadCN UI. Features include secure password storage, generation, cloud syncing via Clerk, biometric authentication, and encrypted vault sharing. Provides real-time breach alerts and an intuitive, responsive UI for seamless password management.",
      image: "/passmanager.png",
      tech: ["Next.js", "Clerk", "Tailwind CSS", "ShadCN UI", "Encryption"],
      github: "https://github.com/ashish-2106/Password-Manager.git",
      live: "/coming-soon",

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
              className="text-4xl font-bold  bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text tracking-wide drop-shadow-lg"
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
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden perspective-1000">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

        {/* 3D floating circles container */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="floating-circle"
              style={{
                top: `${20 + i * 12}%`,
                left: `${10 + i * 15}%`,
                width: `${80 + i * 40}px`,
                height: `${80 + i * 40}px`,
                animationDelay: `${i * 1.5}s`,
                animationDuration: `${15 + i * 5}s`,
                animationTimingFunction: 'ease-in-out',
              }}
            />
          ))}
        </div>

        <div
          className={`text-center z-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white animate-pulse relative inline-block">
            Ashish
            <span className="absolute inset-0 rounded-lg filter blur-xl opacity-30 bg-white animate-glow"></span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-300 opacity-0 animate-fade-slide-up animation-delay-300">
            Full Stack Developer & AI/ML Enthusiast
          </p>

          <p className="text-lg mb-12 text-gray-400 max-w-2xl mx-auto opacity-0 animate-fade-slide-up animation-delay-600">
            Crafting digital experiences with modern technologies and creative design
          </p>

          <div className="flex gap-4 justify-center opacity-0 animate-fade-slide-up animation-delay-900">
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-black hover:bg-gray-900 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 border border-white/20 hover:border-white/40 animate-pulse-on-hover"
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="bg-white text-black hover:bg-gray-100 hover:scale-105 hover:shadow-lg px-8 py-3 rounded-full transition-all duration-300 animate-pulse-on-hover"
            >
              Get In Touch
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-smooth">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>

        <style jsx>{`
    .floating-circle {
      position: absolute;
      border-radius: 50%;
      background: radial-gradient(circle at center, rgba(255 255 255 / 0.15), transparent 70%);
      box-shadow:
        0 4px 8px rgba(255 255 255 / 0.1),
        inset 0 0 20px rgba(255 255 255 / 0.2);
      transform-style: preserve-3d;
      animation-name: floatRotate;
      animation-iteration-count: infinite;
      animation-direction: alternate;
    }

    @keyframes floatRotate {
      0% {
        transform: translateZ(0) rotateX(0deg) rotateY(0deg) translateY(0);
        opacity: 0.6;
      }
      50% {
        transform: translateZ(40px) rotateX(180deg) rotateY(180deg) translateY(-20px);
        opacity: 0.9;
      }
      100% {
        transform: translateZ(0) rotateX(360deg) rotateY(360deg) translateY(0);
        opacity: 0.6;
      }
    }

    @keyframes glow {
      0%, 100% {
        opacity: 0.3;
        transform: scale(1);
      }
      50% {
        opacity: 0.6;
        transform: scale(1.1);
      }
    }

    @keyframes fadeSlideUp {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes bounceSmooth {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-15%);
      }
    }

    .animate-glow {
      animation: glow 3s ease-in-out infinite;
      z-index: -1;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }

    .animate-fade-slide-up {
      animation: fadeSlideUp 0.8s forwards;
    }

    .animation-delay-300 {
      animation-delay: 0.3s;
    }
    .animation-delay-600 {
      animation-delay: 0.6s;
    }
    .animation-delay-900 {
      animation-delay: 0.9s;
    }

    .animate-pulse-on-hover:hover {
      animation: pulse 1.5s infinite;
    }

    .animate-bounce-smooth {
      animation: bounceSmooth 2s infinite;
      will-change: transform;
    }

    /* Perspective for 3D effect */
    section#home {
      perspective: 1000px;
      -webkit-perspective: 1000px;
    }
  `}</style>
      </section>



      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>

            <div className="mt-4 w-24 h-1 bg-white mx-auto rounded-full"></div>
          </div>

          {/* Info Cards */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* Who I Am */}
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-md hover:border-white/20 transition duration-300">
              <h3 className="text-2xl font-semibold mb-3">Who I Am</h3>
              <p className="text-gray-300 text-base leading-relaxed">
                I'm Ashish — a full stack developer and AI/ML enthusiast dedicated to building performant, intelligent web applications. I specialize in React, Nextjs, Tailwind, Node.js, and designing scalable backend APIs, combined with applying machine learning models to solve real-world problems.        </p>
            </div>

            {/* Beyond Code */}
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-md hover:border-white/20 transition duration-300">
              <h3 className="text-2xl font-semibold mb-3">Beyond Code</h3>
              <p className="text-gray-300 text-base leading-relaxed">
                I’m passionate about open-source contributions,When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.        </p>
            </div>
          </div>
          {/* Code Style Box with blinking cursor that stays visible and moves with the text */}
          <div className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:border-white/20 transition duration-300">
            <style>
              {`
      @keyframes typewriterWithCursor {
        0% { clip-path: inset(0 100% 0 0); }
        50% { clip-path: inset(0 0% 0 0); }
        70% { clip-path: inset(0 0% 0 0); }
        100% { clip-path: inset(0 100% 0 0); }
      }

      @keyframes blinkCursor {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
      }

      .typewriter-wrapper {
        position: relative;
        min-height: 180px;
      }

      .typewriter-text {
        display: inline-block;
        white-space: pre-wrap;
        animation: typewriterWithCursor 6s steps(60) infinite;
        overflow: hidden;
        vertical-align: top;
      }

      .typewriter-cursor {
        position: absolute;
        top: 16px; /* Adjust to align with text top */
        left: auto;
        right: 1.5rem; /* Matches .p-6 padding */
        width: 2px;
        height: calc(100% - 32px); /* same as pre padding */
        background-color: white;
        animation: blinkCursor 1s step-end infinite;
      }
    `}
            </style>

            <div className="typewriter-wrapper relative">
              <pre className="text-sm sm:text-base font-mono text-gray-100 whitespace-pre-wrap leading-relaxed m-0">
                <code className="typewriter-text">
                  {`const about = {
  name: "Ashish",
  role: "Full Stack Developer & AI/ML Enthusiast",
  techStack: ["React", "Tailwind", "Node.js", "C++", "Python", "DevOps"],
  focus:"Building scalable web apps and intelligent AI solutions with clean, maintainable code"
};`}
                </code>
              </pre>
              
            </div>
          </div>







          {/* Download CV Button */}
          <div className="text-center mt-10">
            <a
              href="/Ashish-Resume.pdf"
              download
              className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-full shadow-md hover:bg-gray-200 transition duration-300"
            >
              Download CV
            </a>
          </div>

        </div>

        {/* Animation Styles */}
        <style jsx>{`
    .animate-typewriter {
      border-right: 2px solid rgba(255, 255, 255, 0.5);
      width: 0;
      animation: typing 3s steps(40, end) forwards, blink 0.7s step-end infinite;
    }

    @keyframes typing {
      from {
        width: 0;
      }
      to {
        width: 100%;
      }
    }

    @keyframes blink {
      50% {
        border-color: rgba(255, 255, 255, 0.5);
      }
      from,
      to {
        border-color: transparent;
      }
    }
  `}</style>
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

                    {project.live && (
                      <a
                        href={project.live}
                        target={project.live.startsWith("http") ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button
                          size="sm"
                          className="w-full bg-black hover:bg-gray-900 text-white border border-white/20 hover:border-white/40 group-hover:animate-pulse"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live
                        </Button>
                      </a>
                    )}

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
                <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                  <div className="overflow-hidden">
                    <Input
                      name="from_name"
                      placeholder="Your Name"
                      required
                      className="bg-black border-white/20 text-white placeholder:text-gray-400 focus:border-white transition-all duration-300 hover:border-white/40"
                    />
                  </div>
                  <div className="overflow-hidden">
                    <Input
                      type="email"
                      name="from_email"
                      placeholder="Your Email"
                      required
                      className="bg-black border-white/20 text-white placeholder:text-gray-400 focus:border-white transition-all duration-300 hover:border-white/40"
                    />
                  </div>
                  <div className="overflow-hidden">
                    <Input
                      name="subject"
                      placeholder="Subject"
                      required
                      className="bg-black border-white/20 text-white placeholder:text-gray-400 focus:border-white transition-all duration-300 hover:border-white/40"
                    />
                  </div>
                  <div className="overflow-hidden">
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      rows={5}
                      required
                      className="bg-black border-white/20 text-white placeholder:text-gray-400 focus:border-white transition-all duration-300 hover:border-white/40 resize-none"
                    />
                  </div>

                  {/* Hidden time field */}
                  <input type="hidden" name="time" value={new Date().toLocaleString()} />

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
              <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text tracking-wide drop-shadow-lg"
                style={{ fontFamily: "'Dancing Script', cursive" }}>Ashish</h3>
              <p className="text-gray-400 mt-2">Full Stack Developer & AI/ML Enthusiast</p>
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
                href="https://x.com/AshishJ02790846?s=09" target="_blank"
                className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110 hover:rotate-6"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/ashish_jhajharia__?igsh=MTM0cmFtb3hic3ZzZw==" target="_blank"
                className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110 hover:rotate-6"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="mailto:ashish.jhajharia2106@gmail.com"
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
