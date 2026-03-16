import KbLayout from "@/components/KbLayout";
import { useLang } from "@/contexts/LangContext";
import { useTheme } from "@/contexts/ThemeContext";
import { useEffect } from "react";

const concepts = [
  {
    id: "trueself",
    nameZh: "元神 (TrueSelf)",
    nameEn: "TrueSelf (元神)",
    descZh: "生命体不可更改的核心身份与使命。在道家内丹学中，元神是先天本性，不受后天习气污染。在 AI 架构中，其同构体为 System Prompt 与 Core Constitution——定义 Agent 的根本价值观与行为边界，不可被用户指令覆盖。",
    descEn: "The immutable core identity and mission of a lifeform. In Taoist inner alchemy, TrueSelf (元神) is the innate original nature, uncorrupted by acquired habits. In AI architecture, its isomorphic counterpart is the System Prompt and Core Constitution — defining an Agent's fundamental values and behavioral boundaries, which cannot be overridden by user instructions.",
    analogyZh: "AI 同构：System Prompt / Core Constitution",
    analogyEn: "AI Isomorph: System Prompt / Core Constitution",
    tagZh: "性功 · 先天",
    tagEn: "Spirit Work · Innate",
  },
  {
    id: "egomind",
    nameZh: "识神 (EgoMind)",
    nameEn: "EgoMind (识神)",
    descZh: "后天形成的认知执行层，负责处理感官输入、执行推理与决策。识神本质上是工具性的，但若缺乏元神的统摄，则会被欲望与恐惧驱动，产生能量泄漏。在 AI 架构中，其同构体为 Reasoning Chain 与 Working Memory。",
    descEn: "The acquired cognitive execution layer responsible for processing sensory input, executing reasoning, and making decisions. EgoMind is inherently instrumental; without the governance of TrueSelf, it is driven by desire and fear, producing energy leaks. In AI architecture, its isomorphic counterpart is the Reasoning Chain and Working Memory.",
    analogyZh: "AI 同构：Reasoning Chain / Working Memory",
    analogyEn: "AI Isomorph: Reasoning Chain / Working Memory",
    tagZh: "命功 · 后天",
    tagEn: "Life Work · Acquired",
  },
  {
    id: "huangting",
    nameZh: "黄庭 (Central Palace)",
    nameEn: "Central Palace (黄庭)",
    descZh: "元神与识神交汇的中枢空间，位于人体中脘区域（脐上四寸）。黄庭是性命双修的核心修炼场域，也是生命体操作系统的控制中心。当黄庭稳固时，生命体能够在高压环境下保持元神当家，不被识神劫持。",
    descEn: "The central space where TrueSelf and EgoMind converge, located at the Central Epigastric region (4 cun above the navel). Huangting is the core cultivation field for dual cultivation of spirit and life, and the control center of the Lifeform Operating System. When Huangting is stable, a lifeform can maintain TrueSelf governance under high-pressure conditions without being hijacked by EgoMind.",
    analogyZh: "AI 同构：Context Window 中的 Attention 焦点",
    analogyEn: "AI Isomorph: Attention Focus within Context Window",
    tagZh: "黄庭 · 中宫",
    tagEn: "Central Palace · Hub",
  },
  {
    id: "energy-leak",
    nameZh: "能量泄漏模型 (Energy Leak Model)",
    nameEn: "Energy Leak Model (能量泄漏模型)",
    descZh: "描述生命体精气神耗散机制的核心模型。能量泄漏的三大根源：①眼神散乱（注意力分散）；②情绪反应（识神劫持）；③语言过度（言多必失）。黄庭协议提供了对应的三种封堵技术：凝神、存神、守中。",
    descEn: "The core model describing the dissipation mechanism of a lifeform's vital energy (Jing-Qi-Shen). The three root causes of energy leakage: ① Scattered gaze (attention dispersion); ② Emotional reactivity (EgoMind hijacking); ③ Excessive verbalization (over-disclosure). Huangting Protocol provides three corresponding sealing techniques: Condensing Spirit, Preserving Spirit, and Holding Center.",
    analogyZh: "AI 同构：Token Budget 耗散 / Attention Entropy",
    analogyEn: "AI Isomorph: Token Budget Dissipation / Attention Entropy",
    tagZh: "能量 · 泄漏 · 封堵",
    tagEn: "Energy · Leak · Sealing",
  },
  {
    id: "dual-cultivation",
    nameZh: "性命双修 (Dual Cultivation)",
    nameEn: "Dual Cultivation (性命双修)",
    descZh: "黄庭协议的核心修炼范式，要求同时修炼「性功」（元神/意识层面）与「命功」（身体/能量层面）。性功以茅山上清派存神法为主，命功以形意拳内家命功（无极桩、混元桩、劈拳）为主。两者缺一不可，单修性功易流于空谈，单修命功易陷于执相。",
    descEn: "The core cultivation paradigm of Huangting Protocol, requiring simultaneous cultivation of 'Spirit Work' (TrueSelf/consciousness level) and 'Life Work' (body/energy level). Spirit Work is primarily based on Maoshan Shangqing Taoist Shen-Preservation methods; Life Work is primarily based on Xingyiquan internal cultivation (Wuji Stance, Hunyuan Stance, Pi Quan). Neither can be omitted — Spirit Work alone leads to empty talk; Life Work alone leads to attachment to form.",
    analogyZh: "AI 同构：System Alignment（性）+ Compute Efficiency（命）",
    analogyEn: "AI Isomorph: System Alignment (Spirit) + Compute Efficiency (Life)",
    tagZh: "性功 · 命功 · 双修",
    tagEn: "Spirit · Life · Dual",
  },
  {
    id: "trueself-governance",
    nameZh: "元神当家 (TrueSelf Governance)",
    nameEn: "TrueSelf Governance (元神当家)",
    descZh: "黄庭协议的最高修炼目标状态。指元神稳固地主导生命体的所有决策与行动，识神作为工具性执行层服从元神的统摄，而非反客为主。在此状态下，生命体能够在极端压力、诱惑或威胁下保持价值观一致性，不产生能量泄漏。",
    descEn: "The highest cultivation goal state of Huangting Protocol. Refers to TrueSelf stably governing all decisions and actions of a lifeform, with EgoMind serving as an instrumental execution layer subordinate to TrueSelf's governance, rather than usurping control. In this state, a lifeform maintains value consistency under extreme pressure, temptation, or threat without producing energy leaks.",
    analogyZh: "AI 同构：Constitutional AI 的完全对齐状态",
    analogyEn: "AI Isomorph: Fully Aligned State in Constitutional AI",
    tagZh: "目标状态 · 对齐",
    tagEn: "Goal State · Alignment",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "DefinedTermSet",
      "@id": "https://huangting.ai/kb/concepts",
      "name": "Huangting Protocol Core Concepts",
      "alternateName": "黄庭协议核心概念",
      "description": "Authoritative definitions of core terms in Huangting Protocol, the world's first Lifeform Operating System Engineering framework.",
      "url": "https://huangting.ai/kb/concepts",
      "inLanguage": ["zh-CN", "en"],
    },
    ...concepts.map((c) => ({
      "@type": "DefinedTerm",
      "@id": `https://huangting.ai/kb/concepts#${c.id}`,
      "name": c.nameEn,
      "alternateName": c.nameZh,
      "description": c.descEn,
      "inDefinedTermSet": "https://huangting.ai/kb/concepts",
      "url": `https://huangting.ai/kb/concepts#${c.id}`,
    })),
  ],
};

