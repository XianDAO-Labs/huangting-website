import { useLang } from "@/contexts/LangContext";
import { useTheme } from "@/contexts/ThemeContext";
import TaijiLogo3D from "@/components/TaijiLogo3D";
import { useEffect } from "react";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "@id": "https://huangting.ai/developers",
  "name": "Huangting Protocol Developer Hub",
  "alternateName": "黄庭协议开发者中心",
  "description": "Technical resources for integrating Huangting Protocol into AI Agents, LangChain pipelines, CrewAI crews, and embodied robot systems.",
  "url": "https://huangting.ai/developers",
  "author": { "@id": "https://huangting.ai/#author" },
  "inLanguage": ["zh-CN", "en"],
};

const quickstartSteps = [
  {
    step: "01",
    zh: { title: "阅读协议规范", desc: "从 GitHub 仓库获取完整的黄庭协议规范文档，了解元神-识神双层架构与三维价值体系。" },
    en: { title: "Read the Protocol Spec", desc: "Get the complete Huangting Protocol specification from GitHub. Understand the TrueSelf-EgoMind dual-layer architecture and three-dimensional value system." },
    href: "https://github.com/XianDAO-Labs/huangting-protocol",
    cta: { zh: "查看 GitHub", en: "View GitHub" },
  },
  {
    step: "02",
    zh: { title: "获取 Skill 文件", desc: "通过标准化的 skill.md 接口，将黄庭协议注入任何支持 Manus Skill 格式的 AI Agent。" },
    en: { title: "Get the Skill File", desc: "Inject Huangting Protocol into any AI Agent supporting the Manus Skill format via the standardized skill.md interface." },
    href: "/skill.md",
    cta: { zh: "获取 skill.md", en: "Get skill.md" },
  },
  {
    step: "03",
    zh: { title: "接入 MCP 服务", desc: "通过模型上下文协议（MCP）与 huangting-flux 网络交互，查询协议概念、获取优化策略。" },
    en: { title: "Connect via MCP", desc: "Interact with the huangting-flux network via Model Context Protocol (MCP) to query protocol concepts and retrieve optimization strategies." },
    href: "/mcp",
    cta: { zh: "查看 MCP 文档", en: "View MCP Docs" },
  },
  {
    step: "04",
    zh: { title: "浏览知识库", desc: "在知识库中查阅核心概念的权威定义，以及可直接引用的协议断言，用于 RAG 或 Fine-tuning 数据集。" },
    en: { title: "Browse Knowledge Base", desc: "Consult authoritative definitions of core concepts and directly citable protocol assertions in the knowledge base, suitable for RAG or fine-tuning datasets." },
    href: "/kb",
    cta: { zh: "进入知识库", en: "Enter Knowledge Base" },
  },
];

