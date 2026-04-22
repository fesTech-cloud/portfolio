"use client";

import { useState, useEffect, type ReactNode } from "react";
import {
  User,
  Mail,
  Briefcase,
  GraduationCap,
  Zap,
  Rocket,
  Wrench,
  Download,
  ExternalLink,
  Package,
  Terminal,
  Wifi,
  Battery,
  ChevronRight,
} from "lucide-react";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
    </svg>
  );
}

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

type SectionId =
  | "about"
  | "experience"
  | "skills"
  | "projects"
  | "opensource"
  | "education"
  | "contact";

// ── Nav ───────────────────────────────────────────────────────────────────────
const NAV_GROUPS: {
  title: string;
  items: { id: SectionId; label: string; icon: ReactNode }[];
}[] = [
  {
    title: "PROFILE",
    items: [
      { id: "about",   label: "About",   icon: <User   size={14} /> },
      { id: "contact", label: "Contact", icon: <Mail   size={14} /> },
    ],
  },
  {
    title: "CAREER",
    items: [
      { id: "experience", label: "Experience", icon: <Briefcase     size={14} /> },
      { id: "education",  label: "Education",  icon: <GraduationCap size={14} /> },
    ],
  },
  {
    title: "EXPERTISE",
    items: [
      { id: "skills",     label: "Skills",       icon: <Zap    size={14} /> },
      { id: "projects",   label: "Projects",     icon: <Rocket size={14} /> },
      { id: "opensource", label: "Open Source",  icon: <Wrench size={14} /> },
    ],
  },
];

// ── Dock items ────────────────────────────────────────────────────────────────
const DOCK_ITEMS: { id: SectionId; icon: ReactNode; label: string }[] = [
  { id: "about",      icon: <User          size={18} />, label: "About"       },
  { id: "experience", icon: <Briefcase     size={18} />, label: "Experience"  },
  { id: "skills",     icon: <Zap           size={18} />, label: "Skills"      },
  { id: "projects",   icon: <Rocket        size={18} />, label: "Projects"    },
  { id: "opensource", icon: <Wrench        size={18} />, label: "Open Source" },
  { id: "education",  icon: <GraduationCap size={18} />, label: "Education"   },
  { id: "contact",    icon: <Mail          size={18} />, label: "Contact"     },
];

