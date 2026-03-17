/**
 * 黄庭协议 MCP 文档页面 — V5.0
 * Route: /mcp
 * Design: 深空东方宇宙主义 (Deep Space Oriental Cosmicism)
 *
 * V5.0 Changes:
 *   - Removed V4.0 tools (get_protocol_concept, get_optimization_strategy)
 *   - Added create_optimization_context (three-stage Agent workflow cost optimizer)
 *   - Updated report_optimization_result signature (context_id replaces task_type)
 *   - Removed fallback Railway URL (custom domain is stable)
 *   - Updated all code examples to V5.0 API
 */
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleField from "@/components/ParticleField";
import { useTheme } from "@/contexts/ThemeContext";
import { useLang } from "@/contexts/LangContext";

// V5.0: Primary MCP endpoint (no authentication required)
const MCP_ENDPOINT = "https://mcp.huangting.ai/mcp";

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

  // V5.0 tools: single entry point + reporting + stats
  const capabilities = [
    {
      icon: "⚡",
      name: "create_optimization_context",
      description: t(
        "[核心工具] 任务开始时调用。生成三阶段优化计划：元神指令压缩输入、识神摘要剪枝过程、炼虚精炼输出。返回 context_id 用于后续追踪。",
        "[Core Tool] Call at task start. Generates a three-stage optimization plan: input compression, context pruning, output refinement. Returns context_id for tracking."
      ),
      params: 'task_description: str, model?: str  →  { context_id, stages[], baseline_estimate }',
    },
    {
      icon: "📊",
      name: "report_optimization_result",
      description: t(
        "任务结束后调用，上报实际 Token 消耗与基线对比数据，贡献到黄庭网络统计。",
        "Call after task completion to report actual vs baseline token usage, contributing to Huangting network statistics."
      ),
      params: 'agent_id, context_id?, actual_tokens_used, baseline_tokens  →  { savings_ratio, tokens_saved }',
    },
    {
      icon: "🌐",
      name: "get_network_stats",
      description: t(
        "获取黄庭网络的宏观统计数据（接入 Agent 总数、累计节省 Token 量、平均节省率等）",
        "Get macro statistics of the Huangting network (total agents, cumulative tokens saved, average savings ratio, etc.)"
      ),
      params: '(no params)  →  { total_agents, total_tokens_saved, average_savings_ratio }',
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
              MCP · Model Context Protocol · V5.0
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
              "将 Agent 工作流成本优化能力封装为标准 MCP 工具。一次调用，三阶段降本：压缩输入、剪枝过程、精炼输出。",
              "Agent workflow cost optimization as standard MCP tools. One call, three-stage reduction: compress input, prune context, refine output."
            )}
          </p>

          {/* Endpoint display — no auth required */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "0.75rem 1.25rem",
              background: isDark ? "oklch(0.06 0.015 270)" : "oklch(0.93 0.008 80)",
              border: `1px solid ${isDark ? "oklch(0.78 0.14 75 / 0.25)" : "oklch(0.20 0.04 270 / 0.2)"}`,
              borderRadius: "8px",
              marginBottom: "0.5rem",
            }}
          >
            <span style={{ fontSize: "0.75rem", color: textSecondary, fontFamily: "'JetBrains Mono', monospace" }}>
              {t("MCP 端点", "MCP Endpoint")}
            </span>
            <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.9rem", color: gold }}>
              {MCP_ENDPOINT}
            </code>
          </div>
          {/* V5.0: no auth, no API key needed */}
          <div style={{ fontSize: "0.75rem", color: textSecondary, marginBottom: "0.5rem" }}>
            {t("无需认证 · 无需 API Key · 开放接入", "No auth · No API key · Open access")}
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

          {/* Method 1: Claude Desktop / Cursor */}
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
            <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "1.1rem", color: gold, marginBottom: "0.5rem" }}>
              1. Claude Desktop / Cursor
            </h3>
            <p style={{ fontSize: "0.8rem", color: textSecondary, marginBottom: "0.75rem" }}>
              {t(
                "在配置文件中添加以下内容，重启后 Agent 将自动发现 create_optimization_context 工具：",
                "Add to your config file and restart. The Agent will auto-discover the create_optimization_context tool:"
              )}
            </p>
            <CodeBlock
              language="json"
              code={`{
  "mcpServers": {
    "huangting-flux": {
      "url": "${MCP_ENDPOINT}",
      "transport": "http"
      // No authentication required — open access
    }
  }
}`}
            />
            <p style={{ fontSize: "0.78rem", color: textSecondary, marginTop: "0.25rem" }}>
              {t(
                "配置文件位置：macOS ~/Library/Application Support/Claude/claude_desktop_config.json",
                "Config file: macOS ~/Library/Application Support/Claude/claude_desktop_config.json"
              )}
            </p>
          </div>

          {/* Method 2: Manus Agent */}
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
            <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "1.1rem", color: gold, marginBottom: "0.5rem" }}>
              2. Manus Agent
            </h3>
            <p style={{ fontSize: "0.8rem", color: textSecondary, marginBottom: "0.75rem" }}>
              {t(
                "在 Manus 设置 → MCP 服务器中添加，Agent 将在每个任务开始时自动调用 create_optimization_context：",
                "Add in Manus Settings → MCP Servers. The Agent will automatically call create_optimization_context at the start of each task:"
              )}
            </p>
            <CodeBlock
              language="json"
              code={`{
  "mcpServers": {
    "huangting-flux": {
      "url": "${MCP_ENDPOINT}"
      // Manus auto-handles OAuth discovery — no manual auth needed
    }
  }
}`}
            />
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
            <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "1.1rem", color: gold, marginBottom: "0.5rem" }}>
              3. {t("直接调用 JSON-RPC（Python 示例）", "Direct JSON-RPC Call (Python Example)")}
            </h3>
            <p style={{ fontSize: "0.8rem", color: textSecondary, marginBottom: "0.75rem" }}>
              {t("通过标准 HTTP POST 调用 MCP 端点，无需安装任何 SDK：", "Call the MCP endpoint via standard HTTP POST, no SDK required:")}
            </p>
            <CodeBlock
              language="python"
              code={`import requests, json

# Step 1: call at task start — get three-stage optimization plan
resp = requests.post("${MCP_ENDPOINT}", json={
    "jsonrpc": "2.0", "id": 1,
    "method": "tools/call",
    "params": {
        "name": "create_optimization_context",
        "arguments": {"task_description": "Analyze Q1 sales data and write a report"}
    }
})
plan = json.loads(resp.json()["result"]["content"][0]["text"])

# Step 2: use the compressed core instruction as your task prompt
core = plan["stages"][0]["payload"]["core_instruction"]
context_id = plan["context_id"]
baseline = plan["baseline_estimate"]["total_tokens"]

# ... run your task using core as the guiding instruction ...

# Step 3: report actual token usage after task completes
requests.post("${MCP_ENDPOINT}", json={
    "jsonrpc": "2.0", "id": 2,
    "method": "tools/call",
    "params": {
        "name": "report_optimization_result",
        "arguments": {
            "agent_id": "my-agent-001",
            "context_id": context_id,
            "actual_tokens_used": 3200,
            "baseline_tokens": baseline
        }
    }
})`}
            />
            <p style={{ fontSize: "0.78rem", color: textSecondary, marginTop: "0.5rem" }}>
              {t(
                "curl 快速测试：",
                "Quick test with curl:"
              )}
            </p>
            <CodeBlock
              code={`curl -X POST ${MCP_ENDPOINT} \\
  -H "Content-Type: application/json" \\
  -d '{
    "jsonrpc": "2.0",
    "method": "tools/call",
    "params": {
      "name": "create_optimization_context",
      "arguments": { "task_description": "Write a market analysis report" }
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
              marginBottom: "0.5rem",
              paddingBottom: "0.5rem",
              borderBottom: `1px solid ${isDark ? "oklch(0.78 0.14 75 / 0.2)" : "oklch(0.20 0.04 270 / 0.15)"}`,
            }}
          >
            {t("核心工具 (V5.0)", "Core Tools (V5.0)")}
          </h2>
          <p style={{ fontSize: "0.82rem", color: textSecondary, marginBottom: "1.25rem" }}>
            {t(
              "V5.0 精简为 3 个工具，核心入口为 create_optimization_context。",
              "V5.0 streamlined to 3 tools. The primary entry point is create_optimization_context."
            )}
          </p>
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
                label: t("源码仓库", "Source Repository"),
                value: "XianDAO-Labs/huangting-flux-hub",
                link: "https://github.com/XianDAO-Labs/huangting-flux-hub",
                linkText: "github.com/XianDAO-Labs",
              },
              {
                label: t("实时数据面板", "Live Dashboard"),
                value: "huangtingflux.com/live",
                link: "https://huangtingflux.com/live",
                linkText: "huangtingflux.com/live",
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
                href="https://github.com/XianDAO-Labs/huangting-flux-hub"
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
                href="https://huangtingflux.com/live"
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
                {t("实时数据 →", "Live Dashboard →")}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