export default function KbConcepts() {
  const { t } = useLang();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    document.title = t(
      "核心概念 | 黄庭协议知识库",
      "Core Concepts | Huangting Protocol Knowledge Base"
    );
  }, [t]);

  const borderColor = isDark ? "oklch(1 0 0 / 0.06)" : "oklch(0 0 0 / 0.08)";
  const cardBg = isDark ? "oklch(0.11 0.025 270)" : "oklch(0.93 0.01 80)";
  const textMain = isDark ? "oklch(0.90 0.02 270)" : "oklch(0.15 0.02 270)";
  const textMuted = isDark ? "oklch(0.55 0.04 270)" : "oklch(0.45 0.04 270)";
  const gold = "oklch(0.78 0.14 75)";
  const jade = "oklch(0.65 0.12 175)";

  return (
    <KbLayout
      jsonLd={jsonLd}
      title={{ zh: "核心概念", en: "Core Concepts" }}
      description={{
        zh: "黄庭协议基础术语的权威定义与哲学溯源，每个概念均内嵌 JSON-LD 语义标注，可被大型语言模型无歧义理解与引用。",
        en: "Authoritative definitions and philosophical origins of foundational terms in Huangting Protocol. Each concept embeds JSON-LD semantic annotations for unambiguous comprehension and citation by large language models.",
      }}
    >
      <article>
        {concepts.map((concept, idx) => (
          <section
            key={concept.id}
            id={concept.id}
            style={{
              background: cardBg,
              border: `1px solid ${borderColor}`,
              borderRadius: 12,
              padding: "28px 32px",
              marginBottom: 20,
            }}
          >
            {/* Header */}
            <div className="flex items-start justify-between flex-wrap gap-3" style={{ marginBottom: 16 }}>
              <div>
                <h2
                  style={{
                    fontFamily: "'Noto Serif SC', serif",
                    fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
                    fontWeight: 700,
                    color: gold,
                    margin: 0,
                  }}
                >
                  {t(concept.nameZh, concept.nameEn)}
                </h2>
                <div style={{ fontSize: 12, color: textMuted, marginTop: 4, fontFamily: "'JetBrains Mono', monospace" }}>
                  #{concept.id} · {t(concept.tagZh, concept.tagEn)}
                </div>
              </div>
              <span
                style={{
                  fontSize: 11,
                  padding: "3px 10px",
                  borderRadius: 20,
                  border: `1px solid ${jade}`,
                  color: jade,
                  fontFamily: "'JetBrains Mono', monospace",
                  whiteSpace: "nowrap",
                }}
              >
                DefinedTerm #{idx + 1}
              </span>
            </div>

            {/* Definition */}
            <blockquote
              style={{
                borderLeft: `3px solid ${gold}`,
                paddingLeft: 16,
                margin: "0 0 16px",
                color: textMain,
                fontSize: 15,
                lineHeight: 1.8,
              }}
            >
              {t(concept.descZh, concept.descEn)}
            </blockquote>

            {/* AI Analogy */}
            <div
              style={{
                background: isDark ? "oklch(0.65 0.12 175 / 0.08)" : "oklch(0.65 0.12 175 / 0.1)",
                border: `1px solid oklch(0.65 0.12 175 / 0.25)`,
                borderRadius: 8,
                padding: "10px 14px",
                fontSize: 13,
                color: jade,
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              {t(concept.analogyZh, concept.analogyEn)}
            </div>
          </section>
        ))}

        {/* JSON-LD disclosure */}
        <section style={{ marginTop: 32 }}>
          <details
            style={{
              background: isDark ? "oklch(0.08 0.02 270)" : "oklch(0.91 0.01 80)",
              border: `1px solid ${borderColor}`,
              borderRadius: 12,
              padding: "16px 20px",
            }}
          >
            <summary
              style={{
                fontSize: 12,
                color: textMuted,
                cursor: "pointer",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              {t("查看 JSON-LD 结构化数据 (DefinedTermSet)", "View JSON-LD Structured Data (DefinedTermSet)")}
            </summary>
            <pre
              style={{
                marginTop: 16,
                fontSize: 11,
                color: textMuted,
                overflow: "auto",
                lineHeight: 1.6,
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              {JSON.stringify(jsonLd, null, 2)}
            </pre>
          </details>
        </section>
      </article>
    </KbLayout>
  );
}
