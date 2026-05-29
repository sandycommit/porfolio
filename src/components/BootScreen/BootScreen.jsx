import {
  useEffect,
  useState,
} from "react";
import MatrixRain from "../MatrixRain/MatrixRain";


const bootLogs = [
  "Initializing AI Core...",
  "Loading React Runtime...",
  "Connecting Neural Systems...",
  "Loading Frontend Engine...",
  "Starting Docker Services...",
  "Connecting API Gateway...",
  "System Boot Complete.",
];

export default function BootScreen({
  onComplete,
}) {
  const [visibleLogs, setVisibleLogs] =
    useState([]);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setVisibleLogs((prev) => [
        ...prev,
        bootLogs[index],
      ]);

      index++;

      if (index >= bootLogs.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 1500);
      }
    }, 500);

    return () =>
      clearInterval(interval);
  }, [onComplete]);

  return (
    <section className="relative h-screen bg-black overflow-hidden flex items-center justify-center text-green-400 font-mono">
      <MatrixRain />

      <div className="relative z-10 w-full max-w-5xl px-6">
        <div className="border border-green-500/20 bg-black/60 backdrop-blur-2xl rounded-3xl p-8 sm:p-12">
          <h1 className="font-glitch glitch-text text-4xl sm:text-6xl font-black mb-10">
            Booting Santhosh OS . . . 
          </h1>

          <div className="space-y-4 text-sm sm:text-lg">
            {visibleLogs.map(
              (log, index) => (
                <p key={index}>
                  [OK] {log}
                </p>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}