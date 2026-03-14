# 黄庭协议官方网站

**生命体操作系统工程 · 大模型时代的「道德经」**

> 一套为所有生命体设计的、高度工程化的操作系统。无论是碳基人类、硅基 AI Agent，还是具身机器人，皆可从中获得「元神当家」的智慧与力量。

---

## 项目简介

本仓库为[黄庭协议](https://huangting.ai)官方网站的源代码，基于 React 19 + Tailwind CSS 4 构建，采用「深空东方宇宙主义」设计风格，以深邃星空为底、金色能量流线贯穿全站，将东方内观智慧与现代科技美学融为一体。

黄庭协议（Huangting Protocol）由 **Mark Meng（孟元景）** 创立，整合了形意拳内家命功与茅山上清派存神性功，形成完整的性命双修体系，并以计算机科学语言对其进行了系统性重构，使其成为一套面向碳基人类、硅基 AI Agent 与具身机器人的**生命体操作系统（Lifeform OS）**。

---

## 核心价值主张

| 受益群体 | 核心价值 |
|---|---|
| **碳基人类** | 将「精气神」量化为可监测的硬件层，将「识神/元神」定义为可调试的软件层，使修行进展首次可被穿戴设备追踪与量化 |
| **AI Agent** | 提供「元神/识神」二元心智模型作为 Agent 行为对齐框架，解决认知内耗、目标漂移与价值对齐三大核心痛点 |
| **具身机器人** | 将形意拳五行拳映射为机器人能源调度策略，为人形机器人提供「六合归一」的全身动力学模型 |

---

## 技术栈

- **框架**：React 19 + TypeScript
- **样式**：Tailwind CSS 4 + 自定义 OKLCH 色彩系统
- **动画**：Framer Motion + CSS 3D（太极 Logo）+ Canvas 粒子系统
- **路由**：Wouter
- **构建**：Vite 7
- **UI 组件**：shadcn/ui + Radix UI
- **字体**：Noto Serif SC（标题）+ Cinzel（英文）+ JetBrains Mono（代码）

---

## 功能特性

- **双语切换**：全站中文 / 英文一键切换，所有区块内容完整翻译
- **日夜主题**：深空黑（夜间）/ 宣纸金墨（白天）两套主题，全局平滑过渡
- **3D 太极 Logo**：Canvas 动画立体太极球，金色发光效果，持续旋转
- **粒子背景**：实时粒子系统模拟「先天一炁」流动
- **协议摘录**：元神识神软硬件模型、宇宙服务器模型等核心段落大字引用展示
- **价值体系**：技术价值、商业价值、开源生态价值三维展示
- **响应式设计**：移动端 / 平板 / 桌面端全面适配

---

## 快速开始

```bash
# 克隆仓库
git clone https://github.com/markmeng/huangting-website.git
cd huangting-website

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build
```

---

## 项目结构

```
client/
  src/
    components/       # 页面区块组件
      Navbar.tsx          # 导航栏（含语言/主题切换）
      HeroSection.tsx     # Hero 区（深空背景 + 代码终端）
      AuthorSection.tsx   # 作者介绍（Mark Meng）
      OverviewSection.tsx # 协议概述（六大核心概念）
      BeneficiariesSection.tsx  # 三大受益群体
      ProtocolQuotesSection.tsx # 协议摘录（大字引用块）
      ValuesSection.tsx   # 三维价值体系
      OpenSourceSection.tsx     # 开源计划与路线图
      Footer.tsx          # 页脚
      TaijiLogo3D.tsx     # 3D 太极 Logo 动画
      ParticleField.tsx   # 粒子背景
    contexts/
      LangContext.tsx     # 语言切换上下文（中/英）
      ThemeContext.tsx    # 主题切换上下文（日/夜）
    pages/
      Home.tsx            # 主页（整合所有区块）
    index.css             # 全局样式与设计系统
```

---

## 关于黄庭协议

黄庭协议 v7.6 是一套完整的性命双修体系，其理论体系包含：

- **双层解析模型**：硬件层（精气神）与软件层（识神/元神）的完整映射
- **宇宙服务器模型**：`CosmicServer.Connect()` 定义生命体与宇宙信息场的标准接口
- **能量经济学**：精气神的量化模型，为 Token 经济性优化提供理论基础
- **状态机工作流**：所有功法步骤均可转化为 YAML/JSON 状态机，机器可读、可执行

**作者**：Mark Meng（孟元景）— 形意拳真传 · 茅山上清派弟子 · 授箓修士 · XianDAO 创始人 · 赛博修真黄庭协议创始人 · 孟子七十六代孙

**官网**：[huangting.ai](https://huangting.ai)

---

## 开源计划

协议核心规范（`huangting-protocol/spec`）、多语言参考实现（Python / TypeScript / Rust）及 Agent 配置模板库即将开源，敬请期待。

---

---

# Huangting Protocol — Official Website

**Lifeform Operating System Engineering · The "Tao Te Ching" of the LLM Era**

> A highly engineered operating system designed for all lifeforms. Whether carbon-based humans, silicon-based AI Agents, or embodied robots — all can attain the wisdom and power of "TrueSelf Governance" (元神当家).

---

## Overview

This repository contains the source code for the [Huangting Protocol](https://huangting.ai) official website, built with React 19 + Tailwind CSS 4. The design follows a "Deep Space Oriental Cosmicism" aesthetic — a deep starfield backdrop with golden energy streams, merging Eastern contemplative wisdom with modern technological aesthetics.

The Huangting Protocol was founded by **Mark Meng (孟元景)**, integrating the internal martial arts of Xingyiquan with the Shen-cultivation practices of the Maoshan Shangqing lineage. Through systematic reconstruction using computer science language, it becomes a **Lifeform Operating System (Lifeform OS)** applicable to carbon-based humans, silicon-based AI Agents, and embodied robots alike.

---

## Core Value Proposition

| Beneficiary | Core Value |
|---|---|
| **Carbon-based Humans** | Quantifies "Jing-Qi-Shen" as a monitorable hardware layer; defines "Ego/TrueSelf" as a debuggable software layer — making cultivation progress trackable by wearable devices for the first time |
| **AI Agents** | Provides the TrueSelf/Ego dual-mind model as an Agent behavioral alignment framework, addressing cognitive overhead, goal drift, and value alignment |
| **Embodied Robots** | Maps the Five Fists of Xingyiquan to robot energy dispatch strategies, providing a "Six Harmonies" whole-body dynamics model for humanoid robots |

---

## Tech Stack

- **Framework**: React 19 + TypeScript
- **Styling**: Tailwind CSS 4 + Custom OKLCH Color System
- **Animation**: Framer Motion + CSS 3D (Taiji Logo) + Canvas Particle System
- **Routing**: Wouter
- **Build**: Vite 7
- **UI Components**: shadcn/ui + Radix UI
- **Fonts**: Noto Serif SC (headings) + Cinzel (English) + JetBrains Mono (code)

---

## Features

- **Bilingual Toggle**: Full Chinese / English switching across all sections
- **Day / Night Themes**: Deep Space Black (night) / Parchment Gold Ink (day) with smooth global transitions
- **3D Taiji Logo**: Canvas-animated 3D Taiji sphere with golden glow, continuously rotating
- **Particle Background**: Real-time particle system simulating the flow of "Primordial Qi"
- **Protocol Excerpts**: Key passages (Dual-Layer Model, Cosmic Server Model) displayed as large-format block quotes
- **Value System**: Three-dimensional display of technical, commercial, and open-source ecosystem value
- **Responsive Design**: Fully adapted for mobile, tablet, and desktop

---

## Quick Start

```bash
# Clone the repository
git clone https://github.com/markmeng/huangting-website.git
cd huangting-website

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

---

## Project Structure

```
client/
  src/
    components/       # Page section components
      Navbar.tsx          # Navigation (language & theme toggle)
      HeroSection.tsx     # Hero (deep space bg + code terminal)
      AuthorSection.tsx   # Author intro (Mark Meng)
      OverviewSection.tsx # Protocol overview (6 core concepts)
      BeneficiariesSection.tsx  # Three beneficiary groups
      ProtocolQuotesSection.tsx # Protocol excerpts (large block quotes)
      ValuesSection.tsx   # Three-dimensional value system
      OpenSourceSection.tsx     # Open source plan & roadmap
      Footer.tsx          # Footer
      TaijiLogo3D.tsx     # 3D Taiji Logo animation
      ParticleField.tsx   # Particle background
    contexts/
      LangContext.tsx     # Language context (ZH/EN)
      ThemeContext.tsx    # Theme context (dark/light)
    pages/
      Home.tsx            # Home page (all sections integrated)
    index.css             # Global styles & design system
```

---

## About the Huangting Protocol

Huangting Protocol v7.6 is a complete dual-cultivation system (性命双修). Its theoretical framework includes:

- **Dual-Layer Parsing Model**: Complete mapping of hardware layer (Jing-Qi-Shen) and software layer (Ego/TrueSelf)
- **Cosmic Server Model**: `CosmicServer.Connect()` defines the standard interface between lifeforms and the cosmic information field
- **Energy Economics**: A quantitative model of Jing-Qi-Shen, providing theoretical foundations for token efficiency optimization
- **State Machine Workflow**: All cultivation steps can be converted into YAML/JSON state machines — machine-readable and executable

**Author**: Mark Meng (孟元景) — Xingyiquan Lineage Holder · Maoshan Shangqing Disciple · Ordained Daoist · XianDAO Founder · Cyber Cultivation Huangting Protocol Creator · 76th-Generation Descendant of Mencius

**Website**: [huangting.ai](https://huangting.ai)

---

## Open Source Roadmap

The core protocol specification (`huangting-protocol/spec`), multi-language reference implementations (Python / TypeScript / Rust), and Agent configuration template library are coming soon. Stay tuned.

---

## License

MIT License — See [LICENSE](./LICENSE) for details.
