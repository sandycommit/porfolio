import React from "react";
import {
  Quote,
  Star,
  ArrowUpRight,
  BadgeCheck,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Arun Prakash",
      role: "Founder @ Nexlify",
      image:
        "https://i.pravatar.cc/150?img=12",
      review:
        "Santhosh delivered an exceptional SaaS platform with incredible UI polish and scalable architecture. His product thinking stands out from typical developers.",
      rating: 5,
      company: "AI SaaS",
      color: "violet",
    },
    {
      name: "Rahul Verma",
      role: "CTO @ DevOrbit",
      image:
        "https://i.pravatar.cc/150?img=32",
      review:
        "One of the most product-focused engineers I’ve worked with. The attention to detail, performance optimization, and futuristic UI quality were outstanding.",
      rating: 5,
      company: "Developer Tools",
      color: "cyan",
    },
    {
      name: "Karthik S",
      role: "Startup Founder",
      image:
        "https://i.pravatar.cc/150?img=15",
      review:
        "From Chrome extensions to AI integrations, Santhosh consistently builds production-grade systems that feel premium and scalable.",
      rating: 5,
      company: "Automation",
      color: "emerald",
    },
  ];

  const stats = [
    {
      value: "18+",
      label: "Projects Delivered",
    },
    {
      value: "12+",
      label: "Happy Clients",
    },
    {
      value: "99%",
      label: "Client Satisfaction",
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
      id="testimonials"
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
            <Quote
              size={18}
              className="text-cyan-400"
            />

            <span className="uppercase tracking-[0.25em] text-sm text-cyan-400">
              Client_Feedback.Protocol
            </span>
          </div>

          {/* Title */}
          <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-tight mb-8">
            Trusted By{" "}
            <span className="text-violet-400">
              Builders
            </span>
          </h2>

          {/* Description */}
          <p className="max-w-3xl mx-auto text-zinc-400 text-xl leading-relaxed">
            Collaborating with founders, startups, and
            product teams to engineer scalable digital
            systems and futuristic user experiences.
          </p>
        </motion.div>

        {/* ==================================== */}
        {/* STATS */}
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
          }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {stats.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8 text-center"
            >
              <h3 className="text-5xl font-black mb-4 text-violet-400">
                {item.value}
              </h3>

              <p className="uppercase tracking-[0.2em] text-sm text-zinc-500">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* ==================================== */}
        {/* TESTIMONIALS GRID */}
        {/* ==================================== */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => {
            const colors = getColors(item.color);

            return (
              <motion.div
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

                <div className="relative p-8">
                  {/* ==================================== */}
                  {/* TOP */}
                  {/* ==================================== */}

                  <div className="flex items-start justify-between mb-8">
                    {/* Profile */}
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 rounded-2xl object-cover border border-white/10"
                        />

                        <div
                          className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-4 border-black ${colors.bg}`}
                        />
                      </div>

                      <div>
                        <h3 className="text-2xl font-black mb-1">
                          {item.name}
                        </h3>

                        <p className="text-zinc-500">
                          {item.role}
                        </p>
                      </div>
                    </div>

                    {/* Quote Icon */}
                    <div
                      className={`w-14 h-14 rounded-2xl border border-white/10 ${colors.bg} flex items-center justify-center`}
                    >
                      <Quote
                        size={24}
                        className={colors.text}
                      />
                    </div>
                  </div>

                  {/* ==================================== */}
                  {/* REVIEW */}
                  {/* ==================================== */}

                  <p className="text-zinc-300 text-lg leading-relaxed mb-10">
                    "{item.review}"
                  </p>

                  {/* ==================================== */}
                  {/* STARS */}
                  {/* ==================================== */}

                  <div className="flex items-center gap-2 mb-10">
                    {Array.from({
                      length: item.rating,
                    }).map((_, idx) => (
                      <Star
                        key={idx}
                        size={20}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* ==================================== */}
                  {/* FOOTER */}
                  {/* ==================================== */}

                  <div className="flex items-center justify-between pt-6 border-t border-white/10">
                    {/* Company */}
                    <div className="flex items-center gap-3">
                      <BadgeCheck
                        size={18}
                        className={colors.text}
                      />

                      <span className="text-zinc-400">
                        {item.company}
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
                      className={`w-12 h-12 rounded-2xl border border-white/10 bg-black/40 flex items-center justify-center ${colors.text}`}
                    >
                      <ArrowUpRight size={18} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
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
          <h3 className="text-4xl md:text-5xl font-black mb-6">
            Ready To Build Something{" "}
            <span className="text-violet-400">
              Exceptional?
            </span>
          </h3>

          <p className="max-w-2xl mx-auto text-zinc-400 text-lg leading-relaxed mb-10">
            Let&apos;s collaborate to create scalable
            platforms, futuristic interfaces, and
            production-grade systems that stand out.
          </p>

          {/* Button */}
          <motion.a
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.96,
            }}
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-5 rounded-2xl bg-gradient-to-r from-violet-500 to-purple-600 text-white font-bold text-lg shadow-[0_0_40px_rgba(139,92,246,0.3)]"
          >
            Start A Project
            <ArrowUpRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}