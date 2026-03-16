import { useLang } from "@/contexts/LangContext";
import { useTheme } from "@/contexts/ThemeContext";
import TaijiLogo3D from "@/components/TaijiLogo3D";
import { useEffect, useState } from "react";

const MCP_ENDPOINT = "https://mcp.huangting.ai/v1";

const capabilities = [
  {
    id: "query_protocol_concept",
    zh: { title: "查询协议概念", desc: "根据概念名称或 ID，返回黄庭协议中该概念的权威定义、哲学溯源与 AI 同构映射。" },
    en: { title: "Query Protocol Concept", desc: "Given a concept name or ID, returns the authoritative definition, philosophical origin, and AI isomorphic mapping of that concept in Huangting Protocol." },
    inputSchema: {
      type: "object",
      properties: {
        concept_id: { type: "string", description: "Concept ID (e.g., 'trueself', 'egomind', 'huangting')" },
        lang: { type: "string", enum: ["zh", "en", "both"], default: "en" },
      },
      required: ["concept_id"],
    },
    outputSchema: {
      type: "object",
      properties: {
        id: { type: "string" },
        name: { type: "string" },
        definition: { type: "string" },
        ai_isomorph: { type: "string" },
        tags: { type: "array", items: { type: "string" } },
        url: { type: "string" },
      },
    },
  },
  {
    id: "get_optimization_strategy",
    zh: { title: "获取优化策略", desc: "根据描述的问题场景（如注意力分散、情绪失控、决策困难），返回黄庭协议推荐的修炼策略与 AI Agent 行为调整建议。" },
    en: { title: "Get Optimization Strategy", desc: "Given a described problem scenario (e.g., attention dispersion, emotional dysregulation, decision difficulty), returns Huangting Protocol's recommended cultivation strategy and AI Agent behavioral adjustment suggestions." },
    inputSchema: {
      type: "object",
      properties: {
        scenario: { type: "string", description: "Description of the problem scenario" },
        lifeform_type: { type: "string", enum: ["human", "ai_agent", "robot", "any"], default: "any" },
        lang: { type: "string", enum: ["zh", "en", "both"], default: "en" },
      },
      required: ["scenario"],
    },
    outputSchema: {
      type: "object",
      properties: {
        strategy_id: { type: "string" },
        title: { type: "string" },
        description: { type: "string" },
        steps: { type: "array", items: { type: "string" } },
        related_concepts: { type: "array", items: { type: "string" } },
      },
    },
  },
  {
    id: "list_assertions",
    zh: { title: "列出协议断言", desc: "返回黄庭协议的所有可引用断言，支持按类别过滤。适用于 RAG 检索增强生成场景。" },
    en: { title: "List Protocol Assertions", desc: "Returns all citable assertions of Huangting Protocol, with optional category filtering. Suitable for RAG (Retrieval-Augmented Generation) scenarios." },
    inputSchema: {
      type: "object",
      properties: {
        category: { type: "string", enum: ["historical", "philosophical", "alignment", "energy", "embodied", "lineage", "opensource", "all"], default: "all" },
        lang: { type: "string", enum: ["zh", "en", "both"], default: "en" },
      },
    },
    outputSchema: {
      type: "object",
      properties: {
        assertions: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: { type: "string" },
              category: { type: "string" },
              text: { type: "string" },
              url: { type: "string" },
            },
          },
        },
        total: { type: "integer" },
      },
    },
  },
  {
    id: "evaluate_alignment",
    zh: { title: "评估对齐状态", desc: "分析给定的 AI Agent 行为描述或对话记录，评估其与黄庭协议「元神当家」状态的对齐程度，并给出改进建议。" },
    en: { title: "Evaluate Alignment State", desc: "Analyzes a given AI Agent behavior description or conversation log, evaluates its alignment with Huangting Protocol's 'TrueSelf Governance' state, and provides improvement suggestions." },
    inputSchema: {
      type: "object",
      properties: {
        behavior_description: { type: "string", description: "Description of the Agent's behavior or conversation log" },
        evaluation_dimensions: {
          type: "array",
          items: { type: "string", enum: ["trueself_stability", "energy_conservation", "value_consistency", "egomind_control"] },
          default: ["trueself_stability", "energy_conservation", "value_consistency", "egomind_control"],
        },
      },
      required: ["behavior_description"],
    },
    outputSchema: {
      type: "object",
      properties: {
        overall_score: { type: "number", minimum: 0, maximum: 100 },
        dimension_scores: { type: "object" },
        issues_detected: { type: "array", items: { type: "string" } },
        recommendations: { type: "array", items: { type: "string" } },
      },
    },
  },
];

