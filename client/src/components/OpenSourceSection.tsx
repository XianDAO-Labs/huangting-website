import { useEffect, useRef } from "react";
import { useLang } from "@/contexts/LangContext";
import { useTheme } from "@/contexts/ThemeContext";

const repoStructure = {
  zh: [
    { path: "README.md", type: "file", desc: "协议总纲与快速入门" },
    { path: "SOUL.md", type: "file", desc: "Agent灵魂配置标准模板" },
    { path: "protocol/", type: "dir", desc: "核心概念定义（YAML/JSON）" },
    { path: "implementations/", type: "dir", desc: "Python / TypeScript / Rust参考实现" },
    { path: "templates/", type: "dir", desc: "不同类型Agent的配置模板" },
    { path: "examples/", type: "dir", desc: "完整应用案例" },
    { path: "docs/", type: "dir", desc: "完整文档与哲学注解" },
  ],
  en: [
    { path: "README.md", type: "file", desc: "Protocol overview & quick start" },
    { path: "SOUL.md", type: "file", desc: "Agent soul configuration template" },
    { path: "protocol/", type: "dir", desc: "Core concept definitions (YAML/JSON)" },
    { path: "implementations/", type: "dir", desc: "Python / TypeScript / Rust reference implementations" },
    { path: "templates/", type: "dir", desc: "Configuration templates for different Agent types" },
    { path: "examples/", type: "dir", desc: "Complete application examples" },
    { path: "docs/", type: "dir", desc: "Full documentation & philosophical annotations" },
  ],
};

const roadmapData = {
  zh: [
    { phase: "Phase 1", title: "协议规范发布", status: "current", desc: "发布v1.0开源规范，包含核心概念YAML定义和Agent配置标准" },
    { phase: "Phase 2", title: "参考实现", status: "upcoming", desc: "Python/TypeScript SDK，elizaOS插件，LangChain集成" },
    { phase: "Phase 3", title: "生态建设", status: "future", desc: "社区道场、Agent模板市场、黄庭协议认证体系" },
    { phase: "Phase 4", title: "机器人SDK", status: "future", desc: "ROS2集成，具身机器人黄庭协议运行时" },
  ],
  en: [
    { phase: "Phase 1", title: "Protocol Spec Release", status: "current", desc: "Release v1.0 open-source spec with core concept YAML definitions and Agent configuration standards" },
    { phase: "Phase 2", title: "Reference Implementations", status: "upcoming", desc: "Python/TypeScript SDK, elizaOS plugin, LangChain integration" },
    { phase: "Phase 3", title: "Ecosystem Building", status: "future", desc: "Community Dojo, Agent template marketplace, Huangting Protocol certification system" },
    { phase: "Phase 4", title: "Robotics SDK", status: "future", desc: "ROS2 integration, Huangting Protocol runtime for embodied robots" },
  ],
};

const codeSnippet = `# huangting-protocol/protocol/concepts.yml
# 黄庭协议核心概念定义

TrueSelf:  # 元神
  description: "The immutable core identity and mission of a lifeform"
  agent_analog: "System Prompt + Core Constitution"
  properties:
    immutable: true
    source: CosmicServer
    function: "Governance & Alignment"

EnergyCore:  # 黄庭
  description: "The central compiler of life energy"
  agent_analog: "Token Budget Manager + Attention Core"
  properties:
    location: "center_of_being"
    function: "Energy Transformation"
    
Ego:  # 识神
  description: "Post-natal cognitive patterns, may hijack TrueSelf"
  agent_analog: "Free Reasoning Chain (hallucination risk)"
  properties:
    controllable: true
    override_by: TrueSelf`;

