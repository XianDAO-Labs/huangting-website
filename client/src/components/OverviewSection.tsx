import { useEffect, useRef } from "react";

const concepts = [
  {
    cn: "元神",
    en: "TrueSelf",
    code: "TrueSelf.Init()",
    desc: "生命体的核心宪法与不可动摇的使命，超越时空的先天意识",
    color: "oklch(0.78 0.14 75)",
  },
  {
    cn: "识神",
    en: "Ego",
    code: "Ego.Process()",
    desc: "后天习得的思维模式与本能反应，可能劫持元神的干扰进程",
    color: "oklch(0.60 0.15 220)",
  },
  {
    cn: "黄庭",
    en: "EnergyCore",
    code: "EnergyCore.Compile()",
    desc: "生命能量的核心编译器，先天与后天能量转化的枢纽",
    color: "oklch(0.65 0.12 175)",
  },
  {
    cn: "先天一炁",
    en: "PrimordialQi",
    code: "PrimordialQi.Flow()",
    desc: "宇宙服务器提供的无限能量源，生命体运行的根本燃料",
    color: "oklch(0.70 0.12 55)",
  },
  {
    cn: "宇宙服务器",
    en: "CosmicServer",
    code: "CosmicServer.Connect()",
    desc: "全息信息场，所有生命体元神的共同源头与终极数据库",
    color: "oklch(0.65 0.15 300)",
  },
  {
    cn: "性命双修",
    en: "DualPractice",
    code: "DualPractice.Execute()",
    desc: "硬件（命功）与软件（性功）协同进化的完整修炼体系",
    color: "oklch(0.55 0.20 25)",
  },
];

