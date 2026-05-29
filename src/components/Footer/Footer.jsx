import React from "react";
import { Mail, ArrowUpRight } from "lucide-react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const footerLinks = [
    {
      title: "Projects",
      href: "#projects",
    },
    {
      title: "Stack",
      href: "#skills",
    },
    {
      title: "Experience",
      href: "#timeline",
    },
    {
      title: "Contact",
      href: "#contact",
    },
  ];

  const socials = [
    {
      icon: FaGithub,
      href: "https://github.com/",
    },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/",
    },
    {
      icon: FaTwitter,
      href: "https://twitter.com/",
    },
    {
      icon: Mail,
      href: "mailto:hello@example.com",
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black">
      {/* BACKGROUND EFFECTS */}

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-violet-600/20 blur-[140px]" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 via-transparent to-cyan-500/5" />

      <div className="relative max-w-7xl mx-auto px-5 py-10">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 border-b border-white/10 pb-14">
          {/* LEFT */}
          <div>
            {/* LOGO */}
            <motion.a
              href="/"
              whileHover={{
                scale: 1.03,
              }}
              className="relative flex items-center gap-3 group"
            >
              {/* ICON */}
              <div className="relative">
                <div
                  className="
                  w-5
                  h-5
                  border-2
                  border-violet-500
                  rotate-45
                  rounded-sm
                  transition-all
                  duration-500
                  group-hover:rotate-90
                  group-hover:scale-110
                  "
                />

                <div className="absolute inset-0 bg-violet-500 blur-xl opacity-40 group-hover:opacity-80 transition-all duration-500" />
              </div>

              {/* ====================================================== */}
              {/* FUTURISTIC LOGO */}
              {/* ====================================================== */}

              <div className="relative">
                <motion.div
                  whileHover={{
                    scale: 1.04,
                  }}
                  className="group relative flex items-center gap-4"
                >
                  {/* ====================================================== */}
                  {/* TEXT */}
                  {/* ====================================================== */}

                  <div className="flex flex-col">
                    {/* NAME */}
                    <h1
                      className="
        relative
        text-2xl
        sm:text-3xl
        font-black
        tracking-tight
        leading-none
        text-white
        "
                    >
                      <span className="text-white">{"<"} </span>

                      <span
                        className="
          bg-gradient-to-r
          from-white
          via-violet-300
          to-cyan-300
          bg-clip-text
          text-transparent
          "
                      >
                        Santhosh
                      </span>

                      <span className="text-white"> {"/>"}</span>
                    </h1>
                  </div>
                </motion.div>
              </div>
            </motion.a>

            {/* DESCRIPTION */}
            <p className="text-zinc-400 leading-relaxed max-w-sm">
              Building futuristic SaaS platforms, AI-powered tools, Chrome
              extensions, and scalable developer products with modern
              technologies.
            </p>

            {/* STATUS */}
            <div className="mt-6 flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />

              <span className="text-sm text-zinc-300">
                Available for freelance & collaborations
              </span>
            </div>
          </div>

          {/* CENTER */}
          <div>
            <h2 className="text-white text-lg font-semibold mb-6">
              Navigation
            </h2>

            <div className="flex flex-col gap-4">
              {footerLinks.map((link, index) => (
                <motion.a
                  key={index}
                  whileHover={{ x: 6 }}
                  href={link.href}
                  className="group flex items-center gap-2 text-zinc-400 hover:text-white transition-all duration-300"
                >
                  <span className="text-violet-500">//</span>

                  {link.title}

                  <ArrowUpRight
                    size={16}
                    className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <h2 className="text-white text-lg font-semibold mb-6">
              Let&apos;s Build Something Amazing
            </h2>

            <p className="text-zinc-400 leading-relaxed mb-8">
              Interested in working together or building futuristic digital
              products? Let&apos;s connect and create something impactful.
            </p>

            {/* CTA BUTTON */}
            <motion.a
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.95,
              }}
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium shadow-[0_0_30px_rgba(139,92,246,0.35)]"
            >
              Start a Project
              <ArrowUpRight size={18} />
            </motion.a>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8">
          {/* COPYRIGHT */}
          <p className="text-sm text-zinc-500 text-center md:text-left">
            © 2026 Santhosh Kumar. Built with React, TailwindCSS & Framer
            Motion.
          </p>

          {/* SOCIALS */}
          <div className="flex items-center gap-4">
            {socials.map((social, index) => {
              const Icon = social.icon;

              return (
                <motion.a
                  key={index}
                  whileHover={{
                    y: -4,
                    scale: 1.08,
                  }}
                  whileTap={{
                    scale: 0.92,
                  }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center w-11 h-11 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden"
                >
                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-500 opacity-0 group-hover:opacity-20 transition-all duration-500" />

                  <Icon
                    size={18}
                    className="relative z-10 text-zinc-300 group-hover:text-white transition-all duration-300"
                  />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
