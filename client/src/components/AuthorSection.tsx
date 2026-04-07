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
              <div className="relative flex items-center justify-center" style={{ width: "120px", height: "120px" }}>
                {/* Outer rotating ring */}
                <div className="absolute inset-0 rounded-full" style={{ border: "1px solid oklch(0.78 0.14 75 / 0.35)", animation: "spin 20s linear infinite" }} />
                {/* Inner rotating ring */}
                <div className="absolute rounded-full" style={{ inset: "6px", border: "1px solid oklch(0.65 0.12 175 / 0.25)", animation: "spin 10s linear infinite reverse" }} />
                {/* Gold glow */}
                <div className="absolute rounded-full" style={{ inset: "12px", boxShadow: "0 0 20px oklch(0.78 0.14 75 / 0.3)" }} />
                {/* Avatar photo */}
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663283523815/ktPetb6WMXk9YrE2YnFpWY/author-avatar_29c51c6d.jpg"
                  alt="Mark Meng 孟元景"
                  style={{ width: "96px", height: "96px", borderRadius: "50%", objectFit: "cover", objectPosition: "center top", border: "2px solid oklch(0.78 0.14 75 / 0.5)", position: "relative", zIndex: 1 }}
                />
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

          {/* QR Code contact section */}
          <div className="px-8 md:px-12 py-10 border-t" style={{ borderColor: quoteBorder }}>
            <p style={{ textAlign: "center", marginBottom: 32, fontFamily: "'Noto Serif SC', serif", fontSize: "0.88rem", color: quoteColor, lineHeight: 1.9 }}>
              {lang === "zh"
                ? "人类修炼者请扫码和我联系 · 开始修炼黄庭协议 · 加入社区 · 寻求合作"
                : "Human practitioners: scan to connect · Begin Cultivating · Join Community · Explore Collaboration"}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-10 md:gap-20">
              {/* WeChat QR */}
              <div className="flex flex-col items-center gap-3">
                <div style={{ padding: 8, background: "#ffffff", borderRadius: 12, boxShadow: "0 0 24px oklch(0.78 0.14 75 / 0.18)" }}>
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663283523815/ktPetb6WMXk9YrE2YnFpWY/wechat-qr_4456959a.jpg"
                    alt="WeChat QR Code"
                    style={{ width: 148, height: 148, display: "block", borderRadius: 6 }}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.5 12.5C9.5 13.33 8.83 14 8 14C7.17 14 6.5 13.33 6.5 12.5C6.5 11.67 7.17 11 8 11C8.83 11 9.5 11.67 9.5 12.5ZM16 11C15.17 11 14.5 11.67 14.5 12.5C14.5 13.33 15.17 14 16 14C16.83 14 17.5 13.33 17.5 12.5C17.5 11.67 16.83 11 16 11ZM22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12ZM20 12C20 7.59 16.41 4 12 4C7.59 4 4 7.59 4 12C4 16.41 7.59 20 12 20C16.41 20 20 16.41 20 12Z" fill="oklch(0.65 0.12 175)"/>
                  </svg>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.78rem", color: "oklch(0.65 0.12 175)", letterSpacing: "0.05em" }}>WeChat</span>
                </div>
              </div>

              {/* Vertical divider (desktop only) */}
              <div className="hidden sm:block" style={{ width: 1, height: 140, background: quoteBorder }} />

              {/* WhatsApp QR */}
              <div className="flex flex-col items-center gap-3">
                <div style={{ padding: 8, background: "#ffffff", borderRadius: 12, boxShadow: "0 0 24px oklch(0.78 0.14 75 / 0.18)" }}>
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663283523815/ktPetb6WMXk9YrE2YnFpWY/whatsapp-qr_079b313e.jpg"
                    alt="WhatsApp QR Code"
                    style={{ width: 148, height: 148, display: "block", borderRadius: 6 }}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" fill="oklch(0.65 0.15 145)"/>
                  </svg>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.78rem", color: "oklch(0.65 0.15 145)", letterSpacing: "0.05em" }}>WhatsApp</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
