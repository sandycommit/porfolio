"use client";

import { motion } from "framer-motion";

import { Power, RotateCcw, Cpu, ShieldCheck, Sparkles } from "lucide-react";

import MatrixRain from "../MatrixRain/MatrixRain";

export default function ShutdownScreen({ onStart }) {
  return (
    <section
      className="
      relative
      h-screen
      overflow-hidden
      bg-black
      flex
      items-center
      justify-center
      text-white
      "
    >
      {/* ====================================================== */}
      {/* MATRIX */}
      {/* ====================================================== */}

      <MatrixRain />

      {/* ====================================================== */}
      {/* CENTER */}
      {/* ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.7,
        }}
        className="
        relative
        z-10
        w-full
        max-w-5xl
        px-6
        "
      >
        {/* ====================================================== */}
        {/* CARD */}
        {/* ====================================================== */}

        <div
          className="
          relative
          "
        >
          {/* TOP LIGHT */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500/60 to-transparent" />

          {/* INNER GLOW */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/[0.05] via-transparent to-violet-500/[0.05]" />

          {/* CONTENT */}
          <div className="relative p-8 sm:p-12 lg:p-16">
            {/* ====================================================== */}
            {/* ICON */}
            {/* ====================================================== */}

            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="
              mx-auto
              mb-10
              relative
              w-28
              h-28
              sm:w-32
              sm:h-32
              rounded-full
              border
              border-red-500/20
              bg-red-500/10
              flex
              items-center
              justify-center
              "
            >
              {/* GLOW */}
              <div className="absolute inset-0 rounded-full bg-red-500 blur-3xl opacity-20" />

              {/* ICON */}
              <Power size={50} className="text-red-500 relative z-10" />
            </motion.div>

            {/* ====================================================== */}
            {/* TITLE */}
            {/* ====================================================== */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
              }}
              className="
              font-glitch
              glitch-text
              text-center
              text-5xl
              sm:text-7xl
              lg:text-8xl
              text-red-500
              tracking-wider
              mb-8
              "
            >
              SYSTEM OFFLINE
            </motion.h1>

            {/* ====================================================== */}
            {/* SUBTITLE */}
            {/* ====================================================== */}

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
              }}
              className="
              max-w-3xl
              mx-auto
              text-center
              text-zinc-400
              text-base
              sm:text-lg
              lg:text-xl
              leading-relaxed
              mb-12
              "
            >
              SanthoshOS has been safely shutdown.
              <br />
              All frontend systems, deployment services, and neural
              interfaces are now offline.
            </motion.p>

            {/* ====================================================== */}
            {/* SYSTEM BOOT BUTTON */}
            {/* ====================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.5,
              }}
              className="flex justify-center"
            >
              <motion.button
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                onClick={onStart}
                className="
    group
    relative
    overflow-hidden
    cursor-pointer
    "
              >
                {/* OUTER GLOW */}
                <div
                  className="
      absolute
      inset-0
      rounded-[28px]
      bg-gradient-to-r
      from-emerald-500/30
      via-cyan-500/20
      to-violet-500/30
      blur-2xl
      opacity-0
      group-hover:opacity-100
      transition-all
      duration-700
      "
                />

                {/* MAIN CONTAINER */}
                <div
                  className="
      relative
      overflow-hidden
      rounded-[28px]
      border
      border-emerald-500/20
      bg-black/70
      backdrop-blur-2xl
      px-8
      sm:px-10
      py-5
      sm:py-6
      transition-all
      duration-500
      group-hover:border-cyan-400/40
      "
                >
                  {/* TOP LIGHT */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-70" />

                  {/* GRID BG */}
                  <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:20px_20px]" />

                  {/* SCAN LINE */}
                  <div
                    className="
        absolute
        top-0
        -left-full
        w-full
        h-full
        bg-gradient-to-r
        from-transparent
        via-white/10
        to-transparent
        skew-x-12
        group-hover:left-full
        transition-all
        duration-1000
        "
                  />

                  {/* CONTENT */}
                  <div
                    className="
        relative
        flex
        items-center
        gap-5
        "
                  >
                    {/* ICON */}
                    <motion.div
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="
          relative
          w-14
          h-14
          rounded-2xl
          border
          border-emerald-500/20
          bg-emerald-500/10
          flex
          items-center
          justify-center
          "
                    >
                      {/* INNER GLOW */}
                      <div className="absolute inset-0 rounded-2xl bg-emerald-400 blur-xl opacity-20" />

                      <RotateCcw
                        size={28}
                        className="animate-[spin_1.5s_linear_infinite] text-emerald-400 relative z-10"
                      />
                    </motion.div>

                    {/* TEXT */}
                    <div className="text-left">
                      {/* SMALL LABEL */}
                      <p
                        className="
            text-[10px]
            sm:text-xs
            uppercase
            tracking-[0.25em]
            text-zinc-500
            mb-1
            "
                      >
                        Reinitialize_System
                      </p>

                      {/* MAIN */}
                      <h3
                        className="
            font-glitch
            text-2xl
            sm:text-3xl
            text-emerald-400
            tracking-wider
            "
                      >
                        START SYSTEM
                      </h3>
                    </div>

                    {/* STATUS */}
                    <div
                      className="
          hidden
          sm:flex
          items-center
          gap-2
          ml-4
          px-4
          py-2
          rounded-full
          border
          border-emerald-500/20
          bg-emerald-500/[0.05]
          "
                    >
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />

                      <span
                        className="
            text-xs
            uppercase
            tracking-[0.2em]
            text-emerald-400
            "
                      >
                        Ready
                      </span>
                    </div>
                  </div>
                </div>
              </motion.button>
            </motion.div>


            {/* ====================================================== */}
            {/* BOTTOM TEXT */}
            {/* ====================================================== */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.7,
              }}
              className="text-center mt-10"
            >
              <p className="text-zinc-600 text-sm sm:text-base">
                Press START SYSTEM to reboot SanthoshOS.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
