import { useEffect, useState } from "react";

export default function MatrixRain() {
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    const createColumns = () => {
      const count = window.innerWidth < 768 ? 18 : 45;

      const generated = Array.from({ length: count }, (_, i) => ({
        id: i,

        left: `${(i * 100) / count}%`,

        duration: Math.random() * 8 + 10,

        delay: -(Math.random() * 20),

        size: Math.random() > 0.5 ? "text-sm" : "text-xs",

        chars: Array.from({ length: 60 }, () =>
          "01アイウエオハッカーサイバー".charAt(Math.floor(Math.random() * 15)),
        ),
      }));

      setColumns(generated);
    };

    createColumns();

    window.addEventListener("resize", createColumns);

    return () => window.removeEventListener("resize", createColumns);
  }, []);

  return (
    <div
      className="
      pointer-events-none
      absolute
      inset-0
      overflow-hidden
      z-0
      "
    >
      {columns.map((column) => (
        <div
          key={column.id}
          className={`
          absolute
          top-0
          text-green-400/70
          font-mono
          whitespace-pre
          leading-5
          ${column.size}
          matrix-column
          `}
          style={{
            left: column.left,

            animationDuration: `${column.duration}s`,

            animationDelay: `${column.delay}s`,
          }}
        >
          {column.chars.map((char, index) => (
            <div key={index}>{char}</div>
          ))}
        </div>
      ))}
    </div>
  );
}