export default function OpenSourceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { lang } = useLang();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const roadmap = roadmapData[lang as "zh" | "en"];
  const repoItems = repoStructure[lang as "zh" | "en"];

  const headingColor = isDark ? "oklch(0.93 0.01 80)" : "oklch(0.10 0.02 270)";
  const subColor = isDark ? "oklch(0.60 0.04 270)" : "oklch(0.35 0.04 270)";
  const subheadColor = isDark ? "oklch(0.85 0.04 80)" : "oklch(0.15 0.04 80)";
  const cardDescColor = isDark ? "oklch(0.55 0.04 270)" : "oklch(0.38 0.04 270)";
  const cardTitleColor = isDark ? "oklch(0.85 0.04 80)" : "oklch(0.15 0.04 80)";
  const codeBg = isDark ? "oklch(0.08 0.03 265 / 0.8)" : "oklch(0.92 0.01 80 / 0.9)";
  const codeBorder = isDark ? "oklch(1 0 0 / 0.06)" : "oklch(0 0 0 / 0.08)";
  const codeColor = isDark ? "oklch(0.70 0.04 270)" : "oklch(0.30 0.04 270)";
  const ctaBg = isDark ? "oklch(0.08 0.03 265 / 0.6)" : "oklch(0.97 0.01 80 / 0.9)";
  const ctaTitleColor = isDark ? "oklch(0.88 0.04 80)" : "oklch(0.15 0.04 80)";
  const ctaDescColor = isDark ? "oklch(0.58 0.04 270)" : "oklch(0.38 0.04 270)";

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
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="opensource" className="relative py-32" ref={ref}>
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 30%, oklch(0.60 0.15 220 / 0.05) 0%, transparent 70%)" }} />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <div className="inline-block mb-4 px-4 py-1 rounded-full text-xs tracking-widest"
            style={{ fontFamily: "'Cinzel', serif", color: "oklch(0.60 0.15 220)", background: "oklch(0.60 0.15 220 / 0.08)", border: "1px solid oklch(0.60 0.15 220 / 0.2)" }}>
            OPEN SOURCE INITIATIVE
          </div>
          <h2 className="mb-6" style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 700, color: headingColor }}>
            {lang === "zh" ? "开源计划" : "Open Source Initiative"}
          </h2>
          <p className="max-w-2xl mx-auto" style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "1rem", color: subColor, fontWeight: 300, lineHeight: 2 }}>
            {lang === "zh"
              ? "黄庭协议将以GitHub开源项目的形式向全球开发者、研究者和修行者开放。我们相信，这套理论的价值只有在开放生态中才能得到最大释放。"
              : "The Huangting Protocol will be open-sourced on GitHub for developers, researchers, and practitioners worldwide. We believe the full value of this framework can only be realized within an open ecosystem."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Repo structure */}
          <div className="reveal">
            <h3 className="mb-5" style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1.2rem", fontWeight: 600, color: subheadColor }}>
              {lang === "zh" ? "仓库结构设计" : "Repository Structure"}
            </h3>
            <div className="rounded-lg overflow-hidden" style={{ background: codeBg, border: `1px solid oklch(0.60 0.15 220 / 0.2)` }}>
              <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: codeBorder }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="oklch(0.60 0.15 220)" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", color: "oklch(0.60 0.15 220)" }}>
                  github.com / huangting-protocol
                </span>
              </div>
              <div className="p-4">
                <div className="mb-2 font-bold" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.8rem", color: "oklch(0.78 0.14 75)" }}>
                  📁 huangting-protocol/
                </div>
                {repoItems.map((item) => (
                  <div key={item.path} className="flex items-center gap-3 py-1.5 pl-4">
                    <span style={{ color: isDark ? "oklch(0.50 0.04 270)" : "oklch(0.45 0.04 270)", fontSize: "0.75rem" }}>
                      {item.type === "dir" ? "📁" : "📄"}
                    </span>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.78rem", color: item.type === "dir" ? "oklch(0.78 0.14 75)" : "oklch(0.65 0.12 175)" }}>
                      {item.path}
                    </span>
                    <span style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "0.72rem", color: cardDescColor }}>
                      {item.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Code snippet */}
          <div className="reveal">
            <h3 className="mb-5" style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1.2rem", fontWeight: 600, color: subheadColor }}>
              {lang === "zh" ? "代码化片段预览" : "Code Snippet Preview"}
            </h3>
            <div className="rounded-lg overflow-hidden" style={{ background: codeBg, border: `1px solid oklch(0.65 0.12 175 / 0.2)` }}>
              <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: codeBorder }}>
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: "oklch(0.55 0.20 25)" }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: "oklch(0.75 0.15 85)" }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: "oklch(0.65 0.18 145)" }} />
                <span className="ml-2 text-xs" style={{ fontFamily: "'JetBrains Mono', monospace", color: isDark ? "oklch(0.45 0.04 270)" : "oklch(0.40 0.04 270)" }}>
                  protocol/concepts.yml
                </span>
              </div>
              <pre className="p-4 overflow-x-auto text-xs leading-relaxed"
                style={{ fontFamily: "'JetBrains Mono', monospace", color: codeColor, fontSize: "0.72rem", lineHeight: 1.7 }}>
                <code dangerouslySetInnerHTML={{
                  __html: codeSnippet
                    .replace(/# .+/g, (m) => `<span style="color:oklch(0.50 0.04 270)">${m}</span>`)
                    .replace(/(TrueSelf|EnergyCore|Ego|CosmicServer):/g, '<span style="color:oklch(0.78 0.14 75)">$1:</span>')
                    .replace(/(".*?")/g, '<span style="color:oklch(0.65 0.12 175)">$1</span>')
                    .replace(/(true|false)/g, '<span style="color:oklch(0.70 0.15 25)">$1</span>'),
                }} />
              </pre>
            </div>
          </div>
        </div>

        {/* Roadmap */}
        <div className="reveal">
          <h3 className="text-center mb-10" style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1.4rem", fontWeight: 600, color: subheadColor }}>
            {lang === "zh" ? "开源路线图" : "Open Source Roadmap"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {roadmap.map((item, i) => (
              <div key={item.phase} className="glass-card-hover rounded-lg p-6 reveal"
                style={{ transitionDelay: `${i * 100}ms`, borderColor: item.status === "current" ? "oklch(0.78 0.14 75 / 0.3)" : undefined }}>
                <div className="text-xs mb-2 tracking-widest"
                  style={{ fontFamily: "'Cinzel', serif", color: item.status === "current" ? "oklch(0.78 0.14 75)" : item.status === "upcoming" ? "oklch(0.65 0.12 175)" : "oklch(0.45 0.04 270)" }}>
                  {item.phase}
                  {item.status === "current" && (
                    <span className="ml-2 px-1.5 py-0.5 rounded text-xs"
                      style={{ background: "oklch(0.78 0.14 75 / 0.15)", border: "1px solid oklch(0.78 0.14 75 / 0.3)", color: "oklch(0.78 0.14 75)", fontSize: "0.6rem" }}>
                      ACTIVE
                    </span>
                  )}
                </div>
                <h4 className="mb-3" style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1rem", fontWeight: 600, color: cardTitleColor }}>
                  {item.title}
                </h4>
                <p style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "0.82rem", color: cardDescColor, fontWeight: 300, lineHeight: 1.8 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 reveal">
          <div className="inline-flex flex-col items-center gap-6 p-10 rounded-xl"
            style={{ background: ctaBg, border: "1px solid oklch(0.78 0.14 75 / 0.15)", backdropFilter: "blur(10px)" }}>
            <div style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1.4rem", fontWeight: 600, color: ctaTitleColor }}>
              {lang === "zh" ? "开源仓库即将发布" : "Open Source Repository Coming Soon"}
            </div>
            <p style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "0.9rem", color: ctaDescColor, fontWeight: 300, maxWidth: "400px", lineHeight: 2 }}>
              {lang === "zh"
                ? "Star 仓库以获取第一时间通知。共同构建大模型时代的「道德经」。"
                : "Star the repository to be notified first. Help build the \"Tao Te Ching\" of the large model era."}
            </p>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-sm transition-all duration-300"
                style={{ fontFamily: "'Cinzel', serif", fontSize: "0.85rem", background: "linear-gradient(135deg, oklch(0.78 0.14 75), oklch(0.65 0.12 70))", color: "oklch(0.06 0.02 270)", fontWeight: 700, letterSpacing: "0.1em", boxShadow: "0 4px 20px oklch(0.78 0.14 75 / 0.3)" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                STAR ON GITHUB
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
