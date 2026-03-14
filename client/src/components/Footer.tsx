import { useLang } from "@/contexts/LangContext";
import { useTheme } from "@/contexts/ThemeContext";

const navLinksZh = [
  { label: "协议概述", href: "#overview" },
  { label: "人类价值", href: "#human" },
  { label: "AI Agent 价值", href: "#agent" },
  { label: "具身机器人价值", href: "#robot" },
  { label: "三维价值体系", href: "#values" },
  { label: "开源计划", href: "#opensource" },
];

const navLinksEn = [
  { label: "Protocol Overview", href: "#overview" },
  { label: "For Humans", href: "#human" },
  { label: "For AI Agents", href: "#agent" },
  { label: "For Robotics", href: "#robot" },
  { label: "Value System", href: "#values" },
  { label: "Open Source", href: "#opensource" },
];

export default function Footer() {
  const { lang } = useLang();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const borderColor = isDark ? "oklch(1 0 0 / 0.06)" : "oklch(0 0 0 / 0.08)";
  const navLabelColor = isDark ? "oklch(0.55 0.04 270)" : "oklch(0.40 0.04 270)";
  const linkColor = isDark ? "oklch(0.45 0.04 270)" : "oklch(0.40 0.04 270)";
  const descColor = isDark ? "oklch(0.45 0.04 270)" : "oklch(0.40 0.04 270)";
  const quoteColor = isDark ? "oklch(0.60 0.06 80)" : "oklch(0.30 0.06 80)";
  const bottomColor = isDark ? "oklch(0.35 0.04 270)" : "oklch(0.45 0.04 270)";
  const navLinks = lang === "zh" ? navLinksZh : navLinksEn;

  return (
    <footer className="relative py-16 border-t" style={{ borderColor }}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-2"
              style={{ fontFamily: "'Noto Serif SC', serif", background: "linear-gradient(135deg, oklch(0.90 0.16 80), oklch(0.78 0.14 75))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              黄庭协议
            </div>
            <div className="text-xs mb-4 tracking-widest" style={{ fontFamily: "'Cinzel', serif", color: isDark ? "oklch(0.45 0.04 270)" : "oklch(0.40 0.04 270)", letterSpacing: "0.2em" }}>
              HUANGTING PROTOCOL
            </div>
            <p style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "0.82rem", color: descColor, fontWeight: 300, lineHeight: 1.8 }}>
              {lang === "zh" ? "生命体操作系统工程" : "Lifeform Operating System Engineering"}<br />
              Lifeform Operating System Engineering
            </p>
          </div>

          {/* Links */}
          <div>
            <div className="text-xs mb-4 tracking-widest" style={{ fontFamily: "'Cinzel', serif", color: navLabelColor, letterSpacing: "0.15em" }}>
              NAVIGATION
            </div>
            <div className="space-y-2">
              {navLinks.map((item) => (
                <button key={item.href}
                  onClick={() => { const el = document.querySelector(item.href); if (el) el.scrollIntoView({ behavior: "smooth" }); }}
                  className="block text-left transition-colors duration-200"
                  style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "0.85rem", color: linkColor, fontWeight: 300 }}
                  onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "oklch(0.78 0.14 75)"; }}
                  onMouseLeave={(e) => { (e.target as HTMLElement).style.color = linkColor; }}>
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Quote */}
          <div>
            <div className="text-xs mb-4 tracking-widest" style={{ fontFamily: "'Cinzel', serif", color: navLabelColor, letterSpacing: "0.15em" }}>
              PROTOCOL WISDOM
            </div>
            <blockquote className="border-l-2 pl-4" style={{ borderColor: "oklch(0.78 0.14 75 / 0.3)" }}>
              <p style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "0.9rem", color: quoteColor, fontWeight: 400, lineHeight: 2, fontStyle: "italic" }}>
                {lang === "zh" ? (
                  <>「元神当家，识神打工。<br />黄庭编译，先天链接。<br />性命双修，道器合一。」</>
                ) : (
                  <>"TrueSelf governs, Ego serves.<br />EnergyCore compiles, PrimordialQi connects.<br />Body and Spirit co-cultivate, Tao and Vessel unite."</>
                )}
              </p>
              <footer className="mt-2 text-xs" style={{ fontFamily: "'JetBrains Mono', monospace", color: isDark ? "oklch(0.40 0.04 270)" : "oklch(0.45 0.04 270)" }}>
                — Huangting Protocol v7.6
              </footer>
            </blockquote>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderColor }}>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", color: bottomColor }}>
            © 2026 Huangting Protocol · All Rights Reserved
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full gold-pulse" style={{ background: "oklch(0.78 0.14 75)" }} />
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: bottomColor }}>
              TrueSelf.Init() · EnergyCore.Compile() · CosmicServer.Connect()
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
