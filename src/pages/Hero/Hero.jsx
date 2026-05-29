import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Mail,
  // Github,
  // Linkedin,
  // Twitter,
  Database,
  Cpu,
  Cloud,
  Layers3,
  //  Sparkles,
  //   Play,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import MatrixRain from "../../components/MatrixRain/MatrixRain";

const fakeFileSystem = {
  root: {
    projects: {
      "autotap.txt": "AI automation browser extension",
      "devlens.txt": "AI code review assistant",
      "querylens.txt": "Database optimization platform",
    },

    documents: {
      "resume.txt": "Full Stack Developer Resume",
      "about.txt": "Santhosh Kumar Portfolio",
    },

    music: {
      "cyberpunk.mp3": "Playing cyberpunk soundtrack...",
    },
  },
};

export default function Hero({ setSystemState }) {
  const techIcons = [
    {
      icon: FaGithub,
      color: "text-blue-400",
    },
    {
      icon: Database,
      color: "text-emerald-400",
    },
    {
      icon: Cpu,
      color: "text-violet-400",
    },
    {
      icon: Cloud,
      color: "text-cyan-400",
    },
    {
      icon: Layers3,
      color: "text-yellow-400",
    },
  ];

  /* ========================================================= */
  /* STATES */
  /* ========================================================= */

  const [input, setInput] = useState("");

  const [history, setHistory] = useState([]);

  const [theme, setTheme] = useState("cyan");

  const [currentPath, setCurrentPath] = useState("/root");

  const [booting, setBooting] = useState(true);

  const [typingText, setTypingText] = useState("");

  const [matrixRain, setMatrixRain] = useState(false);

  const [soundEnabled, setSoundEnabled] = useState(true);

  const [musicPlaying, setMusicPlaying] = useState(false);

  const [aiThinking, setAiThinking] = useState(false);

  const [commandHistory, setCommandHistory] = useState([]);

  const [historyIndex, setHistoryIndex] = useState(-1);

  const inputRef = useRef(null);

  /* ========================================================= */
  /* THEMES */
  /* ========================================================= */

  const themes = {
    cyan: {
      text: "text-cyan-400",
      border: "border-cyan-500/20",
      glow: "shadow-[0_0_60px_rgba(6,182,212,0.18)]",
      bg: "bg-cyan-400",
      button: "from-cyan-500 to-blue-500",
    },

    violet: {
      text: "text-violet-400",
      border: "border-violet-500/20",
      glow: "shadow-[0_0_60px_rgba(139,92,246,0.18)]",
      bg: "bg-violet-400",
      button: "from-violet-500 to-purple-600",
    },

    emerald: {
      text: "text-emerald-400",
      border: "border-emerald-500/20",
      glow: "shadow-[0_0_60px_rgba(16,185,129,0.18)]",
      bg: "bg-emerald-400",
      button: "from-emerald-500 to-green-600",
    },

    yellow: {
      text: "text-yellow-400",
      border: "border-yellow-500/20",
      glow: "shadow-[0_0_60px_rgba(234,179,8,0.18)]",
      bg: "bg-yellow-400",
      button: "from-yellow-500 to-orange-500",
    },
  };

  /* ========================================================= */
  /* BOOT SEQUENCE */
  /* ========================================================= */

  useEffect(() => {
    const bootMessages = [
      "Initializing SanthoshOS v3.0...",
      "Loading Neural Engine...",
      "Initializing AI Core...",
      "Connecting Automation Systems...",
      "Loading SaaS Ecosystem...",
      "Boot Complete.",
    ];

    let i = 0;

    const interval = setInterval(() => {
      if (i < bootMessages.length) {
        setHistory((prev) => [
          ...prev,
          {
            type: "boot",
            output: bootMessages[i],
          },
        ]);

        i++;
      } else {
        clearInterval(interval);

        setTimeout(() => {
          setBooting(false);
        }, 800);
      }
    }, 700);

    return () => clearInterval(interval);
  }, []);

  /* ========================================================= */
  /* AUTO FOCUS */
  /* ========================================================= */

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  /* ========================================================= */
  /* TYPING EFFECT */
  /* ========================================================= */

  useEffect(() => {
    const text = "AI Engineer • SaaS Builder • Automation Architect";

    let i = 0;

    const interval = setInterval(() => {
      setTypingText(text.slice(0, i));

      i++;

      if (i > text.length) {
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  /* ========================================================= */
  /* SOUND */
  /* ========================================================= */

  const playSound = () => {
    if (!soundEnabled) return;

    const audio = new Audio(
      "https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3",
    );

    audio.volume = 0.2;

    audio.play();
  };

  /* ========================================================= */
  /* AI RESPONSES */
  /* ========================================================= */

  const aiResponses = {
    hello: "Hello human. SanthoshOS AI Assistant online.",

    portfolio:
      "This portfolio showcases futuristic SaaS systems, AI tools, and automation platforms.",

    hire: "Excellent choice. Initializing elite engineering workflow.",

    react: "React ecosystem detected. Component architecture optimized.",

    ai: "AI-native systems are the future of software engineering.",

    future: "The future belongs to builders shipping intelligent products.",
  };

  /* ========================================================= */
  /* COMMANDS */
  /* ========================================================= */

  const commands = {
    help: `
Available Commands:

help
clear / cls
about
skills
projects
products
contact
socials
resume
whoami
date
github

theme cyan
theme violet
theme emerald
theme yellow

restart
shutdown

matrix on
matrix off

sound on
sound off

music play
music stop

cd projects
cd documents
ls
pwd

open autotap
open devlens
open querylens

sudo hire santhosh

ai <question>
`,

    about: `
Santhosh Kumar
Full Stack Developer & Product Builder

Focused on:
- AI Products
- SaaS Platforms
- Automation Systems
- Chrome Extensions
- Modern Web Architecture
`,

    skills: `
Frontend:
- React
- Next.js
- TailwindCSS
- Framer Motion

Backend:
- FastAPI
- Django
- PostgreSQL
- Redis

AI:
- OpenAI API
- LangChain
- Vector DBs
`,

    projects: `
Featured Projects:

→ AutoTap
→ DevLens
→ QueryLens
→ ConvertX
→ PingPulse
`,

    products: `
Products:

→ AI SaaS Platforms
→ Developer Tools
→ Automation Systems
→ Browser Extensions
`,

    socials: `
GitHub   → github.com
LinkedIn → linkedin.com
Twitter  → twitter.com
`,

    contact: `
Email: santhosh@example.com
Location: Tamil Nadu, India
Status: Available for freelance
`,

    resume: `
Resume Available

Tech Stack:
- React
- FastAPI
- PostgreSQL
- AI Systems
`,

    github: `
GitHub Stats:

Stars: 8.4k+
Followers: 340+
Repositories: 48
Contributions: 3402+
`,

    whoami: `
Founder.
Engineer.
Builder.
Creator of futuristic digital systems.
`,
  };

  /* ========================================================= */
  /* ADD TO HISTORY */
  /* ========================================================= */

  const addToHistory = (command, output) => {
    setHistory((prev) => [
      ...prev,
      {
        command,
        output,
      },
    ]);
  };

  /* ========================================================= */
  /* EXECUTE COMMAND */
  /* ========================================================= */

  const executeCommand = (command) => {
    const cmd = command.trim();

    playSound();

    setCommandHistory((prev) => [...prev, cmd]);

    setHistoryIndex(-1);

    /* CLEAR */

    if (cmd === "clear" || cmd === "cls") {
      setHistory([]);

      return;
    }

    /* DATE */

    if (cmd === "date") {
      addToHistory(command, new Date().toString());

      return;
    }

    /* PWD */

    if (cmd === "pwd") {
      addToHistory(command, currentPath);

      return;
    }

    /* LS */

    if (cmd === "ls") {
      const currentDir = currentPath.split("/")[2];

      const files = fakeFileSystem.root[currentDir];

      if (files) {
        addToHistory(command, Object.keys(files).join("\n"));
      } else {
        addToHistory(command, "Directory empty");
      }

      return;
    }

    /* CD */

    if (cmd.startsWith("cd ")) {
      const dir = cmd.split(" ")[1];

      if (fakeFileSystem.root[dir]) {
        setCurrentPath(`/root/${dir}`);

        addToHistory(command, `Moved to ${dir}`);
      } else {
        addToHistory(command, "Directory not found");
      }

      return;
    }

    /* THEME */

    if (cmd.startsWith("theme ")) {
      const selected = cmd.split(" ")[1];

      if (themes[selected]) {
        setTheme(selected);

        addToHistory(command, `Theme switched to ${selected}`);
      } else {
        addToHistory(command, "Invalid theme");
      }

      return;
    }

    /* MATRIX */

    if (cmd === "matrix on") {
      setMatrixRain(true);

      addToHistory(command, "Matrix mode enabled");

      return;
    }

    if (cmd === "matrix off") {
      setMatrixRain(false);

      addToHistory(command, "Matrix mode disabled");

      return;
    }

    /* SOUND */

    if (cmd === "sound on") {
      setSoundEnabled(true);

      addToHistory(command, "Sound enabled");

      return;
    }

    if (cmd === "sound off") {
      setSoundEnabled(false);

      addToHistory(command, "Sound disabled");

      return;
    }

    /* MUSIC */

    if (cmd === "music play") {
      setMusicPlaying(true);

      addToHistory(command, "Cyberpunk soundtrack started...");

      return;
    }

    if (cmd === "music stop") {
      setMusicPlaying(false);

      addToHistory(command, "Music stopped");

      return;
    }

    /* RESTART */

    if (cmd === "restart") {
      addToHistory(
        command,
        `
Restarting SanthoshOS...
`,
      );

      setTimeout(() => {
        setSystemState("boot");
      }, 2000);

      return;
    }

    /* SHUTDOWN */

    if (cmd === "shutdown") {
      addToHistory(
        command,
        `
Shutting down SanthoshOS...
`,
      );

      setTimeout(() => {
        setSystemState("shutdown");
      }, 2000);

      return;
    }

    /* OPEN */

    if (cmd.startsWith("open ")) {
      const project = cmd.split(" ")[1];

      addToHistory(command, `Opening ${project} project...`);

      return;
    }

    /* SUDO */

    if (cmd === "sudo hire santhosh") {
      addToHistory(
        command,
        `
ACCESS GRANTED

Santhosh hired successfully.

Initializing elite engineering systems...
`,
      );

      return;
    }

    /* AI */

    if (cmd.startsWith("ai ")) {
      const question = cmd.replace("ai ", "").toLowerCase();

      setAiThinking(true);

      setTimeout(() => {
        setAiThinking(false);

        addToHistory(
          command,
          aiResponses[question] || "AI Assistant processing completed.",
        );
      }, 1500);

      return;
    }

    /* NORMAL COMMANDS */

    if (commands[cmd]) {
      addToHistory(command, commands[cmd]);

      return;
    }

    /* NOT FOUND */

    addToHistory(command, `Command not found: ${cmd}`);
  };

  /* ========================================================= */
  /* KEYBOARD */
  /* ========================================================= */

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      executeCommand(input);

      setInput("");
    }

    /* ARROW UP */

    if (e.key === "ArrowUp") {
      e.preventDefault();

      const newIndex =
        historyIndex < commandHistory.length - 1
          ? historyIndex + 1
          : historyIndex;

      setHistoryIndex(newIndex);

      setInput(commandHistory[commandHistory.length - 1 - newIndex] || "");
    }

    /* ARROW DOWN */

    if (e.key === "ArrowDown") {
      e.preventDefault();

      const newIndex = historyIndex > 0 ? historyIndex - 1 : -1;

      setHistoryIndex(newIndex);

      if (newIndex === -1) {
        setInput("");
      } else {
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || "");
      }
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* ========================= */}
      {/* BACKGROUND EFFECTS */}
      {/* ========================= */}

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-violet-700/20 blur-[160px]" />

      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 blur-[180px]" />

      {/* Animated Dots */}
      <div className="absolute top-32 left-[30%] w-2 h-2 bg-violet-500 rounded-full animate-pulse" />

      <div className="absolute bottom-32 right-[20%] w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />

      {/* MATRIX */}
      {matrixRain && (
        <div className="absolute inset-0 z-0">
          <MatrixRain />
        </div>
      )}

      {/* ========================= */}
      {/* MAIN CONTENT */}
      {/* ========================= */}

      <div
        className="
relative
max-w-7xl
mx-auto
px-4
sm:px-6
md:px-10
pt-24
sm:pt-28
xl:pt-32
pb-16
sm:pb-20
"
      >
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-20 items-center">
          {/* ================================================= */}
          {/* LEFT CONTENT */}
          {/* ================================================= */}

          <div className="xl:col-span-5 w-full">
            {/* TERMINAL TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-8"
            >
              <span className="text-cyan-400 text-xl">{">_"}</span>

              <p className="text-cyan-400 text-lg font-medium tracking-wide">
                guest@santhosh:~$ ./init_profile
              </p>

              <span className="w-3 h-6 bg-cyan-400 animate-pulse" />
            </motion.div>

            {/* STATUS BADGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-violet-500/30 bg-violet-500/10 backdrop-blur-md mb-10"
            >
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />

              <span className="uppercase tracking-[0.2em] text-sm font-semibold text-violet-300">
                System Online & Accepting Contracts
              </span>
            </motion.div>

            {/* MAIN HEADING */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="
text-5xl
sm:text-6xl
md:text-7xl
xl:text-8xl
font-black
leading-[0.95]
tracking-tight
mb-6
"
            >
              Santhosh <span className="text-white/90">Kumar</span>
            </motion.h1>

            {/* ROLE */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="
text-2xl
sm:text-3xl
md:text-4xl
font-light
text-cyan-400
mb-8
"
            >
              Full Stack Developer & Product Builder
            </motion.h2>

            {/* DESCRIPTION */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="border-l-2 border-violet-500 pl-6 mb-12"
            >
              <p
                className="
text-zinc-400
text-base
sm:text-lg
xl:text-xl
leading-relaxed
max-w-2xl
"
              >
                "I build scalable AI tools, SaaS platforms, automation systems,
                and modern web products."
              </p>
            </motion.div>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="
flex
flex-col
sm:flex-row
w-full
gap-4
sm:gap-5
mb-12
"
            >
              {/* PRIMARY BUTTON */}
              <motion.a
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                href="#projects"
                className="group relative overflow-hidden px-8 py-5 rounded-2xl bg-gradient-to-r from-violet-500 to-purple-600 text-white text-lg font-semibold shadow-[0_0_40px_rgba(139,92,246,0.4)]"
              >
                <span className="relative z-10 flex items-center gap-3">
                  View Projects
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-all duration-300"
                  />
                </span>

                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </motion.a>

              {/* SECONDARY BUTTON */}
              <motion.a
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                href="#contact"
                className="flex items-center justify-center gap-3 px-8 py-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-white text-lg hover:border-violet-500/40 transition-all duration-300"
              >
                Contact Me
                <Mail size={20} />
              </motion.a>
            </motion.div>

            {/* TECH STACK */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm mb-6">
                Tech Stack Link
              </p>

              <div className="flex items-center gap-5 mb-12">
                {techIcons.map((tech, index) => {
                  const Icon = tech.icon;

                  return (
                    <motion.div
                      whileHover={{
                        y: -6,
                        scale: 1.1,
                      }}
                      key={index}
                      className="group relative w-16 h-16 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center cursor-pointer overflow-hidden"
                    >
                      {/* Hover Glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500" />

                      <Icon
                        size={26}
                        className={`${tech.color} relative z-10`}
                      />
                    </motion.div>
                  );
                })}
              </div>

              {/* STATS CARD */}
              {/* <div className="max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
                <div className="grid grid-cols-2">
                  <div className="p-6 border-r border-white/10">
                    <p className="text-zinc-500 text-sm mb-2">
                      Open Source Stars
                    </p>

                    <h3 className="text-3xl font-bold text-white">4,208+</h3>
                  </div>

                  <div className="p-6">
                    <p className="text-zinc-500 text-sm mb-2">Contributions</p>

                    <h3 className="text-3xl font-bold text-violet-400">
                      1,840
                    </h3>
                  </div>
                </div>
              </div> */}
            </motion.div>
          </div>

          {/* ================================================= */}
          {/* RIGHT VISUAL SIDE */}
          {/* ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="xl:col-span-7 w-full"
          >
            <div
              className={`rounded-2xl sm:rounded-3xl border bg-[#09090f]/95 backdrop-blur-2xl overflow-hidden ${themes[theme].border} ${themes[theme].glow}`}
            >
              {/* HEADER */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/[0.03]">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500" />

                  <div className="w-3 h-3 rounded-full bg-yellow-500" />

                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>

                <div className={`${themes[theme].text} font-mono text-sm`}>
                  SanthoshOS v3.0
                </div>
              </div>

              {/* TERMINAL BODY */}
              <div
                style={{
                  scrollBehavior: "smooth",
                }}
                className="terminal-scrollbar h-[370px] sm:h-[450px] md:h-[550px] xl:h-[600px] overflow-y-auto overflow-x-hidden p-4 sm:p-6 xl:p-8 font-mono text-xs sm:text-sm scroll-smooth"
              >
                {/* HISTORY */}
                <div className="space-y-6">
                  {history.map((item, index) => (
                    <div key={index}>
                      {item.command && (
                        <p className={`${themes[theme].text} mb-2`}>
                          guest@santhosh:
                          {currentPath}$ {item.command}
                        </p>
                      )}

                      <pre className="text-zinc-300 whitespace-pre-wrap break-words leading-6 sm:leading-7 overflow-x-auto">
                        {item.output}
                      </pre>
                    </div>
                  ))}
                </div>

                {/* MUSIC */}
                {musicPlaying && (
                  <div className="mt-6 text-pink-400 animate-pulse">
                    ♪ Cyberpunk soundtrack playing...
                  </div>
                )}

                {/* AI THINKING */}
                {aiThinking && (
                  <div className="mt-6 text-violet-400 animate-pulse">
                    AI Assistant thinking...
                  </div>
                )}

                {/* INPUT */}
                {!booting && (
                  <div className="flex items-start sm:items-center gap-2 sm:gap-3 mt-8 flex-wrap">
                    <span className={themes[theme].text}>
                      guest@santhosh:
                      {currentPath}$
                    </span>

                    <input
                      ref={inputRef}
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      autoFocus
                      spellCheck={false}
                      autoComplete="off"
                      className={`
bg-transparent
outline-none
flex-1
min-w-[120px]
w-full
${themes[theme].text}
`}
                    />

                    <span
                      className={`w-2 h-5 animate-pulse ${themes[theme].bg}`}
                    />
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
