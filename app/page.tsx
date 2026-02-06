"use client";

import { useEffect, useState } from "react";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
}

const projects = [
  {
    title: "Fintech Platform",
    description:
      "Secure and scalable fintech platform for seamless payments and financial management",
    tech: ["GO", "Stripe", "Paystack", "PostgreSQL"],
    link: "https://longswipe.com/",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    title: "Abshia Heath Insurance",
    description:
      "Comprehensive health insurance platform with claims processing and policy management",
    tech: ["Nextjs", "TypeScript", "Tailwind", "Go", "MSQL"],
    link: "https://longswipe.com/",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Telktia Client Portal",
    description:
      "Telktia Client Portal for managing communication services and Team collaboration",
    tech: ["Next.js", "Go", "PostgreSQL", "Redis", "Tailwind", "TypeScript"],
    link: "https://portal.telktia.com/auth/access-portal",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    title: "Zhoral Deals",
    description:
      "Zhoral Deals is a dynamic e-commerce platform offering exclusive discounts and seamless shopping experience",
    tech: [
      "Node.js",
      "MongoDB",
      "Nextjs",
      "Tailwind",
      "TypeScript",
      "Firebase",
    ],
    link: "https://zhoradeals.com/",
    gradient: "from-emerald-500 to-teal-500",
  },
];

const openSource = [
  {
    name: "Microkit",
    description:
      " A Go toolkit that reduces microservice boilerplate by standardizing how services interact with infrastructure such as messaging systems, network calls, and shared service utilities. ",
    // stars: "1.2k",
    link: "https://github.com/fesTech-cloud/microkit",
    language: "Go",
    color: "from-blue-500 to-blue-600",
  },
];

const skills = [
  { name: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind"] },
  { name: "Backend", items: ["Node.js", "Go", "PostgreSQL", "MongoDB"] },
  { name: "DevOps", items: ["Docker", "AWS", "CI/CD", "Kubernetes"] },
];

export default function Home() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [showSparkles, setShowSparkles] = useState(true);

  const textArray = [
    "Hi, I'm Festus",
    "I'm a Full-stack Developer",
    "I Build Amazing Web Application",
    "I Build A scalable Api",
    "I Love Open Source",
  ];

  useEffect(() => {
    const newSparkles: Sparkle[] = [];
    for (let i = 0; i < 50; i++) {
      newSparkles.push({
        id: i,
        x: Math.random() * 100,
        y: -10,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 2 + 2,
      });
    }
    setSparkles(newSparkles);
    setTimeout(() => setShowSparkles(false), 4000);
  }, []);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % textArray.length;
      const fullText = textArray[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1),
      );
      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-950 to-purple-950"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent"></div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      ></div>

      {showSparkles && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {sparkles.map((sparkle) => (
            <div
              key={sparkle.id}
              className="absolute rounded-full bg-gradient-to-b from-blue-400 to-purple-600"
              style={{
                left: `${sparkle.x}%`,
                top: `${sparkle.y}%`,
                width: `${sparkle.size}px`,
                height: `${sparkle.size * 3}px`,
                animation: `rainDrop ${sparkle.duration}s linear forwards`,
                animationDelay: `${Math.random() * 0.5}s`,
              }}
            />
          ))}
        </div>
      )}

      <main className="relative max-w-7xl mx-auto px-6 py-20">
        <section className="mb-40 text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="relative">
            <div className="inline-flex items-center gap-2 mb-8 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white text-sm font-semibold shadow-2xl backdrop-blur-sm border border-white/20">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Available for work
            </div>
            <h1 className="text-6xl font-black mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight animate-gradient bg-[length:200%_auto] min-h-[160px] flex items-center justify-center">
              {text}
              <span className="animate-pulse">|</span>
            </h1>
            <p className="text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12">
              Full-stack developer crafting exceptional digital experiences with
              modern technologies and creative solutions.
            </p>
            <div className="flex gap-6 justify-center">
              <a
                href="#projects"
                className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-bold shadow-2xl hover:shadow-blue-500/50 hover:scale-110 transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="#contact"
                className="px-10 py-5 bg-white/10 backdrop-blur-md text-white rounded-2xl font-bold shadow-2xl hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-white/20"
              >
                Contact Me
              </a>
            </div>
          </div>
        </section>

        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-black mb-4 text-white">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="group p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:-rotate-1"
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  {skill.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, j) => (
                    <span
                      key={j}
                      className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full text-sm font-medium text-slate-200 border border-white/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-black mb-4 text-white">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-slate-400 text-lg mt-6">
              Showcasing my best work
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project, i) => (
              <a
                key={i}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-white/30 transition-all duration-700 hover:scale-105 hover:-rotate-1"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-700`}
                ></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`px-4 py-2 bg-gradient-to-r ${project.gradient} rounded-full text-white text-sm font-bold shadow-lg`}
                    >
                      Featured
                    </div>
                  </div>
                  <h3 className="text-3xl font-black mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 mb-8 leading-relaxed text-lg">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tech.map((t, j) => (
                      <span
                        key={j}
                        className="px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold text-slate-200 border border-white/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-blue-400 font-bold text-lg group-hover:gap-3 transition-all duration-300">
                    View Project{" "}
                    <span className="group-hover:translate-x-2 transition-transform duration-300 text-2xl">
                      →
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section>
          <div className="text-center mb-16">
            <h2 className="text-6xl font-black mb-4 text-white">Open Source</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-slate-400 text-lg mt-6">
              Contributing to the developer community
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {openSource.map((repo, i) => (
              <a
                key={i}
                href={repo.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-110 hover:rotate-1 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative">
                  <div className="flex items-start justify-between mb-6"></div>
                  <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {repo.name}
                  </h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {repo.description}
                  </p>
                  <span
                    className={`inline-block px-4 py-2 bg-gradient-to-r ${repo.color} text-white rounded-full text-xs font-bold shadow-lg`}
                  >
                    {repo.language}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
