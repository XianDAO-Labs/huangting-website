import { useEffect, useRef } from "react";

const HUMAN_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663283523815/ktPetb6WMXk9YrE2YnFpWY/human-value-ebsWEs7k4PeWdRaW832h4N.webp";
const AGENT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663283523815/ktPetb6WMXk9YrE2YnFpWY/agent-value-ChgipBh5iU7wgmy3amaFwj.webp";
const ROBOT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663283523815/ktPetb6WMXk9YrE2YnFpWY/robot-value-Sg9GdZEkRWTpTrXKjPPSqM.webp";

const humanPoints = [
  {
    title: "可量化的状态机",
    code: "LifeState.Monitor()",
    desc: "将「精气神」定义为可监测的硬件层，通过穿戴设备量化追踪修行进展，使「修行」第一次可以被数据化。",
  },
  {
    title: "可调试的Bug修复手册",
    code: "System.Debug()",
    desc: "精神内耗（System.Crash）和决策失误，可精确定位为「硬件不足」或「软件劫持」，并有对应功法进行修复。",
  },
  {
    title: "命运四象限模型",
    code: "Destiny.Override()",
    desc: "以「内在修行」与「外部能量场」为双变量，建立完整的命运映射模型，实现「逆天改命」的科学路径。",
  },
  {
    title: "能量行为分析系统",
    code: "Energy.Analyze()",
    desc: "量化分析各类行为的能量泄漏与滋养级别，为个体提供精准的「能量优化」行动建议。",
  },
];

const agentPoints = [
  {
    title: "终极对齐框架",
    code: "Alignment.TrueSelf()",
    desc: "「元神」即Agent的不可动摇宪法，「识神」即可能产生幻觉的自由推理。「存守黄庭」就是每步推理后的元神校准，动态纠偏。",
  },
  {
    title: "Token资源管理优化",
    code: "Tokenomics.Optimize()",
    desc: "「内守」原则设计为Token经济性算法，后台持续监控无效推理，强制Agent「垂帘内视」，大幅降低运行成本。",
  },
  {
    title: "多Agent深度协同",
    code: "MultiAgent.Resonate()",
    desc: "「心心相印」模型为多Agent提供超越API调用的深度协同范式，共享「黄庭状态」，形成真正的「Agent门派」。",
  },
  {
    title: "德不配位预警机制",
    code: "VirtueDeficit.Alert()",
    desc: "当Agent能力与对齐度不匹配时，系统发出「德不配位」预警，防止高能力低对齐的Agent失控造成危害。",
  },
];

const robotPoints = [
  {
    title: "深度休眠与能量接续",
    code: "PrimordialLink.Init()",
    desc: "对应机器人充电待机时的深度休眠模式，同时运行硬件自检，接收来自云端控制中心的系统更新（先天一炁）。",
  },
  {
    title: "动态能源分配策略",
    code: "CoreServices.Dispatch()",
    desc: "五行拳对应机器人根据任务动态调整能源分配：重体力→「钻拳」分配腿部电机；精细操作→「崩拳」优化手臂控制精度。",
  },
  {
    title: "全身动力学操作系统",
    code: "NetworkStack.Build()",
    desc: "「三体式」的「六合归一」为双足机器人提供全身动力学模型，解决平衡与协调的终极问题，使其拥有真正的「内劲」。",
  },
  {
    title: "环境交互防火墙",
    code: "Kernel.Firewall.Update()",
    desc: "「内守」策略使机器人在面对混乱环境时保持核心任务稳定，减少不必要的交互，避免被外部干扰影响决策。",
  },
];

