import { useEffect, useState } from "react";

import {
  Menu,
  X,
  Download,
  FileText,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  /* ====================================================== */
  /* STATES */
  /* ====================================================== */

  const [isScrolled, setIsScrolled] = useState(false);

  const [mobileMenu, setMobileMenu] = useState(false);

  const [resumeOpen, setResumeOpen] = useState(false);

  /* ====================================================== */
  /* EFFECT */
  /* ====================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ====================================================== */
  /* NAV ITEMS */
  /* ====================================================== */

  const navItems = [
    {
      name: "Projects",
      href: "#projects",
    },

    {
      name: "Skills",
      href: "#skills",
    },

    {
      name: "Timeline",
      href: "#timeline",
    },

    // {
    //   name: "Products",
    //   href: "#products",
    // },

    {
      name: "Contact",
      href: "#contact",
    },
  ];

  /* ====================================================== */
  /* RESUME */
  /* ====================================================== */

  const resumeUrl = "/resume.pdf";

  return (
    <>
      {/* ====================================================== */}
      {/* NAVBAR */}
      {/* ====================================================== */}

      <motion.nav
        initial={{
          y: -80,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
        }}
        className={`
        fixed
        top-0
        left-0
        w-full
        z-50
        transition-all
        duration-500
        ${
          isScrolled
            ? `
              backdrop-blur-2xl
              bg-black/40
              border-b
              border-white/10
              shadow-[0_8px_32px_rgba(0,0,0,0.37)]
            `
            : "bg-transparent"
        }
        `}
      >
        {/* ====================================================== */}
        {/* BACKGROUND */}
        {/* ====================================================== */}

        {/* GLOW */}
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-transparent to-cyan-500/10 pointer-events-none" />

        {/* GRID */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />

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
          <div
            className="
            h-20
            flex
            items-center
            justify-between
            "
          >
            {/* ====================================================== */}
            {/* LOGO */}
            {/* ====================================================== */}

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
                  className="group relative flex items-center gap-4" >
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

            {/* ====================================================== */}
            {/* DESKTOP NAV */}
            {/* ====================================================== */}

            <div className="hidden lg:flex items-center gap-10">
              {navItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  whileHover={{
                    y: -2,
                  }}
                  className="
                  relative
                  text-sm
                  uppercase
                  tracking-[0.2em]
                  text-zinc-400
                  hover:text-white
                  transition-all
                  duration-300
                  group
                  "
                >
                  <span className="text-violet-500 mr-2">//</span>

                  {item.name}

                  {/* HOVER LINE */}
                  <span
                    className="
                    absolute
                    -bottom-2
                    left-0
                    w-0
                    h-[1px]
                    bg-gradient-to-r
                    from-violet-500
                    to-cyan-500
                    transition-all
                    duration-300
                    group-hover:w-full
                    "
                  />
                </motion.a>
              ))}
            </div>

            {/* ====================================================== */}
            {/* RIGHT ACTIONS */}
            {/* ====================================================== */}

            <div className="hidden lg:flex items-center gap-4">
              {/* RESUME */}
              <motion.button
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                onClick={() => setResumeOpen(true)}
                className="
                cursor-pointer
                flex
                items-center
                gap-2
                px-5
                py-2.5
                rounded-xl
                border
                border-white/10
                bg-white/[0.03]
                text-zinc-300
                hover:text-white
                hover:border-violet-500/20
                transition-all
                duration-300
                "
              >
                <FileText size={16} />
                Resume
              </motion.button>

              {/* CTA */}
              <motion.a
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                href="#contact"
                className="
                relative
                overflow-hidden
                px-5
                py-2.5
                rounded-xl
                bg-gradient-to-r
                from-violet-600
                to-indigo-600
                text-white
                text-sm
                font-medium
                shadow-[0_0_20px_rgba(139,92,246,0.4)]
                "
              >
                <span className="relative z-10 flex items-center gap-2">
                  Hire Me
                  <ArrowUpRight size={16} />
                </span>

                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-violet-500 opacity-0 hover:opacity-100 transition-opacity duration-500" />
              </motion.a>
            </div>

            {/* ====================================================== */}
            {/* MOBILE BUTTON */}
            {/* ====================================================== */}

            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="
              lg:hidden
              text-white
              w-12
              h-12
              rounded-xl
              border
              border-white/10
              bg-white/[0.03]
              flex
              items-center
              justify-center
              "
            >
              {mobileMenu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* ====================================================== */}
        {/* MOBILE MENU */}
        {/* ====================================================== */}

        <AnimatePresence>
          {mobileMenu && (
            <motion.div
              initial={{
                opacity: 0,
                y: -30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
              lg:hidden
              border-t
              border-white/10
              bg-black/90
              backdrop-blur-2xl
              "
            >
              <div className="flex flex-col px-6 py-6 gap-5">
                {navItems.map((item, index) => (
                  <motion.a
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.05,
                    }}
                    key={index}
                    href={item.href}
                    onClick={() => setMobileMenu(false)}
                    className="
                      flex
                      items-center
                      justify-between
                      text-zinc-300
                      text-lg
                      tracking-wide
                      hover:text-violet-400
                      transition-all
                      "
                  >
                    <div>
                      <span className="text-violet-500 mr-2">//</span>

                      {item.name}
                    </div>

                    <ArrowUpRight size={18} />
                  </motion.a>
                ))}

                {/* RESUME */}
                <button
                  onClick={() => {
                    setResumeOpen(true);

                    setMobileMenu(false);
                  }}
                  className="
                  cursor-pointer
                  flex
                  items-center
                  justify-center
                  gap-3
                  w-full
                  py-3
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  text-zinc-300
                  "
                >
                  <FileText size={18} />
                  Resume
                </button>

                {/* CTA */}
                <a
                  href="#contact"
                  className="
                  mt-2
                  w-full
                  text-center
                  py-3
                  rounded-xl
                  bg-gradient-to-r
                  from-violet-600
                  to-indigo-600
                  text-white
                  font-medium
                  "
                >
                  Hire Me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* ====================================================== */}
      {/* RESUME MODAL */}
      {/* ====================================================== */}

      <AnimatePresence>
        {resumeOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="
            fixed
            inset-0
            z-[100]
            bg-black/80
            backdrop-blur-xl
            flex
            items-center
            justify-center
            p-4
            "
          >
            {/* MODAL */}
            <motion.div
              initial={{
                scale: 0.9,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.9,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
              relative
              w-full
              max-w-6xl
              h-[90vh]
              rounded-[32px]
              border
              border-white/10
              bg-[#09090f]
              overflow-hidden
              "
            >
              {/* HEADER */}
              <div
                className="
                flex
                items-center
                justify-between
                px-4
                sm:px-6
                py-4
                border-b
                border-white/10
                "
              >
                {/* LEFT */}
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500" />

                  <div className="w-3 h-3 rounded-full bg-yellow-500" />

                  <div className="w-3 h-3 rounded-full bg-green-500" />

                  <div className="hidden sm:flex items-center gap-2 ml-4">
                    <Sparkles size={16} className="text-violet-400" />

                    <p className="text-zinc-400 text-sm">Resume Preview</p>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="flex items-center gap-3">
                  {/* DOWNLOAD */}
                  <a
                    href={resumeUrl}
                    download
                    className="
                    flex
                    items-center
                    gap-2
                    px-4
                    sm:px-5
                    py-2.5
                    rounded-xl
                    bg-gradient-to-r
                    from-violet-600
                    to-indigo-600
                    text-white
                    text-sm
                    font-medium
                    "
                  >
                    <Download size={18} />

                    <span className="hidden sm:block">Download</span>
                  </a>

                  {/* CLOSE */}
                  <button
                    onClick={() => setResumeOpen(false)}
                    className="
                    cursor-pointer
                    w-11
                    h-11
                    rounded-xl
                    border
                    border-white/10
                    flex
                    items-center
                    justify-center
                    text-zinc-400
                    hover:text-white
                    "
                  >
                    <X size={22} />
                  </button>
                </div>
              </div>

              {/* PDF */}
              <iframe src={resumeUrl} className="w-full h-full bg-white" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
