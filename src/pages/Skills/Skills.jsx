import {
  Braces,
  Database,
  Server,
  Cloud,
  CodeXml,
  Terminal,
  Layers3,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Skills() {
  const frontendSkills = [
    {
      name: "React.js",
      level: "Advanced",
      width: "90%",
    },
    {
      name: "TypeScript",
      level: "Strong",
      width: "82%",
    },
    {
      name: "JavaScript",
      level: "Advanced",
      width: "88%",
    },
    {
      name: "Tailwind CSS",
      level: "Advanced",
      width: "92%",
    },
    {
      name: "HTML5 / CSS3",
      level: "Advanced",
      width: "92%",
    },
  ];

  const backendSkills = [
    {
      name: "Node.js",
      level: "Strong",
      width: "80%",
    },
    {
      name: "Python",
      level: "Strong",
      width: "78%",
    },
    {
      name: "Django",
      level: "Strong",
      width: "78%",
    },
    {
      name: "REST APIs",
      level: "Advanced",
      width: "88%",
    },
    {
      name: "Swagger",
      level: "Strong",
      width: "78%",
    },
  ];

  const databaseSkills = [
    {
      name: "PostgreSQL",
      type: "Relational Database",
      icon: Database,
    },
  ];

  const tools = [
    "Git",
    "GitHub",
    "GitLab",
    "Postman",
    "Swagger",
    "Figma",
    "VS Code",
    "Vercel",
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
      {/* Background Grid */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.035]
          bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          bg-[size:60px_60px]
        "
      />

      {/* Ambient Glow */}
      <div className="absolute -top-40 -left-40 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-violet-600/10 blur-[120px]" />

      <div className="absolute -bottom-40 -right-40 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-cyan-500/10 blur-[120px]" />

      {/* Main Container */}
      <div
        className="
          relative
          w-full
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          {/* Top Meta */}
          <div
            className="
              flex
              flex-col
              sm:flex-row
              sm:items-center
              sm:justify-between
              gap-4
              border-b
              border-white/10
              pb-5
              mb-8
            "
          >
            <div className="flex items-center gap-3">
              <Terminal
                size={18}
                className="text-cyan-400"
              />

              <span
                className="
                  uppercase
                  tracking-[0.18em]
                  sm:tracking-[0.25em]
                  text-xs
                  sm:text-sm
                  text-cyan-400
                "
              >
                Technical_Stack
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              <span className="text-xs sm:text-sm text-zinc-500">
                Developer systems operational
              </span>
            </div>
          </div>

          {/* Title */}
          <div className="max-w-4xl">
            <h2
              className="
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                font-black
                leading-[0.95]
                tracking-tight
              "
            >
              Tools I Use to{" "}
              <span className="text-cyan-400">
                Build
              </span>{" "}
              <span className="text-violet-400">
                Products
              </span>
            </h2>

            <p
              className="
                mt-6
                max-w-3xl
                text-base
                sm:text-lg
                lg:text-xl
                text-zinc-400
                leading-relaxed
              "
            >
              A practical technology stack focused on building
              responsive interfaces, scalable APIs, business
              applications, dashboards, and production-ready
              full-stack systems.
            </p>
          </div>
        </motion.div>

        {/* ================================================= */}
        {/* SINGLE RESPONSIVE CONTAINER */}
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
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="
            rounded-3xl
            sm:rounded-[36px]
            border
            border-white/10
            bg-white/[0.025]
            backdrop-blur-2xl
            overflow-hidden
          "
        >
          {/* ================================================= */}
          {/* FRONTEND + BACKEND */}
          {/* ================================================= */}

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-2
              border-b
              border-white/10
            "
          >
            {/* FRONTEND */}
            <div
              className="
                p-5
                sm:p-7
                lg:p-10
                lg:border-r
                border-white/10
              "
            >
              <div className="flex items-start justify-between gap-4 mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Braces
                      size={22}
                      className="text-cyan-400"
                    />

                    <h3 className="text-xl sm:text-2xl font-black">
                      Frontend
                    </h3>
                  </div>

                  <p className="text-sm text-zinc-500">
                    Interface & UI Development
                  </p>
                </div>

                <span
                  className="
                    shrink-0
                    px-3
                    py-1.5
                    rounded-lg
                    border
                    border-cyan-500/20
                    bg-cyan-500/10
                    text-[10px]
                    sm:text-xs
                    uppercase
                    tracking-wider
                    text-cyan-400
                  "
                >
                  UI
                </span>
              </div>

              <div className="space-y-6">
                {frontendSkills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between gap-4 mb-2">
                      <span className="text-sm sm:text-base text-zinc-200">
                        {skill.name}
                      </span>

                      <span className="text-xs sm:text-sm text-zinc-500">
                        {skill.level}
                      </span>
                    </div>

                    <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{
                          width: 0,
                        }}
                        whileInView={{
                          width: skill.width,
                        }}
                        transition={{
                          duration: 1,
                          delay: index * 0.08,
                        }}
                        viewport={{
                          once: true,
                        }}
                        className="
                          h-full
                          rounded-full
                          bg-gradient-to-r
                          from-cyan-400
                          to-cyan-500
                        "
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* BACKEND */}
            <div
              className="
                p-5
                sm:p-7
                lg:p-10
              "
            >
              <div className="flex items-start justify-between gap-4 mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Server
                      size={22}
                      className="text-violet-400"
                    />

                    <h3 className="text-xl sm:text-2xl font-black">
                      Backend
                    </h3>
                  </div>

                  <p className="text-sm text-zinc-500">
                    APIs & Application Logic
                  </p>
                </div>

                <span
                  className="
                    shrink-0
                    px-3
                    py-1.5
                    rounded-lg
                    border
                    border-violet-500/20
                    bg-violet-500/10
                    text-[10px]
                    sm:text-xs
                    uppercase
                    tracking-wider
                    text-violet-400
                  "
                >
                  API
                </span>
              </div>

              <div className="space-y-6">
                {backendSkills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between gap-4 mb-2">
                      <span className="text-sm sm:text-base text-zinc-200">
                        {skill.name}
                      </span>

                      <span className="text-xs sm:text-sm text-zinc-500">
                        {skill.level}
                      </span>
                    </div>

                    <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{
                          width: 0,
                        }}
                        whileInView={{
                          width: skill.width,
                        }}
                        transition={{
                          duration: 1,
                          delay: index * 0.08,
                        }}
                        viewport={{
                          once: true,
                        }}
                        className="
                          h-full
                          rounded-full
                          bg-gradient-to-r
                          from-violet-400
                          to-purple-500
                        "
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ================================================= */}
          {/* DATABASE */}
          {/* ================================================= */}

          <div className="p-5 sm:p-7 lg:p-10 border-b border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <Database
                size={22}
                className="text-emerald-400"
              />

              <div>
                <h3 className="text-xl sm:text-2xl font-black">
                  Database
                </h3>

                <p className="text-sm text-zinc-500">
                  Data & Persistence
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {databaseSkills.map((db) => {
                const Icon = db.icon;

                return (
                  <motion.div
                    key={db.name}
                    whileHover={{
                      y: -3,
                    }}
                    className="
                      flex
                      items-center
                      gap-4
                      rounded-2xl
                      border
                      border-white/10
                      bg-black/30
                      p-4
                      sm:p-5
                      transition-all
                    "
                  >
                    <div
                      className="
                        w-11
                        h-11
                        rounded-xl
                        border
                        border-emerald-500/20
                        bg-emerald-500/10
                        flex
                        items-center
                        justify-center
                        shrink-0
                      "
                    >
                      <Icon
                        size={21}
                        className="text-emerald-400"
                      />
                    </div>

                    <div>
                      <h4 className="font-bold text-zinc-200">
                        {db.name}
                      </h4>

                      <p className="text-xs sm:text-sm text-zinc-500">
                        {db.type}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ================================================= */}
          {/* TOOLS & WORKFLOW */}
          {/* ================================================= */}

          <div className="p-5 sm:p-7 lg:p-10">
            <div className="flex items-center gap-3 mb-6">
              <Layers3
                size={22}
                className="text-yellow-400"
              />

              <div>
                <h3 className="text-xl sm:text-2xl font-black">
                  Tools & Workflow
                </h3>

                <p className="text-sm text-zinc-500">
                  Development & Deployment
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                  viewport={{
                    once: true,
                  }}
                  whileHover={{
                    y: -3,
                  }}
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.02]
                    px-3
                    sm:px-4
                    py-3
                    transition-all
                    hover:border-violet-500/30
                    hover:bg-violet-500/[0.04]
                  "
                >
                  <CodeXml
                    size={16}
                    className="
                      text-zinc-500
                      group-hover:text-violet-400
                      transition-colors
                    "
                  />

                  <span className="text-xs sm:text-sm text-zinc-300">
                    {tool}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ================================================= */}
        {/* BOTTOM STACK SUMMARY */}
        {/* ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
          className="
            mt-6
            sm:mt-8
            grid
            grid-cols-2
            md:grid-cols-4
            gap-3
            sm:gap-4
          "
        >
          {[
            {
              label: "Frontend",
              value: "React + TS",
              icon: Braces,
            },
            {
              label: "Backend",
              value: "Django + Node",
              icon: Server,
            },
            {
              label: "Database",
              value: "PostgreSQL",
              icon: Database,
            },
            {
              label: "Deployment",
              value: "Vercel",
              icon: Cloud,
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.02]
                  p-4
                  sm:p-5
                "
              >
                <Icon
                  size={18}
                  className="text-zinc-500 mb-3"
                />

                <p className="text-[10px] sm:text-xs uppercase tracking-wider text-zinc-600 mb-1">
                  {item.label}
                </p>

                <p className="text-sm sm:text-base font-semibold text-zinc-200">
                  {item.value}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}