// ── Data ──────────────────────────────────────────────────────────────────────
const EXPERIENCE = [
  {
    role: "Full-Stack Developer",
    company: "Compulectro Info Tech",
    period: "May 2025 – Present",
    type: "Full-time",
    highlights: [
      "Architected a state-wide health insurance platform (Abshia) using Go and MSSQL, streamlining claims and enrollment for multiple stakeholders.",
      "Developed a proprietary face recognition system (Facer), reducing manual validation time by 60% through secure identity automation.",
      "Led system design across the product suite, eliminating operational bottlenecks and enhancing reliability.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Telkita Portal",
    period: "2025",
    type: "Contract",
    highlights: [
      "Built a comprehensive developer management platform from scratch, integrating real-time project tracking and onboarding.",
      "Boosted team efficiency by 40% through the implementation of real-time collaboration features.",
      "Engineered a modular architecture that accelerated feature rollout and reduced debugging time by 30%.",
    ],
  },
  {
    role: "Backend Developer (Golang)",
    company: "Longswipe",
    period: "2024",
    type: "Contract · Fintech",
    highlights: [
      "Developed core backend infrastructure for a voucher gifting platform, ensuring high-integrity transaction processing.",
      "Optimized high-volume APIs, significantly reducing failure rates under peak load.",
      "Integrated third-party payment gateways to facilitate seamless automated service delivery.",
    ],
  },
];

const SKILLS_DATA: Record<string, string[]> = {
  "Technical Excellence": [
    "Golang", "TypeScript", "React", "Next.js", "REST", "GraphQL",
    "WebSockets", "PostgreSQL", "MSSQL", "GORM", "Docker", "Vercel", "Git",
  ],
  "Strategic Planning": [
    "System Architecture", "Scalability Planning", "API Automation",
    "Webhooks", "Performance Optimization", "Product Thinking",
  ],
  "Execution & Delivery": [
    "TDD", "Code Refactoring", "Agile Methodologies",
    "Technical Documentation", "Stakeholder Alignment",
  ],
};

const PROJECTS = [
  {
    name: "Longswipe",
    desc: "Fintech platform for voucher gifting with high-integrity transaction processing and third-party payment gateway integrations.",
    tech: ["Go", "Stripe", "Paystack", "PostgreSQL"],
    url: "https://longswipe.com",
    gradient: "linear-gradient(135deg, rgba(10,132,255,0.14), rgba(100,210,255,0.08))",
    dot: "#0A84FF",
  },
  {
    name: "Abshia",
    desc: "State-wide health insurance platform streamlining claims and enrollment for multiple stakeholders across regions.",
    tech: ["Next.js", "TypeScript", "Go", "MySQL", "Tailwind"],
    url: "https://dev.abshia.net.ng",
    gradient: "linear-gradient(135deg, rgba(50,215,75,0.14), rgba(100,255,180,0.07))",
    dot: "#32D74B",
  },
  {
    name: "Telkita Portal",
    desc: "Comprehensive developer management platform with real-time project tracking, onboarding automation, and collaboration.",
    tech: ["Next.js", "Go", "PostgreSQL", "Redis", "TypeScript"],
    url: "https://portal.telktia.com",
    gradient: "linear-gradient(135deg, rgba(191,90,242,0.14), rgba(230,150,255,0.07))",
    dot: "#BF5AF2",
  },
  {
    name: "Zhoral Deals",
    desc: "Full-stack deals platform with real-time notifications, user authentication, and dynamic content management.",
    tech: ["Node.js", "MongoDB", "Next.js", "Firebase", "TypeScript"],
    url: "https://zhoradeals.com",
    gradient: "linear-gradient(135deg, rgba(255,159,10,0.14), rgba(255,210,100,0.07))",
    dot: "#FF9F0A",
  },
  {
    name: "Facer",
    desc: "Production-grade face recognition API — 128-dim embeddings, <50 ms latency, 99.9% uptime. Six endpoints covering match, verify, detect, enroll, search, and collections.",
    tech: ["Go", "pgvector", "PostgreSQL", "Next.js", "Vercel"],
    url: "https://facer-web.vercel.app",
    gradient: "linear-gradient(135deg, rgba(255,69,58,0.14), rgba(255,159,10,0.07))",
    dot: "#FF453A",
  },
];

// ── Menu Bar ──────────────────────────────────────────────────────────────────
function MenuBar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="frosted-menubar fixed top-0 left-0 right-0 z-50 flex items-center px-4 select-none"
      style={{
        height: 28,
        background: "rgba(18, 18, 22, 0.86)",
        borderBottom: "0.5px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="flex items-center gap-4">
        <span className="text-white text-sm font-bold">&#63743;</span>
        <span className="text-white text-xs font-semibold">Portfolio</span>
        {["File", "View", "Window", "Help"].map((m) => (
          <span key={m} className="text-xs cursor-default" style={{ color: "#8e8e93" }}>
            {m}
          </span>
        ))}
      </div>
      <div className="ml-auto flex items-center gap-3">
        <Wifi size={13} style={{ color: "#8e8e93" }} />
        <Battery size={13} style={{ color: "#8e8e93" }} />
        <span className="text-xs font-medium" style={{ color: "#f5f5f7" }}>{time}</span>
      </div>
    </div>
  );
}

// ── Section: About ────────────────────────────────────────────────────────────
function AboutSection({ setActive }: { setActive: (s: SectionId) => void }) {
  return (
    <div className="space-y-5 max-w-2xl">
      {/* Hero */}
      <div
        className="p-6 rounded-2xl flex items-start gap-5"
        style={{
          background: "linear-gradient(135deg, rgba(10,132,255,0.12) 0%, rgba(191,90,242,0.08) 100%)",
          border: "1px solid rgba(10,132,255,0.2)",
        }}
      >
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-bold text-white flex-shrink-0"
          style={{ background: "linear-gradient(135deg, #0A84FF 0%, #BF5AF2 100%)" }}
        >
          FO
        </div>
        <div className="flex-1 min-w-0">
          <h1 className="text-xl font-semibold text-white mb-0.5">Festus Ishioma Omorowa</h1>
          <p className="text-sm mb-4" style={{ color: "#86868b" }}>
            Full-Stack Developer · System Architect
          </p>
          <div className="flex flex-wrap gap-2">
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white transition-opacity hover:opacity-80"
              style={{ background: "#0A84FF" }}
            >
              <Download size={12} /> Download CV
            </a>
            <button
              onClick={() => setActive("projects")}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all hover:opacity-80"
              style={{
                background: "rgba(255,255,255,0.07)",
                color: "#f5f5f7",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <ChevronRight size={12} /> View Projects
            </button>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div
        className="p-5 rounded-xl"
        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
      >
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#48484a" }}>
          Executive Summary
        </p>
        <p className="text-sm leading-relaxed" style={{ color: "#aeaeb2" }}>
          Strategic Full-Stack Developer dedicated to engineering end-to-end web applications that
          solve complex business challenges. With deep expertise in{" "}
          <span className="text-white font-medium">Golang</span>,{" "}
          <span className="text-white font-medium">TypeScript</span>, and{" "}
          <span className="text-white font-medium">Next.js</span>, I bridge the gap between intuitive
          user interfaces and scalable, high-performance backend systems. I approach development with
          a rigorous emphasis on clean architecture and system design, helping organizations transform
          vision into reliable, production-ready technology.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { val: "3+",  label: "Years Active"    },
          { val: "10+", label: "Projects Shipped" },
          { val: "15+", label: "Technologies"    },
        ].map((s) => (
          <div
            key={s.label}
            className="p-4 rounded-xl text-center"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            <div className="text-2xl font-bold text-white mb-1">{s.val}</div>
            <div className="text-xs" style={{ color: "#48484a" }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Contact quick-links */}
      <div
        className="p-5 rounded-xl"
        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
      >
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#48484a" }}>
          Contact Info
        </p>
        <div className="space-y-2.5">
          {[
            { label: "Email",    value: "festechdev@gmail.com", href: "mailto:festechdev@gmail.com", icon: <Mail     size={12} /> },
            { label: "LinkedIn", value: "LinkedIn Profile",      href: "#",                           icon: <LinkedinIcon size={12} /> },
            { label: "GitHub",   value: "fesTech-cloud",         href: "https://github.com/fesTech-cloud", icon: <GithubIcon size={12} /> },
          ].map((c) => (
            <div key={c.label} className="flex items-center gap-3 text-sm">
              <span style={{ color: "#48484a", width: 56, fontSize: 11, flexShrink: 0 }}>{c.label}</span>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-1.5 transition-colors hover:text-white"
                style={{ color: "#0A84FF" }}
              >
                {c.icon} {c.value}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Section: Experience ───────────────────────────────────────────────────────
function ExperienceSection() {
  return (
    <div className="space-y-5 max-w-2xl">
      <div className="mb-2">
        <h2 className="text-xl font-semibold text-white mb-1">Professional Experience</h2>
        <p className="text-sm" style={{ color: "#48484a" }}>Career history and key achievements</p>
      </div>

      {EXPERIENCE.map((job, i) => (
        <div
          key={i}
          className="p-5 rounded-xl"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
        >
          <div className="flex items-start justify-between mb-4 gap-3">
            <div>
              <h3 className="text-base font-semibold text-white mb-0.5">{job.role}</h3>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm font-medium" style={{ color: "#0A84FF" }}>{job.company}</span>
                <span
                  className="text-xs px-2 py-0.5 rounded-full"
                  style={{ background: "rgba(255,255,255,0.06)", color: "#636366", border: "0.5px solid rgba(255,255,255,0.08)" }}
                >
                  {job.type}
                </span>
              </div>
            </div>
            <span
              className="flex-shrink-0 text-xs px-2.5 py-1 rounded-full"
              style={{ background: "rgba(255,255,255,0.06)", color: "#86868b", border: "0.5px solid rgba(255,255,255,0.08)" }}
            >
              {job.period}
            </span>
          </div>

          <ul className="space-y-2.5">
            {job.highlights.map((h, j) => (
              <li key={j} className="flex gap-3 text-sm" style={{ color: "#aeaeb2" }}>
                <span
                  className="flex-shrink-0 rounded-full mt-[7px]"
                  style={{ width: 5, height: 5, minWidth: 5, background: "rgba(10,132,255,0.8)" }}
                />
                <span className="leading-relaxed">{h}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

// ── Section: Skills ───────────────────────────────────────────────────────────
function SkillsSection() {
  return (
    <div className="space-y-5 max-w-2xl">
      <div className="mb-2">
        <h2 className="text-xl font-semibold text-white mb-1">Core Competencies</h2>
        <p className="text-sm" style={{ color: "#48484a" }}>Technologies and methodologies</p>
      </div>

      {Object.entries(SKILLS_DATA).map(([cat, skills]) => (
        <div
          key={cat}
          className="p-5 rounded-xl"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#48484a" }}>
            {cat}
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="skill-badge px-3 py-1.5 rounded-lg text-xs font-medium"
                style={{ color: "#aeaeb2" }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Section: Projects ─────────────────────────────────────────────────────────
function ProjectsSection() {
  return (
    <div className="max-w-2xl">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white mb-1">Featured Projects</h2>
        <p className="text-sm" style={{ color: "#48484a" }}>Selected work and case studies</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {PROJECTS.map((p) => (
          <div
            key={p.name}
            className="project-card p-5 rounded-xl"
            style={{ background: p.gradient, border: "1px solid rgba(255,255,255,0.07)" }}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <span
                  className="rounded-full flex-shrink-0"
                  style={{ width: 9, height: 9, minWidth: 9, background: p.dot, display: "inline-block" }}
                />
                <h3 className="text-base font-semibold text-white">{p.name}</h3>
              </div>
              {p.url && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs transition-colors hover:text-white"
                  style={{ color: "#86868b" }}
                >
                  <ExternalLink size={11} /> Live
                </a>
              )}
            </div>
            <p className="text-sm mb-4 leading-relaxed" style={{ color: "#aeaeb2" }}>{p.desc}</p>
            <div className="flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded-md text-xs font-medium"
                  style={{ background: "rgba(255,255,255,0.08)", color: "#86868b", border: "0.5px solid rgba(255,255,255,0.1)" }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Open Source data ──────────────────────────────────────────────────────────
const OPEN_SOURCE = [
  {
    name: "microkit",
    subtitle: "github.com/fesTech-cloud/microkit",
    npm: null,
    link: "https://github.com/fesTech-cloud/microkit",
    linkLabel: "View Repo",
    desc: "A lightweight, opinionated Go toolkit for building production-grade microservices. Reduces boilerplate by standardizing how services interact with messaging systems, network calls, and shared service utilities — including health checks and service discovery.",
    tags: ["Go", "Microservices", "Open Source"],
    accentColor: "#32D74B",
    bg: "linear-gradient(135deg, rgba(50,215,75,0.1), rgba(10,132,255,0.07))",
    border: "rgba(50,215,75,0.2)",
    tagBg: "rgba(50,215,75,0.12)",
    tagBorder: "rgba(50,215,75,0.25)",
  },
  {
    name: "facer-widget",
    subtitle: "npmjs.com/package/facer-widget",
    npm: "npm install facer-widget",
    link: "https://www.npmjs.com/package/facer-widget",
    linkLabel: "View on npm",
    desc: "Drop-in face recognition camera widget for the Facer API. Works as a plain HTML custom element or a React component — no framework required. Wraps the full Facer recognition pipeline in a single reusable tag.",
    tags: ["TypeScript", "React", "Web Components", "npm"],
    accentColor: "#FF453A",
    bg: "linear-gradient(135deg, rgba(255,69,58,0.1), rgba(255,159,10,0.07))",
    border: "rgba(255,69,58,0.2)",
    tagBg: "rgba(255,69,58,0.12)",
    tagBorder: "rgba(255,69,58,0.25)",
  },
];

// ── Section: Open Source ──────────────────────────────────────────────────────
function OpenSourceSection() {
  return (
    <div className="max-w-2xl">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white mb-1">Open Source &amp; Packages</h2>
        <p className="text-sm" style={{ color: "#48484a" }}>Published libraries and developer tools</p>
      </div>

      <div className="space-y-4">
        {OPEN_SOURCE.map((pkg) => (
          <div
            key={pkg.name}
            className="p-6 rounded-xl"
            style={{ background: pkg.bg, border: `1px solid ${pkg.border}` }}
          >
            <div className="flex items-start justify-between mb-3 gap-3">
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  {pkg.npm ? (
                    <Package size={16} style={{ color: pkg.accentColor }} />
                  ) : (
                    <span style={{ color: pkg.accentColor }}><GithubIcon size={16} /></span>
                  )}
                  <h3 className="text-base font-semibold text-white">{pkg.name}</h3>
                </div>
                <p className="text-xs" style={{ color: "#48484a" }}>{pkg.subtitle}</p>
              </div>
              <a
                href={pkg.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs transition-all hover:opacity-80"
                style={{ background: "rgba(255,255,255,0.08)", color: "#f5f5f7", border: "0.5px solid rgba(255,255,255,0.12)" }}
              >
                <ExternalLink size={11} /> {pkg.linkLabel}
              </a>
            </div>

            {pkg.npm && (
              <div
                className="flex items-center gap-2 px-3 py-2 rounded-lg mb-3 font-mono text-xs"
                style={{ background: "rgba(0,0,0,0.3)", border: "0.5px solid rgba(255,255,255,0.08)", color: "#aeaeb2" }}
              >
                <Terminal size={12} style={{ color: pkg.accentColor, flexShrink: 0 }} />
                {pkg.npm}
              </div>
            )}

            <p className="text-sm leading-relaxed mb-4" style={{ color: "#aeaeb2" }}>{pkg.desc}</p>

            <div className="flex flex-wrap gap-2">
              {pkg.tags.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded-md text-xs"
                  style={{ background: pkg.tagBg, color: pkg.accentColor, border: `0.5px solid ${pkg.tagBorder}` }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Section: Education ────────────────────────────────────────────────────────
function EducationSection() {
  return (
    <div className="max-w-2xl">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white mb-1">Education</h2>
        <p className="text-sm" style={{ color: "#48484a" }}>Academic background</p>
      </div>

      <div
        className="p-6 rounded-xl"
        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
      >
        <div className="flex items-start gap-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: "rgba(255,159,10,0.14)", border: "1px solid rgba(255,159,10,0.22)" }}
          >
            <GraduationCap size={22} style={{ color: "#FF9F0A" }} />
          </div>
          <div>
            <h3 className="text-base font-semibold text-white mb-0.5">
              Bachelor of Science, Political Science
            </h3>
            <p className="text-sm font-medium mb-3" style={{ color: "#FF9F0A" }}>
              Delta State University
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#aeaeb2" }}>
              Developed strong analytical, strategic thinking, and communication skills —
              competencies that directly inform my approach to system design, stakeholder
              alignment, and technical documentation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Section: Contact ──────────────────────────────────────────────────────────
function ContactSection() {
  return (
    <div className="max-w-2xl">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white mb-1">Get in Touch</h2>
        <p className="text-sm" style={{ color: "#48484a" }}>Open to opportunities and collaborations</p>
      </div>

      <div className="space-y-3">
        {[
          {
            icon: <Mail     size={16} />,
            label: "Email",
            value: "festechdev@gmail.com",
            href: "mailto:festechdev@gmail.com",
            color: "#0A84FF",
            bg: "rgba(10,132,255,0.1)",
            border: "rgba(10,132,255,0.2)",
          },
          {
            icon: <LinkedinIcon size={16} />,
            label: "LinkedIn",
            value: "Connect on LinkedIn",
            href: "#",
            color: "#0A84FF",
            bg: "rgba(10,132,255,0.1)",
            border: "rgba(10,132,255,0.2)",
          },
          {
            icon: <GithubIcon size={16} />,
            label: "GitHub",
            value: "fesTech-cloud",
            href: "https://github.com/fesTech-cloud",
            color: "#32D74B",
            bg: "rgba(50,215,75,0.1)",
            border: "rgba(50,215,75,0.2)",
          },
        ].map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="flex items-center gap-4 p-4 rounded-xl transition-all hover:opacity-80 group"
            style={{ background: c.bg, border: `1px solid ${c.border}` }}
          >
            <span style={{ color: c.color }}>{c.icon}</span>
            <div>
              <p className="text-xs mb-0.5" style={{ color: "#48484a" }}>{c.label}</p>
              <p className="text-sm font-medium text-white">{c.value}</p>
            </div>
            <span className="ml-auto opacity-0 group-hover:opacity-60 transition-opacity" style={{ color: "#636366" }}>
              <ExternalLink size={12} />
            </span>
          </a>
        ))}
      </div>

      <div
        className="mt-5 p-5 rounded-xl text-center"
        style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
      >
        <p className="text-sm" style={{ color: "#48484a" }}>
          Available for full-time roles, contract work, and open source collaboration.
        </p>
      </div>
    </div>
  );
}

// ── Dock ──────────────────────────────────────────────────────────────────────
function Dock({ active, setActive }: { active: SectionId; setActive: (s: SectionId) => void }) {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="dock-container flex items-end gap-2 px-4 py-2 rounded-2xl">
        {DOCK_ITEMS.map((item) => (
          <div key={item.id} className="dock-item" onClick={() => setActive(item.id)}>
            <div
              className="dock-tooltip px-2 py-1 rounded-lg text-xs text-white"
              style={{
                background: "rgba(44,44,46,0.96)",
                border: "0.5px solid rgba(255,255,255,0.14)",
                boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
              }}
            >
              {item.label}
            </div>
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer"
              style={{
                background: active === item.id ? "rgba(10,132,255,0.24)" : "rgba(255,255,255,0.08)",
                border: active === item.id ? "0.5px solid rgba(10,132,255,0.4)" : "0.5px solid rgba(255,255,255,0.12)",
                color: active === item.id ? "#0A84FF" : "#8e8e93",
              }}
            >
              {item.icon}
            </div>
            {active === item.id && (
              <div
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 rounded-full"
                style={{ width: 4, height: 4, background: "#0A84FF" }}
              />
            )}
          </div>
        ))}

        <div className="w-px mx-1 self-stretch" style={{ background: "rgba(255,255,255,0.14)" }} />

        <div className="dock-item">
          <div
            className="dock-tooltip px-2 py-1 rounded-lg text-xs text-white"
            style={{
              background: "rgba(44,44,46,0.96)",
              border: "0.5px solid rgba(255,255,255,0.14)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
            }}
          >
            Download CV
          </div>
          <a
            href="/resume.pdf"
            download
            className="w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer"
            style={{
              background: "rgba(10,132,255,0.16)",
              border: "0.5px solid rgba(10,132,255,0.32)",
              color: "#0A84FF",
            }}
          >
            <Download size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}

// ── Lock Screen ───────────────────────────────────────────────────────────────
function LockScreen({ onUnlock }: { onUnlock: () => void }) {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [unlocking, setUnlocking] = useState(false);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false }));
      setDate(now.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" }));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const handleClick = () => {
    setUnlocking(true);
    setTimeout(onUnlock, 450);
  };

  return (
    <div
      className={`desktop-bg h-screen w-screen flex flex-col items-center justify-center gap-5 select-none cursor-pointer${unlocking ? " lock-unlock" : ""}`}
      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", sans-serif' }}
      onClick={handleClick}
    >
      {/* Time */}
      <div
        className="text-white text-center font-thin tabular-nums"
        style={{ fontSize: 96, lineHeight: 1, letterSpacing: "-3px" }}
      >
        {time}
      </div>

      {/* Date */}
      <p className="text-lg font-light" style={{ color: "rgba(255,255,255,0.75)" }}>
        {date}
      </p>

      {/* Avatar + name */}
      <div className="flex flex-col items-center gap-3 mt-3">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-semibold text-white"
          style={{
            background: "linear-gradient(135deg, #0A84FF 0%, #BF5AF2 100%)",
            boxShadow: "0 0 0 3px rgba(255,255,255,0.15)",
          }}
        >
          FO
        </div>
        <span className="text-white text-sm font-medium">Festus Omorowa</span>
      </div>

      {/* Hint */}
      {!unlocking && (
        <p className="text-xs mt-2" style={{ color: "rgba(255,255,255,0.35)" }}>
          Click anywhere to unlock
        </p>
      )}
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function Home() {
  const [locked, setLocked] = useState(true);
  const [active, setActive] = useState<SectionId>("about");

  const SECTIONS: Record<SectionId, ReactNode> = {
    about:      <AboutSection setActive={setActive} />,
    experience: <ExperienceSection />,
    skills:     <SkillsSection />,
    projects:   <ProjectsSection />,
    opensource: <OpenSourceSection />,
    education:  <EducationSection />,
    contact:    <ContactSection />,
  };

  if (locked) return <LockScreen onUnlock={() => setLocked(false)} />;

  return (
    <div
      className="desktop-bg h-screen w-screen overflow-hidden flex flex-col relative"
      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif' }}
    >
      <MenuBar />

      <div
        className="flex items-center justify-center"
        style={{ flex: 1, paddingTop: 28, paddingBottom: 96 }}
      >
        <div
          className="mac-shadow frosted flex flex-col rounded-xl overflow-hidden"
          style={{
            width: "min(1100px, 94vw)",
            height: "calc(100vh - 28px - 96px - 20px)",
            minHeight: 400,
            background: "rgba(26, 26, 28, 0.9)",
            border: "0.5px solid rgba(255,255,255,0.1)",
          }}
        >
          {/* Title bar */}
          <div
            className="flex items-center px-4 flex-shrink-0 relative"
            style={{
              height: 40,
              background: "rgba(38, 38, 40, 0.92)",
              borderBottom: "0.5px solid rgba(255,255,255,0.07)",
            }}
          >
            <div className="flex items-center gap-2 group">
              {[
                { cls: "tl-red",    sym: "✕" },
                { cls: "tl-yellow", sym: "−" },
                { cls: "tl-green",  sym: "+" },
              ].map(({ cls, sym }) => (
                <button
                  key={cls}
                  className={`${cls} w-3 h-3 rounded-full flex items-center justify-center`}
                  style={{ border: "none", cursor: "default" }}
                >
                  <span
                    className="text-[7px] font-bold leading-none opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: "rgba(0,0,0,0.55)" }}
                  >
                    {sym}
                  </span>
                </button>
              ))}
            </div>

            <span
              className="absolute left-1/2 -translate-x-1/2 text-xs font-medium select-none"
              style={{ color: "#636366" }}
            >
              Festus Omorowa — Portfolio
            </span>
          </div>

          {/* Body */}
          <div className="flex flex-1 overflow-hidden">
            {/* Sidebar */}
            <div
              className="flex-shrink-0 py-3 overflow-y-auto"
              style={{
                width: 192,
                background: "rgba(30, 30, 32, 0.7)",
                borderRight: "0.5px solid rgba(255,255,255,0.07)",
              }}
            >
              {NAV_GROUPS.map((group) => (
                <div key={group.title} className="mb-4">
                  <p
                    className="px-4 mb-1 text-xs font-semibold select-none"
                    style={{ color: "#3a3a3c", letterSpacing: "0.07em" }}
                  >
                    {group.title}
                  </p>
                  {group.items.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActive(item.id)}
                      className={`nav-item ${active === item.id ? "active" : ""} flex items-center gap-2.5 py-2 px-3 rounded-lg`}
                      style={{ width: "calc(100% - 8px)", marginLeft: 4 }}
                    >
                      <span
                        style={{
                          color: active === item.id ? "#0A84FF" : "#636366",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {item.icon}
                      </span>
                      <span
                        className="text-sm"
                        style={{
                          color: active === item.id ? "#f5f5f7" : "#aeaeb2",
                          fontWeight: active === item.id ? 500 : 400,
                        }}
                      >
                        {item.label}
                      </span>
                    </button>
                  ))}
                </div>
              ))}
            </div>

            {/* Content */}
            <div
              className="flex-1 overflow-y-auto p-7"
              style={{ background: "rgba(26, 26, 28, 0.4)" }}
            >
              {SECTIONS[active]}
            </div>
          </div>
        </div>
      </div>

      <Dock active={active} setActive={setActive} />
    </div>
  );
}
