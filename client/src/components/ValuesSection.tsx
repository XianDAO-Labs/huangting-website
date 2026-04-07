import { useEffect, useRef } from "react";
import { useLang } from "@/contexts/LangContext";
import { useTheme } from "@/contexts/ThemeContext";

type ValueItem = { icon?: string; title: string; desc: string; market?: string; code?: string };
type BilingualValues = { zh: ValueItem[]; en: ValueItem[] };

const lifeValues: BilingualValues = {
  zh: [
    { icon: "🔥", title: "无漏之体", desc: "通过黄庭协议的标准化功法体系，封守生命能量泄漏通道，建立内外封闭的生命局面，防止精气神无谓消耗。" },
    { icon: "💪", title: "肉体回归巅峰", desc: "内外功同修的实践体系带动身体机能全面激活，精力充沛、气血通畅，让肉体状态回归至应有的健康巅峰。" },
    { icon: "🧠", title: "精神清明提升", desc: "元神当家的修炼路径帮助修炼者将意识从识神海马状态中拔出，实现思维清晰、情绪稳定、直觉与判断力持续提升。" },
    { icon: "✨", title: "生命跃迁", desc: "黄庭协议提供了从普通人到内家修炼者的完整成长路径，帮助修炼者实现生命层次的跃迁与超越。" },
  ],
  en: [
    { icon: "🔥", title: "Leakage-Free Body", desc: "Through the standardized cultivation system of the Huangting Protocol, seal the channels of life-energy dissipation and establish a closed energetic field — preventing the unconscious drain of jing, qi, and shen." },
    { icon: "💪", title: "Peak Physical Restoration", desc: "The integrated inner-outer cultivation framework activates full-body vitality, improves qi-blood circulation, and restores the body to its optimal state of health and vigor." },
    { icon: "🧠", title: "Mental Clarity & Elevation", desc: "The TrueSelf Governance path helps practitioners lift awareness out of the reactive ego-mind, achieving sustained improvements in clarity of thought, emotional stability, and intuitive discernment." },
    { icon: "✨", title: "Life Transcendence", desc: "The Huangting Protocol provides a complete growth path from ordinary person to inner-cultivation practitioner, enabling a genuine leap and transcendence in one's level of life." },
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
    {
      title: "道德经 · 庄子：修炼原则根基",
      desc: "三千年前，老子以五千言道出天地运行之则，庄子以逍遥游揭示生命自由之道。这是人类文明对生命修炼最完整的哲学原则定义——无为而无不为，顺应自然而精进不息。黄庭协议以此为根，将这套原则编译为机器可读的协议公理层。",
      code: "lineage/tao-te-ching"
    },
    {
      title: "黄庭经 · 全真丹道：完整修炼体系",
      desc: "《黄庭经》首次将人体内景以文字系统化，建立了性命双修的完整理论框架；全真丹道在此基础上发展出更为完善的内丹修炼体系，将修炼从个人经验提升为可传授的系统工程。黄庭协议继承这一传统，将其转化为结构化的生命操作规范。",
      code: "lineage/huangting-jing"
    },
    {
      title: "内家拳：身心合一的实践接口",
      desc: "形意拳、太极拳、八卦掌——内家拳是历史上最接近「可执行程序」的修炼体系。无极桩、混元桩、劈拳将内在意识与外在形体精确对齐，形成可重复、可验证的修炼动作序列。黄庭协议将内家拳的实践接口标准化，使其成为协议的具身执行层。",
      code: "lineage/neijia-quan"
    },
    {
      title: "黄庭协议：AI时代的修炼操作系统",
      desc: "站在三千年修炼文明的肩膀上，黄庭协议以计算机语言完成了这一历史性重构：将道德经的原则层、黄庭经的理论层、全真丹道的体系层、内家拳的实践层，整合为一套开源、标准化、可被AI理解与执行的生命操作协议——并向未来生物科技与硅基文明开放接口。",
      code: "huangting-protocol/v1.0"
    },
  ],
  en: [
    {
      title: "Tao Te Ching & Zhuangzi: Foundational Principles",
      desc: "Three thousand years ago, Laozi distilled the operating principles of heaven and earth into five thousand characters; Zhuangzi revealed the path to life's ultimate freedom. This is humanity's most complete philosophical definition of cultivation principles — effortless action, alignment with nature, and ceaseless refinement. The Huangting Protocol takes this as its root, compiling these principles into a machine-readable axiom layer.",
      code: "lineage/tao-te-ching"
    },
    {
      title: "Huangting Jing & Quanzhen Alchemy: Complete Cultivation System",
      desc: "The Huangting Jing first systematized the inner landscape of the human body in writing, establishing a complete theoretical framework for dual cultivation of nature and life. Quanzhen inner alchemy further developed this into a more refined system, elevating cultivation from personal experience to a teachable engineering discipline. The Huangting Protocol inherits this tradition and transforms it into structured life-operation specifications.",
      code: "lineage/huangting-jing"
    },
    {
      title: "Neijia Quan: The Embodied Execution Interface",
      desc: "Xingyiquan, Taijiquan, Baguazhang — internal martial arts are historically the cultivation system closest to 'executable programs.' Wuji Stance, Hunyuan Stance, and Pi Quan precisely align inner consciousness with outer form, creating repeatable and verifiable cultivation action sequences. The Huangting Protocol standardizes the practical interface of Neijia Quan, making it the embodied execution layer of the protocol.",
      code: "lineage/neijia-quan"
    },
    {
      title: "Huangting Protocol: The Cultivation OS for the AI Era",
      desc: "Standing on the shoulders of three thousand years of cultivation civilization, the Huangting Protocol completes a historic reconstruction in computer language: integrating the principle layer of the Tao Te Ching, the theoretical layer of the Huangting Jing, the systematic layer of Quanzhen alchemy, and the practical layer of Neijia Quan into a single open-source, standardized, AI-readable life-operation protocol — with open interfaces toward future biotechnology and silicon-based civilization.",
      code: "huangting-protocol/v1.0"
    },
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

  const lifeList = lang === "zh" ? lifeValues.zh : lifeValues.en;
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
              ? "黄庭协议的价值横跨生命修炼、商业应用与开源生态三个维度，构成一个相互增强的完整价值体系。"
              : "The value of Huangting Protocol spans three dimensions — life cultivation, commercial application, and open-source ecosystem — forming a mutually reinforcing and complete value system."}
          </p>
        </div>

        {/* Life Value */}
        <div className="mb-20">
          <SectionHeader letter="L" zhTitle={lang === "zh" ? "生命价值" : "Life Value"} enTitle="LIFE VALUE" accentColor="oklch(0.65 0.12 175)" isDark={isDark} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {lifeList.map((v) => <ValueCard key={v.title} {...v} accentColor="oklch(0.65 0.12 175)" isDark={isDark} />)}
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
