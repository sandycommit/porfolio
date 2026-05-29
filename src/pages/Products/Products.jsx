import React from "react";
import {
  ArrowUpRight,
  Globe,
  Clock3,
  CheckCircle2,
  Code2,
  LayoutDashboard,
  Layers3,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Products() {
  const products = [
    {
      title: "TabFlow",
      description:
        "AI tab manager that automatically groups, summarizes, and organizes browser research sessions intelligently.",
      type: "Extension",
      status: "LIVE",
      icon: LayoutDashboard,
      iconColor: "text-cyan-400",
      borderColor: "border-cyan-500/20",
      glow: "shadow-[0_0_60px_rgba(6,182,212,0.12)]",
      users: "12k+ users",
      rating: "4.9",
      link: "https://tabflow.dev",
      linkLabel: "Visit Product",
      technologies: [
        "React",
        "Chrome API",
        "OpenAI",
      ],
    },
    {
      title: "QueryLens",
      description:
        "Database visualization and optimization platform for PostgreSQL. Detects slow queries and improves performance instantly.",
      type: "Dev Tool",
      status: "DEVELOPING",
      icon: Code2,
      iconColor: "text-emerald-400",
      borderColor: "border-emerald-500/20",
      glow: "shadow-[0_0_60px_rgba(16,185,129,0.12)]",
      users: "2.1M queries analyzed",
      rating: "Beta",
      link: "https://querylens.dev",
      linkLabel: "Development Build",
      technologies: [
        "Next.js",
        "PostgreSQL",
        "Prisma",
      ],
    },
    {
      title: "SyncTask",
      description:
        "Minimalist productivity tracker syncing GitHub Issues, Jira tasks, and development workflows into one dashboard.",
      type: "Beta",
      status: "PRE-LAUNCH",
      icon: Layers3,
      iconColor: "text-yellow-400",
      borderColor: "border-yellow-500/20",
      glow: "shadow-[0_0_60px_rgba(234,179,8,0.12)]",
      users: "$800 pre-launch revenue",
      rating: "BETA",
      link: "https://synctask.app",
      linkLabel: "Coming Soon",
      technologies: [
        "React",
        "Firebase",
        "Stripe",
      ],
    },
  ];

  return (
    <section
      id="products"
      className="relative overflow-hidden bg-black py-32 text-white"
    >
      {/* ================================= */}
      {/* BACKGROUND */}
      {/* ================================= */}

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-600/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        {/* ================================= */}
        {/* HEADER */}
        {/* ================================= */}

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
            <Globe
              size={18}
              className="text-cyan-400"
            />

            <span className="uppercase tracking-[0.25em] text-sm text-cyan-400">
              Product_Ecosystem
            </span>
          </div>

          {/* Title */}
          <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-tight mb-8">
            Startup{" "}
            <span className="text-violet-400">
              Products
            </span>{" "}
            Showcase
          </h2>

          {/* Description */}
          <p className="max-w-3xl mx-auto text-zinc-400 text-xl leading-relaxed">
            A growing ecosystem of AI-powered SaaS tools,
            productivity platforms, automation systems, and
            developer-first digital products.
          </p>
        </motion.div>

        {/* ================================= */}
        {/* PRODUCTS GRID */}
        {/* ================================= */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;

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
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                }}
                className={`group relative rounded-[36px] border ${product.borderColor} bg-white/[0.03] backdrop-blur-2xl overflow-hidden ${product.glow}`}
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.03] via-transparent to-cyan-500/[0.03] opacity-0 group-hover:opacity-100 transition-all duration-700" />

                <div className="relative p-8">
                  {/* ================================ */}
                  {/* TOP */}
                  {/* ================================ */}

                  <div className="flex items-start justify-between mb-10">
                    {/* Icon */}
                    <div
                      className={`w-16 h-16 rounded-2xl border border-white/10 bg-black/40 flex items-center justify-center`}
                    >
                      <Icon
                        size={30}
                        className={product.iconColor}
                      />
                    </div>

                    {/* Product Type */}
                    <div className="flex flex-col items-end gap-3">
                      <span className="px-4 py-2 rounded-xl border border-white/10 bg-white/[0.03] text-xs uppercase tracking-[0.15em] text-zinc-300">
                        {product.type}
                      </span>

                      {/* Status */}
                      <div
                        className={`flex items-center gap-2 text-xs uppercase tracking-[0.2em] ${
                          product.status === "LIVE"
                            ? "text-emerald-400"
                            : product.status === "DEVELOPING"
                            ? "text-cyan-400"
                            : "text-yellow-400"
                        }`}
                      >
                        <div
                          className={`w-2 h-2 rounded-full ${
                            product.status === "LIVE"
                              ? "bg-emerald-400"
                              : product.status ===
                                "DEVELOPING"
                              ? "bg-cyan-400"
                              : "bg-yellow-400"
                          } animate-pulse`}
                        />

                        {product.status}
                      </div>
                    </div>
                  </div>

                  {/* ================================ */}
                  {/* CONTENT */}
                  {/* ================================ */}

                  <h3 className="text-4xl font-black mb-5">
                    {product.title}
                  </h3>

                  <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                    {product.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-3 mb-10">
                    {product.technologies.map(
                      (tech, techIndex) => (
                        <div
                          key={techIndex}
                          className="px-4 py-2 rounded-xl border border-white/10 bg-black/40 text-sm text-zinc-300"
                        >
                          {tech}
                        </div>
                      )
                    )}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-10">
                    <div>
                      <h4 className="text-2xl font-black mb-1">
                        {product.rating}
                      </h4>

                      <p className="text-sm text-zinc-500">
                        {product.users}
                      </p>
                    </div>

                    {/* Status Visual */}
                    <div className="w-16 h-16 rounded-2xl border border-white/10 bg-black/40 flex items-center justify-center">
                      {product.status === "LIVE" ? (
                        <CheckCircle2 className="text-emerald-400" />
                      ) : (
                        <Clock3
                          className={
                            product.status ===
                            "DEVELOPING"
                              ? "text-cyan-400"
                              : "text-yellow-400"
                          }
                        />
                      )}
                    </div>
                  </div>

                  {/* ================================ */}
                  {/* PRODUCT PREVIEW */}
                  {/* ================================ */}

                  <div className="rounded-3xl border border-white/10 bg-black/40 p-5 mb-10 overflow-hidden">
                    {/* Fake UI */}
                    <div className="h-36 rounded-2xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] relative overflow-hidden">
                      {/* Dynamic Content */}
                      {index === 0 && (
                        <div className="absolute inset-0 p-5 flex items-end justify-end">
                          <div className="w-40 space-y-3">
                            {[1, 2, 3].map((item) => (
                              <div
                                key={item}
                                className="h-5 rounded-lg bg-white/10"
                              />
                            ))}
                          </div>
                        </div>
                      )}

                      {index === 1 && (
                        <div className="absolute inset-0 flex items-end gap-3 p-5">
                          {[40, 75, 50, 30, 60].map(
                            (height, idx) => (
                              <div
                                key={idx}
                                className={`flex-1 rounded-t-xl ${
                                  idx === 1
                                    ? "bg-red-500/70"
                                    : idx === 4
                                    ? "bg-yellow-500/70"
                                    : "bg-emerald-500/70"
                                }`}
                                style={{
                                  height: `${height}%`,
                                }}
                              />
                            )
                          )}
                        </div>
                      )}

                      {index === 2 && (
                        <div className="absolute inset-0 grid grid-cols-2 gap-3 p-5">
                          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 space-y-3">
                            <div className="w-10 h-3 rounded bg-white/10" />

                            <div className="h-5 rounded bg-white/10" />

                            <div className="h-5 rounded bg-white/10" />
                          </div>

                          <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/[0.03] p-3">
                            <div className="w-12 h-3 rounded bg-yellow-500/40 mb-4" />

                            <div className="h-7 rounded bg-yellow-500/20" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* ================================ */}
                  {/* FOOTER */}
                  {/* ================================ */}

                  <div className="flex items-center justify-between pt-6 border-t border-white/10">
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 font-semibold transition-all duration-300 ${
                        product.status === "LIVE"
                          ? "text-emerald-400 hover:text-emerald-300"
                          : product.status === "DEVELOPING"
                          ? "text-cyan-400 hover:text-cyan-300"
                          : "text-yellow-400 hover:text-yellow-300"
                      }`}
                    >
                      {product.linkLabel}

                      <ArrowUpRight size={18} />
                    </a>

                    <motion.button
                      whileHover={{
                        scale: 1.05,
                      }}
                      whileTap={{
                        scale: 0.95,
                      }}
                      className="w-12 h-12 rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-center"
                    >
                      <ArrowUpRight size={18} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}