import React from "react";
import { ArrowUpRight, Layers3 } from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturedProjects() {
  const featuredProjects = [
    {
      title: "Focult",
      description:
        "Employee Productivity & Task Management Platform featuring Employee, Admin, and Super Admin Dashboards with analytics, payment integration, live chat, and multi-role authentication.",
      tags: [
        "React.js",
        "JavaScript",
        "Tailwind CSS",
        "Django",
        "REST API",
        "PostgreSQL",
      ],
      achievement:
        "Delivered key business features including multi-role authentication, analytics dashboards, payment processing, and live chat integration.",
      live: false,
      company: true,
      link: "#",
    },

    {
      title: "Nxtlif",
      description:
        "Real Estate Management Platform with Admin Dashboard, Customer Dashboard, reusable components, API integrations, backend services, and deployment workflows.",
      tags: [
        "React.js",
        "JavaScript",
        "Tailwind CSS",
        "Python",
        "Django",
        "REST API",
      ],
      achievement:
        "Successfully developed core dashboard modules, reusable UI components, and API integrations for a production-ready real-estate platform.",
      live: false,
      company: true,
      link: "#",
    },

    {
      title: "EalyEdge",
      description:
        "Modern E-Learning Platform supporting course management, authentication, authorization, video uploads, and content delivery for students and instructors.",
      tags: [
        "Next.js",
        "Tailwind CSS",
        "Django",
        "REST API",
        "Authentication",
        "Authorization",
      ],
      achievement:
        "Delivered secure course delivery workflows with role-based access management and video content handling capabilities.",
      live: false,
      company: true,
      link: "#",
    },

    {
      title: "Chrome Extension Suite",
      description:
        "Collection of productivity-focused Chrome Extensions including DevLens, Color Picker, Auto Clicker, and File Converter Hub.",
      tags: [
        "React.js",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "Chrome API",
      ],
      achievement:
        "Built and launched multiple Chrome Extensions focused on productivity, automation, and developer efficiency.",
      live: false,
      company: false,
      link: "#",
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
            <Layers3 size={18} className="text-cyan-400" />

            <span className="uppercase tracking-[0.25em] text-sm text-cyan-400">
              Production_Showcase
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-5xl md:text-7xl font-black leading-tight tracking-tight mb-8">
            <span className="text-violet-400">Projects</span>
          </h2>

          {/* Description */}
          <p className="max-w-3xl mx-auto text-zinc-400 text-xl leading-relaxed">
            Professional projects and products showcasing my experience in
            frontend development, full-stack engineering, API integrations, SaaS
            platforms, and browser extension development.
          </p>
        </motion.div>

        {/* ======================================= */}
        {/* TOP GRID */}
        {/* ======================================= */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8 hover:border-violet-500/20 transition-all duration-500"
            >
              <h3 className="text-4xl font-black mb-5">{project.title}</h3>

              <p className="text-zinc-400 leading-relaxed text-lg mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <div
                    key={tagIndex}
                    className="px-3 py-2 rounded-lg text-xs uppercase tracking-[0.1em] bg-white/[0.03] text-zinc-300 border border-white/10"
                  >
                    {tag}
                  </div>
                ))}
              </div>

              <div className="mb-6 p-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/5">
                <p className="text-sm text-emerald-400 leading-relaxed">
                  🏆 {project.achievement}
                </p>
              </div>

              {project.live ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-violet-400 hover:text-violet-300"
                >
                  View Project
                  <ArrowUpRight size={16} />
                </a>
              ) : (
                <span className="flex items-center gap-2 text-sm font-semibold text-yellow-400">
                  {project.company
                    ? "Private Project • Demo Available Upon Request"
                    : "Currently in Development"}
                  {/* <ArrowUpRight size={16} /> */}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
