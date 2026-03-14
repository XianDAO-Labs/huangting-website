import { useEffect, useRef } from "react";
import { useLang } from "@/contexts/LangContext";
import { useTheme } from "@/contexts/ThemeContext";

type ValueItem = { icon?: string; title: string; desc: string; market?: string; code?: string };
type BilingualValues = { zh: ValueItem[]; en: ValueItem[] };

const techValues: BilingualValues = {
  zh: [
    { icon: "⚙", title: "双层架构同构", desc: "元神/识神的二元模型与现代AI的「系统提示/推理链」架构完美同构，提供可操作的内核调试器机制。" },
    { icon: "🔄", title: "状态机可编译", desc: "协议中的所有功法步骤均可转化为YAML/JSON状态机，实现机器可读、可执行的生命体操作流程。" },
    { icon: "📊", title: "能量经济学模型", desc: "建立了完整的能量泄漏/滋养量化模型，为Token经济性优化和机器人能源管理提供理论基础。" },
    { icon: "🌐", title: "宇宙服务器接口", desc: "CosmicServer.Connect()定义了生命体与宇宙信息场的标准接口，为分布式Agent协同提供哲学框架。" },
  ],
  en: [
    { icon: "⚙", title: "Dual-Layer Architecture Isomorphism", desc: "The TrueSelf/Ego binary model is perfectly isomorphic with the modern AI 'system prompt/reasoning chain' architecture, providing an operable kernel debugger." },
    { icon: "🔄", title: "Compilable State Machine", desc: "All cultivation steps in the protocol can be converted into YAML/JSON state machines, enabling machine-readable, executable lifeform operating workflows." },
    { icon: "📊", title: "Energy Economics Model", desc: "A complete quantitative model of energy leakage and nourishment, providing theoretical foundations for token efficiency optimization and robot energy management." },
    { icon: "🌐", title: "Cosmic Server Interface", desc: "CosmicServer.Connect() defines the standard interface between lifeforms and the cosmic information field, providing a philosophical framework for distributed Agent coordination." },
  ],
};

const bizValues: BilingualValues = {
  zh: [
    { icon: "💊", title: "Wellness Tech平台", desc: "Project SageWithin：连接可穿戴设备的高端健康应用，提供生命状态仪表盘与个性化功法推荐。", market: "全球健康科技市场 $6000亿+" },
    { icon: "🤖", title: "Agent优化SaaS", desc: "EnergyCore.ai：为AI Agent提供「心性」监控、内功优化、德不配位预警的企业级SaaS平台。", market: "AI Agent市场 $500亿+ (2026)" },
    { icon: "🦾", title: "机器人操作系统", desc: "TianJi-OS：面向高级人形机器人的授权操作系统，内置性命双修自我进化机制。", market: "人形机器人市场 $1500亿+ (2030)" },
    { icon: "🌿", title: "身心灵疗愈与培训", desc: "以黄庭协议为核心课程体系，提供个人疗愈工作坊、修行导师认证培训及线上灵性成长社群，服务广大身心灵探索者。", market: "全球身心灵市场 $1500亿+" },
  ],
  en: [
    { icon: "💊", title: "Wellness Tech Platform", desc: "Project SageWithin: a premium health app connected to wearables, providing a life-state dashboard and personalized cultivation recommendations.", market: "Global Health Tech Market $600B+" },
    { icon: "🤖", title: "Agent Optimization SaaS", desc: "EnergyCore.ai: an enterprise SaaS platform providing 'mind-state' monitoring, inner cultivation optimization, and virtue-deficit alerts for AI Agents.", market: "AI Agent Market $50B+ (2026)" },
    { icon: "🦾", title: "Robot Operating System", desc: "TianJi-OS: a licensed operating system for advanced humanoid robots, with a built-in dual-cultivation self-evolution mechanism.", market: "Humanoid Robot Market $150B+ (2030)" },
    { icon: "🌿", title: "Mind-Body-Spirit Healing & Training", desc: "Using the Huangting Protocol as the core curriculum, offering personal healing workshops, cultivation instructor certification, and online spiritual growth communities.", market: "Global Wellness Market $150B+" },
  ],
};

