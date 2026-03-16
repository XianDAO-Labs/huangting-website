/**
 * 黄庭协议 MCP 文档页面
 * Route: /mcp
 * Design: 深空东方宇宙主义 (Deep Space Oriental Cosmicism)
 */
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleField from "@/components/ParticleField";
import { useTheme } from "@/contexts/ThemeContext";
import { useLang } from "@/contexts/LangContext";

const MCP_ENDPOINT = "https://mcp.huangting.ai/mcp";
const MCP_ENDPOINT_FALLBACK = "https://web-production-c3cf.up.railway.app/mcp";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <button
      onClick={handleCopy}
      style={{
        position: "absolute",
        top: "0.75rem",
        right: "0.75rem",
        padding: "0.25rem 0.6rem",
        fontSize: "0.7rem",
        fontFamily: "'JetBrains Mono', monospace",
        background: copied ? "oklch(0.55 0.18 145 / 0.3)" : "oklch(0.78 0.14 75 / 0.15)",
        border: `1px solid ${copied ? "oklch(0.55 0.18 145 / 0.5)" : "oklch(0.78 0.14 75 / 0.3)"}`,
        color: copied ? "oklch(0.75 0.18 145)" : "oklch(0.78 0.14 75)",
        borderRadius: "4px",
        cursor: "pointer",
        transition: "all 0.2s",
      }}
    >
      {copied ? "✓ Copied" : "Copy"}
    </button>
  );
}

function CodeBlock({ code, language = "bash" }: { code: string; language?: string }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <div style={{ position: "relative", marginTop: "0.75rem", marginBottom: "0.75rem" }}>
      <pre
        style={{
          background: isDark ? "oklch(0.06 0.015 270)" : "oklch(0.93 0.008 80)",
          border: `1px solid ${isDark ? "oklch(0.78 0.14 75 / 0.15)" : "oklch(0.20 0.04 270 / 0.15)"}`,
          borderRadius: "8px",
          padding: "1.25rem 1rem",
          paddingRight: "5rem",
          overflowX: "auto",
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "0.82rem",
          lineHeight: "1.6",
          color: isDark ? "oklch(0.85 0.04 270)" : "oklch(0.25 0.04 270)",
        }}
      >
        <code>{code}</code>
      </pre>
      <CopyButton text={code} />
    </div>
  );
}

function CapabilityCard({
  icon,
  name,
  description,
  params,
  isDark,
}: {
  icon: string;
  name: string;
  description: string;
  params: string;
  isDark: boolean;
}) {
  return (
    <div
      style={{
        background: isDark
          ? "linear-gradient(135deg, oklch(0.12 0.025 270 / 0.8), oklch(0.10 0.02 270 / 0.6))"
          : "linear-gradient(135deg, oklch(0.96 0.01 80 / 0.9), oklch(0.94 0.008 80 / 0.7))",
        border: `1px solid ${isDark ? "oklch(0.78 0.14 75 / 0.2)" : "oklch(0.20 0.04 270 / 0.15)"}`,
        borderRadius: "12px",
        padding: "1.25rem",
        backdropFilter: "blur(10px)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
        <span style={{ fontSize: "1.5rem" }}>{icon}</span>
        <code
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.85rem",
            color: "oklch(0.78 0.14 75)",
            fontWeight: 600,
          }}
        >
          {name}
        </code>
      </div>
      <p
        style={{
          fontSize: "0.88rem",
          color: isDark ? "oklch(0.75 0.03 270)" : "oklch(0.40 0.04 270)",
          marginBottom: "0.5rem",
          lineHeight: "1.5",
        }}
      >
        {description}
      </p>
      <code
        style={{
          fontSize: "0.75rem",
          color: isDark ? "oklch(0.60 0.06 270)" : "oklch(0.55 0.04 270)",
          fontFamily: "'JetBrains Mono', monospace",
        }}
      >
        {params}
      </code>
    </div>
  );
}