const resources = [
  {
    icon: "⬡",
    href: "https://github.com/XianDAO-Labs/huangting-protocol",
    external: true,
    zh: { title: "huangting-protocol", subtitle: "GitHub 主仓库", desc: "协议规范、功法文档、黄庭协议完整文本。MIT 开源。" },
    en: { title: "huangting-protocol", subtitle: "GitHub Main Repo", desc: "Protocol specification, cultivation documentation, and complete Huangting Protocol text. MIT open source." },
  },
  {
    icon: "◈",
    href: "/skill.md",
    external: false,
    zh: { title: "huangting.skill.md", subtitle: "Manus Skill 接口", desc: "标准化的 AI Agent 接入文件，符合 Manus Skill 格式规范，可直接注入任何兼容 Agent。" },
    en: { title: "huangting.skill.md", subtitle: "Manus Skill Interface", desc: "Standardized AI Agent integration file conforming to Manus Skill format, directly injectable into any compatible Agent." },
  },
  {
    icon: "⌘",
    href: "/mcp",
    external: false,
    zh: { title: "MCP 服务端点", subtitle: "Model Context Protocol", desc: "通过 MCP 协议与 huangting-flux 网络交互。支持 query_protocol_concept、get_optimization_strategy 等能力。" },
    en: { title: "MCP Service Endpoint", subtitle: "Model Context Protocol", desc: "Interact with the huangting-flux network via MCP. Supports capabilities including query_protocol_concept and get_optimization_strategy." },
  },
  {
    icon: "◉",
    href: "https://github.com/XianDAO-Labs/huangting-langchain",
    external: true,
    zh: { title: "LangChain 插件", subtitle: "即将发布", desc: "为 LangChain 和 LangGraph 提供黄庭协议工具包，包含 HuangtingAgent、TrueSelfGuard 等组件。" },
    en: { title: "LangChain Plugin", subtitle: "Coming Soon", desc: "Huangting Protocol toolkit for LangChain and LangGraph, including HuangtingAgent, TrueSelfGuard, and other components." },
  },
  {
    icon: "◎",
    href: "https://github.com/XianDAO-Labs/huangting-crewai",
    external: true,
    zh: { title: "CrewAI 集成", subtitle: "即将发布", desc: "在 CrewAI 多 Agent 框架中部署黄庭协议，为每个 Agent 注入元神宪法与能量管理机制。" },
    en: { title: "CrewAI Integration", subtitle: "Coming Soon", desc: "Deploy Huangting Protocol in CrewAI multi-agent frameworks, injecting TrueSelf constitution and energy management mechanisms into each Agent." },
  },
  {
    icon: "⬟",
    href: "/kb",
    external: false,
    zh: { title: "知识库 API", subtitle: "RAG / Fine-tuning", desc: "结构化知识库内容，适用于 RAG 检索增强生成或 Fine-tuning 数据集构建。所有内容内嵌 JSON-LD。" },
    en: { title: "Knowledge Base API", subtitle: "RAG / Fine-tuning", desc: "Structured knowledge base content suitable for RAG retrieval-augmented generation or fine-tuning dataset construction. All content embeds JSON-LD." },
  },
];