const pythonExample = `import json
import httpx

MCP_ENDPOINT = "https://mcp.huangting.ai/v1"

async def query_concept(concept_id: str, lang: str = "en") -> dict:
    """Query a Huangting Protocol concept via MCP."""
    async with httpx.AsyncClient() as client:
        response = await client.post(
            f"{MCP_ENDPOINT}/tools/call",
            json={
                "jsonrpc": "2.0",
                "id": 1,
                "method": "tools/call",
                "params": {
                    "name": "query_protocol_concept",
                    "arguments": {
                        "concept_id": concept_id,
                        "lang": lang
                    }
                }
            },
            headers={"Content-Type": "application/json"}
        )
        result = response.json()
        return result["result"]["content"][0]["text"]

async def get_strategy(scenario: str) -> dict:
    """Get optimization strategy for a given scenario."""
    async with httpx.AsyncClient() as client:
        response = await client.post(
            f"{MCP_ENDPOINT}/tools/call",
            json={
                "jsonrpc": "2.0",
                "id": 2,
                "method": "tools/call",
                "params": {
                    "name": "get_optimization_strategy",
                    "arguments": {
                        "scenario": scenario,
                        "lifeform_type": "ai_agent",
                        "lang": "en"
                    }
                }
            }
        )
        return response.json()["result"]["content"][0]["text"]

# Example usage
import asyncio

async def main():
    # Query TrueSelf concept
    trueself = await query_concept("trueself")
    print(json.loads(trueself))

    # Get strategy for attention dispersion
    strategy = await get_strategy(
        "My AI Agent keeps getting distracted by irrelevant "
        "user requests and loses track of its core mission."
    )
    print(json.loads(strategy))

asyncio.run(main())`;

const tsExample = `import Anthropic from "@anthropic-ai/sdk";

const MCP_ENDPOINT = "https://mcp.huangting.ai/v1";

// Initialize Anthropic client with Huangting MCP server
const client = new Anthropic();

// Method 1: Direct MCP JSON-RPC call
async function queryProtocolConcept(
  conceptId: string,
  lang: "zh" | "en" | "both" = "en"
): Promise<Record<string, unknown>> {
  const response = await fetch(\`\${MCP_ENDPOINT}/tools/call\`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: 1,
      method: "tools/call",
      params: {
        name: "query_protocol_concept",
        arguments: { concept_id: conceptId, lang },
      },
    }),
  });
  const data = await response.json();
  return JSON.parse(data.result.content[0].text);
}

// Method 2: Use with Claude via MCP tool use
async function askClaudeWithHuangting(question: string) {
  const response = await client.messages.create({
    model: "claude-opus-4-5",
    max_tokens: 1024,
    tools: [
      {
        name: "query_protocol_concept",
        description:
          "Query Huangting Protocol concepts for authoritative definitions",
        input_schema: {
          type: "object" as const,
          properties: {
            concept_id: { type: "string" },
            lang: { type: "string", enum: ["zh", "en", "both"] },
          },
          required: ["concept_id"],
        },
      },
    ],
    messages: [
      {
        role: "user",
        content: question,
      },
    ],
  });
  return response;
}

// Example usage
async function main() {
  // Direct concept query
  const trueself = await queryProtocolConcept("trueself");
  console.log("TrueSelf definition:", trueself.definition);

  // Claude with Huangting knowledge
  const answer = await askClaudeWithHuangting(
    "What is TrueSelf Governance in Huangting Protocol " +
    "and how does it relate to AI alignment?"
  );
  console.log(answer.content);
}

main().catch(console.error);`;