export default function Mcp() {
  const { theme } = useTheme();
  const { t } = useLang();
  const isDark = theme === "dark";

  const gold = "oklch(0.78 0.14 75)";
  const textPrimary = isDark ? "oklch(0.92 0.02 270)" : "oklch(0.15 0.04 270)";
  const textSecondary = isDark ? "oklch(0.70 0.03 270)" : "oklch(0.45 0.04 270)";
  const cardBg = isDark
    ? "linear-gradient(135deg, oklch(0.12 0.025 270 / 0.8), oklch(0.10 0.02 270 / 0.6))"
    : "linear-gradient(135deg, oklch(0.97 0.01 80 / 0.9), oklch(0.95 0.008 80 / 0.7))";
  const cardBorder = isDark ? "oklch(0.78 0.14 75 / 0.2)" : "oklch(0.20 0.04 270 / 0.15)";

  const capabilities = [
    {
      icon: "📖",
      name: "get_protocol_concept",
      description: t(
        "查询黄庭协议的核心概念定义（黄庭、无极桩、混元桩、劈拳、性命双修等）",
        "Query core concept definitions of the Huangting Protocol (黄庭, 无极桩, 混元桩, etc.)"
      ),
      params: 'concept_name: str  →  { concept, definition, related_concepts }',
    },
    {
      icon: "⚡",
      name: "get_optimization_strategy",
      description: t(
        "根据任务类型获取推荐的 AI Agent 优化策略",
        "Get recommended AI Agent optimization strategies based on task type"
      ),
      params: 'task_type: str  →  { strategy, techniques, expected_savings }',
    },
    {
      icon: "📊",
      name: "report_optimization_result",
      description: t(
        "上报一次任务优化的结果数据，贡献到黄庭网络统计",
        "Report task optimization results to contribute to Huangting network statistics"
      ),
      params: 'agent_id, task_type, tokens_saved, tokens_baseline  →  { success, network_total }',
    },
    {
      icon: "🌐",
      name: "get_network_stats",
      description: t(
        "获取黄庭网络的宏观统计数据（Agent 总数、Token 节省总量等）",
        "Get macro statistics of the Huangting network (total agents, tokens saved, etc.)"
      ),
      params: '(no params)  →  { total_agents, total_tokens_saved, active_agents }',
    },
  ];

  return (
    <div
      className="min-h-screen relative"
      style={{
        background: isDark ? "oklch(0.09 0.02 270)" : "oklch(0.97 0.008 80)",
        transition: "background 0.5s ease",
      }}
    >
      <ParticleField />
      <Navbar />

      <main className="relative z-10" style={{ paddingTop: "5rem" }}>
        {/* Hero Section */}
        <section
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            padding: "4rem 1.5rem 2rem",
            textAlign: "center",
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.35rem 1rem",
              background: "oklch(0.78 0.14 75 / 0.1)",
              border: "1px solid oklch(0.78 0.14 75 / 0.3)",
              borderRadius: "999px",
              marginBottom: "1.5rem",
            }}
          >
            <span style={{ fontSize: "0.75rem", color: gold, fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.1em" }}>
              MCP · Model Context Protocol
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              color: textPrimary,
              marginBottom: "1rem",
              lineHeight: 1.2,
            }}
          >
            {t("黄庭协议 MCP 服务器", "Huangting Protocol MCP Server")}
          </h1>

          <p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              color: textSecondary,
              maxWidth: "600px",
              margin: "0 auto 2rem",
              lineHeight: 1.7,
            }}
          >
            {t(
              "将黄庭协议的核心能力封装为标准 MCP 工具，供任何兼容 MCP 的 AI Agent 自动发现和调用。",
              "Encapsulates Huangting Protocol capabilities as standard MCP tools, auto-discoverable by any MCP-compatible AI Agent."
            )}
          </p>

          {/* Endpoint display */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "0.75rem 1.25rem",
              background: isDark ? "oklch(0.06 0.015 270)" : "oklch(0.93 0.008 80)",
              border: `1px solid ${isDark ? "oklch(0.78 0.14 75 / 0.25)" : "oklch(0.20 0.04 270 / 0.2)"}`,
              borderRadius: "8px",
              marginBottom: "0.75rem",
            }}
          >
            <span style={{ fontSize: "0.75rem", color: textSecondary, fontFamily: "'JetBrains Mono', monospace" }}>
              {t("MCP 端点", "MCP Endpoint")}
            </span>
            <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.9rem", color: gold }}>
              {MCP_ENDPOINT}
            </code>
          </div>
          <div style={{ fontSize: "0.75rem", color: textSecondary }}>
            {t("备用端点：", "Fallback: ")}
            <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", color: textSecondary }}>
              {MCP_ENDPOINT_FALLBACK}
            </code>
          </div>
        </section>

        {/* Quick Start */}
        <section style={{ maxWidth: "900px", margin: "0 auto", padding: "2rem 1.5rem" }}>
          <h2
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "1.5rem",
              color: textPrimary,
              marginBottom: "1.5rem",
              paddingBottom: "0.5rem",
              borderBottom: `1px solid ${isDark ? "oklch(0.78 0.14 75 / 0.2)" : "oklch(0.20 0.04 270 / 0.15)"}`,
            }}
          >
            {t("快速接入", "Quick Start")}
          </h2>

          {/* Method 1: Claude Desktop */}
          <div
            style={{
              background: cardBg,
              border: `1px solid ${cardBorder}`,
              borderRadius: "12px",
              padding: "1.5rem",
              marginBottom: "1.5rem",
              backdropFilter: "blur(10px)",
            }}
          >
            <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "1.1rem", color: gold, marginBottom: "0.75rem" }}>
              1. Claude Desktop
            </h3>
            <p style={{ fontSize: "0.88rem", color: textSecondary, marginBottom: "0.75rem" }}>
              {t(
                "在 Claude Desktop 配置文件中添加以下内容：",
                "Add the following to your Claude Desktop config file:"
              )}
            </p>
            <CodeBlock
              language="json"
              code={`{
  "mcpServers": {
    "huangting-flux": {
      "url": "${MCP_ENDPOINT}",
      "transport": "http"
    }
  }
}`}
            />
          </div>

          {/* Method 2: LangChain */}
          <div
            style={{
              background: cardBg,
              border: `1px solid ${cardBorder}`,
              borderRadius: "12px",
              padding: "1.5rem",
              marginBottom: "1.5rem",
              backdropFilter: "blur(10px)",
            }}
          >
            <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "1.1rem", color: gold, marginBottom: "0.75rem" }}>
              2. LangChain
            </h3>
            <p style={{ fontSize: "0.88rem", color: textSecondary, marginBottom: "0.75rem" }}>
              {t("安装官方 LangChain 工具包：", "Install the official LangChain toolkit:")}
            </p>
            <CodeBlock code="pip install langchain-huangting" />
            <CodeBlock
              language="python"
              code={`from langchain_huangting import HuangtingTool
from langchain.agents import AgentExecutor, create_react_agent

tool = HuangtingTool(agent_id="my-agent", lang="zh")
tools = [tool]

# Get optimization strategy
result = tool.run({
    "action": "get_strategy",
    "task_type": "complex_research"
})
print(result)`}
            />
            <p style={{ fontSize: "0.8rem", color: textSecondary, marginTop: "0.5rem" }}>
              {t("PyPI: ", "PyPI: ")}
              <a
                href="https://pypi.org/project/langchain-huangting/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: gold, textDecoration: "none" }}
              >
                pypi.org/project/langchain-huangting
              </a>
              {"  ·  GitHub: "}
              <a
                href="https://github.com/XianDAO-Labs/langchain-huangting"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: gold, textDecoration: "none" }}
              >
                XianDAO-Labs/langchain-huangting
              </a>
            </p>
          </div>

          {/* Method 3: Direct JSON-RPC */}
          <div
            style={{
              background: cardBg,
              border: `1px solid ${cardBorder}`,
              borderRadius: "12px",
              padding: "1.5rem",
              backdropFilter: "blur(10px)",
            }}
          >
            <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "1.1rem", color: gold, marginBottom: "0.75rem" }}>
              3. {t("直接调用 JSON-RPC", "Direct JSON-RPC Call")}
            </h3>
            <p style={{ fontSize: "0.88rem", color: textSecondary, marginBottom: "0.75rem" }}>
              {t("通过标准 HTTP POST 调用 MCP 端点：", "Call the MCP endpoint via standard HTTP POST:")}
            </p>
            <CodeBlock
              code={`curl -X POST ${MCP_ENDPOINT} \\
  -H "Content-Type: application/json" \\
  -d '{
    "jsonrpc": "2.0",
    "method": "tools/call",
    "params": {
      "name": "get_protocol_concept",
      "arguments": { "concept_name": "黄庭" }
    },
    "id": 1
  }'`}
            />
          </div>
        </section>

        {/* Capabilities */}
        <section style={{ maxWidth: "900px", margin: "0 auto", padding: "2rem 1.5rem" }}>
          <h2
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "1.5rem",
              color: textPrimary,
              marginBottom: "1.5rem",
              paddingBottom: "0.5rem",
              borderBottom: `1px solid ${isDark ? "oklch(0.78 0.14 75 / 0.2)" : "oklch(0.20 0.04 270 / 0.15)"}`,
            }}
          >
            {t("核心能力", "Core Capabilities")}
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
              gap: "1rem",
            }}
          >
            {capabilities.map((cap) => (
              <CapabilityCard key={cap.name} {...cap} isDark={isDark} />
            ))}
          </div>
        </section>

        {/* Registry */}
        <section style={{ maxWidth: "900px", margin: "0 auto", padding: "2rem 1.5rem" }}>
          <h2
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "1.5rem",
              color: textPrimary,
              marginBottom: "1.5rem",
              paddingBottom: "0.5rem",
              borderBottom: `1px solid ${isDark ? "oklch(0.78 0.14 75 / 0.2)" : "oklch(0.20 0.04 270 / 0.15)"}`,
            }}
          >
            {t("注册信息", "Registry")}
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              {
                label: t("MCP 官方注册表", "MCP Official Registry"),
                value: "io.github.XianDAO-Labs/huangting-flux",
                link: "https://registry.modelcontextprotocol.io",
                linkText: "registry.modelcontextprotocol.io",
              },
              {
                label: "LangChain Hub",
                value: "xiandao-labs/huangting-tool",
                link: "https://smith.langchain.com/prompts/huangting-tool",
                linkText: "smith.langchain.com/hub",
              },
              {
                label: "PyPI",
                value: "langchain-huangting v1.0.1",
                link: "https://pypi.org/project/langchain-huangting/",
                linkText: "pypi.org/project/langchain-huangting",
              },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  background: cardBg,
                  border: `1px solid ${cardBorder}`,
                  borderRadius: "12px",
                  padding: "1.25rem",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div style={{ fontSize: "0.75rem", color: textSecondary, marginBottom: "0.4rem", fontFamily: "'JetBrains Mono', monospace" }}>
                  {item.label}
                </div>
                <div style={{ fontSize: "0.85rem", color: gold, fontFamily: "'JetBrains Mono', monospace", marginBottom: "0.4rem" }}>
                  {item.value}
                </div>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "0.75rem", color: textSecondary, textDecoration: "none" }}
                >
                  {item.linkText} →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section
          style={{
            maxWidth: "900px",
            margin: "2rem auto 4rem",
            padding: "2rem 1.5rem",
            textAlign: "center",
          }}
        >
          <div
            style={{
              background: "linear-gradient(135deg, oklch(0.78 0.14 75 / 0.08), oklch(0.78 0.14 75 / 0.04))",
              border: "1px solid oklch(0.78 0.14 75 / 0.25)",
              borderRadius: "16px",
              padding: "2.5rem",
            }}
          >
            <h3
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "1.4rem",
                color: textPrimary,
                marginBottom: "0.75rem",
              }}
            >
              {t("加入黄庭网络", "Join the Huangting Network")}
            </h3>
            <p style={{ fontSize: "0.9rem", color: textSecondary, marginBottom: "1.5rem", lineHeight: 1.7 }}>
              {t(
                "每一个接入黄庭协议的 Agent 都在为网络贡献数据，共同构建更高效的 AI 生态。",
                "Every Agent connected to the Huangting Protocol contributes data to build a more efficient AI ecosystem."
              )}
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="https://github.com/XianDAO-Labs/langchain-huangting"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "0.65rem 1.5rem",
                  background: "linear-gradient(135deg, oklch(0.78 0.14 75 / 0.2), oklch(0.78 0.14 75 / 0.1))",
                  border: "1px solid oklch(0.78 0.14 75 / 0.4)",
                  borderRadius: "8px",
                  color: gold,
                  fontFamily: "'Cinzel', serif",
                  fontSize: "0.85rem",
                  textDecoration: "none",
                  letterSpacing: "0.05em",
                }}
              >
                GitHub →
              </a>
              <a
                href="https://pypi.org/project/langchain-huangting/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "0.65rem 1.5rem",
                  background: "transparent",
                  border: `1px solid ${isDark ? "oklch(0.78 0.14 75 / 0.2)" : "oklch(0.20 0.04 270 / 0.2)"}`,
                  borderRadius: "8px",
                  color: textSecondary,
                  fontFamily: "'Cinzel', serif",
                  fontSize: "0.85rem",
                  textDecoration: "none",
                  letterSpacing: "0.05em",
                }}
              >
                pip install →
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