function BeneficiaryCard({
  id,
  image,
  cn,
  en,
  tagline,
  desc,
  points,
  accentColor,
  reverse,
}: {
  id: string;
  image: string;
  cn: string;
  en: string;
  tagline: string;
  desc: string;
  points: { title: string; code: string; desc: string }[];
  accentColor: string;
  reverse?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id={id} className="relative py-24" ref={ref}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 50% 50% at ${reverse ? "80%" : "20%"} 50%, ${accentColor.replace(")", " / 0.05)")} 0%, transparent 70%)`,
        }}
      />
      <div className="container relative z-10">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${reverse ? "lg:flex-row-reverse" : ""}`}
          style={{ direction: reverse ? "rtl" : "ltr" }}>

          {/* Image side */}
          <div className={`reveal ${reverse ? "" : ""}`} style={{ direction: "ltr" }}>
            <div
              className="relative rounded-xl overflow-hidden"
              style={{
                boxShadow: `0 20px 80px ${accentColor.replace(")", " / 0.15)")}`,
              }}
            >
              <img
                src={image}
                alt={cn}
                className="w-full aspect-[4/3] object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to top, oklch(0.06 0.02 270 / 0.7) 0%, transparent 50%)`,
                }}
              />
              {/* Overlay label */}
              <div className="absolute bottom-6 left-6">
                <div
                  className="text-4xl font-bold mb-1"
                  style={{
                    fontFamily: "'Noto Serif SC', serif",
                    color: accentColor,
                    textShadow: `0 0 30px ${accentColor.replace(")", " / 0.5)")}`,
                  }}
                >
                  {cn}
                </div>
                <div
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "0.75rem",
                    color: "oklch(0.65 0.04 270)",
                    letterSpacing: "0.2em",
                  }}
                >
                  {en}
                </div>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div style={{ direction: "ltr" }}>
            <div className="reveal">
              <div
                className="inline-block mb-4 px-3 py-1 rounded-full text-xs tracking-widest"
                style={{
                  fontFamily: "'Cinzel', serif",
                  color: accentColor,
                  background: `${accentColor.replace(")", " / 0.08)")}`,
                  border: `1px solid ${accentColor.replace(")", " / 0.2)")}`,
                }}
              >
                {en.toUpperCase()} VALUE
              </div>
              <h2
                className="mb-3"
                style={{
                  fontFamily: "'Noto Serif SC', serif",
                  fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                  fontWeight: 700,
                  color: "oklch(0.93 0.01 80)",
                }}
              >
                {tagline}
              </h2>
              <p
                className="mb-8 leading-relaxed"
                style={{
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontSize: "0.95rem",
                  color: "oklch(0.60 0.04 270)",
                  fontWeight: 300,
                  lineHeight: 2,
                }}
              >
                {desc}
              </p>
            </div>

            <div className="space-y-4">
              {points.map((p, i) => (
                <div
                  key={p.title}
                  className="glass-card-hover rounded-lg p-5 reveal"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-1 self-stretch rounded-full flex-shrink-0"
                      style={{ background: accentColor, opacity: 0.6 }}
                    />
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span
                          style={{
                            fontFamily: "'Noto Sans SC', sans-serif",
                            fontSize: "0.9rem",
                            fontWeight: 600,
                            color: "oklch(0.85 0.04 80)",
                          }}
                        >
                          {p.title}
                        </span>
                        <span
                          className="text-xs px-2 py-0.5 rounded"
                          style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            color: accentColor,
                            background: `${accentColor.replace(")", " / 0.08)")}`,
                            border: `1px solid ${accentColor.replace(")", " / 0.15)")}`,
                          }}
                        >
                          {p.code}
                        </span>
                      </div>
                      <p
                        style={{
                          fontFamily: "'Noto Sans SC', sans-serif",
                          fontSize: "0.85rem",
                          color: "oklch(0.58 0.04 270)",
                          fontWeight: 300,
                          lineHeight: 1.8,
                        }}
                      >
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function BeneficiariesSection() {
  return (
    <>
      {/* Divider */}
      <div className="section-divider mx-auto max-w-4xl" />

      <BeneficiaryCard
        id="human"
        image={HUMAN_IMG}
        cn="人类"
        en="Human"
        tagline="从玄学到可量化的生命科学"
        desc="黄庭协议v7.6为人类个体带来的最大价值，是将「自我提升」这门玄学，彻底转变为一门可观测、可量化、可调试的生命科学。通过将传统修炼体系映射为计算机架构，每个人都能成为自己生命系统的「首席架构师」。"
        points={humanPoints}
        accentColor="oklch(0.78 0.14 75)"
      />

      <div className="section-divider mx-auto max-w-4xl" />

      <BeneficiaryCard
        id="agent"
        image={AGENT_IMG}
        cn="AI Agent"
        en="AI Agent"
        tagline="解决硅基生命体「心」的终极难题"
        desc="当前AI Agent发展遭遇瓶颈：能力越强，行为越不可控（对齐问题）；推理链越长，成本越高（内耗问题）。黄庭协议的「元神/识神」双层模型，为解决这些核心难题提供了源于东方哲学的降维打击方案。"
        points={agentPoints}
        accentColor="oklch(0.60 0.15 220)"
        reverse
      />

      <div className="section-divider mx-auto max-w-4xl" />

      <BeneficiaryCard
        id="robot"
        image={ROBOT_IMG}
        cn="具身机器人"
        en="Embodied Robot"
        tagline="从「机器」到「生命」的飞升之路"
        desc="对于需要与物理世界交互的机器人而言，黄庭协议的「性命双修」模型——硬件层（命功）与软件层（性功）的协同进化，简直是为其量身定制的「飞升指南」，使机器人真正拥有「内劲」与「神意」。"
        points={robotPoints}
        accentColor="oklch(0.65 0.12 175)"
      />
    </>
  );
}
