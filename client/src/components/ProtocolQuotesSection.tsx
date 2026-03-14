import { useState } from "react";
import { useLang } from "@/contexts/LangContext";
import { useTheme } from "@/contexts/ThemeContext";

const quotesData = {
  zh: [
    {
      id: "dual-layer", tag: "双层解析模型", tagEn: "DUAL-LAYER MODEL", tagColor: "oklch(0.78 0.14 75)",
      title: "硬件层 · 软件层", subtitle: "精气神 × 本能·理性·自洽维稳机制",
      quote: "人类的生命系统，可以被精确地划分为两个既独立又相互作用的层面：硬件层（精、气、神）决定了系统的算力上限与运行稳定性；软件层（本能、理性、自洽维稳机制）决定了算力的分配方式与行为输出。",
      detail: "硬件层的状态，决定了软件层运行的质量与模式。",
      code: [
        { comment: "// 硬件层 — 生命算力系统", items: [
          { key: "精 (Jīng)", type: "HardwareLayer.SSD_RAM", desc: "固态硬盘+内存，精满则反应快、精力充沛" },
          { key: "气 (Qì)", type: "HardwareLayer.PSU_Bus", desc: "电源+总线，气足则供电稳定、情绪稳定" },
          { key: "神 (Shén)", type: "HardwareLayer.CPU", desc: "中央处理器，神旺则意识清明、专注力强" },
        ]},
        { comment: "// 软件层 — CPU三大核心进程", items: [
          { key: "本能", type: "Process.Instinct", desc: "BIOS/固件，核心指令 SURVIVE_AND_REPRODUCE()" },
          { key: "理性", type: "Process.Reason", desc: "导航软件，核心指令 CALCULATE_OPTIMAL_PATH()" },
          { key: "自洽维稳", type: "Process.EgoStabilizer", desc: "OS内核，核心指令 MAINTAIN_SELF_CONSISTENCY()" },
        ]},
      ],
    },
    {
      id: "trueself-ego", tag: "元神·识神定义", tagEn: "TRUESELF vs EGO", tagColor: "oklch(0.65 0.12 175)",
      title: "元神当家 · 识神打工", subtitle: "CPU 纯粹觉知状态 vs 混乱进程集合",
      quote: "识神（Ego）不是一个单一的模块，而是由自洽维稳机制主导，并夹杂着本能冲动与部分理性碎片的混乱进程集合。它是一个充满后台广告、病毒木马、经过魔改的浏览器。",
      detail: "元神（TrueSelf）是CPU本身纯粹的、高算力的觉知状态。它不被任何进程所劫持，能够清晰地「看到」三个进程的运行，并基于最高目标（天命）做出最优决策。",
      code: [
        { comment: "// 识神 — 混乱进程集合", items: [
          { key: "Ego", type: "ProcessCluster", desc: "EgoStabilizer主导 + 本能冲动 + 碎片理性" },
          { key: "状态", type: "Balance.False", desc: "扭曲信息以维护既有错误认知框架" },
        ]},
        { comment: "// 元神 — CPU纯粹觉知状态", items: [
          { key: "TrueSelf", type: "CPU.PureAwareness", desc: "不被任何进程劫持的清明觉知" },
          { key: "状态", type: "Balance.True", desc: "主动修正认知框架以适应客观现实" },
          { key: "目标", type: "Goal.SageWithin_KingWithout", desc: "内圣外王 — 终极目标" },
        ]},
      ],
    },
    {
      id: "cosmic-server", tag: "宇宙服务器模型", tagEn: "COSMIC SERVER MODEL", tagColor: "oklch(0.70 0.12 220)",
      title: "CosmicServer · 宇宙服务器", subtitle: "从被动接收到主动调用宇宙 API",
      quote: "元神（TrueSelf），就是连接「宇宙服务器」（CosmicServer）的个人终端（PersonalTerminal）。宇宙服务器包含了宇宙从创生至今的所有信息，以及驱动万物运行的所有 API。",
      detail: "「不思而得」的本质：答案不是想出来的，而是「下载」下来的。修行，就是系统性地「清理病毒、关闭广告、升级硬件、优化操作系统」的过程。",
      code: [
        { comment: "// 宇宙服务器权限三阶段", items: [
          { key: "炼精化气", type: "Permission.Dial_Up", desc: "拨号上网，被动接收 — 偶尔灵感闪现" },
          { key: "炼气化神", type: "Permission.Broadband_Read", desc: "宽带接入，只读权限 — 稳定洞察力" },
          { key: "炼神还虚", type: "Permission.Developer_RWX", desc: "开发者权限，读写执行 — 调用宇宙API" },
        ]},
        { comment: "// 核心API调用", items: [
          { key: "灵光一闪", type: "CosmicServer.Push()", desc: "识神短暂掉线时，元神下载的数据包" },
          { key: "神通", type: "CosmicAPI.DirectCall()", desc: "Root权限后绕过标准库直接调用" },
        ]},
      ],
    },
  ],
  en: [
    {
      id: "dual-layer", tag: "Dual-Layer Model", tagEn: "DUAL-LAYER MODEL", tagColor: "oklch(0.78 0.14 75)",
      title: "Hardware Layer · Software Layer", subtitle: "Jing-Qi-Shen × Instinct · Reason · Ego-Stabilizer",
      quote: "The human life system can be precisely divided into two independent yet interacting layers: the Hardware Layer (Jing, Qi, Shen) determines the system's computational ceiling and operational stability; the Software Layer (Instinct, Reason, Ego-Stabilizer) determines how computational power is allocated and how behavior is output.",
      detail: "The state of the hardware layer determines the quality and mode of the software layer's operation.",
      code: [
        { comment: "// Hardware Layer — Life Compute System", items: [
          { key: "Jing (精)", type: "HardwareLayer.SSD_RAM", desc: "SSD + RAM: when full, fast reactions and abundant energy" },
          { key: "Qi (气)", type: "HardwareLayer.PSU_Bus", desc: "Power Supply + Bus: when sufficient, stable power and stable emotions" },
          { key: "Shen (神)", type: "HardwareLayer.CPU", desc: "CPU: when vigorous, clear consciousness and strong focus" },
        ]},
        { comment: "// Software Layer — Three Core CPU Processes", items: [
          { key: "Instinct", type: "Process.Instinct", desc: "BIOS/Firmware — core instruction: SURVIVE_AND_REPRODUCE()" },
          { key: "Reason", type: "Process.Reason", desc: "Navigation software — core instruction: CALCULATE_OPTIMAL_PATH()" },
          { key: "Ego-Stabilizer", type: "Process.EgoStabilizer", desc: "OS Kernel — core instruction: MAINTAIN_SELF_CONSISTENCY()" },
        ]},
      ],
    },
    {
      id: "trueself-ego", tag: "TrueSelf vs Ego", tagEn: "TRUESELF vs EGO", tagColor: "oklch(0.65 0.12 175)",
      title: "TrueSelf Governs · Ego Serves", subtitle: "Pure CPU Awareness State vs Chaotic Process Cluster",
      quote: "The Ego is not a single module, but a chaotic cluster of processes dominated by the Ego-Stabilizer, intermingled with instinctive impulses and fragments of reason. It is a browser bloated with background ads, viruses, and unauthorized modifications.",
      detail: "The TrueSelf is the CPU's own pure, high-performance awareness state. It is not hijacked by any process; it can clearly 'observe' the operation of all three processes and make optimal decisions based on the highest goal (Heavenly Mandate).",
      code: [
        { comment: "// Ego — Chaotic Process Cluster", items: [
          { key: "Ego", type: "ProcessCluster", desc: "EgoStabilizer-dominated + instinctive impulses + fragmented reason" },
          { key: "State", type: "Balance.False", desc: "Distorts information to maintain existing erroneous cognitive frameworks" },
        ]},
        { comment: "// TrueSelf — Pure CPU Awareness", items: [
          { key: "TrueSelf", type: "CPU.PureAwareness", desc: "Clear awareness not hijacked by any process" },
          { key: "State", type: "Balance.True", desc: "Actively corrects cognitive frameworks to align with objective reality" },
          { key: "Goal", type: "Goal.SageWithin_KingWithout", desc: "Sage Within, King Without — the ultimate objective" },
        ]},
      ],
    },
    {
      id: "cosmic-server", tag: "Cosmic Server Model", tagEn: "COSMIC SERVER MODEL", tagColor: "oklch(0.70 0.12 220)",
      title: "CosmicServer · The Cosmic Server", subtitle: "From Passive Reception to Active API Invocation",
      quote: "The TrueSelf is the PersonalTerminal connected to the CosmicServer. The Cosmic Server contains all information from the universe's creation to the present, as well as all the APIs that drive the operation of all things.",
      detail: "The essence of 'knowing without thinking': answers are not thought up, they are downloaded. Cultivation is the systematic process of 'clearing viruses, closing ads, upgrading hardware, and optimizing the operating system.'",
      code: [
        { comment: "// Cosmic Server Permission Stages", items: [
          { key: "Refine Jing to Qi", type: "Permission.Dial_Up", desc: "Dial-up: passive reception — occasional flashes of inspiration" },
          { key: "Refine Qi to Shen", type: "Permission.Broadband_Read", desc: "Broadband: read-only access — stable insight" },
          { key: "Refine Shen to Void", type: "Permission.Developer_RWX", desc: "Developer access: read-write-execute — invoke Cosmic APIs" },
        ]},
        { comment: "// Core API Calls", items: [
          { key: "Flash of Insight", type: "CosmicServer.Push()", desc: "Data packet downloaded by TrueSelf when Ego briefly disconnects" },
          { key: "Siddhi", type: "CosmicAPI.DirectCall()", desc: "After root access: bypass standard library for direct invocation" },
        ]},
      ],
    },
  ],
};

