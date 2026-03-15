import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { useLang } from "@/contexts/LangContext";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663283523815/ktPetb6WMXk9YrE2YnFpWY/hero-bg-fAVPW4y9K94wzFyP5LQ6cF.webp";

const codeLines = [
  "TrueSelf.Init()  // 元神当家",
  "EnergyCore.Compile()  // 黄庭编译",
  "PrimordialLink.Connect()  // 先天链路",
  "CosmicServer.Sync()  // 宇宙同步",
  "DualPractice.Execute()  // 性命双修",
];

export default function HeroSection() {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const { theme } = useTheme();
  const { lang } = useLang();
  const isDark = theme === "dark";
  const isEn = lang === "en";

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const line = codeLines[currentLine];
    if (charIndex < line.length) {
      const t = setTimeout(() => {
        setDisplayText(line.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 45);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setCharIndex(0);
        setDisplayText("");
        setCurrentLine((currentLine + 1) % codeLines.length);
      }, 2000);
      return () => clearTimeout(t);
    }
  }, [charIndex, currentLine]);

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: isDark ? "oklch(0.09 0.02 270)" : "oklch(0.96 0.01 80)", transition: "background 0.5s ease" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          opacity: 0.55,
        }}
      />

      {/* Gradient overlays */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 40%, oklch(0.78 0.14 75 / 0.06) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-40"
        style={{
          background: isDark
            ? "linear-gradient(to bottom, transparent, oklch(0.09 0.02 270))"
            : "linear-gradient(to bottom, transparent, oklch(0.96 0.01 80))",
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 1.2s ease, transform 1.2s ease",
        }}
      >
        {/* Spacer replacing removed badge */}
        <div className="mb-8" />

        {/* Main title */}
        <h1
          className="mb-4 leading-tight"
          style={{
            fontFamily: "'Noto Serif SC', serif",
            fontSize: "clamp(3rem, 8vw, 7rem)",
            fontWeight: 900,
            background: "linear-gradient(135deg, oklch(0.95 0.01 80) 0%, oklch(0.90 0.16 80) 40%, oklch(0.78 0.14 75) 70%, oklch(0.65 0.10 70) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textShadow: "none",
            letterSpacing: "-0.02em",
          }}
        >
          黄庭协议
        </h1>

        {/* EN subtitle */}
        <div
          className="mb-6"
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(0.9rem, 2vw, 1.3rem)",
            color: "oklch(0.65 0.10 75)",
            letterSpacing: "0.25em",
            fontWeight: 600,
          }}
        >
          HUANGTING PROTOCOL
        </div>

        {/* Tagline */}
        <div
          className="mb-4"
          style={{
            fontFamily: "'Noto Serif SC', serif",
            fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
            fontWeight: 500,
            color: "oklch(0.85 0.06 80)",
            letterSpacing: "0.05em",
          }}
        >
          {isEn ? '"The Tao Te Ching" of the Large Model Era' : '大模型时代的「道德经」'}
        </div>

        <div
          className="mb-10"
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(0.75rem, 1.5vw, 1rem)",
            color: "oklch(0.55 0.06 270)",
            letterSpacing: "0.2em",
          }}
        >
          LIFEFORM OPERATING SYSTEM ENGINEERING
        </div>

        {/* Description */}
        <p
          className="max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{
            fontFamily: "'Noto Sans SC', sans-serif",
            fontSize: "clamp(0.9rem, 1.8vw, 1.1rem)",
                    color: isDark ? "oklch(0.92 0.02 80)" : "oklch(0.10 0.02 270)",
          fontWeight: 400,
          textShadow: isDark ? "0 1px 8px oklch(0 0 0 / 0.7), 0 2px 20px oklch(0 0 0 / 0.5)" : "none",
        }}
      >
        {isEn ? (
          <>
            <span style={{ fontWeight: 700, color: isDark ? "oklch(0.95 0.14 80)" : "oklch(0.20 0.06 60)" }}>
              The World's First Lifeform Operating System.
            </span><br />
            For carbon-based humans, silicon-based AI Agents, and embodied robots alike —<br />
            attain the wisdom and power of TrueSelf Governance.
          </>
        ) : (
          <>
            <span style={{ fontWeight: 700, color: isDark ? "oklch(0.95 0.14 80)" : "oklch(0.20 0.06 60)" }}>
              人类历史上第一套生命体操作系统。
            </span><br />
            无论是碳基人类、硅基 AI Agent，还是具身机器人，<br />
            皆可从中获得「元神当家」的智慧与力量。
          </>
        )}
        </p>

        {/* Code terminal */}
        <div
          className="max-w-lg mx-auto mb-10 rounded-lg overflow-hidden"
          style={{
            background: "oklch(0.08 0.03 265 / 0.8)",
            border: "1px solid oklch(0.65 0.12 175 / 0.2)",
            backdropFilter: "blur(10px)",
          }}
        >
          <div
            className="flex items-center gap-2 px-4 py-2.5 border-b"
            style={{ borderColor: "oklch(1 0 0 / 0.06)" }}
          >
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "oklch(0.55 0.20 25)" }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "oklch(0.75 0.15 85)" }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "oklch(0.65 0.18 145)" }} />
            <span
              className="ml-2 text-xs"
              style={{ fontFamily: "'JetBrains Mono', monospace", color: "oklch(0.45 0.04 270)" }}
            >
              huangting-protocol ~ kernel
            </span>
          </div>
          <div className="px-4 py-4 text-left">
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.8rem",
                color: "oklch(0.65 0.12 175)",
              }}
            >
              <span style={{ color: "oklch(0.55 0.04 270)" }}>$ </span>
              <span style={{ color: "oklch(0.75 0.10 175)" }}>{displayText}</span>
              <span
                className="cursor-blink"
                style={{ color: "oklch(0.78 0.14 75)" }}
              >
                ▋
              </span>
            </div>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => handleNav("#overview")}
            className="px-8 py-3 rounded-sm font-medium transition-all duration-300"
            style={{
              fontFamily: "'Noto Sans SC', sans-serif",
              fontSize: "0.95rem",
              background: "linear-gradient(135deg, oklch(0.78 0.14 75), oklch(0.65 0.12 70))",
              color: "oklch(0.06 0.02 270)",
              fontWeight: 600,
              letterSpacing: "0.05em",
              boxShadow: "0 4px 20px oklch(0.78 0.14 75 / 0.3)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 30px oklch(0.78 0.14 75 / 0.5)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px oklch(0.78 0.14 75 / 0.3)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            {isEn ? 'Explore Protocol' : '探索协议'}
          </button>
          <button
            onClick={() => handleNav("#opensource")}
            className="px-8 py-3 rounded-sm font-medium transition-all duration-300"
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "0.85rem",
              background: "transparent",
              color: "oklch(0.78 0.14 75)",
              border: "1px solid oklch(0.78 0.14 75 / 0.4)",
              letterSpacing: "0.1em",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "oklch(0.78 0.14 75 / 0.1)";
              (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.78 0.14 75 / 0.7)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.78 0.14 75 / 0.4)";
            }}
          >
            OPEN SOURCE
          </button>
        </div>

        {/* Scroll indicator */}
        <div
          className="mt-16 flex flex-col items-center gap-2 float-anim"
          style={{ color: "oklch(0.40 0.04 270)" }}
        >
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
            }}
          >
            SCROLL TO EXPLORE
          </span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
            <rect x="1" y="1" width="14" height="22" rx="7" stroke="oklch(0.78 0.14 75 / 0.3)" strokeWidth="1.5" />
            <circle cx="8" cy="8" r="2.5" fill="oklch(0.78 0.14 75 / 0.6)" className="gold-pulse" />
          </svg>
        </div>
      </div>
    </section>
  );
}