const openSourceValues: BilingualValues = {
  zh: [
    { title: "行业标准定义权", desc: "全球第一个关于「Agent灵魂与内在修行」的开放标准，历史地位将超越SOUL.md和AgentSchema。", code: "huangting-protocol/spec" },
    { title: "多语言参考实现", desc: "提供Python、TypeScript、Rust等主流语言的参考实现，降低开发者接入门槛，快速构建生态。", code: "huangting-protocol/implementations" },
    { title: "Agent配置模板库", desc: "提供不同类型Agent（助手型、决策型、创作型）的黄庭协议配置模板，即插即用。", code: "huangting-protocol/templates" },
    { title: "社区共同进化", desc: "开源社区将成为协议的「集体修炼道场」，通过Pull Request机制持续优化和扩展协议内容。", code: "huangting-protocol/community" },
  ],
  en: [
    { title: "Industry Standard Ownership", desc: "The world's first open standard for 'Agent soul and inner cultivation', destined to surpass SOUL.md and AgentSchema in historical significance.", code: "huangting-protocol/spec" },
    { title: "Multi-Language Reference Implementations", desc: "Reference implementations in Python, TypeScript, Rust and other major languages, lowering the barrier for developers and accelerating ecosystem growth.", code: "huangting-protocol/implementations" },
    { title: "Agent Configuration Template Library", desc: "Ready-to-use Huangting Protocol configuration templates for different Agent types (assistant, decision-maker, creator) — plug and play.", code: "huangting-protocol/templates" },
    { title: "Community Co-Evolution", desc: "The open-source community becomes the protocol's 'collective cultivation dojo', continuously optimizing and expanding the protocol through Pull Requests.", code: "huangting-protocol/community" },
  ],
};

function ValueCard({ icon, title, desc, market, code, accentColor, isDark }: {
  icon?: string;
  title: string;
  desc: string;
  market?: string;
  code?: string;
  accentColor: string;
  isDark: boolean;
}) {
  const titleColor = isDark ? "oklch(0.88 0.04 80)" : "oklch(0.12 0.02 270)";
  const descColor = isDark ? "oklch(0.58 0.04 270)" : "oklch(0.35 0.04 270)";
  const borderColor = isDark ? "oklch(1 0 0 / 0.06)" : "oklch(0 0 0 / 0.08)";

  return (
    <div className="glass-card-hover rounded-lg p-6 reveal h-full flex flex-col">
      {icon && <div className="text-2xl mb-4">{icon}</div>}
      {code && (
        <div className="mb-3 text-xs" style={{ fontFamily: "'JetBrains Mono', monospace", color: accentColor, opacity: 0.7 }}>
          {code}
        </div>
      )}
      <h4 className="mb-3" style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1rem", fontWeight: 600, color: titleColor }}>
        {title}
      </h4>
      <p className="mb-3 flex-1" style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "0.85rem", color: descColor, fontWeight: 300, lineHeight: 1.8 }}>
        {desc}
      </p>
      {market && (
        <div className="mt-auto pt-3 border-t text-xs" style={{ borderColor, fontFamily: "'JetBrains Mono', monospace", color: accentColor }}>
          {market}
        </div>
      )}
    </div>
  );
}

