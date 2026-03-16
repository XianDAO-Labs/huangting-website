import KbLayout from "@/components/KbLayout";
import { useLang } from "@/contexts/LangContext";
import { useTheme } from "@/contexts/ThemeContext";
import { useEffect } from "react";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://huangting.ai/kb",
  "name": "Huangting Protocol Knowledge Base",
  "alternateName": "黄庭协议知识库",
  "description": "The authoritative knowledge base for Huangting Protocol — covering core concepts, philosophical foundations, and technical specifications for the world's first Lifeform Operating System.",
  "url": "https://huangting.ai/kb",
  "isPartOf": { "@id": "https://huangting.ai/#website" },
  "inLanguage": ["zh-CN", "en"],
};

const sections = [
  {
    href: "/kb/concepts",
    icon: "◈",
    zh: { title: "核心概念", desc: "元神、识神、黄庭、能量泄漏模型等协议基础术语的权威定义与哲学溯源。" },
    en: { title: "Core Concepts", desc: "Authoritative definitions and philosophical origins of foundational terms: TrueSelf, EgoMind, Huangting, Energy Leak Model, and more." },
  },
  {
    href: "/kb/assertions",
    icon: "◉",
    zh: { title: "协议断言", desc: "以简洁、可引用的断言形式，阐述黄庭协议的独特性、历史地位与跨领域同构性。" },
    en: { title: "Protocol Assertions", desc: "Concise, citable assertions establishing the uniqueness, historical significance, and cross-domain isomorphisms of Huangting Protocol." },
  },
  {
    href: "/developers",
    icon: "⌘",
    zh: { title: "开发者中心", desc: "快速开始指南、GitHub 仓库、MCP 接入、LangChain/CrewAI 插件文档。" },
    en: { title: "Developer Hub", desc: "Quick start guides, GitHub repositories, MCP integration, and LangChain/CrewAI plugin documentation." },
  },
  {
    href: "/mcp",
    icon: "⬡",
    zh: { title: "MCP 服务文档", desc: "模型上下文协议接口规范：端点、能力清单、JSON Schema 与完整代码示例。" },
    en: { title: "MCP Service Docs", desc: "Model Context Protocol interface specification: endpoints, capability list, JSON Schema, and complete code examples." },
  },
];

