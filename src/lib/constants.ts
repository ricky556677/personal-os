export const HERO_SLIDES = [
  {
    id: "content",
    label: "AIGC",
    year: "2025",
    sub: "Content",
    title: "AIGC",
    titleLine2: "肖学长",
    description:
      "AIGC肖学长是一个探索 AI 与内容创作交叉领域的个人品牌，专注于用 AI 提升内容生产效率。",
    tags: "AI 内容策略 · 工具链搭建 · 品牌表达",
    image: "/hero-bg.png",
    imageLabel: "AI-POWERED\nCONTENT STUDIO",
  },
  {
    id: "tools",
    label: "AI Tools",
    year: "2025",
    sub: "Workflow",
    title: "AI",
    titleLine2: "工作流",
    description:
      "构建端到端的 AI 工具链，从灵感生成到内容发布的每一个环节都用 AI 提效。",
    tags: "自动化 · 效率工具 · 工作流设计",
    image: "/hero-1.png",
    imageLabel: "END-TO-END\nAI WORKFLOWS",
  },
  {
    id: "visual",
    label: "Visual",
    year: "2025",
    sub: "Design",
    title: "视觉",
    titleLine2: "表达力",
    description:
      "用系统化的视觉语言，把抽象想法转化为可传播、可复用的内容资产。",
    tags: "设计系统 · 视觉叙事 · 品牌一致性",
    image: "/hero-2.png",
    imageLabel: "VISUAL\nSYSTEMS",
  },
  {
    id: "brand",
    label: "Brand",
    year: "2025",
    sub: "Strategy",
    title: "品牌",
    titleLine2: "策略",
    description:
      "把产品卖点拆解为可传播的故事，建立有记忆点的个人品牌形象。",
    tags: "定位 · 叙事 · 传播策略",
    image: "/hero-3.png",
    imageLabel: "BOLD\nSTRATEGY",
  },
  {
    id: "create",
    label: "Create",
    year: "2025",
    sub: "Launch",
    title: "创造",
    titleLine2: "无边界",
    description:
      "AI 让创作的门槛降到最低——你的想象力就是唯一的限制。",
    tags: "创意 · 探索 · 无限可能",
    image: "/hero-4.png",
    imageLabel: "CREATE\nWITHOUT LIMITS",
  },
]

export const NAV_LINKS = [
  { label: "About", href: "#identity" },
  { label: "Work Together ", href: "#action" },
]

export const BOOT_LINES = [
  { text: "> Initializing Personal OS...", delay: 0 },
  { text: "> Loading modules:", delay: 300 },
  { text: "  [OK] Content Creation", delay: 600 },
  { text: "  [OK] AI Workflow", delay: 900 },
  { text: "  [OK] Product Thinking", delay: 1200 },
  { text: "  [OK] Visual Expression", delay: 1500 },
  { text: "> System ready.", delay: 2000 },
]

export const IDENTITY_TAGS = [
  "Content Creation",
  "AI Workflow",
  "Product Thinking",
  "Visual Design",
  "Prompt Engineering",
]

export const IDENTITY_METHOD =
  "擅长把复杂工具讲清楚，把产品卖点变成可传播内容，用AI提高创作效率。"

export const ABILITY_MODULES = [
  {
    id: "script",
    number: "01",
    title: "Script Engine",
    subtitle: "脚本策划",
    description: "Structured approach to content scripting and narrative design.",
    image: "/ability-1.png",
    terminal: "> loading module: script-engine\n> parsing narrative patterns...\n> ✓ module active",
  },
  {
    id: "visual",
    number: "02",
    title: "Visual Engine",
    subtitle: "视觉表达",
    description: "Visual storytelling and design system thinking.",
    image: "/ability-2.png",
    terminal: "> loading module: visual-engine\n> analyzing design systems...\n> ✓ module active",
  },
  {
    id: "ai",
    number: "03",
    title: "AI Workflow",
    subtitle: "工具链",
    description: "End-to-end AI toolchain for content creation and automation.",
    image: "/ability-3.png",
    terminal: "> loading module: ai-workflow\n> connecting neural nodes...\n> ✓ module active",
  },
  {
    id: "product",
    number: "04",
    title: "Product Thinking",
    subtitle: "产品拆解",
    description:
      "Deconstructing products into clear, communicable value propositions.",
    image: "/ability-4.png",
    terminal: "> loading module: product-thinking\n> deconstructing value props...\n> ✓ module active",
  },
]

