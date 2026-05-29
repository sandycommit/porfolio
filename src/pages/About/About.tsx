import React from "react";
import {
  Cpu,
  Database,
  Cloud,
  Code2,
  Layers3,
  Workflow,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const focusAreas = [
    {
      icon: Cpu,
      title: "AI Tools",
      desc: "LLM wrappers & intelligent systems",
      color: "text-violet-400",
    },
    {
      icon: Layers3,
      title: "SaaS Platforms",
      desc: "Multi-tenant architectures",
      color: "text-cyan-400",
    },
    {
      icon: Sparkles,
      title: "Chrome Extensions",
      desc: "Productivity enhancers",
      color: "text-emerald-400",
    },
    {
      icon: Workflow,
      title: "Automation",
      desc: "Workflow optimization",
      color: "text-yellow-400",
    },
  ];

  const technologies = [
    "TypeScript",
    "React / Next.js",
    "Node.js",
    "Python",
    "PostgreSQL",
    "Redis",
    "Docker",
    "AWS / GCP",
    "Tailwind CSS",
    "GraphQL",
    "OpenAI API",
  ];

  const experiences = [
    {
      year: "FEB 2025 — AUG 2025",
      role: "Software Developer Intern",
      company: "Emayam Technologies Pvt. Ltd.",
      location: "Velachery, Chennai",
      type: "Internship Phase",
      desc: "Worked on scalable frontend systems, internal dashboards, modern UI components, and product-focused engineering workflows while collaborating with senior developers and production teams.",
      color: "border-cyan-400",
      glow: "shadow-[0_0_40px_rgba(6,182,212,0.15)]",
    },

    {
      year: "AUG 2025 — JUL 2026",
      role: "Software Developer",
      company: "Emayam Technologies Pvt. Ltd.",
      location: "Velachery, Chennai",
      type: "Permanent Employee",
      desc: "Promoted to full-time developer role after internship. Contributed to scalable web applications, frontend architecture, reusable component systems, optimization workflows, and production-grade feature delivery.",
      color: "border-violet-500",
      glow: "shadow-[0_0_40px_rgba(139,92,246,0.15)]",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-black py-20 sm:py-24 lg:py-32 text-white"
    >
      {/* ================================= */}
      {/* BACKGROUND */}
      {/* ================================= */}

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-600/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px]" />

      <div className=" relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* ================================= */}
        {/* SECTION HEADER */}
        {/* ================================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <Code2 className="text-violet-400" size={18} />

            <p className="uppercase tracking-[0.25em] text-sm text-violet-400">
              System_About_Me
            </p>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1] mb-6">
            Architecting Digital{" "}
            <span className="text-cyan-400">Realities</span>
          </h2>

          <p className=" max-w-3xl mx-auto text-zinc-400 text-base sm:text-lg lg:text-xl leading-relaxed">
            I don&apos;t just write code. I build scalable products, automation
            systems, and intelligent tools that solve real-world problems.
          </p>
        </motion.div>

        {/* ================================= */}
        {/* TOP GRID */}
        {/* ================================= */}

        <div className=" grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-8 mb-8">
          {/* ================================= */}
          {/* LEFT CARD */}
          {/* ================================= */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="xl:col-span-7 rounded-2xl sm:rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-6 sm:p-8"
          >
            {/* Profile */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-10">
              <div className="relative">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-violet-500 to-cyan-500 p-[2px]">
                  <div className="w-full h-full rounded-3xl bg-black flex items-center justify-center text-3xl font-black">
                    SK
                  </div>
                </div>

                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-400 border-4 border-black" />
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-black mb-3">
                  The Builder Mindset
                </h3>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20">
                  <div className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />

                  <span className="text-xs uppercase tracking-[0.2em] text-violet-300">
                    Shipping Continuously
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-zinc-400 leading-relaxed text-base sm:text-lg mb-10 sm:mb-14">
              My passion lies at the intersection of design, engineering, and
              business. I approach every project not just as a developer, but as
              a product builder focused on delivering exceptional user
              experiences and scalable technology.
            </p>

            {/* Divider */}
            <div className="h-px bg-white/10 mb-10" />

            {/* Features */}
            <div className="space-y-5">
              {[
                "Scalable Architecture",
                "User-Centric Design",
                "Rapid Iteration",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <CheckCircle2 size={20} className="text-cyan-400" />

                  <span className="text-zinc-300 text-lg">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ================================= */}
          {/* CENTER CONTENT */}
          {/* ================================= */}

          <div className="xl:col-span-5 flex flex-col gap-6 sm:gap-8">
            {/* CURRENT FOCUS */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <Cpu className="text-cyan-400" size={22} />

                  <h3 className="text-3xl font-black">Current Focus</h3>
                </div>

                <span className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                  Modules_Active
                </span>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {focusAreas.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      whileHover={{
                        y: -6,
                        scale: 1.02,
                      }}
                      key={index}
                      className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 hover:border-violet-500/20 transition-all duration-300"
                    >
                      <div
                        className={`w-14 h-14 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center mb-5`}
                      >
                        <Icon size={28} className={item.color} />
                      </div>

                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>

                      <p className="text-zinc-500">{item.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>

        {/* TECHNOLOGIES */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8 my-5 sm:my-10"
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-8">
              <Database size={22} className="text-violet-400" />

              <h3 className="text-3xl font-black">Technologies Mastered</h3>
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  whileHover={{
                    scale: 1.05,
                  }}
                  key={index}
                  className="px-5 py-3 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />

                  <span className="text-zinc-200 font-medium">{tech}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        {/* ================================= */}
        {/* EXPERIENCE */}
        {/* ================================= */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="rounded-2xl sm:rounded-[36px] b border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-6 sm:p-8 lg:p-10"
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-14">
            <Cloud size={24} className="text-cyan-400" />

            <h3 className="text-3xl sm:text-4xl font-black">
              System Log // Experience
            </h3>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 sm:left-6 top-0 w-[2px] h-full bg-white/10" />

            <div className="space-y-10">
              {experiences.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="relative pl-14 sm:pl-20"
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-0 top-2 w-8 h-8 sm:w-12 sm:h-12 rounded-2xl border ${item.color} bg-black flex items-center justify-center ${item.glow}`}
                  >
                    <div className="w-3 h-3 rounded-full bg-white" />
                  </div>

                  {/* Card */}
                  <div className="rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl p-6 sm:p-8">
                    {/* Top */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                      <div>
                        <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-zinc-500 mb-3">
                          {item.year}
                        </p>

                        <h4 className="text-2xl sm:text-3xl font-black mb-3">
                          {item.role}
                        </h4>

                        <p className="text-cyan-400 text-lg font-medium mb-2">
                          {item.company}
                        </p>

                        <p className="text-zinc-500">{item.location}</p>
                      </div>

                      {/* Type Badge */}
                      <div className="inline-flex items-center gap-3 px-4 py-3 rounded-2xl border border-white/10 bg-white/[0.03]">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />

                        <span className="text-sm uppercase tracking-[0.15em] text-zinc-300">
                          {item.type}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-zinc-400 leading-relaxed text-base sm:text-lg">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
