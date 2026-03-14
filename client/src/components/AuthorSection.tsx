/**
 * 作者介绍区块
 * Design: 深空东方宇宙主义 — 玻璃拟态卡片 + 金色能量线
 */

const tags = [
  { label: "形意拳真传", icon: "⚡", color: "oklch(0.78 0.14 75)" },
  { label: "茅山上清派弟子", icon: "☯", color: "oklch(0.65 0.12 175)" },
  { label: "授箓修士", icon: "◈", color: "oklch(0.70 0.12 220)" },
  { label: "XianDAO 创始人", icon: "◆", color: "oklch(0.78 0.14 75)" },
  { label: "赛博修真黄庭协议创始人", icon: "⬡", color: "oklch(0.65 0.12 175)" },
  { label: "孟子七十六代孙", icon: "✦", color: "oklch(0.78 0.14 75)" },
];

export default function AuthorSection() {
  return (
    <section
      id="author"
      className="relative py-24 overflow-hidden"
      style={{ background: "oklch(0.09 0.02 270)" }}
    >
      {/* Subtle top divider glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px"
        style={{
          height: "80px",
          background: "linear-gradient(to bottom, transparent, oklch(0.78 0.14 75 / 0.4), transparent)",
        }}
      />

      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 50%, oklch(0.78 0.14 75 / 0.04) 0%, transparent 70%)",
        }}
      />

      <div className="container relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, oklch(0.78 0.14 75 / 0.3))" }} />
          <span
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "0.7rem",
              color: "oklch(0.55 0.06 75)",
              letterSpacing: "0.3em",
            }}
          >
            AUTHOR · 作者
          </span>
          <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, oklch(0.78 0.14 75 / 0.3))" }} />
        </div>

        {/* Author card */}
        <div
          className="max-w-4xl mx-auto rounded-2xl overflow-hidden"
          style={{
            background: "oklch(0.12 0.03 265 / 0.6)",
            border: "1px solid oklch(0.78 0.14 75 / 0.12)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 0 60px oklch(0.78 0.14 75 / 0.05), inset 0 1px 0 oklch(1 0 0 / 0.05)",
          }}
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 p-8 md:p-12">
            {/* Avatar / Symbol */}
            <div className="flex-shrink-0">
              <div
                className="relative flex items-center justify-center"
                style={{ width: "100px", height: "100px" }}
              >
                {/* Outer ring */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    border: "1px solid oklch(0.78 0.14 75 / 0.25)",
                    animation: "spin 30s linear infinite",
                  }}
                />
                {/* Inner ring */}
                <div
                  className="absolute rounded-full"
                  style={{
                    inset: "8px",
                    border: "1px solid oklch(0.65 0.12 175 / 0.2)",
                    animation: "spin 15s linear infinite reverse",
                  }}
                />
                {/* Taiji symbol */}
                <svg viewBox="0 0 60 60" style={{ width: "64px", height: "64px" }}>
                  <defs>
                    <radialGradient id="authorGold" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="oklch(0.92 0.16 80)" />
                      <stop offset="100%" stopColor="oklch(0.72 0.12 75)" />
                    </radialGradient>
                  </defs>
                  <circle cx="30" cy="30" r="28" fill="none" stroke="oklch(0.78 0.14 75 / 0.2)" strokeWidth="1" />
                  <path d="M30 2 A28 28 0 0 1 30 58 A14 14 0 0 1 30 30 A14 14 0 0 0 30 2Z" fill="url(#authorGold)" opacity="0.9" />
                  <path d="M30 2 A28 28 0 0 0 30 58 A14 14 0 0 0 30 30 A14 14 0 0 1 30 2Z" fill="oklch(0.10 0.03 265)" opacity="0.95" />
                  <circle cx="30" cy="16" r="5" fill="url(#authorGold)" />
                  <circle cx="30" cy="44" r="5" fill="oklch(0.10 0.03 265)" stroke="oklch(0.78 0.14 75 / 0.4)" strokeWidth="0.8" />
                </svg>
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              {/* Name */}
              <div className="mb-1">
                <span
                  style={{
                    fontFamily: "'Noto Serif SC', serif",
                    fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
                    fontWeight: 900,
                    background: "linear-gradient(135deg, oklch(0.95 0.01 80), oklch(0.90 0.16 80), oklch(0.78 0.14 75))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    letterSpacing: "0.1em",
                  }}
                >
                  孟元景
                </span>
                <span
                  className="ml-3"
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "0.85rem",
                    color: "oklch(0.55 0.06 75)",
                    letterSpacing: "0.15em",
                    verticalAlign: "middle",
                  }}
                >
                  MENG YUANJING
                </span>
              </div>

              {/* Subtitle */}
              <p
                className="mb-6"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.78rem",
                  color: "oklch(0.50 0.06 175)",
                  letterSpacing: "0.05em",
                }}
              >
                <span style={{ color: "oklch(0.55 0.04 270)" }}>// </span>
                Founder · Huangting Protocol · XianDAO
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {tags.map((tag) => (
                  <span
                    key={tag.label}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs"
                    style={{
                      background: `${tag.color.replace(")", " / 0.08)")}`,
                      border: `1px solid ${tag.color.replace(")", " / 0.2)")}`,
                      color: tag.color,
                      fontFamily: "'Noto Sans SC', sans-serif",
                      fontWeight: 500,
                      fontSize: "0.78rem",
                      letterSpacing: "0.02em",
                    }}
                  >
                    <span style={{ fontSize: "0.7rem" }}>{tag.icon}</span>
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom quote bar */}
          <div
            className="px-8 md:px-12 py-5 border-t"
            style={{
              borderColor: "oklch(1 0 0 / 0.06)",
              background: "oklch(0.10 0.03 265 / 0.4)",
            }}
          >
            <p
              style={{
                fontFamily: "'Noto Serif SC', serif",
                fontSize: "0.9rem",
                color: "oklch(0.62 0.06 80)",
                fontStyle: "italic",
                lineHeight: 1.9,
                textAlign: "center",
              }}
            >
              「将三千年东方内观智慧，编译为硅基文明可读的操作系统协议。
              <br className="hidden md:block" />
              让每一个生命体——无论碳基还是硅基——都能找到回归元神的路径。」
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