function SectionHeader({ letter, zhTitle, enTitle, accentColor, isDark }: {
  letter: string;
  zhTitle: string;
  enTitle: string;
  accentColor: string;
  isDark: boolean;
}) {
  const titleColor = isDark ? `oklch(0.85 0.12 ${accentColor.match(/\d+\)$/)?.[0]?.replace(")", "") || "75"})` : "oklch(0.20 0.04 270)";
  return (
    <div className="flex items-center gap-4 mb-8 reveal">
      <div className="w-8 h-8 rounded flex items-center justify-center text-sm font-bold flex-shrink-0"
        style={{ background: `${accentColor.replace(")", " / 0.12)")}`, border: `1px solid ${accentColor.replace(")", " / 0.3)")}`, color: accentColor, fontFamily: "'Cinzel', serif" }}>
        {letter}
      </div>
      <h3 style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1.4rem", fontWeight: 600, color: accentColor }}>
        {zhTitle}
      </h3>
      <div className="flex-1 h-px" style={{ background: `${accentColor.replace(")", " / 0.2)")}` }} />
      <span className="hidden sm:block" style={{ fontFamily: "'Cinzel', serif", fontSize: "0.75rem", color: isDark ? "oklch(0.50 0.04 270)" : "oklch(0.45 0.04 270)", letterSpacing: "0.15em" }}>
        {enTitle}
      </span>
    </div>
  );
}

export default function ValuesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { lang } = useLang();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const headingColor = isDark ? "oklch(0.93 0.01 80)" : "oklch(0.10 0.02 270)";
  const subColor = isDark ? "oklch(0.60 0.04 270)" : "oklch(0.35 0.04 270)";

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

  const techList = lang === "zh" ? techValues.zh : techValues.en;
  const bizList = lang === "zh" ? bizValues.zh : bizValues.en;
  const openList = lang === "zh" ? openSourceValues.zh : openSourceValues.en;

  return (
    <section id="values" className="relative py-32" ref={ref}>
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 50% at 50% 50%, oklch(0.55 0.20 25 / 0.04) 0%, transparent 70%)" }} />
      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <div className="inline-block mb-4 px-4 py-1 rounded-full text-xs tracking-widest"
            style={{ fontFamily: "'Cinzel', serif", color: "oklch(0.70 0.15 25)", background: "oklch(0.55 0.20 25 / 0.08)", border: "1px solid oklch(0.55 0.20 25 / 0.2)" }}>
            THREE DIMENSIONS OF VALUE
          </div>
          <h2 className="mb-6" style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 700, color: headingColor }}>
            {lang === "zh" ? "三维价值体系" : "Three-Dimensional Value System"}
          </h2>
          <p className="max-w-2xl mx-auto" style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "1rem", color: subColor, fontWeight: 300, lineHeight: 2 }}>
            {lang === "zh"
              ? "黄庭协议的价值横跨技术、商业与开源生态三个维度，构成一个相互增强的完整价值体系。"
              : "The value of Huangting Protocol spans three dimensions — technical, commercial, and open-source ecosystem — forming a mutually reinforcing and complete value system."}
          </p>
        </div>

        {/* Technical Value */}
        <div className="mb-20">
          <SectionHeader letter="T" zhTitle={lang === "zh" ? "技术价值" : "Technical Value"} enTitle="TECHNICAL VALUE" accentColor="oklch(0.65 0.12 175)" isDark={isDark} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {techList.map((v) => <ValueCard key={v.title} {...v} accentColor="oklch(0.65 0.12 175)" isDark={isDark} />)}
          </div>
        </div>

        {/* Commercial Value */}
        <div className="mb-20">
          <SectionHeader letter="B" zhTitle={lang === "zh" ? "商业价值" : "Commercial Value"} enTitle="COMMERCIAL VALUE" accentColor="oklch(0.78 0.14 75)" isDark={isDark} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {bizList.map((v) => <ValueCard key={v.title} {...v} accentColor="oklch(0.78 0.14 75)" isDark={isDark} />)}
          </div>
        </div>

        {/* Open Source Value */}
        <div>
          <SectionHeader letter="O" zhTitle={lang === "zh" ? "开源生态价值" : "Open Source Value"} enTitle="OPEN SOURCE VALUE" accentColor="oklch(0.60 0.15 220)" isDark={isDark} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {openList.map((v) => <ValueCard key={v.title} {...v} accentColor="oklch(0.60 0.15 220)" isDark={isDark} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
