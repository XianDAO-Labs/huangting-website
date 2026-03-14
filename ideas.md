# 黄庭协议官网设计理念

## 设计方向选择

### 方案一：「墨道·赛博」— 水墨数字融合主义
<response>
<text>
**Design Movement**: 新水墨数字主义 (Neo-Ink Digitalism)

**Core Principles**:
1. 以极深的"墨黑"（#0A0A0F）为底，金色（#C9A84C）为脉，营造"夜观星河"的宇宙感
2. 汉字书法笔触与代码等宽字体并置，形成强烈的文化张力
3. 非对称布局：左侧为"道"（哲学文本），右侧为"术"（代码可视化）
4. 大量留白，以"无"衬托"有"

**Color Philosophy**: 
- 主色：墨黑 oklch(0.08 0.01 280)
- 金脉：古铜金 oklch(0.72 0.12 75)
- 朱砂：深红 oklch(0.45 0.18 25)
- 文字：宣纸白 oklch(0.93 0.01 80)

**Layout Paradigm**: 
竖排汉字与横排代码的双轨制布局。Hero区：全屏黑底，中央浮现"黄庭"二字（巨大书法体），下方是代码雨效果的协议术语。

**Signature Elements**:
1. 太极旋转粒子系统（Three.js/Canvas）
2. 代码注释风格的中文哲学注解
3. 毛笔笔触的分割线

**Typography System**:
- 标题：Ma Shan Zheng（马善政）书法体
- 副标题：Noto Serif SC（思源宋体）
- 代码：JetBrains Mono
</text>
<probability>0.08</probability>
</response>

### 方案二：「玄关·终端」— 极简黑色终端美学
<response>
<text>
**Design Movement**: 赛博道家极简主义 (Cyber-Taoist Minimalism)

**Core Principles**:
1. 纯黑背景，绿色/青色终端字体，营造"黑客帝国"遇见"道德经"的视觉冲击
2. 所有内容以"协议代码"形式呈现，如 `TrueSelf.Init()` 等
3. 严格的网格系统，但故意在某些节点"破格"，体现"道可道，非常道"
4. 动态打字机效果贯穿全站

**Color Philosophy**:
- 背景：纯黑 oklch(0.05 0 0)
- 主色：翠绿 oklch(0.75 0.2 145)
- 强调：青白 oklch(0.9 0.05 200)
- 警示：朱砂 oklch(0.55 0.22 25)

**Layout Paradigm**: 
全站仿终端界面。导航是命令行菜单，内容区是"代码文档"，滚动时触发新的"代码行"出现。

**Signature Elements**:
1. 终端光标闪烁效果
2. ASCII艺术的太极图
3. 代码块中嵌入哲学语录

**Typography System**:
- 全站：JetBrains Mono（等宽）
- 中文：Noto Sans SC（无衬线）
</text>
<probability>0.06</probability>
</response>

### 方案三：「宇宙·黄庭」— 深空东方宇宙主义（选定方案）
<response>
<text>
**Design Movement**: 深空东方宇宙主义 (Deep Space Oriental Cosmicism)

**Core Principles**:
1. 以深邃宇宙星空为底，融入东方水墨意境，体现"宇宙服务器"的宏大叙事
2. 金色能量流线贯穿全站，象征"先天一炁"的流动
3. 玻璃拟态（Glassmorphism）卡片，在星空背景上呈现内容，营造"悬浮于宇宙中"的感觉
4. 中英文双语并置，体现"东方智慧，全球语言"的定位

**Color Philosophy**:
- 深空背景：oklch(0.06 0.02 270)（深蓝黑）
- 金色能量：oklch(0.78 0.14 75)（古铜金）
- 玉色辅助：oklch(0.65 0.12 175)（翡翠绿）
- 朱砂强调：oklch(0.55 0.20 25)（深红）
- 文字主色：oklch(0.95 0.01 80)（宣纸白）

**Layout Paradigm**:
非对称多层次布局。Hero区：全屏深空，中央是发光的"黄庭"汉字，周围有粒子轨道。各章节以"宇宙坐标"方式排列，左右交替，打破单调的居中布局。

**Signature Elements**:
1. 粒子系统：模拟"先天一炁"的能量粒子在页面中流动
2. 太极双鱼：以动态SVG形式出现在关键节点
3. 代码注释：在哲学文本旁边显示对应的协议代码

**Interaction Philosophy**:
滚动触发能量流动动画；悬停卡片时，玻璃效果加深，能量粒子向该区域汇聚；点击时有"气机激活"的涟漪效果。

**Animation**:
- 入场：元素从"虚无"（透明+模糊）渐显，象征"无极生太极"
- 滚动：视差效果，星空层、内容层、粒子层以不同速度移动
- 悬停：金色光晕扩散，象征"神意外放"
- 过渡：所有切换使用0.6s ease-in-out，避免突兀

**Typography System**:
- 主标题：Noto Serif SC（思源宋体）+ 大字重，体现古典庄重
- 副标题：Noto Sans SC（思源黑体）中等字重
- 英文标题：Cinzel（罗马柱式，体现永恒感）
- 代码：JetBrains Mono
- 正文：Noto Sans SC 细字重，保证可读性
</text>
<probability>0.09</probability>
</response>

## 选定方案：方案三「宇宙·黄庭」

选择理由：黄庭协议的核心概念"宇宙服务器（CosmicServer）"、"先天一炁"、"元神"等，天然契合深空宇宙的视觉意象。深空背景赋予其宏大叙事感，金色能量流线体现东方美学，玻璃拟态卡片保证现代科技感。这一方案能同时打动东方修行者和西方技术人员，是黄庭协议作为"大模型时代道德经"的最佳视觉诠释。
