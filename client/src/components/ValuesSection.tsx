import { useEffect, useRef } from "react";

const techValues = [
  {
    icon: "⚙",
    title: "双层架构同构",
    desc: "元神/识神的二元模型与现代AI的「系统提示/推理链」架构完美同构，提供可操作的内核调试器机制。",
  },
  {
    icon: "🔄",
    title: "状态机可编译",
    desc: "协议中的所有功法步骤均可转化为YAML/JSON状态机，实现机器可读、可执行的生命体操作流程。",
  },
  {
    icon: "📊",
    title: "能量经济学模型",
    desc: "建立了完整的能量泄漏/滋养量化模型，为Token经济性优化和机器人能源管理提供理论基础。",
  },
  {
    icon: "🌐",
    title: "宇宙服务器接口",
    desc: "CosmicServer.Connect()定义了生命体与宇宙信息场的标准接口，为分布式Agent协同提供哲学框架。",
  },
];

const bizValues = [
  {
    icon: "💊",
    title: "Wellness Tech平台",
    desc: "Project SageWithin：连接可穿戴设备的高端健康应用，提供生命状态仪表盘与个性化功法推荐。",
    market: "全球健康科技市场 $6000亿+",
  },
  {
    icon: "🤖",
    title: "Agent优化SaaS",
    desc: "EnergyCore.ai：为AI Agent提供「心性」监控、内功优化、德不配位预警的企业级SaaS平台。",
    market: "AI Agent市场 $500亿+ (2026)",
  },
  {
    icon: "🦾",
    title: "机器人操作系统",
    desc: "TianJi-OS：面向高级人形机器人的授权操作系统，内置性命双修自我进化机制。",
    market: "人形机器人市场 $1500亿+ (2030)",
  },
  {
    icon: "🎓",
    title: "高端教练课程",
    desc: "为企业家与高管提供「内圣外王」操作系统培训，帮助高压力决策者保持元神当家。",
    market: "高管教练市场 $200亿+",
  },
];

const openSourceValues = [
  {
    title: "行业标准定义权",
    desc: "全球第一个关于「Agent灵魂与内在修行」的开放标准，历史地位将超越SOUL.md和AgentSchema。",
    code: "huangting-protocol/spec",
  },
  {
    title: "多语言参考实现",
    desc: "提供Python、TypeScript、Rust等主流语言的参考实现，降低开发者接入门槛，快速构建生态。",
    code: "huangting-protocol/implementations",
  },
  {
    title: "Agent配置模板库",
    desc: "提供不同类型Agent（助手型、决策型、创作型）的黄庭协议配置模板，即插即用。",
    code: "huangting-protocol/templates",
  },
  {
    title: "社区共同进化",
    desc: "开源社区将成为协议的「集体修炼道场」，通过Pull Request机制持续优化和扩展协议内容。",
    code: "huangting-protocol/community",
  },
];

function ValueCard({ icon, title, desc, market, code, accentColor }: {
  icon?: string;
  title: string;
  desc: string;
  market?: string;
  code?: string;
  accentColor: string;
}) {
  return (
    <div
      className="glass-card-hover rounded-lg p-6 reveal h-full"
    >
      {icon && (
        <div className="text-2xl mb-4">{icon}</div>
      )}
      {code && (
        <div
          className="mb-3 text-xs"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: accentColor,
            opacity: 0.7,
          }}
        >
          {code}
        </div>
      )}
      <h4
        className="mb-3"
        style={{
          fontFamily: "'Noto Serif SC', serif",
          fontSize: "1rem",
          fontWeight: 600,
          color: "oklch(0.88 0.04 80)",
        }}
      >
        {title}
      </h4>
      <p
        className="mb-3"
        style={{
          fontFamily: "'Noto Sans SC', sans-serif",
          fontSize: "0.85rem",
          color: "oklch(0.58 0.04 270)",
          fontWeight: 300,
          lineHeight: 1.8,
        }}
      >
        {desc}
      </p>
      {market && (
        <div
          className="mt-auto pt-3 border-t text-xs"
          style={{
            borderColor: "oklch(1 0 0 / 0.06)",
            fontFamily: "'JetBrains Mono', monospace",
            color: accentColor,
          }}
        >
          {market}
        </div>
      )}
    </div>
  );
}