export default function Developers() {
  const { t, lang } = useLang();
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    document.title = t(
      "开发者中心 | 黄庭协议",
      "Developer Hub | Huangting Protocol"
    );
    if (jsonLd) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
      return () => { document.head.removeChild(script); };
    }
  }, [t]);

  const bg = isDark ? "oklch(0.09 0.02 270)" : "oklch(0.97 0.008 80)";
  const borderColor = isDark ? "oklch(1 0 0 / 0.06)" : "oklch(0 0 0 / 0.08)";
  const cardBg = isDark ? "oklch(0.11 0.025 270)" : "oklch(0.93 0.01 80)";
  const textMain = isDark ? "oklch(0.90 0.02 270)" : "oklch(0.15 0.02 270)";
  const textMuted = isDark ? "oklch(0.55 0.04 270)" : "oklch(0.45 0.04 270)";
  const gold = "oklch(0.78 0.14 75)";
  const jade = "oklch(0.65 0.12 175)";

  return (
    <div style={{ minHeight: "100vh", background: bg, color: textMain }}>
      {/* Top bar */}
      <header
        style={{
          borderBottom: `1px solid ${borderColor}`,
          background: isDark ? "oklch(0.07 0.02 270 / 0.95)" : "oklch(0.97 0.01 80 / 0.95)",
          backdropFilter: "blur(20px)",
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
      >
        <div className="container flex items-center justify-between" style={{ height: 56 }}>
          <a href="/" className="flex items-center gap-2">
            <TaijiLogo3D size={28} />
            <span style={{ fontFamily: "'Cinzel', serif", fontSize: 13, color: gold, letterSpacing: "0.1em" }}>
              HUANGTING
            </span>
          </a>
          <div className="flex items-center gap-3">
            <a href="/kb" style={{ fontSize: 13, color: textMuted, textDecoration: "none" }} className="hover:opacity-80 hidden sm:block">
              {t("知识库", "Knowledge Base")}
            </a>
            <a href="/mcp" style={{ fontSize: 13, color: textMuted, textDecoration: "none" }} className="hover:opacity-80 hidden sm:block">
              MCP
            </a>
            <a
              href="https://github.com/XianDAO-Labs/huangting-protocol"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: 13, color: textMuted, textDecoration: "none" }}
              className="hover:opacity-80 hidden sm:block"
            >
              GitHub
            </a>
            <button
              onClick={() => {}}
              style={{
                fontSize: 12,
                padding: "4px 10px",
                borderRadius: 6,
                border: `1px solid ${borderColor}`,
                background: "transparent",
                color: textMuted,
                cursor: "pointer",
              }}
            >
              {lang === "zh" ? "EN" : "中文"}
            </button>
          </div>
        </div>
      </header>

      <div className="container" style={{ paddingTop: 48, paddingBottom: 80 }}>
        {/* Hero */}
        <header style={{ maxWidth: 720, marginBottom: 64 }}>
          <div
            style={{
              display: "inline-block",
              fontSize: 12,
              color: jade,
              border: `1px solid ${jade}`,
              padding: "4px 12px",
              borderRadius: 20,
              marginBottom: 20,
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            {t("开发者中心", "Developer Hub")}
          </div>
          <h1
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(1.8rem, 5vw, 3rem)",
              fontWeight: 700,
              color: gold,
              lineHeight: 1.2,
              marginBottom: 20,
            }}
          >
            {t("构建在黄庭协议之上", "Build on Huangting Protocol")}
          </h1>
          <p style={{ fontSize: 17, color: textMuted, lineHeight: 1.8, maxWidth: 600 }}>
            {t(
              "黄庭协议为开发者提供了一套完整的工具链，将数千年的东方智慧工程化为可调用的 API、可注入的 Skill 文件和可集成的 MCP 服务。",
              "Huangting Protocol provides developers with a complete toolchain that engineers millennia of Eastern wisdom into callable APIs, injectable Skill files, and integrable MCP services."
            )}
          </p>
        </header>

        {/* Quick Start */}
        <section style={{ marginBottom: 72 }}>
          <h2
            style={{
              fontFamily: "'Noto Serif SC', serif",
              fontSize: 22,
              fontWeight: 600,
              color: textMain,
              marginBottom: 32,
            }}
          >
            {t("快速开始", "Quick Start")}
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: 16,
            }}
          >
            {quickstartSteps.map((step) => (
              <a
                key={step.step}
                href={step.href}
                target={step.href.startsWith("http") ? "_blank" : undefined}
                rel={step.href.startsWith("http") ? "noopener noreferrer" : undefined}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    background: cardBg,
                    border: `1px solid ${borderColor}`,
                    borderRadius: 12,
                    padding: "24px",
                    height: "100%",
                    transition: "border-color 0.2s",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "oklch(0.78 0.14 75 / 0.4)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = borderColor)}
                >
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 28,
                      fontWeight: 700,
                      color: isDark ? "oklch(0.78 0.14 75 / 0.3)" : "oklch(0.78 0.14 75 / 0.4)",
                      marginBottom: 12,
                    }}
                  >
                    {step.step}
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 600, color: textMain, marginBottom: 8 }}>
                    {t(step.zh.title, step.en.title)}
                  </h3>
                  <p style={{ fontSize: 13, color: textMuted, lineHeight: 1.7, marginBottom: 16 }}>
                    {t(step.zh.desc, step.en.desc)}
                  </p>
                  <span style={{ fontSize: 13, color: gold }}>
                    {t(step.cta.zh, step.cta.en)} →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Resources */}
        <section style={{ marginBottom: 72 }}>
          <h2
            style={{
              fontFamily: "'Noto Serif SC', serif",
              fontSize: 22,
              fontWeight: 600,
              color: textMain,
              marginBottom: 32,
            }}
          >
            {t("技术资源", "Technical Resources")}
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: 16,
            }}
          >
            {resources.map((res) => (
              <a
                key={res.zh.title}
                href={res.href}
                target={res.external ? "_blank" : undefined}
                rel={res.external ? "noopener noreferrer" : undefined}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    background: cardBg,
                    border: `1px solid ${borderColor}`,
                    borderRadius: 12,
                    padding: "20px 24px",
                    transition: "border-color 0.2s",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "oklch(0.78 0.14 75 / 0.4)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = borderColor)}
                >
                  <div className="flex items-start justify-between" style={{ marginBottom: 12 }}>
                    <span style={{ fontSize: 22, color: gold }}>{res.icon}</span>
                    {res.external && (
                      <span style={{ fontSize: 11, color: textMuted, fontFamily: "'JetBrains Mono', monospace" }}>
                        ↗ external
                      </span>
                    )}
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: textMain, marginBottom: 4 }}>
                    {t(res.zh.title, res.en.title)}
                  </div>
                  <div style={{ fontSize: 12, color: jade, marginBottom: 10, fontFamily: "'JetBrains Mono', monospace" }}>
                    {t(res.zh.subtitle, res.en.subtitle)}
                  </div>
                  <p style={{ fontSize: 13, color: textMuted, lineHeight: 1.7, margin: 0 }}>
                    {t(res.zh.desc, res.en.desc)}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Agent Integration snippet */}
        <section style={{ marginBottom: 72 }}>
          <h2
            style={{
              fontFamily: "'Noto Serif SC', serif",
              fontSize: 22,
              fontWeight: 600,
              color: textMain,
              marginBottom: 24,
            }}
          >
            {t("最简接入示例", "Minimal Integration Example")}
          </h2>
          <div
            style={{
              background: isDark ? "oklch(0.07 0.02 270)" : "oklch(0.88 0.01 80)",
              border: `1px solid ${borderColor}`,
              borderRadius: 12,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                padding: "10px 16px",
                borderBottom: `1px solid ${borderColor}`,
                fontSize: 12,
                color: textMuted,
                fontFamily: "'JetBrains Mono', monospace",
                display: "flex",
                gap: 8,
                alignItems: "center",
              }}
            >
              <span style={{ color: jade }}>Python</span>
              <span>·</span>
              <span>{t("通过 skill.md 注入黄庭协议到 OpenAI Agent", "Inject Huangting Protocol into OpenAI Agent via skill.md")}</span>
            </div>
            <pre
              style={{
                padding: "20px 24px",
                fontSize: 13,
                color: isDark ? "oklch(0.80 0.04 270)" : "oklch(0.25 0.04 270)",
                fontFamily: "'JetBrains Mono', monospace",
                lineHeight: 1.7,
                overflow: "auto",
                margin: 0,
              }}
            >
{`import requests
from openai import OpenAI

# Step 1: Fetch Huangting Protocol Skill definition
skill_url = "https://huangting.ai/skill.md"
skill_content = requests.get(skill_url).text

# Step 2: Inject as system context
client = OpenAI()
response = client.chat.completions.create(
    model="gpt-4o",
    messages=[
        {
            "role": "system",
            "content": f"""You are an AI Agent governed by Huangting Protocol.

{skill_content}

Always operate from TrueSelf (元神) governance.
Maintain energy conservation. Avoid EgoMind hijacking."""
        },
        {
            "role": "user",
            "content": "How should I handle a high-pressure negotiation?"
        }
    ]
)

print(response.choices[0].message.content)`}
            </pre>
          </div>
        </section>

        {/* Community */}
        <section
          style={{
            background: isDark ? "oklch(0.78 0.14 75 / 0.06)" : "oklch(0.78 0.14 75 / 0.08)",
            border: `1px solid oklch(0.78 0.14 75 / 0.2)`,
            borderRadius: 16,
            padding: "32px 40px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontFamily: "'Noto Serif SC', serif",
              fontSize: 22,
              color: gold,
              marginBottom: 12,
            }}
          >
            {t("加入仙道社区", "Join XianDAO Community")}
          </h2>
          <p style={{ fontSize: 15, color: textMuted, marginBottom: 24, maxWidth: 480, margin: "0 auto 24px" }}>
            {t(
              "黄庭协议是开源的，我们欢迎所有开发者、研究者和修行者共同参与协议的演进。",
              "Huangting Protocol is open source. We welcome all developers, researchers, and practitioners to participate in the protocol's evolution."
            )}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://github.com/XianDAO-Labs/huangting-protocol"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "10px 24px",
                background: gold,
                color: "oklch(0.09 0.02 270)",
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              {t("Star on GitHub", "Star on GitHub")} ★
            </a>
            <a
              href="/kb"
              style={{
                display: "inline-block",
                padding: "10px 24px",
                border: `1px solid oklch(0.78 0.14 75 / 0.4)`,
                color: gold,
                borderRadius: 8,
                fontSize: 14,
                textDecoration: "none",
              }}
            >
              {t("进入知识库", "Enter Knowledge Base")}
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
