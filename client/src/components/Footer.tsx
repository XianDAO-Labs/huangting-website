export default function Footer() {
  return (
    <footer
      className="relative py-16 border-t"
      style={{ borderColor: "oklch(1 0 0 / 0.06)" }}
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div
              className="text-2xl font-bold mb-2"
              style={{
                fontFamily: "'Noto Serif SC', serif",
                background: "linear-gradient(135deg, oklch(0.90 0.16 80), oklch(0.78 0.14 75))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              黄庭协议
            </div>
            <div
              className="text-xs mb-4 tracking-widest"
              style={{
                fontFamily: "'Cinzel', serif",
                color: "oklch(0.45 0.04 270)",
                letterSpacing: "0.2em",
              }}
            >
              HUANGTING PROTOCOL
            </div>
            <p
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: "0.82rem",
                color: "oklch(0.45 0.04 270)",
                fontWeight: 300,
                lineHeight: 1.8,
              }}
            >
              生命体操作系统工程<br />
              Lifeform Operating System Engineering
            </p>
          </div>

          {/* Links */}
          <div>
            <div
              className="text-xs mb-4 tracking-widest"
              style={{
                fontFamily: "'Cinzel', serif",
                color: "oklch(0.55 0.04 270)",
                letterSpacing: "0.15em",
              }}
            >
              NAVIGATION
            </div>
            <div className="space-y-2">
              {[
                { label: "协议概述", href: "#overview" },
                { label: "人类价值", href: "#human" },
                { label: "AI Agent 价值", href: "#agent" },
                { label: "具身机器人价值", href: "#robot" },
                { label: "三维价值体系", href: "#values" },
                { label: "开源计划", href: "#opensource" },
              ].map((item) => (
                <button
                  key={item.href}
                  onClick={() => {
                    const el = document.querySelector(item.href);
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="block text-left transition-colors duration-200"
                  style={{
                    fontFamily: "'Noto Sans SC', sans-serif",
                    fontSize: "0.85rem",
                    color: "oklch(0.45 0.04 270)",
                    fontWeight: 300,
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color = "oklch(0.78 0.14 75)";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color = "oklch(0.45 0.04 270)";
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Quote */}
          <div>
            <div
              className="text-xs mb-4 tracking-widest"
              style={{
                fontFamily: "'Cinzel', serif",
                color: "oklch(0.55 0.04 270)",
                letterSpacing: "0.15em",
              }}
            >
              PROTOCOL WISDOM
            </div>
            <blockquote
              className="border-l-2 pl-4"
              style={{ borderColor: "oklch(0.78 0.14 75 / 0.3)" }}
            >
              <p
                style={{
                  fontFamily: "'Noto Serif SC', serif",
                  fontSize: "0.9rem",
                  color: "oklch(0.60 0.06 80)",
                  fontWeight: 400,
                  lineHeight: 2,
                  fontStyle: "italic",
                }}
              >
                「元神当家，识神打工。
                <br />
                黄庭编译，先天链接。
                <br />
                性命双修，道器合一。」
              </p>
              <footer
                className="mt-2 text-xs"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "oklch(0.40 0.04 270)",
                }}
              >
                — Huangting Protocol v7.6
              </footer>
            </blockquote>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderColor: "oklch(1 0 0 / 0.06)" }}
        >
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.72rem",
              color: "oklch(0.35 0.04 270)",
            }}
          >
            © 2026 Huangting Protocol · All Rights Reserved
          </p>
          <div className="flex items-center gap-2">
            <span
              className="w-1.5 h-1.5 rounded-full gold-pulse"
              style={{ background: "oklch(0.78 0.14 75)" }}
            />
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.7rem",
                color: "oklch(0.35 0.04 270)",
              }}
            >
              TrueSelf.Init() · EnergyCore.Compile() · CosmicServer.Connect()
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