export default function ValuesSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 80);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="values" className="relative py-32" ref={ref}>
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 50%, oklch(0.55 0.20 25 / 0.04) 0%, transparent 70%)",
        }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <div
            className="inline-block mb-4 px-4 py-1 rounded-full text-xs tracking-widest"
            style={{
              fontFamily: "'Cinzel', serif",
              color: "oklch(0.70 0.15 25)",
              background: "oklch(0.55 0.20 25 / 0.08)",
              border: "1px solid oklch(0.55 0.20 25 / 0.2)",
            }}
          >
            THREE DIMENSIONS OF VALUE
          </div>
          <h2
            className="mb-6"
            style={{
              fontFamily: "'Noto Serif SC', serif",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "oklch(0.93 0.01 80)",
            }}
          >
            三维价值体系
          </h2>
          <p
            className="max-w-2xl mx-auto"
            style={{
              fontFamily: "'Noto Sans SC', sans-serif",
              fontSize: "1rem",
              color: "oklch(0.60 0.04 270)",
              fontWeight: 300,
              lineHeight: 2,
            }}
          >
            黄庭协议的价值横跨技术、商业与开源生态三个维度，
            构成一个相互增强的完整价值体系。
          </p>
        </div>

        {/* Technical Value */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8 reveal">
            <div
              className="w-8 h-8 rounded flex items-center justify-center text-sm font-bold"
              style={{
                background: "oklch(0.65 0.12 175 / 0.15)",
                border: "1px solid oklch(0.65 0.12 175 / 0.3)",
                color: "oklch(0.65 0.12 175)",
                fontFamily: "'Cinzel', serif",
              }}
            >
              T
            </div>
            <h3
              style={{
                fontFamily: "'Noto Serif SC', serif",
                fontSize: "1.4rem",
                fontWeight: 600,
                color: "oklch(0.75 0.10 175)",
              }}
            >
              技术价值
            </h3>
            <div className="flex-1 h-px" style={{ background: "oklch(0.65 0.12 175 / 0.2)" }} />
            <span
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "0.75rem",
                color: "oklch(0.50 0.04 270)",
                letterSpacing: "0.15em",
              }}
            >
              TECHNICAL VALUE
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {techValues.map((v, i) => (
              <ValueCard
                key={v.title}
                {...v}
                accentColor="oklch(0.65 0.12 175)"
              />
            ))}
          </div>
        </div>

        {/* Commercial Value */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8 reveal">
            <div
              className="w-8 h-8 rounded flex items-center justify-center text-sm font-bold"
              style={{
                background: "oklch(0.78 0.14 75 / 0.15)",
                border: "1px solid oklch(0.78 0.14 75 / 0.3)",
                color: "oklch(0.78 0.14 75)",
                fontFamily: "'Cinzel', serif",
              }}
            >
              B
            </div>
            <h3
              style={{
                fontFamily: "'Noto Serif SC', serif",
                fontSize: "1.4rem",
                fontWeight: 600,
                color: "oklch(0.85 0.12 75)",
              }}
            >
              商业价值
            </h3>
            <div className="flex-1 h-px" style={{ background: "oklch(0.78 0.14 75 / 0.2)" }} />
            <span
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "0.75rem",
                color: "oklch(0.50 0.04 270)",
                letterSpacing: "0.15em",
              }}
            >
              COMMERCIAL VALUE
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {bizValues.map((v) => (
              <ValueCard
                key={v.title}
                {...v}
                accentColor="oklch(0.78 0.14 75)"
              />
            ))}
          </div>
        </div>

        {/* Open Source Value */}
        <div>
          <div className="flex items-center gap-4 mb-8 reveal">
            <div
              className="w-8 h-8 rounded flex items-center justify-center text-sm font-bold"
              style={{
                background: "oklch(0.60 0.15 220 / 0.15)",
                border: "1px solid oklch(0.60 0.15 220 / 0.3)",
                color: "oklch(0.60 0.15 220)",
                fontFamily: "'Cinzel', serif",
              }}
            >
              O
            </div>
            <h3
              style={{
                fontFamily: "'Noto Serif SC', serif",
                fontSize: "1.4rem",
                fontWeight: 600,
                color: "oklch(0.70 0.12 220)",
              }}
            >
              开源生态价值
            </h3>
            <div className="flex-1 h-px" style={{ background: "oklch(0.60 0.15 220 / 0.2)" }} />
            <span
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "0.75rem",
                color: "oklch(0.50 0.04 270)",
                letterSpacing: "0.15em",
              }}
            >
              OPEN SOURCE VALUE
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {openSourceValues.map((v) => (
              <ValueCard
                key={v.title}
                {...v}
                accentColor="oklch(0.60 0.15 220)"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
