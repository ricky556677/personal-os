# Personal OS | 个人操作系统

> A personal brand website for **AIGC 肖学长** — an AI-powered content creator, interactive designer, and digital blogger exploring the intersection of AI and content creation.
>
> AIGC 肖学长 的个人品牌网站——一个探索 AI 与内容创作交叉领域的 AIGC 设计师、交互设计师和数码博主。

## ✨ Features / 功能特色

- **Immersive Hero Section** — Scroll-wheel driven tab switching with dynamic backgrounds
- **Identity Display** — Personal tags, methodology, and positioning
- **Ability Modules** — Interactive card-based showcase of core capabilities
- **Run Logs** — Project case studies presented as terminal-style logs
- **Knowledge Base** — Browsable file tree of prompt templates, AI workflows, build tutorials, and content methodology
- **Smooth Animations** — Powered by Framer Motion with fade-in, stagger, and terminal boot effects
- **Fully Responsive** — Mobile-first design

- **沉浸式首屏** — 鼠标滚轮驱动的 Tab 切换 + 动态背景
- **身份展示** — 个人标签、方法论、品牌定位
- **能力模块** — 交互式卡片展示核心能力
- **运行日志** — 以终端风格展示项目案例
- **知识库** — 可浏览的 Prompt 模板、AI 工作流、搭建教程、内容方法论
- **流畅动效** — 基于 Framer Motion 的淡入、交错、终端启动动画
- **全端响应式** — 移动端优先设计

## 🛠️ Tech Stack / 技术栈

| Category / 类别 | Technology / 技术 |
|---|---|
| Framework / 框架 | [Next.js 15](https://nextjs.org/) (App Router) |
| Language / 语言 | TypeScript |
| Styling / 样式 | [Tailwind CSS 4](https://tailwindcss.com/) |
| Animation / 动效 | [Framer Motion](https://www.framer.com/motion/) |
| Deployment / 部署 | [Vercel](https://vercel.com/) |

## 📂 Project Structure / 项目结构

```
personal-os/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Homepage
│   │   ├── globals.css         # Global styles
│   │   └── knowledge/          # Knowledge base page
│   ├── components/
│   │   ├── animations/         # Animation components
│   │   │   ├── fade-in.tsx
│   │   │   ├── stagger-children.tsx
│   │   │   └── terminal-boot.tsx
│   │   ├── layout/             # Layout components
│   │   │   ├── top-nav.tsx
│   │   │   ├── footer.tsx
│   │   │   └── section-wrapper.tsx
│   │   ├── sections/           # Page sections
│   │   │   ├── hero-section.tsx
│   │   │   ├── identity-section.tsx
│   │   │   ├── ability-section.tsx
│   │   │   ├── run-logs-section.tsx
│   │   │   ├── knowledge-section.tsx
│   │   │   └── action-section.tsx
│   │   └── ui/                 # Reusable UI components
│   │       ├── pill-button.tsx
│   │       ├── badge.tsx
│   │       ├── card.tsx
│   │       ├── code-block.tsx
│   │       └── secondary-button.tsx
│   └── lib/
│       └── constants.ts        # All content data & configs
└── public/                     # Static assets
```

## 🚀 Getting Started / 快速开始

### Prerequisites / 前置条件

- [Node.js](https://nodejs.org/) v18+
- npm or yarn

### Installation / 安装

```bash
# Clone the repo
git clone https://github.com/RICKY556677/personal-os.git

# Enter project directory
cd personal-os

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build / 构建

```bash
npm run build
npm run start
```

## 🎨 Content Sections / 页面板块

| Section / 板块 | Description / 描述 |
|---|---|
| **Hero** / 首屏 | 5 slides: AIGC Content · AI Workflow · Visual Design · Brand Strategy · Create Without Limits |
| **Identity** / 身份 | Personal tags, professional methodology, and value proposition |
| **Ability** / 能力 | 4 modules: Script Engine · Visual Engine · AI Workflow · Product Thinking |
| **Run Logs** / 日志 | 3 project cases: AI Reviews · Tool Tutorials · Content Strategy |
| **Knowledge** / 知识库 | Browsable file tree with 4 categories, 70+ items including prompt templates, workflows, tutorials, and methodology |
| **Action** / 行动 | Call-to-action and service overview |

## 👤 About / 关于

Built by **AIGC 肖学长** — one of the first AIGC designers in China, specializing in AI application reviews, software tutorials, and AIGC design techniques.

由 **AIGC 肖学长** 构建——国内首批 AIGC 设计师，专注于 AI 应用推荐、软件教程和 AIGC 设计技巧。

- 📱 [小红书 / Xiaohongshu](https://www.xiaohongshu.com/user/profile/5c395213000000000703a4db)
- 📧 Business: aigcxiao

## 📄 License

MIT