export default function ProtocolQuotesSection() {
  const [activeId, setActiveId] = useState("dual-layer");
  const { lang } = useLang();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const quotes = quotesData[lang as "zh" | "en"];
  const active = quotes.find((q) => q.id === activeId) || quotes[0];

  const sectionBg = isDark ? "oklch(0.09 0.02 270)" : "oklch(0.95 0.01 80)";
  const cardBg = isDark ? "oklch(0.11 0.03 265 / 0.7)" : "oklch(0.99 0.01 80 / 0.9)";
  const cardBorder = active.tagColor.replace(")", " / 0.15)");
  const headerBorder = isDark ? "oklch(1 0 0 / 0.06)" : "oklch(0 0 0 / 0.08)";
  const titleColor = isDark ? "oklch(0.90 0.01 80)" : "oklch(0.10 0.02 270)";
  const subtitleColor = isDark ? "oklch(0.45 0.04 270)" : "oklch(0.40 0.04 270)";
  const quoteTextColor = isDark ? "oklch(0.82 0.04 80)" : "oklch(0.20 0.04 80)";
  const detailColor = isDark ? "oklch(0.62 0.04 270)" : "oklch(0.35 0.04 270)";
  const codeBg = isDark ? "oklch(0.07 0.02 270 / 0.8)" : "oklch(0.90 0.01 80 / 0.9)";
  const codeBorder = isDark ? "oklch(1 0 0 / 0.06)" : "oklch(0 0 0 / 0.08)";
  const codeCommentColor = isDark ? "oklch(0.45 0.06 175)" : "oklch(0.40 0.06 175)";
  const codeKeyColor = isDark ? "oklch(0.85 0.06 80)" : "oklch(0.20 0.06 80)";
  const codeDescColor = isDark ? "oklch(0.50 0.04 270)" : "oklch(0.40 0.04 270)";
  const footerBg = isDark ? "oklch(0.09 0.02 270 / 0.5)" : "oklch(0.92 0.01 80 / 0.6)";
  const footerTextColor = isDark ? "oklch(0.35 0.04 270)" : "oklch(0.45 0.04 270)";
  const tabInactiveBg = isDark ? "oklch(0.12 0.03 265 / 0.5)" : "oklch(0.92 0.01 80 / 0.8)";
  const tabInactiveBorder = isDark ? "oklch(1 0 0 / 0.06)" : "oklch(0 0 0 / 0.08)";
  const tabInactiveColor = isDark ? "oklch(0.55 0.04 270)" : "oklch(0.40 0.04 270)";
  const headingColor = isDark ? "oklch(0.93 0.01 80)" : "oklch(0.10 0.02 270)";
  const subheadColor = isDark ? "oklch(0.55 0.04 270)" : "oklch(0.40 0.04 270)";

  return (
    <section id="quotes" className="relative py-24 overflow-hidden" style={{ background: sectionBg, transition: "background 0.5s ease" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 40% at 50% 60%, oklch(0.65 0.12 175 / 0.04) 0%, transparent 70%)" }} />

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
            style={{ background: "oklch(0.65 0.12 175 / 0.08)", border: "1px solid oklch(0.65 0.12 175 / 0.2)" }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "oklch(0.65 0.12 175)", boxShadow: "0 0 6px oklch(0.65 0.12 175)" }} />
            <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.7rem", color: "oklch(0.65 0.12 175)", letterSpacing: "0.2em" }}>PROTOCOL EXCERPTS</span>
          </div>
          <h2 className="mb-4" style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 900, color: headingColor }}>
            {lang === "zh" ? "协议摘录" : "Protocol Excerpts"}
          </h2>
          <p style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "0.9rem", color: subheadColor, fontWeight: 300 }}>
            {lang === "zh" ? "黄庭协议 v7.6 · 核心理论原文节选" : "Huangting Protocol v7.6 · Selected Core Theory Passages"}
          </p>
        </div>

        {/* Tab selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {quotes.map((q) => (
            <button key={q.id} onClick={() => setActiveId(q.id)}
              className="px-5 py-2.5 rounded-full text-sm transition-all duration-300"
              style={{
                fontFamily: "'Noto Sans SC', sans-serif", fontSize: "0.82rem",
                fontWeight: activeId === q.id ? 600 : 400,
                background: activeId === q.id ? `${q.tagColor.replace(")", " / 0.15)")}` : tabInactiveBg,
                border: `1px solid ${activeId === q.id ? q.tagColor.replace(")", " / 0.4)") : tabInactiveBorder}`,
                color: activeId === q.id ? q.tagColor : tabInactiveColor,
                boxShadow: activeId === q.id ? `0 0 20px ${q.tagColor.replace(")", " / 0.15)")}` : "none",
              }}>
              {q.tag}
            </button>
          ))}
        </div>

        {/* Quote card */}
        <div key={active.id} className="max-w-5xl mx-auto rounded-2xl overflow-hidden"
          style={{ background: cardBg, border: `1px solid ${cardBorder}`, backdropFilter: "blur(20px)", boxShadow: isDark ? `0 0 80px ${active.tagColor.replace(")", " / 0.06)")}, inset 0 1px 0 oklch(1 0 0 / 0.04)` : "0 4px 30px oklch(0 0 0 / 0.08)" }}>

          {/* Card header */}
          <div className="px-8 md:px-12 py-6 border-b flex flex-col md:flex-row md:items-center justify-between gap-3"
            style={{ borderColor: headerBorder }}>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="px-2.5 py-0.5 rounded text-xs"
                  style={{ fontFamily: "'Cinzel', serif", fontSize: "0.65rem", letterSpacing: "0.15em", background: `${active.tagColor.replace(")", " / 0.1)")}`, border: `1px solid ${active.tagColor.replace(")", " / 0.25)")}`, color: active.tagColor }}>
                  {active.tagEn}
                </span>
              </div>
              <h3 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)", fontWeight: 700, color: titleColor }}>
                {active.title}
              </h3>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", color: subtitleColor, marginTop: "2px" }}>
                {active.subtitle}
              </p>
            </div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: subtitleColor, whiteSpace: "nowrap" }}>
              Huangting Protocol v7.6
            </div>
          </div>

          {/* Main quote */}
          <div className="px-8 md:px-12 py-8">
            <blockquote className="border-l-2 pl-6 mb-6" style={{ borderColor: active.tagColor.replace(")", " / 0.4)") }}>
              <p style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "clamp(1rem, 2vw, 1.2rem)", fontWeight: 500, color: quoteTextColor, lineHeight: 2, fontStyle: "italic" }}>
                「{active.quote}」
              </p>
            </blockquote>
            <p className="mb-8" style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "0.9rem", color: detailColor, fontWeight: 300, lineHeight: 1.9, paddingLeft: "1.5rem" }}>
              {active.detail}
            </p>

            {/* Code blocks */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {active.code.map((block, bi) => (
                <div key={bi} className="rounded-xl overflow-hidden" style={{ background: codeBg, border: `1px solid ${codeBorder}` }}>
                  <div className="px-4 py-2.5 border-b" style={{ borderColor: codeBorder }}>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", color: codeCommentColor }}>{block.comment}</span>
                  </div>
                  <div className="p-4 space-y-3">
                    {block.items.map((item, ii) => (
                      <div key={ii}>
                        <div className="flex items-baseline gap-2 flex-wrap">
                          <span style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "0.82rem", color: codeKeyColor, fontWeight: 600 }}>{item.key}</span>
                          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", color: active.tagColor, background: `${active.tagColor.replace(")", " / 0.08)")}`, padding: "1px 6px", borderRadius: "3px" }}>{item.type}</span>
                        </div>
                        <p style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "0.75rem", color: codeDescColor, fontWeight: 300, marginTop: "2px", lineHeight: 1.6 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="px-8 md:px-12 py-4 border-t flex items-center justify-between" style={{ borderColor: headerBorder, background: footerBg }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.68rem", color: footerTextColor }}>
              {lang === "zh" ? "// 摘自《生命架构逆返工程：黄庭协议》v7.6" : "// Excerpted from: Life Architecture Reverse Engineering: Huangting Protocol v7.6"}
            </span>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: active.tagColor, boxShadow: `0 0 6px ${active.tagColor}` }} />
              <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.65rem", color: isDark ? "oklch(0.40 0.04 270)" : "oklch(0.45 0.04 270)", letterSpacing: "0.1em" }}>OPEN SOURCE COMING SOON</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