export const RUN_LOGS = [
  {
    id: "review",
    label: "AI产品测评视频",
    command: "run --project \"AI产品测评视频\"",
    input: "产品卖点复杂，用户看不懂",
    process: "拆解 → 重构表达 → 场景化脚本",
    output: "形成高传播内容结构",
    status: "✓ completed",
    image: "/runlog-1.png",
  },
  {
    id: "tutorial",
    label: "AI工具链教程",
    command: "run --project \"AI工具链教程\"",
    input: "工具太多，用户不知道怎么选",
    process: "分类 → 场景匹配 → 工作流编排",
    output: "输出可复制的 AI 工具选择框架",
    status: "✓ completed",
    image: "/runlog-2.png",
  },
  {
    id: "strategy",
    label: "内容策略系统",
    command: "run --project \"内容策略系统\"",
    input: "个人品牌定位模糊",
    process: "受众分析 → 差异化定位 → 内容矩阵设计",
    output: "建立可持续的内容生产系统",
    status: "✓ completed",
    image: "/runlog-3.png",
  },
]

export const KNOWLEDGE_ITEMS = [
  {
    id: "prompts",
    label: "prompt-templates",
    count: "32",
    description: "Ready-to-use prompt structures for content creation.",
    children: [
      { name: "video-script.md", size: "4.2K",
        content: `# 视频脚本 Prompt 模板 — 我平时怎么用的

说实话，Prompt 这东西很多人以为「随便打几句话」就行，
结果 AI 吐出来的东西根本没法用。我踩了无数个坑之后
总结出一套模板，今天全部分享出来。

## 我的核心公式

角色 + 任务 + 约束 + 示例 = 好结果

这不是什么玄学，是试出来的。你给 AI 的角色越具体，
它输出就越靠谱。

## 视频脚本模板（直接复制就能用）

你是一个专业的短视频脚本策划师，擅长把复杂概念
转化为普通人一听就懂的话。

请帮我写一个 60 秒的短视频脚本，主题是「{主题}」。

要求：
- 开头 3 秒必须抓人，用悬念或反差
- 中间给 3 个核心要点，每个要点配一个生活场景
- 结尾给一个明确的行动引导

不要废话，直接给脚本。

## 我写的一个真实案例

上周我做了一条「AI 写邮件」的视频，用的就是这个
模板。结果怎么样？3 天播放量 47 万。

核心就一句话：开头说「你写一封邮件要 20 分钟，
AI 只要 20 秒」—— 这个反差直接把完播率拉起来了。

## 几个血泪教训

- 别用「请」、「谢谢」这种客套话，AI 不吃这套
- 给示例比给描述有用 10 倍
- 每次只让 AI 做一个事，别一股脑塞一堆需求
- 模板要迭代，跑两次就能明显看出差距

## 进阶技巧

模板跑通了之后，我建议做个「Prompt 库」。
把你觉得好用的 prompt 都存下来，按场景分类。
我现在的库里有 30+ 条，新内容直接调模板改关键词
就行，效率提升不是一点半点。` },
      { name: "product-review.md", size: "3.8K",
        content: `# 产品测评视频脚本模板

做产品测评，最怕的就是变成「说明书朗读」。
观众想看的是：这东西到底好不好用，值不值得买。

## 测评结构

**开头：一句话结论**
别绕弯子，3 秒内告诉观众这东西值不值得看。
「这是我用过最反直觉的 AI 工具」—— 这就够了。

**中段：实际使用场景**
别只说功能，说场景。「它能帮你写邮件」
不如说「我上周用这个工具，本来要写 2 小时
的周报，10 分钟搞定了」。

**结尾：适用人群**
「如果你经常要写 XX，那这个工具适合你。
如果你是 XX，那没必要买。」

## 我测评过的一些产品

- Notion AI：内容创作者必备
- Cursor：程序员写代码效率翻倍
- Midjourney v6：配图质量质的飞跃

## 一个关键提醒

测评一定要客观。好用就说好用，不好用就
直说不好用。粉丝信任你，就是因为你说真话。
恰饭可以，但不能瞎恰。` },
      { name: "social-copy.md", size: "2.1K",
        content: `# 社交媒体文案 Prompt 模板

不同平台的文案风格完全不同。小红书要精致，
抖音要直接，朋友圈要自然。这个模板帮你
一键生成不同风格的同一内容。

## 多平台适配公式

核心信息 → 平台风格适配 → 输出

你只需要写好核心信息，剩下的让 AI 来
适配不同平台的调性。

## 示例

核心信息：推荐一个 AI 写作工具

小红书版：「被问爆了的 AI 写作神器，
真的能帮你省下 80% 的时间！附使用教程」

抖音版：「你写文案要 2 小时？我用这个
AI 工具 5 分钟搞定，附详细教程」

朋友圈版：「最近发现了一个超好用的
AI 写作工具，效率提升太多了，分享给
有需要的朋友」

## 使用建议

- 每次只生成一个平台的文案，别混在一起
- 生成后一定要自己读一遍，改掉 AI 味
- 配图和文案风格要统一` },
    ],
  },
  {
    id: "workflows",
    label: "ai-workflows",
    count: "18",
    description: "Documented workflows for AI-assisted production.",
    children: [
      { name: "content-pipeline.sh", size: "12K",
        content: `# 我的 AI 内容生产流水线

先说结论：我现在一个人能干的活，以前需要
一个 5 人小团队。这不是吹牛，是因为我把
AI 嵌入到了每个环节。

## 完整流程（从想法到发布）

想法 → 大纲 → 初稿 → 配图 → 视频 → 发布

看起来很多对吧？其实每个环节我花的
时间不超过 20 分钟。

## 具体怎么做的

**第 1 步：灵感收集**
我不用头脑风暴，我用「信息输入 + AI 筛选」。
每天花 30 分钟看行业动态、竞品内容、
用户评论，然后扔给 AI：「从这些内容中
提取 5 个可以做视频的话题」

**第 2 步：大纲生成**
用 ChatGPT 写大纲，但我给的是结构化
prompt（上面那个模板）。这一步基本
不用改，直接能用。

**第 3 步：内容生产**
文字稿用 Claude 扩写，配图用 Midjourney，
视频用 CapCut 套模板。三个工具配合起来，
一条 60 秒视频从 0 到成品最多 1 小时。

**第 4 步：审核发布**
这一步我绝不省。AI 生成完之后我会
过一遍，改几个语气词、加几个口头禅，
让它看起来更像「人写的」。

## 我用的工具链

- ChatGPT 4o — 主要文字生成
- Claude 3.5 Sonnet — 深度分析和扩写
- Midjourney v6 — 配图生成
- CapCut — 视频剪辑（套模板超快）
- Notion — 内容日历和素材库
- 飞书 — 和甲方沟通

## 最重要的心得

AI 不是帮你「省时间」的，是帮你
「放大能力」的。你本身不会写脚本，
AI 也救不了你。但如果你知道什么是
好脚本，AI 能让你一个人产出
一个团队的量。这才是核心价值。` },
      { name: "review-workflow.sh", size: "8.4K",
        content: `# AI 内容审核工作流

AI 生成的东西，不审核直接发，等于自杀。
这不是危言耸听，我见过太多翻车案例。

## 审核三步法

**第一步：事实核查**
AI 会编造数据、引用不存在的来源。
每一组数据、每一个引用都要人工核实。
这步不能省，绝对不能。

**第二步：语气校对**
AI 写的东西有个通病：太「正」了。
没有口语感，没有人味。我的做法是：
- 把书面语改成口语
- 加一些语气词和口头禅
- 删掉过于完美的句式

**第三步：品牌一致性**
检查是否符合你的个人风格。你的受众
熟悉你的调性，突然变了他们会觉得奇怪。

## 我的审核清单

- [ ] 所有数据和引用已核实
- [ ] 语气读起来像「我」说的
- [ ] 没有 AI 常见的套话和废话
- [ ] 开头 3 秒够不够抓人
- [ ] 结尾有没有明确的行动引导` },
      { name: "auto-publish.sh", size: "5.6K",
        content: `# 自动化发布工作流

内容做好之后，发布这个环节我基本全自动化了。
不是因为我懒，是因为这个环节不值得花
任何人工时间。

## 我的发布流程

Notion（内容管理）→ Zapier（自动触发）
→ 各平台 API → 自动发布

具体来说：

**1. 内容定稿后**
在 Notion 里把状态改为「ready to publish」

**2. 自动触发**
Zapier 检测到状态变化，自动把内容
推送到对应的平台

**3. 定时发布**
每个平台设置最佳发布时间，自动排队

## 注意事项

- 自动发布不等于完全不管。发布后
  1 小时内一定要在线，回复评论
- 敏感内容建议手动发布，别交给机器
- 定期检查各平台 API 状态，有时候会
  有变动导致发布失败` },
    ],
  },
  {
    id: "tutorials",
    label: "build-tutorials",
    count: "12",
    description: "Step-by-step guides for personal websites and tools.",
    children: [
      { name: "personal-os.md", size: "18K",
        content: `# 个人网站搭建 — 从 0 到上线全记录

很多人问我「个人网站怎么做」，其实没那么复杂。
今天把整个流程拆给你看，零基础也能上手。

## 为什么需要做个人网站

说实话，我在小红书和抖音都有账号，
但个人网站是完全不同的东西。

社交平台的流量是平台的，网站是你的。
社交平台的推荐算法说变就变，你的网站
只要不关服务器就一直在那。

而且，网站给人的信任感完全不一样。
甲方看到你的个人网站，第一反应是
「这人很专业」—— 这个印象分是无价的。

## 技术选型（别纠结，直接用这套）

- 框架：Next.js — 目前最火的前端框架
- 样式：Tailwind CSS — 写起来很快
- 动效：Framer Motion — 加动画零门槛
- 部署：Vercel — 免费，一键上线

你不需要会写后端，不需要买服务器，
不需要搞域名解析。全部免费搞定。

## 搭建步骤

**Day 1：定风格**
不要上来就写代码。先去 Dribbble、
Awwwards 上看 20 个你觉得好看的网站，
存下来，找到共同点。这就是你的风格方向。

**Day 2-3：搭框架**
用 Next.js 脚手架生成项目，先搭出
首页、关于页、作品集三个页面。
不用管细节，先把骨架立起来。

**Day 4-5：填内容**
这是最花时间的一步。文案要反复改，
图片要精挑细选。记住：首屏决定
80% 的留存率，首屏做得好，后面
随便怎么弄都行。

**Day 6：加动效**
别加太多！我的原则是：每个页面
不超过 3 个动效。滚动淡入、hover
微交互、按钮反馈——这就够了。

**Day 7：上线**
推到 GitHub，连上 Vercel，点 deploy。
完事。

## 几个避坑指南

- 别用现成模板！一搜全是那几套，
  面试官/甲方看太多了，毫无记忆点
- 移动端一定要测！60% 的访客是手机
- 加载速度控制在 2 秒内，超过就没人等了
- SEO 别忽略，加好 title 和 description` },
      { name: "design-system.md", size: "14K",
        content: `# 个人设计系统搭建指南

设计系统听起来很高大上，其实就是
一套统一的视觉规范。有了它，你做
任何新页面都不用从头想颜色、字体、间距。

## 为什么要搞设计系统

我以前的做法：每个页面重新定颜色、
字号、间距。结果就是——风格不一致，
改一个地方要改所有地方。

搞了设计系统之后：所有页面用同一套
token，改一次全局生效。

## 我的设计系统包含什么

**颜色**
- 背景色、文字色、强调色
- 每种颜色定义 3-5 个层级

**字体**
- 标题字号体系（H1-H6）
- 正文字号体系
- 字体族和字重

**间距**
- 基于 8px 的间距系统
- 组件内部间距规范

**组件**
- 按钮、卡片、输入框、标签
- 每个组件定义 2-3 种变体

## 工具推荐

- Figma — 设计稿管理
- Tailwind CSS — 代码实现
- Storybook — 组件展示

## 从小做起

别一上来就搞大而全的设计系统。
先把你最常用的 5-10 个组件规范化，
后面慢慢扩充就行。` },
      { name: "seo-guide.md", size: "9.2K",
        content: `# 个人网站 SEO 指南

说实话，SEO 这个事很多人觉得是「大公司
才需要的」。但个人网站做好 SEO，效果
比你想的要好得多。

## 为什么个人网站也需要 SEO

因为「免费流量」是最有价值的流量。
你花钱买广告，停了就没流量了。SEO
带来的流量是持续的、免费的、精准的。

## 最关键的 5 件事

**1. 标题和描述**
每个页面的 <title> 和 <meta description>
都要写好。这不是给搜索引擎看的，是给
搜索结果页的人看的——决定了他们点不点。

**2. 页面加载速度**
Google 把加载速度纳入排名因素了。
我的网站跑 Pagespeed 能拿 95+，核心就两点：
- 图片压缩（用 WebP 格式）
- 代码分割（Next.js 自带）

**3. 移动端适配**
现在 60% 以上的流量来自手机。Google
是 mobile-first indexing，移动端体验差
直接排名往下掉。

**4. 结构化数据**
加 JSON-LD 结构化数据，让 Google
知道你是谁、你做什么。搜索结果里
可能会出现你的个人卡片。

**5. 内容更新**
搜索引擎喜欢活跃的网站。哪怕每个月
只更新一篇文章，也比半年不更新强。

## 别做的几件事

- 别堆砌关键词，Google 早就聪明了
- 别买外链，被发现直接惩罚
- 别用黑帽 SEO，短期有效长期必死` },
    ],
  },
  {
    id: "methodology",
    label: "content-method",
    count: "8",
    description: "Framework for turning ideas into shareable content.",
    children: [
      { name: "story-framework.md", size: "6.8K",
        content: `# 故事化框架：怎么把干货变成好故事

干货本身不吸引人，故事才吸引人。
这是我做内容以来最深的体会。

## 我的故事框架

问题 → 挣扎 → 顿悟 → 行动 → 结果

这个框架为什么有效？因为它就是
我们每个人经历事情的真实过程。

## 一个具体例子

**问题**：我做内容做了半年，粉丝只有 200
**挣扎**：每天写，没人看。怀疑自己是不是
  不适合做这行。差点放弃。
**顿悟**：有一天看到一个数据——「90% 的内容
  失败不是因为质量差，是因为没人点开」
  我突然明白了：我一直关注「写什么」，
  但从没关注「怎么让人想看」
**行动**：开始研究标题、封面、开头 3 秒
**结果**：3 个月后，第一条 10 万播放的视频出现

看到了吗？这不是「教程」，这是一个
「故事」。但里面包含了所有你要的干货。

## 核心要点

- 故事要有「你」在里面，第一人称最真实
- 挣扎的部分要具体，别泛泛而谈
- 顿悟要有一个「触发点」，不能凭空而来
- 结果要有数据支撑，「效果很好」不够` },
      { name: "viral-structure.md", size: "5.4K",
        content: `# 爆款内容的结构分析

我分析了 100+ 条播放量 10 万+ 的内容，
发现它们有一个共同的结构。

## 通用爆款结构

**0-3 秒：强钩子**
要么是悬念，要么是反差，要么是利益点。
「90% 的人都做错了」比「今天教大家一个
技巧」强 10 倍。

**3-15 秒：建立信任**
告诉观众你是谁、为什么听你的。
「我做了 3 年内容，踩了无数坑之后
总结出这套方法」—— 这就够了。

**15-45 秒：核心价值**
给干货，但要用故事包装。别干巴巴地
列 1234，用「我是怎么发现的」「我用了
之后怎么样」来串起来。

**45-55 秒：行动引导**
明确告诉观众下一步做什么。
「评论区回复关键词领取完整模板」
比「觉得有用的话点赞关注」强。

## 一个反直觉的发现

爆款内容往往不是「信息量最大」的，
而是「情绪最强烈」的。

一条教你 10 个技巧的内容，播放量
可能只有 1 万。一条讲你如何从 0 到
10 万播放的故事，可能是 50 万。

所以——少就是多。` },
      { name: "hook-templates.md", size: "3.2K",
        content: `# 开头钩子模板库

这是我用了两年攒下来的开头模板，
直接套用就能用。

## 悬念型

- 「我做了一个决定，可能会改变我的
  职业生涯…」
- 「这个东西我本来不想公开的…」
- 「99% 的人不知道的这个功能…」

## 反差型

- 「我用 AI 写了 100 篇文章，结果
  被平台封了」
- 「你以为做内容很简单？我花了
  6 个月才明白这个道理」
- 「这个工具免费，但比付费的还好用」

## 数字型

- 「3 个习惯，让我 3 个月涨粉 10 万」
- 「花了 5 万块踩的坑，今天免费分享」
- 「10 分钟，教你搞定 XX」

## 否定型

- 「别再做 XX 了」
- 「如果你还在用 XX，赶紧停」
- 「忘了你学过的 XX 吧」

## 使用建议

- 一个内容只用一个钩子，别堆
- 钩子要和后面的内容匹配，别
  标题党
- 多测试几种，找到最适合你
  受众的类型` },
    ],
  },
]

export const SERVICES = [
  {
    title: "Content Strategy",
    description: "AI-powered content planning and scripting.",
  },
  {
    title: "AI Workflow Setup",
    description: "Personal AI toolchain configuration.",
  },
  {
    title: "Product Expression",
    description: "Turning product features into compelling narratives.",
  },
]