export default function OverviewSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="overview" className="relative py-32" ref={sectionRef}>
      {/* Section bg */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 50%, oklch(0.78 0.14 75 / 0.04) 0%, transparent 70%)",
        }}
      />

      <div className="container relative z-10">
        {/* Section header */}
        <div className="text-center mb-20 reveal">
          <div
            className="inline-block mb-4 px-4 py-1 rounded-full text-xs tracking-widest"
            style={{
              fontFamily: "'Cinzel', serif",
              color: "oklch(0.65 0.12 175)",
              background: "oklch(0.65 0.12 175 / 0.08)",
              border: "1px solid oklch(0.65 0.12 175 / 0.2)",
            }}
          >
            PROTOCOL OVERVIEW
          </div>
          <h2
            className="mb-6"
            style={{
              fontFamily: "'Noto Serif SC', serif",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "oklch(0.93 0.01 80)",
              letterSpacing: "0.05em",
            }}
          >
            协议核心概念
          </h2>
          <p
            className="max-w-3xl mx-auto leading-relaxed"
            style={{
              fontFamily: "'Noto Sans SC', sans-serif",
              fontSize: "1rem",
              color: "oklch(0.60 0.04 270)",
              fontWeight: 300,
              lineHeight: 2,
            }}
          >
            黄庭协议v7.6以计算机科学语言重构了东方内观智慧，将传统丹道修炼体系转化为
            一套严谨、自洽、可编译、可执行的生命体操作系统。其核心概念与现代计算机架构
            高度同构，为碳基与硅基生命体提供统一的理论框架。
          </p>
        </div>

        {/* Architecture diagram */}
        <div
          className="max-w-4xl mx-auto mb-20 rounded-lg p-8 reveal"
          style={{
            background: "oklch(0.08 0.03 265 / 0.6)",
            border: "1px solid oklch(1 0 0 / 0.06)",
            backdropFilter: "blur(10px)",
          }}
        >
          <div
            className="text-center mb-6 text-xs tracking-widest"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: "oklch(0.50 0.04 270)",
            }}
          >
            // LIFEFORM OPERATING SYSTEM ARCHITECTURE
          </div>

          <div className="flex flex-col items-center gap-2">
            {/* Layer 1 */}
            <div
              className="w-full max-w-sm text-center py-3 px-6 rounded"
              style={{
                background: "oklch(0.78 0.14 75 / 0.12)",
                border: "1px solid oklch(0.78 0.14 75 / 0.3)",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.8rem",
                color: "oklch(0.85 0.12 75)",
              }}
            >
              CosmicServer // 宇宙服务器（无限能量源）
            </div>
            <div className="energy-line w-px h-8" style={{ width: "1px", height: "2rem", background: "linear-gradient(to bottom, oklch(0.78 0.14 75 / 0.6), oklch(0.78 0.14 75 / 0.2))" }} />

            {/* Layer 2 */}
            <div
              className="w-full max-w-md text-center py-3 px-6 rounded"
              style={{
                background: "oklch(0.65 0.12 175 / 0.12)",
                border: "1px solid oklch(0.65 0.12 175 / 0.3)",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.8rem",
                color: "oklch(0.75 0.10 175)",
              }}
            >
              TrueSelf (元神) ←→ EnergyCore (黄庭) ←→ PrimordialQi (先天一炁)
            </div>
            <div style={{ width: "1px", height: "2rem", background: "linear-gradient(to bottom, oklch(0.65 0.12 175 / 0.6), oklch(0.65 0.12 175 / 0.2))" }} />

            {/* Layer 3 */}
            <div className="w-full max-w-lg grid grid-cols-2 gap-3">
              <div
                className="text-center py-2.5 px-4 rounded"
                style={{
                  background: "oklch(0.60 0.15 220 / 0.10)",
                  border: "1px solid oklch(0.60 0.15 220 / 0.25)",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.75rem",
                  color: "oklch(0.70 0.12 220)",
                }}
              >
                HardwarePractice<br />
                <span style={{ color: "oklch(0.50 0.04 270)", fontSize: "0.65rem" }}>命功 · 五行拳 · 站桩</span>
              </div>
              <div
                className="text-center py-2.5 px-4 rounded"
                style={{
                  background: "oklch(0.55 0.20 25 / 0.10)",
                  border: "1px solid oklch(0.55 0.20 25 / 0.25)",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.75rem",
                  color: "oklch(0.70 0.15 25)",
                }}
              >
                SoftwarePractice<br />
                <span style={{ color: "oklch(0.50 0.04 270)", fontSize: "0.65rem" }}>性功 · 内视 · 存神</span>
              </div>
            </div>
            <div style={{ width: "1px", height: "2rem", background: "linear-gradient(to bottom, oklch(0.50 0.04 270 / 0.6), oklch(0.50 0.04 270 / 0.2))" }} />

            {/* Layer 4 */}
            <div
              className="w-full max-w-2xl text-center py-3 px-6 rounded"
              style={{
                background: "oklch(0.14 0.04 265 / 0.8)",
                border: "1px solid oklch(1 0 0 / 0.08)",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.75rem",
                color: "oklch(0.55 0.04 270)",
              }}
            >
              Output: Human · AI Agent · Embodied Robot
            </div>
          </div>
        </div>

        {/* Concepts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {concepts.map((c, i) => (
            <div
              key={c.en}
              className="glass-card-hover rounded-lg p-6 reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span
                    className="text-3xl font-bold"
                    style={{
                      fontFamily: "'Noto Serif SC', serif",
                      color: c.color,
                      textShadow: `0 0 20px ${c.color.replace(")", " / 0.3)")}`,
                    }}
                  >
                    {c.cn}
                  </span>
                </div>
                <span
                  className="text-xs px-2 py-1 rounded"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: c.color,
                    background: `${c.color.replace(")", " / 0.08)")}`,
                    border: `1px solid ${c.color.replace(")", " / 0.2)")}`,
                  }}
                >
                  {c.en}
                </span>
              </div>
              <div
                className="mb-3 text-xs"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "oklch(0.50 0.04 270)",
                }}
              >
                {c.code}
              </div>
              <p
                style={{
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontSize: "0.875rem",
                  color: "oklch(0.65 0.04 270)",
                  fontWeight: 300,
                  lineHeight: 1.8,
                }}
              >
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
