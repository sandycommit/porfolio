import {
  useEffect,
  useState,
} from "react";

import { motion } from "framer-motion";
import MatrixRain from "../MatrixRain/MatrixRain";



export default function InstallationScreen({
  onComplete,
}) {
  const [progress, setProgress] =
    useState(0);

  const logs = [
    "Installing AI Core...",
    "Installing React Runtime...",
    "Installing Neural Engine...",
    "Installing Frontend Systems...",
    "Installing Security Layer...",
    "Optimizing Developer Experience...",
    "Loading SanthoshOS...",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            onComplete();
          }, 1500);

          return 100;
        }

        return prev + 5;
      });
    }, 180);

    return () =>
      clearInterval(interval);
  }, [onComplete]);

  return (
    <section className="relative h-screen overflow-hidden bg-black flex items-center justify-center text-green-400 font-mono">
      <MatrixRain />

      <div className="relative z-10 w-full max-w-5xl px-6">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="border border-green-500/20 bg-black/60 backdrop-blur-2xl rounded-3xl p-8 sm:p-12"
        >
          <h1 className="font-glitch glitch-text text-4xl sm:text-6xl font-black mb-10">
            Santhosh OS Installer . . .
          </h1>

          <div className="space-y-4 mb-10">
            {logs
              .slice(
                0,
                Math.floor(
                  progress / 15
                )
              )
              .map((log, index) => (
                <p key={index}>
                  ✓ {log}
                </p>
              ))}
          </div>

          <div className="w-full h-4 rounded-full bg-white/10 overflow-hidden mb-5">
            <motion.div
              animate={{
                width: `${progress}%`,
              }}
              className="h-full bg-gradient-to-r from-green-400 to-cyan-400"
            />
          </div>

          <p className="text-lg">
            Progress: {progress}%
          </p>
        </motion.div>
      </div>
    </section>
  );
}