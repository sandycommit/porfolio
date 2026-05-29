import React from "react";
import {
  ArrowUpRight,
  BookOpen,
  Clock3,
  Sparkles,
  Cpu,
  Code2,
  Layers3,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Blog() {
  const blogs = [
    {
      title:
        "Building Production-Grade AI SaaS Platforms with React & FastAPI",
      description:
        "A deep dive into scalable AI architectures, authentication systems, vector databases, and deployment workflows for modern SaaS products.",
      category: "AI Engineering",
      readTime: "8 min read",
      date: "May 2026",
      icon: Sparkles,
      color: "violet",
      tags: [
        "FastAPI",
        "OpenAI",
        "PostgreSQL",
      ],
    },
    {
      title:
        "How I Built a Chrome Extension Ecosystem Generating Revenue",
      description:
        "From productivity automation to browser workflow optimization — learn how developer-focused extensions can scale into profitable products.",
      category: "Chrome Extensions",
      readTime: "6 min read",
      date: "April 2026",
      icon: Layers3,
      color: "cyan",
      tags: [
        "Chrome API",
        "React",
        "Automation",
      ],
    },
    {
      title:
        "Modern Full Stack Architecture for High-Performance Applications",
      description:
        "A blueprint for architecting scalable applications using React, microservices, Redis caching, CI/CD pipelines, and cloud infrastructure.",
      category: "System Design",
      readTime: "10 min read",
      date: "March 2026",
      icon: Cpu,
      color: "emerald",
      tags: [
        "Docker",
        "AWS",
        "Redis",
      ],
    },
  ];

  const getColors = (color) => {
    switch (color) {
      case "cyan":
        return {
          border: "border-cyan-500/20",
          glow: "shadow-[0_0_60px_rgba(6,182,212,0.12)]",
          text: "text-cyan-400",
          bg: "bg-cyan-500/10",
        };

      case "emerald":
        return {
          border: "border-emerald-500/20",
          glow: "shadow-[0_0_60px_rgba(16,185,129,0.12)]",
          text: "text-emerald-400",
          bg: "bg-emerald-500/10",
        };

      default:
        return {
          border: "border-violet-500/20",
          glow: "shadow-[0_0_60px_rgba(139,92,246,0.12)]",
          text: "text-violet-400",
          bg: "bg-violet-500/10",
        };
    }
  };

  return (
    <section
      id="blog"
      className="relative overflow-hidden bg-black py-32 text-white"
    >
      {/* ==================================== */}
      {/* BACKGROUND */}
      {/* ==================================== */}

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-600/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        {/* ==================================== */}
        {/* HEADER */}
        {/* ==================================== */}

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
            duration: 0.6,
          }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          {/* Label */}
          <div className="inline-flex items-center gap-3 mb-8">
            <BookOpen
              size={18}
              className="text-cyan-400"
            />

            <span className="uppercase tracking-[0.25em] text-sm text-cyan-400">
              Knowledge_Base.Articles
            </span>
          </div>

          {/* Title */}
          <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-tight mb-8">
            Engineering{" "}
            <span className="text-violet-400">
              Insights
            </span>
          </h2>

          {/* Description */}
          <p className="max-w-3xl mx-auto text-zinc-400 text-xl leading-relaxed">
            Sharing product engineering experiences,
            scalable architecture strategies, AI systems,
            automation workflows, and modern development
            practices.
          </p>
        </motion.div>

        {/* ==================================== */}
        {/* BLOG GRID */}
        {/* ==================================== */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => {
            const colors = getColors(blog.color);
            const Icon = blog.icon;

            return (
              <motion.article
                key={index}
                initial={{
                  opacity: 0,
                  y: 50,
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
                  y: -10,
                }}
                className={`group relative rounded-[36px] border ${colors.border} bg-white/[0.03] backdrop-blur-2xl overflow-hidden ${colors.glow}`}
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent" />

                {/* ==================================== */}
                {/* IMAGE/PREVIEW */}
                {/* ==================================== */}

                <div className="relative h-64 border-b border-white/10 overflow-hidden">
                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-zinc-900" />

                  {/* Grid */}
                  <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />

                  {/* Glow */}
                  <div
                    className={`absolute inset-0 ${colors.bg} blur-[120px] opacity-30`}
                  />

                  {/* Floating Icon */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                    }}
                    className={`absolute top-10 left-10 w-20 h-20 rounded-3xl border border-white/10 ${colors.bg} flex items-center justify-center`}
                  >
                    <Icon
                      size={38}
                      className={colors.text}
                    />
                  </motion.div>

                  {/* Fake Code Blocks */}
                  <div className="absolute bottom-8 left-8 right-8 space-y-4">
                    <div className="h-5 rounded-lg bg-white/10 w-[70%]" />

                    <div className="h-5 rounded-lg bg-white/5 w-[90%]" />

                    <div className="h-5 rounded-lg bg-white/10 w-[55%]" />
                  </div>
                </div>

                {/* ==================================== */}
                {/* CONTENT */}
                {/* ==================================== */}

                <div className="relative p-8">
                  {/* Top Meta */}
                  <div className="flex items-center justify-between mb-6">
                    {/* Category */}
                    <div
                      className={`px-4 py-2 rounded-xl border border-white/10 ${colors.bg} text-xs uppercase tracking-[0.2em] ${colors.text}`}
                    >
                      {blog.category}
                    </div>

                    {/* Date */}
                    <div className="flex items-center gap-2 text-zinc-500 text-sm">
                      <Clock3 size={14} />
                      {blog.date}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-black leading-tight mb-6 group-hover:text-violet-300 transition-all duration-300">
                    {blog.title}
                  </h3>

                  {/* Desc */}
                  <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                    {blog.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-3 mb-10">
                    {blog.tags.map((tag, tagIndex) => (
                      <div
                        key={tagIndex}
                        className="px-4 py-2 rounded-xl border border-white/10 bg-black/40 text-sm text-zinc-300"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-6 border-t border-white/10">
                    {/* Read Time */}
                    <div className="flex items-center gap-3">
                      <Code2
                        size={18}
                        className="text-zinc-500"
                      />

                      <span className="text-zinc-400">
                        {blog.readTime}
                      </span>
                    </div>

                    {/* Button */}
                    <motion.button
                      whileHover={{
                        scale: 1.05,
                      }}
                      whileTap={{
                        scale: 0.95,
                      }}
                      className={`flex items-center gap-3 px-5 py-3 rounded-2xl border border-white/10 bg-black/40 ${colors.text}`}
                    >
                      Read Article
                      <ArrowUpRight size={18} />
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* ==================================== */}
        {/* BOTTOM CTA */}
        {/* ==================================== */}

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
            delay: 0.2,
          }}
          viewport={{ once: true }}
          className="mt-20 rounded-[36px] border border-violet-500/20 bg-gradient-to-r from-violet-500/[0.05] to-cyan-500/[0.03] backdrop-blur-2xl p-10 text-center"
        >
          {/* Title */}
          <h3 className="text-4xl md:text-5xl font-black mb-6">
            Explore More{" "}
            <span className="text-violet-400">
              Technical Insights
            </span>
          </h3>

          {/* Desc */}
          <p className="max-w-2xl mx-auto text-zinc-400 text-lg leading-relaxed mb-10">
            Discover deep dives into scalable architectures,
            AI ecosystems, developer tooling, automation
            systems, and modern product engineering.
          </p>

          {/* Button */}
          <motion.a
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.96,
            }}
            href="#"
            className="inline-flex items-center gap-3 px-8 py-5 rounded-2xl bg-gradient-to-r from-violet-500 to-purple-600 text-white font-bold text-lg shadow-[0_0_40px_rgba(139,92,246,0.3)]"
          >
            View All Articles
            <ArrowUpRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}