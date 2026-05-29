import React from "react";
import {
  Activity,
  GitFork,
  Star,
  BookOpen,
  Users,
  GitPullRequest,
  CheckCircle2,
  AlertCircle,
  Clock3,
} from "lucide-react";
import { motion } from "framer-motion";

export default function GithubStats() {
  const languageStats = [
    {
      name: "TypeScript",
      percentage: "45%",
      width: "45%",
      color: "bg-blue-500",
    },
    {
      name: "Python",
      percentage: "25%",
      width: "25%",
      color: "bg-yellow-400",
    },
    {
      name: "Go",
      percentage: "15%",
      width: "15%",
      color: "bg-cyan-400",
    },
    {
      name: "Rust",
      percentage: "10%",
      width: "10%",
      color: "bg-orange-500",
    },
    {
      name: "Other",
      percentage: "5%",
      width: "5%",
      color: "bg-zinc-500",
    },
  ];

  const analytics = [
    {
      icon: Star,
      value: "8.4k",
      label: "Total Stars",
      color: "text-yellow-400",
    },
    {
      icon: GitFork,
      value: "1.2k",
      label: "Forks",
      color: "text-cyan-400",
    },
    {
      icon: BookOpen,
      value: "48",
      label: "Repositories",
      color: "text-violet-400",
    },
    {
      icon: Users,
      value: "340",
      label: "Followers",
      color: "text-emerald-400",
    },
  ];

  const pullRequests = [
    {
      title: "Pull Requests Merged",
      value: "142",
      width: "85%",
      color: "bg-cyan-400",
      icon: GitPullRequest,
    },
    {
      title: "Issues Resolved",
      value: "304",
      width: "92%",
      color: "bg-emerald-400",
      icon: CheckCircle2,
    },
    {
      title: "Open Issues",
      value: "12",
      width: "18%",
      color: "bg-red-400",
      icon: AlertCircle,
    },
  ];

  return (
    <section
      id="github"
      className="relative overflow-hidden bg-black py-32 text-white"
    >
      {/* ===================================== */}
      {/* BACKGROUND */}
      {/* ===================================== */}

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-600/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        {/* ===================================== */}
        {/* HEADER */}
        {/* ===================================== */}

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
            <Activity
              size={18}
              className="text-emerald-400"
            />

            <span className="uppercase tracking-[0.25em] text-sm text-emerald-400">
              System_Logs.Analytics
            </span>
          </div>

          {/* Title */}
          <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-tight mb-8">
            Engineering{" "}
            <span className="text-violet-400">
              Metrics
            </span>
          </h2>

          {/* Description */}
          <p className="max-w-3xl mx-auto text-zinc-400 text-xl leading-relaxed">
            Live visualization of development velocity, open
            source contributions, and codebase distribution
            across the ecosystem.
          </p>
        </motion.div>

        {/* ===================================== */}
        {/* TOP CARD */}
        {/* ===================================== */}

        <motion.div
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
          }}
          viewport={{ once: true }}
          className="rounded-[36px] border border-emerald-500/20 bg-white/[0.03] backdrop-blur-2xl p-8 mb-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* LEFT */}
            <div className="lg:col-span-3">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-14 h-14 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 flex items-center justify-center">
                  <Activity
                    className="text-emerald-400"
                    size={26}
                  />
                </div>

                <div>
                  <h3 className="text-5xl font-black">
                    3,402
                  </h3>

                  <p className="uppercase tracking-[0.2em] text-xs text-zinc-500">
                    Contributions (YTD)
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-sm text-zinc-500 mb-3">
                    Current Streak
                  </p>

                  <h4 className="text-3xl font-black text-emerald-400">
                    42 Days
                  </h4>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-sm text-zinc-500 mb-3">
                    Longest Streak
                  </p>

                  <h4 className="text-3xl font-black">
                    128 Days
                  </h4>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="lg:col-span-9">
              {/* Heatmap Header */}
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-black">
                  Activity Heatmap
                </h3>

                <div className="flex items-center gap-3">
                  <span className="text-xs text-zinc-500">
                    Less
                  </span>

                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <div
                        key={item}
                        className={`w-4 h-4 rounded-sm ${
                          item === 1
                            ? "bg-white/5"
                            : item === 2
                            ? "bg-emerald-900"
                            : item === 3
                            ? "bg-emerald-700"
                            : item === 4
                            ? "bg-emerald-500"
                            : "bg-emerald-400"
                        }`}
                      />
                    ))}
                  </div>

                  <span className="text-xs text-zinc-500">
                    More
                  </span>
                </div>
              </div>

              {/* Heatmap */}
              <div className="rounded-3xl border border-white/10 bg-black/40 p-5 overflow-hidden">
                <div className="grid grid-cols-24 gap-2">
                  {Array.from({
                    length: 168,
                  }).map((_, index) => {
                    const random =
                      Math.floor(Math.random() * 5);

                    return (
                      <motion.div
                        key={index}
                        initial={{
                          opacity: 0,
                        }}
                        whileInView={{
                          opacity: 1,
                        }}
                        transition={{
                          delay: index * 0.003,
                        }}
                        viewport={{ once: true }}
                        className={`aspect-square rounded-sm ${
                          random === 0
                            ? "bg-white/[0.03]"
                            : random === 1
                            ? "bg-emerald-900"
                            : random === 2
                            ? "bg-emerald-700"
                            : random === 3
                            ? "bg-emerald-500"
                            : "bg-emerald-400"
                        }`}
                      />
                    );
                  })}
                </div>

                {/* Months */}
                <div className="flex justify-between mt-5 text-xs text-zinc-500">
                  <span>Jan</span>
                  <span>Apr</span>
                  <span>Jul</span>
                  <span>Oct</span>
                  <span>Dec</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ===================================== */}
        {/* MIDDLE GRID */}
        {/* ===================================== */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          {/* ===================================== */}
          {/* LANGUAGES */}
          {/* ===================================== */}

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
            className="lg:col-span-5 rounded-[36px] border border-cyan-500/20 bg-white/[0.03] backdrop-blur-2xl p-8"
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-10">
              <Activity
                className="text-cyan-400"
                size={22}
              />

              <h3 className="text-3xl font-black">
                Language Distribution
              </h3>
            </div>

            {/* Stats */}
            <div className="space-y-8">
              {languageStats.map((lang, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-lg font-medium">
                      {lang.name}
                    </p>

                    <span className="text-zinc-500">
                      {lang.percentage}
                    </span>
                  </div>

                  <div className="h-3 rounded-full bg-white/[0.03] overflow-hidden">
                    <motion.div
                      initial={{
                        width: 0,
                      }}
                      whileInView={{
                        width: lang.width,
                      }}
                      transition={{
                        duration: 1,
                        delay: index * 0.1,
                      }}
                      viewport={{ once: true }}
                      className={`h-full rounded-full ${lang.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ===================================== */}
          {/* REPOSITORY ANALYTICS */}
          {/* ===================================== */}

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
            className="lg:col-span-7 rounded-[36px] border border-violet-500/20 bg-white/[0.03] backdrop-blur-2xl p-8"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-3">
                <BookOpen
                  className="text-violet-400"
                  size={22}
                />

                <h3 className="text-3xl font-black">
                  Repository Analytics
                </h3>
              </div>

              <span className="px-4 py-2 rounded-xl border border-violet-500/20 bg-violet-500/10 text-xs uppercase tracking-[0.2em] text-violet-400">
                Public Only
              </span>
            </div>

            {/* Analytics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-8">
              {analytics.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="rounded-3xl border border-white/10 bg-black/40 p-6 text-center"
                  >
                    <Icon
                      className={`mx-auto mb-4 ${item.color}`}
                      size={24}
                    />

                    <h4 className="text-4xl font-black mb-2">
                      {item.value}
                    </h4>

                    <p className="uppercase tracking-[0.2em] text-xs text-zinc-500">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Releases */}
            <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
              <p className="uppercase tracking-[0.2em] text-xs text-zinc-500 mb-6">
                Latest Releases
              </p>

              <div className="space-y-5">
                {[
                  {
                    name: "nexus-core v2.4.0",
                    time: "2 days ago",
                    color: "text-violet-400",
                  },
                  {
                    name: "react-orbit v1.1.2",
                    time: "5 days ago",
                    color: "text-cyan-400",
                  },
                  {
                    name: "auto-tap v0.9.0",
                    time: "1 week ago",
                    color: "text-white",
                  },
                ].map((release, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <p
                      className={`font-semibold ${release.color}`}
                    >
                      {release.name}
                    </p>

                    <span className="text-sm text-zinc-500">
                      {release.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ===================================== */}
        {/* BOTTOM GRID */}
        {/* ===================================== */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* ===================================== */}
          {/* WAKATIME */}
          {/* ===================================== */}

          <motion.div
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
            }}
            viewport={{ once: true }}
            className="rounded-[36px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8"
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-10">
              <Clock3
                className="text-white"
                size={22}
              />

              <h3 className="text-3xl font-black">
                Time Log (Wakatime)
              </h3>
            </div>

            {/* Graph */}
            <div className="h-64 flex items-end justify-between gap-3">
              {[40, 70, 55, 85, 90, 65, 50].map(
                (height, index) => (
                  <motion.div
                    key={index}
                    initial={{
                      height: 0,
                    }}
                    whileInView={{
                      height: `${height}%`,
                    }}
                    transition={{
                      duration: 1,
                      delay: index * 0.1,
                    }}
                    viewport={{ once: true }}
                    className="flex-1 rounded-t-3xl bg-gradient-to-t from-violet-500 to-cyan-400"
                  />
                )
              )}
            </div>

            {/* Days */}
            <div className="flex justify-between mt-5 text-xs text-zinc-500">
              <span>MON</span>
              <span>TUE</span>
              <span>WED</span>
              <span>THU</span>
              <span>FRI</span>
              <span>SAT</span>
              <span>SUN</span>
            </div>

            {/* Avg */}
            <p className="text-center mt-8 text-zinc-400">
              Average:{" "}
              <span className="text-white font-bold">
                5.2 hrs/day
              </span>{" "}
              coding
            </p>
          </motion.div>

          {/* ===================================== */}
          {/* PR & ISSUES */}
          {/* ===================================== */}

          <motion.div
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
            }}
            viewport={{ once: true }}
            className="rounded-[36px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8"
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-10">
              <GitPullRequest
                className="text-cyan-400"
                size={22}
              />

              <h3 className="text-3xl font-black">
                Pull Requests & Issues
              </h3>
            </div>

            {/* Progress */}
            <div className="space-y-8">
              {pullRequests.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="rounded-3xl border border-white/10 bg-black/40 p-6"
                  >
                    {/* Top */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-center">
                          <Icon
                            size={22}
                            className={
                              item.title.includes(
                                "Open"
                              )
                                ? "text-red-400"
                                : item.title.includes(
                                    "Issues"
                                  )
                                ? "text-emerald-400"
                                : "text-cyan-400"
                            }
                          />
                        </div>

                        <p className="text-xl font-bold">
                          {item.title}
                        </p>
                      </div>

                      <span className="text-2xl font-black text-zinc-300">
                        {item.value}
                      </span>
                    </div>

                    {/* Bar */}
                    <div className="h-3 rounded-full bg-white/[0.03] overflow-hidden">
                      <motion.div
                        initial={{
                          width: 0,
                        }}
                        whileInView={{
                          width: item.width,
                        }}
                        transition={{
                          duration: 1,
                        }}
                        viewport={{ once: true }}
                        className={`h-full ${item.color}`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}