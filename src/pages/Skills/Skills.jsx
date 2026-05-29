"use client";

import React from "react";
import {
  Braces,
  Database,
  Server,
  CodeXml,
  Cloud,
  Cpu,
  Sparkles,
  Workflow,
} from "lucide-react";

import { motion } from "framer-motion";

export default function Skills() {
  const frontendSkills = [
    {
      name: "React / Next.js",
      level: "95%",
      width: "95%",
      color: "from-cyan-400 to-cyan-500",
    },
    {
      name: "TypeScript",
      level: "80%",
      width: "80%",
      color: "from-blue-400 to-blue-500",
    },
    {
      name: "TailwindCSS",
      level: "98%",
      width: "98%",
      color: "from-cyan-300 to-cyan-500",
    },
    {
      name: "Framer Motion",
      level: "85%",
      width: "85%",
      color: "from-violet-400 to-purple-500",
    },
  ];

  const backendSkills = [
    {
      name: "Node.js / Express",
      level: "85%",
      width: "85%",
      color: "from-emerald-400 to-green-500",
    },
    {
      name: "Python / FastAPI",
      level: "75%",
      width: "75%",
      color: "from-violet-400 to-purple-500",
    },
    {
      name: "Django",
      level: "75%",
      width: "75%",
      color: "from-emerald-400 to-green-500",
    },
  ];

  const databases = [
    {
      name: "PostgreSQL",
      type: "Relational",
      icon: Database,
      color: "text-blue-400",
    },
    {
      name: "Redis",
      type: "Cache / Queue",
      icon: Database,
      color: "text-red-400",
    },
  ];

  const aiTools = [
    {
      title: "OpenAI API",
      icon: Sparkles,
      color: "text-violet-400",
    },

    {
      title: "LangChain",
      icon: Workflow,
      color: "text-cyan-400",
    },

    {
      title: "Vector DB",
      icon: Database,
      color: "text-emerald-400",
    },
  ];

  return (
    <section
      id="skills"
      className="
      relative
      overflow-hidden
      bg-black
      py-20
      sm:py-24
      lg:py-32
      text-white
      "
    >
      {/* ================================================= */}
      {/* BACKGROUND */}
      {/* ================================================= */}

      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="absolute top-0 left-0 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-violet-600/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-cyan-500/10 blur-[120px]" />

      {/* ================================================= */}
      {/* CONTAINER */}
      {/* ================================================= */}

      <div
        className="
        relative
        max-w-7xl
        mx-auto
        px-4
        sm:px-6
        lg:px-10
        "
      >
        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

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
          className="text-center mb-16 sm:mb-20 lg:mb-24"
        >
          {/* TOP */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 mb-8 border-b border-white/10 pb-5">
            <div className="flex items-center gap-3">
              <Cpu
                size={18}
                className="text-cyan-400"
              />

              <span className="uppercase tracking-[0.2em] sm:tracking-[0.25em] text-xs sm:text-sm text-cyan-400">
                System_Capabilities
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />

              <span className="text-xs sm:text-sm text-zinc-400">
                All systems operational
              </span>
            </div>
          </div>

          {/* TITLE */}
          <h2
            className="
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            font-black
            leading-[1]
            tracking-tight
            mb-6
            "
          >
            Advanced Developer{" "}
            <span className="text-violet-400">
              Command
            </span>{" "}
            <span className="text-purple-500">
              Center
            </span>
          </h2>

          {/* DESC */}
          <p
            className="
            max-w-3xl
            mx-auto
            text-zinc-400
            text-base
            sm:text-lg
            lg:text-xl
            leading-relaxed
            "
          >
            A comprehensive visualization of technical
            proficiencies, specialized frameworks,
            infrastructure tooling, and AI-native
            development systems.
          </p>
        </motion.div>

        {/* ================================================= */}
        {/* GRID */}
        {/* ================================================= */}

        <div
          className="
          grid
          grid-cols-1
          xl:grid-cols-12
          gap-6
          lg:gap-8
          "
        >
          {/* ================================================= */}
          {/* LEFT */}
          {/* ================================================= */}

          <div
            className="
            xl:col-span-4
            flex
            flex-col
            gap-6
            lg:gap-8
            "
          >
            {/* FRONTEND */}
            <motion.div
              initial={{
                opacity: 0,
                x: -40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              viewport={{ once: true }}
              className="
              rounded-2xl
              sm:rounded-[32px]
              border
              border-cyan-500/20
              bg-white/[0.03]
              backdrop-blur-2xl
              p-5
              sm:p-6
              lg:p-8
              "
            >
              {/* HEADER */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 mb-8">
                <div className="flex items-center gap-3">
                  <Braces
                    className="text-cyan-400"
                    size={22}
                  />

                  <h3 className="text-2xl sm:text-3xl font-black leading-tight">
                    Frontend Architecture
                  </h3>
                </div>

                <span className="w-fit px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-xs uppercase tracking-[0.2em] text-cyan-400">
                  UI/UX
                </span>
              </div>

              {/* SKILLS */}
              <div className="space-y-7">
                {frontendSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between gap-4 mb-3">
                      <p className="text-sm sm:text-base lg:text-lg text-zinc-200">
                        {skill.name}
                      </p>

                      <span className="text-sm text-zinc-500">
                        {skill.level}
                      </span>
                    </div>

                    <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{
                          width: 0,
                        }}
                        whileInView={{
                          width: skill.width,
                        }}
                        transition={{
                          duration: 1,
                          delay: index * 0.1,
                        }}
                        viewport={{ once: true }}
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* BACKEND */}
            <motion.div
              initial={{
                opacity: 0,
                x: -40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              viewport={{ once: true }}
              className="
              rounded-2xl
              sm:rounded-[32px]
              border
              border-violet-500/20
              bg-white/[0.03]
              backdrop-blur-2xl
              p-5
              sm:p-6
              lg:p-8
              "
            >
              {/* HEADER */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 mb-8">
                <div className="flex items-center gap-3">
                  <Server
                    className="text-violet-400"
                    size={22}
                  />

                  <h3 className="text-2xl sm:text-3xl font-black leading-tight">
                    Backend Systems
                  </h3>
                </div>

                <span className="w-fit px-3 py-1 rounded-lg bg-violet-500/10 border border-violet-500/20 text-xs uppercase tracking-[0.2em] text-violet-400">
                  API
                </span>
              </div>

              {/* SKILLS */}
              <div className="space-y-7">
                {backendSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between gap-4 mb-3">
                      <p className="text-sm sm:text-base lg:text-lg text-zinc-200">
                        {skill.name}
                      </p>

                      <span className="text-sm text-zinc-500">
                        {skill.level}
                      </span>
                    </div>

                    <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{
                          width: 0,
                        }}
                        whileInView={{
                          width: skill.width,
                        }}
                        transition={{
                          duration: 1,
                          delay: index * 0.1,
                        }}
                        viewport={{ once: true }}
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ================================================= */}
          {/* CENTER */}
          {/* ================================================= */}

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
            }}
            viewport={{ once: true }}
            className="
            xl:col-span-5
            rounded-2xl
            sm:rounded-[36px]
            border
            border-violet-500/20
            bg-white/[0.03]
            backdrop-blur-2xl
            p-5
            sm:p-6
            lg:p-8
            "
          >
            {/* HEADER */}
            <div className="flex items-start sm:items-center justify-between gap-5 mb-10">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Sparkles
                    className="text-violet-400"
                    size={24}
                  />

                  <h3 className="text-3xl sm:text-4xl font-black">
                    AI Systems
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-zinc-500">
                  LLM Integration & Agentic Workflows
                </p>
              </div>

              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border border-violet-500/20 bg-violet-500/10 flex items-center justify-center shrink-0">
                <Cpu
                  className="text-violet-400"
                  size={26}
                />
              </div>
            </div>

            {/* AI TOOLS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {aiTools.map((tool, index) => {
                const Icon = tool.icon;

                return (
                  <motion.div
                    whileHover={{
                      y: -6,
                      scale: 1.02,
                    }}
                    key={index}
                    className="
                    group
                    rounded-3xl
                    border
                    border-white/10
                    bg-black/40
                    p-6
                    flex
                    flex-col
                    items-center
                    justify-center
                    text-center
                    hover:border-violet-500/20
                    transition-all
                    duration-300
                    "
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-white/10 flex items-center justify-center mb-5 bg-white/[0.03]">
                      <Icon
                        size={28}
                        className={tool.color}
                      />
                    </div>

                    <p className="font-semibold text-zinc-200 text-sm sm:text-base">
                      {tool.title}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* BIG VISUAL */}
            <div className="rounded-3xl border border-white/10 bg-black/40 p-5 sm:p-8 overflow-hidden">
              <div className="grid grid-cols-3 gap-3 sm:gap-5 items-center">
                <div className="aspect-square rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-center">
                  <CodeXml className="text-cyan-400 w-6 h-6 sm:w-8 sm:h-8" />
                </div>

                <div className="h-[2px] bg-gradient-to-r from-cyan-500 to-violet-500" />

                <div className="aspect-square rounded-full border border-violet-500/30 bg-violet-500/10 flex items-center justify-center">
                  <Sparkles className="text-violet-400 w-6 h-6 sm:w-8 sm:h-8" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* ================================================= */}
          {/* RIGHT */}
          {/* ================================================= */}

          <div
            className="
            xl:col-span-3
            flex
            flex-col
            gap-6
            lg:gap-8
            "
          >
            {/* DATABASE */}
            <motion.div
              initial={{
                opacity: 0,
                x: 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              viewport={{ once: true }}
              className="
              rounded-2xl
              sm:rounded-[32px]
              border
              border-emerald-500/20
              bg-white/[0.03]
              backdrop-blur-2xl
              p-5
              sm:p-6
              lg:p-8
              "
            >
              {/* HEADER */}
              <div className="flex items-center gap-3 mb-8">
                <Database
                  className="text-emerald-400"
                  size={24}
                />

                <h3 className="text-2xl sm:text-3xl font-black">
                  Data Layer
                </h3>
              </div>

              {/* DB */}
              <div className="space-y-5">
                {databases.map((db, index) => {
                  const Icon = db.icon;

                  return (
                    <motion.div
                      whileHover={{
                        scale: 1.02,
                      }}
                      key={index}
                      className="
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      p-4
                      sm:p-5
                      flex
                      flex-col
                      sm:items-center
                      sm:justify-between
                      gap-4
                      "
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center shrink-0">
                          <Icon
                            size={22}
                            className={db.color}
                          />
                        </div>

                        <div>
                          <h4 className="text-base sm:text-lg font-bold">
                            {db.name}
                          </h4>
                        </div>
                      </div>

                      <span className="text-sm text-zinc-500">
                        {db.type}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* CLOUD */}
            <motion.div
              initial={{
                opacity: 0,
                x: 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              viewport={{ once: true }}
              className="
              rounded-2xl
              sm:rounded-[32px]
              border
              border-yellow-500/20
              bg-white/[0.03]
              backdrop-blur-2xl
              p-5
              sm:p-6
              lg:p-8
              "
            >
              {/* HEADER */}
              <div className="flex items-center gap-3 mb-8">
                <Cloud
                  className="text-yellow-400"
                  size={24}
                />

                <h3 className="text-2xl sm:text-3xl font-black">
                  Cloud & CI/CD
                </h3>
              </div>

              {/* PIPELINE */}
              <div className="rounded-3xl border border-white/10 bg-black/40 p-5 sm:p-6 mb-8 overflow-hidden">
                <div className="flex items-center justify-between gap-2">
                  {/* ICON */}
                  <div className="w-12 h-12 rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-center shrink-0">
                    <CodeXml className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  {/* LINE */}
                  <div className="flex-1 border-t border-dashed border-violet-500" />

                  {/* ICON */}
                  <div className="w-12 h-12 rounded-full border border-cyan-500/30 bg-cyan-500/10 flex items-center justify-center shrink-0">
                    <Cloud className="text-cyan-400 w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  {/* LINE */}
                  <div className="flex-1 border-t border-dashed border-violet-500" />

                  {/* ICON */}
                  <div className="w-12 h-12 rounded-2xl border border-violet-500/30 bg-violet-500/10 flex items-center justify-center shrink-0">
                    <Workflow className="text-violet-400 w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                </div>
              </div>

              {/* TAGS */}
              <div className="flex flex-wrap gap-3">
                {[
                  "Docker",
                  "Vercel",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 rounded-xl border border-white/10 bg-white/[0.03] text-sm text-zinc-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}