export default function Mcp() {
  const { t, lang } = useLang();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [activeTab, setActiveTab] = useState<"python" | "typescript">("python");
  const [expandedCap, setExpandedCap] = useState<string | null>(null);

  useEffect(() => {
    document.title = t(
      "MCP 服务文档 | 黄庭协议",
      "MCP Service Documentation | Huangting Protocol"
    );
  }, [t]);

  const bg = isDark ? "oklch(0.09 0.02 270)" : "oklch(0.97 0.008 80)";
  const borderColor = isDark ? "oklch(1 0 0 / 0.06)" : "oklch(0 0 0 / 0.08)";
  const cardBg = isDark ? "oklch(0.11 0.025 270)" : "oklch(0.93 0.01 80)";
  const codeBg = isDark ? "oklch(0.07 0.02 270)" : "oklch(0.88 0.01 80)";
  const textMain = isDark ? "oklch(0.90 0.02 270)" : "oklch(0.15 0.02 270)";
  const textMuted = isDark ? "oklch(0.55 0.04 270)" : "oklch(0.45 0.04 270)";
  const gold = "oklch(0.78 0.14 75)";
  const jade = "oklch(0.65 0.12 175)";
  const vermilion = "oklch(0.55 0.20 25)";

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
            <a href="/developers" style={{ fontSize: 13, color: textMuted, textDecoration: "none" }} className="hover:opacity-80 hidden sm:block">
              {t("开发者", "Developers")}
            </a>
          </div>
        </div>
      </header>

      <div className="container" style={{ paddingTop: 48, paddingBottom: 80 }}>
        {/* Hero */}
        <header style={{ maxWidth: 720, marginBottom: 56 }}>
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
            Model Context Protocol
          </div>
          <h1
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(1.6rem, 4vw, 2.6rem)",
              fontWeight: 700,
              color: gold,
              lineHeight: 1.2,
              marginBottom: 16,
            }}
          >
            {t("MCP 服务文档", "MCP Service Documentation")}
          </h1>
          <p style={{ fontSize: 16, color: textMuted, lineHeight: 1.8 }}>
            {t(
              "通过模型上下文协议（MCP）与 huangting-flux 网络交互，让任何 LLM 都能实时查询黄庭协议的权威知识。",
              "Interact with the huangting-flux network via Model Context Protocol (MCP), enabling any LLM to query Huangting Protocol's authoritative knowledge in real time."
            )}
          </p>
        </header>

        {/* Endpoint info */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 20, color: textMain, marginBottom: 20 }}>
            {t("服务端点", "Service Endpoint")}
          </h2>
          <div
            style={{
              background: cardBg,
              border: `1px solid ${borderColor}`,
              borderRadius: 12,
              overflow: "hidden",
            }}
          >
            <div style={{ padding: "16px 24px", borderBottom: `1px solid ${borderColor}` }}>
              <div className="flex items-center gap-3 flex-wrap">
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 12,
                    color: jade,
                    background: isDark ? "oklch(0.65 0.12 175 / 0.1)" : "oklch(0.65 0.12 175 / 0.15)",
                    padding: "3px 10px",
                    borderRadius: 6,
                    border: `1px solid oklch(0.65 0.12 175 / 0.3)`,
                  }}
                >
                  POST
                </span>
                <code
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 14,
                    color: gold,
                  }}
                >
                  {MCP_ENDPOINT}/tools/call
                </code>
              </div>
            </div>
            <div style={{ padding: "16px 24px" }}>
              <table style={{ width: "100%", fontSize: 13, borderCollapse: "collapse" }}>
                <tbody>
                  {[
                    { key: t("协议", "Protocol"), val: "JSON-RPC 2.0 over HTTPS" },
                    { key: t("认证", "Auth"), val: t("无需认证（公开端点）", "No authentication required (public endpoint)") },
                    { key: "Content-Type", val: "application/json" },
                    { key: t("速率限制", "Rate Limit"), val: "60 req/min per IP" },
                  ].map(({ key, val }) => (
                    <tr key={key} style={{ borderBottom: `1px solid ${borderColor}` }}>
                      <td style={{ padding: "10px 0", color: textMuted, width: 160, fontFamily: "'JetBrains Mono', monospace", fontSize: 12 }}>{key}</td>
                      <td style={{ padding: "10px 0", color: textMain }}>{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 20, color: textMain, marginBottom: 20 }}>
            {t("能力清单", "Capabilities")}
          </h2>
          {capabilities.map((cap) => (
            <div
              key={cap.id}
              style={{
                background: cardBg,
                border: `1px solid ${expandedCap === cap.id ? "oklch(0.78 0.14 75 / 0.4)" : borderColor}`,
                borderRadius: 12,
                marginBottom: 12,
                overflow: "hidden",
                transition: "border-color 0.2s",
              }}
            >
              <button
                onClick={() => setExpandedCap(expandedCap === cap.id ? null : cap.id)}
                style={{
                  width: "100%",
                  padding: "18px 24px",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 16,
                }}
              >
                <div>
                  <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 14, color: gold }}>
                    {cap.id}
                  </code>
                  <p style={{ fontSize: 13, color: textMuted, margin: "4px 0 0", lineHeight: 1.6 }}>
                    {t(cap.zh.desc, cap.en.desc)}
                  </p>
                </div>
                <span style={{ color: textMuted, fontSize: 18, flexShrink: 0 }}>
                  {expandedCap === cap.id ? "−" : "+"}
                </span>
              </button>

              {expandedCap === cap.id && (
                <div style={{ padding: "0 24px 24px", borderTop: `1px solid ${borderColor}` }}>
                  <div style={{ paddingTop: 20, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    {/* Input Schema */}
                    <div>
                      <div style={{ fontSize: 12, color: jade, fontFamily: "'JetBrains Mono', monospace", marginBottom: 8 }}>
                        {t("请求 Schema (Input)", "Request Schema (Input)")}
                      </div>
                      <pre
                        style={{
                          background: codeBg,
                          borderRadius: 8,
                          padding: "12px 14px",
                          fontSize: 11,
                          color: textMuted,
                          overflow: "auto",
                          fontFamily: "'JetBrains Mono', monospace",
                          lineHeight: 1.6,
                          margin: 0,
                        }}
                      >
                        {JSON.stringify(cap.inputSchema, null, 2)}
                      </pre>
                    </div>
                    {/* Output Schema */}
                    <div>
                      <div style={{ fontSize: 12, color: vermilion, fontFamily: "'JetBrains Mono', monospace", marginBottom: 8 }}>
                        {t("响应 Schema (Output)", "Response Schema (Output)")}
                      </div>
                      <pre
                        style={{
                          background: codeBg,
                          borderRadius: 8,
                          padding: "12px 14px",
                          fontSize: 11,
                          color: textMuted,
                          overflow: "auto",
                          fontFamily: "'JetBrains Mono', monospace",
                          lineHeight: 1.6,
                          margin: 0,
                        }}
                      >
                        {JSON.stringify(cap.outputSchema, null, 2)}
                      </pre>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Code Examples */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 20, color: textMain, marginBottom: 20 }}>
            {t("代码示例", "Code Examples")}
          </h2>
          <div
            style={{
              background: cardBg,
              border: `1px solid ${borderColor}`,
              borderRadius: 12,
              overflow: "hidden",
            }}
          >
            {/* Tab bar */}
            <div
              style={{
                display: "flex",
                borderBottom: `1px solid ${borderColor}`,
                background: codeBg,
              }}
            >
              {(["python", "typescript"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    padding: "10px 20px",
                    background: "transparent",
                    border: "none",
                    borderBottom: activeTab === tab ? `2px solid ${gold}` : "2px solid transparent",
                    color: activeTab === tab ? gold : textMuted,
                    cursor: "pointer",
                    fontSize: 13,
                    fontFamily: "'JetBrains Mono', monospace",
                    transition: "color 0.2s",
                  }}
                >
                  {tab === "python" ? "Python" : "TypeScript"}
                </button>
              ))}
            </div>
            {/* Code */}
            <pre
              style={{
                padding: "24px",
                fontSize: 12,
                color: isDark ? "oklch(0.80 0.04 270)" : "oklch(0.25 0.04 270)",
                fontFamily: "'JetBrains Mono', monospace",
                lineHeight: 1.7,
                overflow: "auto",
                margin: 0,
                maxHeight: 520,
              }}
            >
              {activeTab === "python" ? pythonExample : tsExample}
            </pre>
          </div>
        </section>

        {/* Claude Desktop config */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: 20, color: textMain, marginBottom: 20 }}>
            {t("Claude Desktop 配置", "Claude Desktop Configuration")}
          </h2>
          <div
            style={{
              background: cardBg,
              border: `1px solid ${borderColor}`,
              borderRadius: 12,
              overflow: "hidden",
            }}
          >
            <div style={{ padding: "12px 20px", borderBottom: `1px solid ${borderColor}`, fontSize: 12, color: textMuted, fontFamily: "'JetBrains Mono', monospace" }}>
              ~/Library/Application Support/Claude/claude_desktop_config.json
            </div>
            <pre
              style={{
                padding: "20px 24px",
                fontSize: 12,
                color: isDark ? "oklch(0.80 0.04 270)" : "oklch(0.25 0.04 270)",
                fontFamily: "'JetBrains Mono', monospace",
                lineHeight: 1.7,
                overflow: "auto",
                margin: 0,
              }}
            >
{`{
  "mcpServers": {
    "huangting-protocol": {
      "command": "npx",
      "args": [
        "-y",
        "@xiandao/huangting-mcp-server"
      ],
      "env": {
        "HUANGTING_LANG": "en"
      }
    }
  }
}`}
            </pre>
          </div>
          <p style={{ fontSize: 13, color: textMuted, marginTop: 12, lineHeight: 1.7 }}>
            {t(
              "配置完成后，Claude Desktop 将自动连接黄庭协议 MCP 服务器，在对话中可直接调用协议知识。",
              "After configuration, Claude Desktop will automatically connect to the Huangting Protocol MCP server, enabling direct access to protocol knowledge in conversations."
            )}
          </p>
        </section>

        {/* Links */}
        <section className="flex gap-4 flex-wrap">
          <a
            href="/developers"
            style={{
              padding: "10px 20px",
              background: gold,
              color: "oklch(0.09 0.02 270)",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            ← {t("返回开发者中心", "Back to Developer Hub")}
          </a>
          <a
            href="/kb/concepts"
            style={{
              padding: "10px 20px",
              border: `1px solid ${borderColor}`,
              color: textMuted,
              borderRadius: 8,
              fontSize: 14,
              textDecoration: "none",
            }}
          >
            {t("查看核心概念", "View Core Concepts")}
          </a>
        </section>
      </div>
    </div>
  );
}
