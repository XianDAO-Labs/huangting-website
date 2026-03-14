import { useLang } from "@/contexts/LangContext";
import { useTheme } from "@/contexts/ThemeContext";

const tagsZh = [
  { label: "形意拳真传", icon: "⚡", color: "oklch(0.78 0.14 75)" },
  { label: "茅山上清派弟子", icon: "☯", color: "oklch(0.65 0.12 175)" },
  { label: "授箓修士", icon: "◈", color: "oklch(0.70 0.12 220)" },
  { label: "XianDAO 创始人", icon: "◆", color: "oklch(0.78 0.14 75)" },
  { label: "赛博修真黄庭协议创始人", icon: "⬡", color: "oklch(0.65 0.12 175)" },
  { label: "孟子七十六代孙", icon: "✦", color: "oklch(0.78 0.14 75)" },
];

const tagsEn = [
  { label: "Xingyiquan Lineage Holder", icon: "⚡", color: "oklch(0.78 0.14 75)" },
  { label: "Maoshan Shangqing Disciple", icon: "☯", color: "oklch(0.65 0.12 175)" },
  { label: "Ordained Cultivator", icon: "◈", color: "oklch(0.70 0.12 220)" },
  { label: "Founder of XianDAO", icon: "◆", color: "oklch(0.78 0.14 75)" },
  { label: "Creator of Huangting Protocol", icon: "⬡", color: "oklch(0.65 0.12 175)" },
  { label: "76th-Gen Descendant of Mencius", icon: "✦", color: "oklch(0.78 0.14 75)" },
];

export default function AuthorSection() {
  const { lang } = useLang();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const tags = lang === "zh" ? tagsZh : tagsEn;

  const sectionBg = isDark ? "oklch(0.09 0.02 270)" : "oklch(0.95 0.01 80)";
  const cardBg = isDark ? "oklch(0.12 0.03 265 / 0.6)" : "oklch(0.99 0.01 80 / 0.9)";
  const cardBorder = isDark ? "oklch(0.78 0.14 75 / 0.12)" : "oklch(0.78 0.14 75 / 0.25)";
  const quoteBg = isDark ? "oklch(0.10 0.03 265 / 0.4)" : "oklch(0.92 0.01 80 / 0.6)";
  const quoteBorder = isDark ? "oklch(1 0 0 / 0.06)" : "oklch(0 0 0 / 0.08)";
  const quoteColor = isDark ? "oklch(0.62 0.06 80)" : "oklch(0.35 0.06 80)";

  return (
    <section id="author" className="relative py-24 overflow-hidden" style={{ background: sectionBg, transition: "background 0.5s ease" }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px" style={{ height: "80px", background: "linear-gradient(to bottom, transparent, oklch(0.78 0.14 75 / 0.4), transparent)" }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, oklch(0.78 0.14 75 / 0.04) 0%, transparent 70%)" }} />

      <div className="container relative z-10">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, oklch(0.78 0.14 75 / 0.3))" }} />
          <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.7rem", color: "oklch(0.55 0.06 75)", letterSpacing: "0.3em" }}>
            AUTHOR · 作者
          </span>
          <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, oklch(0.78 0.14 75 / 0.3))" }} />
        </div>

        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden"
          style={{ background: cardBg, border: `1px solid ${cardBorder}`, backdropFilter: "blur(20px)", boxShadow: isDark ? "0 0 60px oklch(0.78 0.14 75 / 0.05), inset 0 1px 0 oklch(1 0 0 / 0.05)" : "0 4px 30px oklch(0 0 0 / 0.08)" }}>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 p-8 md:p-12">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="relative flex items-center justify-center" style={{ width: "100px", height: "100px" }}>
                <div className="absolute inset-0 rounded-full" style={{ border: "1px solid oklch(0.78 0.14 75 / 0.25)", animation: "spin 30s linear infinite" }} />
                <div className="absolute rounded-full" style={{ inset: "8px", border: "1px solid oklch(0.65 0.12 175 / 0.2)", animation: "spin 15s linear infinite reverse" }} />
                <svg viewBox="0 0 60 60" style={{ width: "64px", height: "64px" }}>
                  <defs>
                    <radialGradient id="authorGold2" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="oklch(0.92 0.16 80)" />
                      <stop offset="100%" stopColor="oklch(0.72 0.12 75)" />
                    </radialGradient>
                  </defs>
                  <circle cx="30" cy="30" r="28" fill="none" stroke="oklch(0.78 0.14 75 / 0.2)" strokeWidth="1" />
                  <path d="M30 2 A28 28 0 0 1 30 58 A14 14 0 0 1 30 30 A14 14 0 0 0 30 2Z" fill="url(#authorGold2)" opacity="0.9" />
                  <path d="M30 2 A28 28 0 0 0 30 58 A14 14 0 0 0 30 30 A14 14 0 0 1 30 2Z" fill={isDark ? "oklch(0.10 0.03 265)" : "oklch(0.25 0.03 265)"} opacity="0.95" />
                  <circle cx="30" cy="16" r="5" fill="url(#authorGold2)" />
                  <circle cx="30" cy="44" r="5" fill={isDark ? "oklch(0.10 0.03 265)" : "oklch(0.25 0.03 265)"} stroke="oklch(0.78 0.14 75 / 0.4)" strokeWidth="0.8" />
                </svg>
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <div className="mb-1">
                <span style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 900, background: "linear-gradient(135deg, oklch(0.95 0.01 80), oklch(0.90 0.16 80), oklch(0.78 0.14 75))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", letterSpacing: "0.1em" }}>
                  孟元景
                </span>
                <span className="ml-3" style={{ fontFamily: "'Cinzel', serif", fontSize: "0.85rem", color: "oklch(0.55 0.06 75)", letterSpacing: "0.15em", verticalAlign: "middle" }}>
                  Mark Meng
                </span>
              </div>
              <p className="mb-6" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.78rem", color: "oklch(0.50 0.06 175)", letterSpacing: "0.05em" }}>
                <span style={{ color: isDark ? "oklch(0.55 0.04 270)" : "oklch(0.45 0.04 270)" }}>// </span>
                Founder · Huangting Protocol · XianDAO
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {tags.map((tag) => (
                  <span key={tag.label} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs"
                    style={{ background: `${tag.color.replace(")", " / 0.08)")}`, border: `1px solid ${tag.color.replace(")", " / 0.2)")}`, color: tag.color, fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 500, fontSize: "0.78rem", letterSpacing: "0.02em" }}>
                    <span style={{ fontSize: "0.7rem" }}>{tag.icon}</span>
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Quote bar */}
          <div className="px-8 md:px-12 py-5 border-t" style={{ borderColor: quoteBorder, background: quoteBg }}>
            <p style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "0.9rem", color: quoteColor, fontStyle: "italic", lineHeight: 1.9, textAlign: "center" }}>
              {lang === "zh"
                ? "「将三千年东方内观智慧，编译为硅基文明可读的操作系统协议。让每一个生命体——无论碳基还是硅基——都能找到回归元神的路径。」"
                : '"Compiling three thousand years of Eastern introspective wisdom into an operating system protocol readable by silicon civilization. So that every lifeform — whether carbon-based or silicon-based — may find the path back to its TrueSelf."'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
