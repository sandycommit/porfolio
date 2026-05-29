"use client";

import React from "react";

import {
  GraduationCap,
  Briefcase,
  Rocket,
  Boxes,
  BrainCircuit,
  ArrowRight,
  Code2,
  Server,
} from "lucide-react";

import { motion } from "framer-motion";

export default function Timeline() {
  const timelineData = [
    {
      year: "2020 — 2024",

      title:
        "Bachelor of Engineering — Computer Science",

      subtitle:
        "SKP Engineering College, Tiruvannamalai",

      description:
        "Started the engineering journey in Computer Science Engineering (CSE). Built strong foundations in programming, software development, databases, networking, and modern web technologies.",

      technologies: [
        "CSE",
        "Programming",
        "Web Development",
        "Databases",
      ],

      icon: GraduationCap,

      color: "cyan",
    },

    {
      year: "2024",

      title:
        "Frontend Development Internship",

      subtitle:
        "Pumo Technovation Institute — Vadapalani, Chennai",

      description:
        "Completed intensive frontend-focused training and practical internship experience. Learned modern frontend engineering workflows, responsive UI systems, reusable components, animations, API integration, and scalable React architecture.",

      technologies: [
        "React",
        "JavaScript",
        "TailwindCSS",
        "API Integration",
      ],

      icon: Rocket,

      color: "emerald",
    },

    {
      year: "FEB 2025 — AUG 2025",

      title:
        "Software Developer Intern",

      subtitle:
        "Emayam Technologies Pvt. Ltd. — Velachery, Chennai",

      description:
        "Joined Emayam Technologies as a frontend intern and worked on real-world scalable products. Learned reusable component architecture, frontend optimization, deployment workflows, Docker-based environments, responsive systems, and collaborative engineering practices.",

      technologies: [
        "React",
        "Docker",
        "Reusable Components",
        "Frontend Systems",
      ],

      icon: Boxes,

      color: "yellow",
    },

    {
      year: "AUG 2025 — JUL 2026",

      title:
        "Software Developer • Team Lead",

      subtitle:
        "Emayam Technologies Pvt. Ltd. — Velachery, Chennai",

      description:
        "Promoted to permanent frontend developer and team lead role after internship. Worked on scalable frontend architectures, deployment pipelines, Docker workflows, API integrations, reusable systems, and contributed to backend tasks using Python Django REST Framework.",

      technologies: [
        "Frontend Architecture",
        "Docker",
        "Django REST Framework",
        "API Integration",
      ],

      icon: BrainCircuit,

      color: "violet",
    },
  ];

  /* ====================================================== */
  /* COLORS */
  /* ====================================================== */

  const getColorClasses = (color) => {
    switch (color) {
      case "cyan":
        return {
          border: "border-cyan-500/20",
          glow:
            "shadow-[0_0_60px_rgba(6,182,212,0.12)]",
          text: "text-cyan-400",
          bg: "bg-cyan-500/10",
          line: "from-cyan-500",
        };

      case "emerald":
        return {
          border: "border-emerald-500/20",
          glow:
            "shadow-[0_0_60px_rgba(16,185,129,0.12)]",
          text: "text-emerald-400",
          bg: "bg-emerald-500/10",
          line: "from-emerald-500",
        };

      case "yellow":
        return {
          border: "border-yellow-500/20",
          glow:
            "shadow-[0_0_60px_rgba(234,179,8,0.12)]",
          text: "text-yellow-400",
          bg: "bg-yellow-500/10",
          line: "from-yellow-500",
        };

      default:
        return {
          border: "border-violet-500/20",
          glow:
            "shadow-[0_0_60px_rgba(139,92,246,0.12)]",
          text: "text-violet-400",
          bg: "bg-violet-500/10",
          line: "from-violet-500",
        };
    }
  };

  return (
    <section
      id="timeline"
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
      {/* ====================================================== */}
      {/* BACKGROUND */}
      {/* ====================================================== */}

      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="absolute top-0 left-0 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-violet-600/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-cyan-500/10 blur-[120px]" />

      {/* ====================================================== */}
      {/* CONTAINER */}
      {/* ====================================================== */}

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
        {/* ====================================================== */}
        {/* HEADER */}
        {/* ====================================================== */}

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
          className="text-center mb-16 sm:mb-24 lg:mb-32"
        >
          {/* LABEL */}
          <div className="inline-flex items-center gap-3 mb-8">
            <ArrowRight
              size={18}
              className="text-cyan-400"
            />

            <span className="uppercase tracking-[0.2em] sm:tracking-[0.25em] text-xs sm:text-sm text-cyan-400">
              System_Logs.Evolution
            </span>
          </div>

          {/* TITLE */}
          <h2
            className="
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            font-black
            tracking-tight
            leading-[1]
            mb-8
            "
          >
            My Professional{" "}
            <span className="text-violet-400">
              Journey
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
            From engineering education to scalable
            frontend systems, deployment pipelines,
            reusable architectures, and team leadership.
          </p>
        </motion.div>

        {/* ====================================================== */}
        {/* TIMELINE */}
        {/* ====================================================== */}

        <div className="relative">
          {/* CENTER LINE */}
          <div className="absolute left-4 sm:left-6 top-0 w-[2px] h-full bg-gradient-to-b from-cyan-500/40 via-violet-500/30 to-transparent" />

          {/* ITEMS */}
          <div className="space-y-10 sm:space-y-14 lg:space-y-20">
            {timelineData.map((item, index) => {
              const Icon = item.icon;

              const colors =
                getColorClasses(item.color);

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 60,
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
                  className="relative pl-14 sm:pl-20"
                >
                  {/* ====================================== */}
                  {/* NODE */}
                  {/* ====================================== */}

                  <motion.div
                    animate={{
                      scale: [1, 1.08, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                    className={`
                    absolute
                    left-0
                    top-4
                    w-8
                    h-8
                    sm:w-12
                    sm:h-12
                    rounded-2xl
                    border
                    ${colors.border}
                    bg-black
                    flex
                    items-center
                    justify-center
                    ${colors.glow}
                    `}
                  >
                    <Icon
                      className={colors.text}
                      size={18}
                    />
                  </motion.div>

                  {/* ====================================== */}
                  {/* CARD */}
                  {/* ====================================== */}

                  <motion.div
                    whileHover={{
                      y: -6,
                    }}
                    className={`
                    group
                    relative
                    rounded-2xl
                    sm:rounded-[36px]
                    border
                    ${colors.border}
                    bg-white/[0.03]
                    backdrop-blur-2xl
                    overflow-hidden
                    ${colors.glow}
                    `}
                  >
                    {/* HOVER GLOW */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent" />

                    {/* CONTENT */}
                    <div className="relative p-5 sm:p-7 lg:p-10">
                      {/* TOP */}
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
                        {/* LEFT */}
                        <div>
                          <div className="flex items-center gap-4 mb-5">
                            <div
                              className={`
                              w-12
                              h-12
                              sm:w-16
                              sm:h-16
                              rounded-2xl
                              border
                              border-white/10
                              ${colors.bg}
                              flex
                              items-center
                              justify-center
                              `}
                            >
                              <Icon
                                size={26}
                                className={
                                  colors.text
                                }
                              />
                            </div>

                            <div>
                              <p
                                className={`
                                uppercase
                                tracking-[0.15em]
                                text-xs
                                sm:text-sm
                                ${colors.text}
                                `}
                              >
                                Timeline Node
                              </p>

                              <p className="text-zinc-500 text-sm mt-1">
                                {item.year}
                              </p>
                            </div>
                          </div>

                          {/* TITLE */}
                          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight mb-4">
                            {item.title}
                          </h3>

                          {/* SUBTITLE */}
                          <p
                            className={`
                            text-sm
                            sm:text-base
                            uppercase
                            tracking-[0.15em]
                            ${colors.text}
                            `}
                          >
                            {item.subtitle}
                          </p>
                        </div>

                        {/* YEAR BADGE */}
                        <div
                          className={`
                          w-fit
                          px-4
                          py-3
                          rounded-2xl
                          border
                          border-white/10
                          ${colors.bg}
                          shrink-0
                          `}
                        >
                          <p className="text-lg sm:text-2xl font-black">
                            {item.year.split("—")[0]}
                          </p>
                        </div>
                      </div>

                      {/* DESCRIPTION */}
                      <p
                        className="
                        text-zinc-400
                        text-base
                        sm:text-lg
                        leading-relaxed
                        mb-8
                        "
                      >
                        {item.description}
                      </p>

                      {/* TECH STACK */}
                      <div className="flex flex-wrap gap-3">
                        {item.technologies.map(
                          (tech, techIndex) => (
                            <div
                              key={techIndex}
                              className="
                              px-4
                              py-2
                              rounded-xl
                              border
                              border-white/10
                              bg-black/40
                              text-sm
                              text-zinc-300
                              "
                            >
                              {tech}
                            </div>
                          )
                        )}
                      </div>

                      {/* EXTRA INFO */}
                      {index === 3 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                          <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                            <div className="flex items-center gap-3 mb-3">
                              <Code2 className="text-cyan-400" />

                              <h4 className="font-bold">
                                Frontend Systems
                              </h4>
                            </div>

                            <p className="text-sm text-zinc-400 leading-relaxed">
                              Reusable component systems,
                              scalable UI architecture,
                              responsive engineering, and
                              production-grade frontend
                              workflows.
                            </p>
                          </div>

                          <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                            <div className="flex items-center gap-3 mb-3">
                              <Server className="text-violet-400" />

                              <h4 className="font-bold">
                                Backend Exposure
                              </h4>
                            </div>

                            <p className="text-sm text-zinc-400 leading-relaxed">
                              Worked with Django REST
                              Framework, API integrations,
                              Docker deployment workflows,
                              and backend communication
                              systems.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}