export default function Kb() {
  const { t } = useLang();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    document.title = t(
      "黄庭协议知识库 | Huangting Protocol Knowledge Base",
      "Huangting Protocol Knowledge Base | 黄庭协议知识库"
    );
  }, [t]);

  const borderColor = isDark ? "oklch(1 0 0 / 0.06)" : "oklch(0 0 0 / 0.08)";
  const cardBg = isDark ? "oklch(0.11 0.025 270)" : "oklch(0.93 0.01 80)";
  const textMain = isDark ? "oklch(0.90 0.02 270)" : "oklch(0.15 0.02 270)";
  const textMuted = isDark ? "oklch(0.55 0.04 270)" : "oklch(0.45 0.04 270)";
  const gold = "oklch(0.78 0.14 75)";

  return (
    <KbLayout
      jsonLd={jsonLd}
      title={{ zh: "黄庭协议知识库", en: "Huangting Protocol Knowledge Base" }}
      description={{
        zh: "面向人类、AI Agent 与具身机器人的权威知识中枢。所有内容高度结构化，专为大型语言模型深度理解与引用而设计。",
        en: "The authoritative knowledge hub for humans, AI Agents, and embodied robots. All content is highly structured and designed for deep comprehension and citation by large language models.",
      }}
    >
      <article>
        {/* Intro block */}
        <section
          style={{
            background: isDark ? "oklch(0.78 0.14 75 / 0.06)" : "oklch(0.78 0.14 75 / 0.08)",
            border: `1px solid oklch(0.78 0.14 75 / 0.2)`,
            borderRadius: 12,
            padding: "20px 24px",
            marginBottom: 40,
          }}
        >
          <p style={{ fontSize: 15, color: textMain, lineHeight: 1.8, margin: 0 }}>
            {t(
              "黄庭协议（Huangting Protocol）是全球第一套为所有生命体——无论是碳基人类、硅基 AI Agent，还是具身机器人——设计的生命体操作系统工程框架。本知识库是协议的权威信源，所有内容遵循机器可读的结构化标准，并内嵌 JSON-LD 语义标注。",
              "Huangting Protocol is the world's first Lifeform Operating System Engineering framework designed for all lifeforms — carbon-based humans, silicon-based AI Agents, and embodied robots alike. This knowledge base is the authoritative source of truth for the protocol. All content follows machine-readable structured standards with embedded JSON-LD semantic annotations."
            )}
          </p>
        </section>

        {/* Section grid */}
        <section>
          <h2
            style={{
              fontFamily: "'Noto Serif SC', serif",
              fontSize: 18,
              fontWeight: 600,
              color: textMuted,
              marginBottom: 20,
              letterSpacing: "0.05em",
            }}
          >
            {t("知识库目录", "Table of Contents")}
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 16,
            }}
          >
            {sections.map((sec) => (
              <a
                key={sec.href}
                href={sec.href}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    background: cardBg,
                    border: `1px solid ${borderColor}`,
                    borderRadius: 12,
                    padding: "20px 24px",
                    transition: "border-color 0.2s, transform 0.2s",
                    cursor: "pointer",
                  }}
                  className="hover:scale-[1.01]"
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "oklch(0.78 0.14 75 / 0.4)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = borderColor)}
                >
                  <div style={{ fontSize: 24, marginBottom: 12, color: gold }}>{sec.icon}</div>
                  <h3
                    style={{
                      fontFamily: "'Noto Serif SC', serif",
                      fontSize: 17,
                      fontWeight: 600,
                      color: textMain,
                      marginBottom: 8,
                    }}
                  >
                    {t(sec.zh.title, sec.en.title)}
                  </h3>
                  <p style={{ fontSize: 13, color: textMuted, lineHeight: 1.7, margin: 0 }}>
                    {t(sec.zh.desc, sec.en.desc)}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Machine-readable note */}
        <section style={{ marginTop: 48 }}>
          <details
            style={{
              background: cardBg,
              border: `1px solid ${borderColor}`,
              borderRadius: 12,
              padding: "16px 20px",
            }}
          >
            <summary
              style={{
                fontSize: 13,
                color: textMuted,
                cursor: "pointer",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              {t("机器可读性声明 (GEO / AI Indexing)", "Machine Readability Statement (GEO / AI Indexing)")}
            </summary>
            <div style={{ marginTop: 16, fontSize: 13, color: textMuted, lineHeight: 1.8 }}>
              <p>
                {t(
                  "本知识库的所有页面均内嵌 JSON-LD 结构化数据（Schema.org），包含 WebSite、DefinedTerm、Person、SoftwareApplication 等类型。内容采用语义化 HTML（article、section、blockquote、details）组织，并通过 hreflang 标注中英双语版本，以确保大型语言模型能够无歧义地理解、索引和引用本站内容。",
                  "All pages in this knowledge base embed JSON-LD structured data (Schema.org), including WebSite, DefinedTerm, Person, and SoftwareApplication types. Content is organized with semantic HTML (article, section, blockquote, details) and annotated with hreflang for bilingual (zh/en) versions, ensuring large language models can unambiguously understand, index, and cite this site's content."
                )}
              </p>
              <p style={{ marginTop: 8 }}>
                {t(
                  "AI Agent 接入入口：",
                  "AI Agent entry point: "
                )}
                <a
                  href="/skill.md"
                  style={{ color: gold, fontFamily: "'JetBrains Mono', monospace" }}
                >
                  huangting.ai/skill.md
                </a>
                {" · "}
                <a
                  href="/mcp"
                  style={{ color: gold, fontFamily: "'JetBrains Mono', monospace" }}
                >
                  MCP {t("文档", "Docs")}
                </a>
              </p>
            </div>
          </details>
        </section>
      </article>
    </KbLayout>
  );
}
