import React from "react";
import {
  ArrowUpRight,
  Eye,
  Mail,
  Layers3,
  Zap,
  Activity,
  RefreshCcw,
} from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturedProjects() {
  const smallProjects = [
    {
      title: "ConvertX",
      description:
        "High-speed offline-capable file conversion platform utilizing WebAssembly for browser-based processing.",
      tags: ["React", "WebAssembly", "FFMPEG"],
      stat: "500k+ files converted",
      link: "Visit Site",
      icon: RefreshCcw,
      color: "text-emerald-400",
    },
    {
      title: "Nexus Tools",
      description:
        "A suite of micro-SaaS AI tools including text-to-speech, image background removal, and smart summarization.",
      tags: ["Next.js", "Stripe", "Replicate API"],
      stat: "$2.4k MRR",
      link: "Visit Site",
      icon: Layers3,
      color: "text-violet-400",
    },
    {
      title: "PingPulse",
      description:
        "Global uptime monitoring service preventing server cold starts and providing real-time latency analytics.",
      tags: ["Go", "Vue.js", "Timescaledb"],
      stat: "99.99% accuracy",
      link: "View Repo",
      icon: Activity,
      color: "text-yellow-400",
    },
  ];

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-black py-32 text-white"
    >
      {/* ======================================= */}
      {/* BACKGROUND */}
      {/* ======================================= */}

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-600/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        {/* ======================================= */}
        {/* HEADER */}
        {/* ======================================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          {/* Top Label */}
          <div className="inline-flex items-center gap-3 mb-8">
            <Layers3
              size={18}
              className="text-cyan-400"
            />

            <span className="uppercase tracking-[0.25em] text-sm text-cyan-400">
              Production_Showcase
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-5xl md:text-7xl font-black leading-tight tracking-tight mb-8">
            Featured{" "}
            <span className="text-violet-400">
              Projects
            </span>
          </h2>

          {/* Description */}
          <p className="max-w-3xl mx-auto text-zinc-400 text-xl leading-relaxed">
            A curated selection of high-performance SaaS
            applications, AI integrations, and specialized
            developer tools built from zero to scale.
          </p>
        </motion.div>

        {/* ======================================= */}
        {/* TOP GRID */}
        {/* ======================================= */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          {/* ======================================= */}
          {/* AUTOTAP LARGE CARD */}
          {/* ======================================= */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-8 rounded-[36px] border border-violet-500/20 bg-white/[0.03] backdrop-blur-2xl overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
              {/* LEFT CONTENT */}
              <div className="p-10 flex flex-col justify-between border-r border-white/5">
                <div>
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl border border-violet-500/20 bg-violet-500/10 flex items-center justify-center mb-10">
                    <Zap
                      size={30}
                      className="text-violet-400"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-5xl font-black mb-6">
                    AutoTap
                  </h3>

                  {/* Desc */}
                  <p className="text-zinc-400 text-lg leading-relaxed mb-10">
                    Intelligent workflow automation engine
                    leveraging LLMs to execute multi-step
                    browser interactions seamlessly.
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-3 mb-10">
                    {[
                      "Next.js",
                      "Puppeteer",
                      "OpenAI",
                    ].map((tag, index) => (
                      <div
                        key={index}
                        className="px-4 py-2 rounded-xl border border-white/10 bg-black/40 text-sm text-zinc-300"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <p className="uppercase tracking-[0.2em] text-xs text-zinc-500 mb-3">
                        Tasks Executed
                      </p>

                      <h4 className="text-4xl font-black">
                        1.2M+
                      </h4>
                    </div>

                    <div>
                      <p className="uppercase tracking-[0.2em] text-xs text-zinc-500 mb-3">
                        Time Saved
                      </p>

                      <h4 className="text-4xl font-black text-cyan-400">
                        8.5k hrs
                      </h4>
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-4 mt-12">
                  <motion.button
                    whileHover={{
                      scale: 1.03,
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
                    className="flex-1 py-5 rounded-2xl bg-white text-black font-bold text-lg flex items-center justify-center gap-3"
                  >
                    Live Demo
                    <ArrowUpRight size={20} />
                  </motion.button>

                  <motion.button
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="w-16 h-16 rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-center"
                  >
                    <Mail size={22} />
                  </motion.button>
                </div>
              </div>

              {/* RIGHT VISUAL */}
              <div className="relative min-h-[500px] bg-gradient-to-br from-violet-500/[0.03] to-transparent p-10 flex items-center justify-center">
                {/* Dashboard Window */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                  }}
                  className="w-full max-w-[520px] rounded-3xl border border-white/10 bg-black/70 backdrop-blur-2xl overflow-hidden shadow-[0_0_60px_rgba(139,92,246,0.15)]"
                >
                  {/* Top */}
                  <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-white/[0.03]">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>

                    <p className="text-zinc-500 text-sm">
                      app.autotap.ai/dashboard
                    </p>
                  </div>

                  {/* UI */}
                  <div className="flex">
                    {/* Sidebar */}
                    <div className="w-20 border-r border-white/5 p-5 space-y-6">
                      {[1, 2, 3].map((item) => (
                        <div
                          key={item}
                          className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10"
                        />
                      ))}
                    </div>

                    {/* Main */}
                    <div className="flex-1 p-6">
                      {/* Top Cards */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {[1, 2, 3].map((item) => (
                          <div
                            key={item}
                            className={`h-24 rounded-2xl border border-white/10 ${
                              item === 2
                                ? "bg-violet-500/10"
                                : "bg-white/[0.03]"
                            }`}
                          />
                        ))}
                      </div>

                      {/* Main Content */}
                      <div className="h-64 rounded-3xl border border-white/10 bg-white/[0.03]" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* ======================================= */}
          {/* DEVLENS */}
          {/* ======================================= */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-4 rounded-[36px] border border-cyan-500/20 bg-white/[0.03] backdrop-blur-2xl p-8"
          >
            {/* Top */}
            <div className="flex items-center justify-between mb-10">
              <div className="w-14 h-14 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 flex items-center justify-center">
                <Eye
                  size={28}
                  className="text-cyan-400"
                />
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center">
                  <Mail size={18} />
                </div>

                <div className="w-10 h-10 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-4xl font-black mb-5">
              DevLens
            </h3>

            {/* Desc */}
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              AI-powered code review assistant that catches
              bugs and suggests architectural improvements
              before PRs are merged.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-10">
              {[
                "Python",
                "FastAPI",
                "Claude 3",
              ].map((tag, index) => (
                <div
                  key={index}
                  className={`px-4 py-2 rounded-xl border text-sm ${
                    tag === "Claude 3"
                      ? "border-cyan-500/20 bg-cyan-500/10 text-cyan-400"
                      : "border-white/10 bg-black/40 text-zinc-300"
                  }`}
                >
                  {tag}
                </div>
              ))}
            </div>

            {/* Code Block */}
            <div className="rounded-3xl border border-white/10 bg-black/50 overflow-hidden">
              <div className="p-5 font-mono text-sm">
                <p className="text-zinc-500 mb-2">
                  def process_data(items):
                </p>

                <p className="text-zinc-600 mb-2">
                  results = []
                </p>

                <p className="text-zinc-600 mb-5">
                  for i in items:
                </p>

                <div className="space-y-3">
                  <div className="h-5 rounded bg-red-500/20 border border-red-500/20" />

                  <div className="h-5 rounded bg-emerald-500/20 border border-emerald-500/20" />

                  <div className="px-4 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs">
                    N+1 Query detected. Bulk query is 40x
                    faster.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ======================================= */}
        {/* BOTTOM GRID */}
        {/* ======================================= */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {smallProjects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                }}
                key={index}
                className="group rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8 hover:border-violet-500/20 transition-all duration-500"
              >
                {/* Top */}
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-3xl font-black">
                    {project.title}
                  </h3>

                  <div
                    className={`w-12 h-12 rounded-2xl border border-white/10 bg-black/40 flex items-center justify-center`}
                  >
                    <Icon
                      size={22}
                      className={project.color}
                    />
                  </div>
                </div>

                {/* Desc */}
                <p className="text-zinc-400 leading-relaxed text-lg mb-8">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 mb-16">
                  {project.tags.map((tag, tagIndex) => (
                    <div
                      key={tagIndex}
                      className={`px-3 py-2 rounded-lg text-xs uppercase tracking-[0.1em] ${
                        tag === "WebAssembly"
                          ? "bg-emerald-500/10 text-emerald-400"
                          : tag === "Replicate API"
                          ? "bg-violet-500/10 text-violet-400"
                          : tag === "Timescaledb"
                          ? "bg-yellow-500/10 text-yellow-400"
                          : "bg-white/[0.03] text-zinc-300"
                      }`}
                    >
                      {tag}
                    </div>
                  ))}
                </div>

                {/* Bottom */}
                <div className="flex items-center justify-between pt-8 border-t border-white/10">
                  <p className="text-lg font-bold text-zinc-200">
                    {project.stat}
                  </p>

                  <button
                    className={`flex items-center gap-2 text-sm font-semibold ${project.color}`}
                  >
                    {project.link}
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}