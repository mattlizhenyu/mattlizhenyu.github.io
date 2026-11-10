// ============================================================
//  所有网站内容都在这个文件里。改这一个文件，整站自动更新。
//  注意：字符串用英文双引号 "，每项之间用逗号隔开。
//  想临时隐藏某一块，把数组里的项删掉或注释掉即可。
// ============================================================

window.SITE_DATA = {

  // ========== 站点信息（浏览器标签、分享卡片用） ==========
  site: {
    title: "李振宇 Matt · IT 工程师",
    description: "海程邦达供应链 · 空运事业部 IT 工程师。IT 运维、RPA 开发、AI 业务落地。"
  },

  // ========== 顶部导航（id 要对上页面区块，一般不用改） ==========
  nav: [
    { id: "hero",      label: "首页" },
    { id: "about",     label: "关于我" },
    { id: "work",      label: "工作职责" },
    { id: "skills",    label: "技能" },
    { id: "hobbies",   label: "爱好" },
    { id: "portfolio", label: "积累" },
    { id: "contact",   label: "联系我" }
  ],

  // ========== 首屏 ==========
  hero: {
    brand: "Matt Li",                 // 左上角 Logo
    nameCn: "李振宇",
    nameEn: "Matt",
    motto: "越努力越幸运",             // 全站视觉锚点，琥珀渐变
    org: "海程邦达供应链 · 空运事业部 IT 工程师",
    tagline: "把效率工具变成生产力 — IT 运维、RPA 开发、AI 业务落地",
    buttons: [
      { label: "联系我",   href: "#contact", style: "primary" },
      { label: "了解更多", href: "#about",   style: "ghost" }
    ]
  },

  // ========== 关于我 ==========
  about: {
    title: "关于我",
    subtitle: "快速了解我的性格与职业定位",
    quote: "敏而好学，乐于助人",
    paragraphs: [
      "你好，我是李振宇，同事们都叫我 Matt。作为海程邦达空运事业部流程信息部门的 IT 工程师，我的工作是让技术真正成为业务的加速器——从保障基础设施稳定运行，到用 RPA 和 AI 把重复劳动变成自动化流程。",
      "我相信好的 IT 服务不只是解决问题，更是主动发现痛点、用工具提升效率。无论是帮同事修一台打印机，还是为业务部门开发一套自动化流程，我都希望做到：让技术为人服务，让工作更轻松一点。"
    ],
    tags: ["IT 运维", "RPA 开发", "AI 落地", "效率工具", "自动化"],
    // tone 可选：amber / blue / green / yellow
    info: [
      { icon: "building",  label: "公司",   value: "海程邦达供应链", tone: "amber"  },
      { icon: "briefcase", label: "事业部", value: "空运事业部",     tone: "blue"   },
      { icon: "users",     label: "部门",   value: "流程信息部",     tone: "green"  },
      { icon: "chip",      label: "角色",   value: "IT 工程师",      tone: "yellow" }
    ]
  },

  // ========== 工作职责 ==========
  work: {
    title: "工作职责",
    subtitle: "三条主线，一个目标 — 让技术真正服务于业务",
    cards: [
      {
        icon: "server",
        title: "IT 基础设施运维",
        sub: "保障业务连续性",
        desc: "负责公司 IT 软硬件、网络通信、服务器及视频会议系统的全链路运维，确保办公环境稳定高效运转。",
        tags: ["软硬件运维", "宽带/局域网", "视频会议系统", "服务器管理"]
      },
      {
        icon: "robot",
        title: "RPA 流程机器人",
        sub: "把效率工具变成生产力",
        desc: "基于影刀 RPA 平台，开发和优化自动化流程，将重复性业务操作转化为高效运行的机器人流程。",
        tags: ["流程开发", "流程优化", "效率提升", "需求对接"]
      },
      {
        icon: "ai",
        title: "AI 技术业务落地",
        sub: "探索智能化可能",
        desc: "持续关注 AI 前沿技术，探索并推动 AI 在实际业务场景中的落地应用，助力团队智能化转型。",
        tags: ["场景挖掘", "技术调研", "方案落地", "持续迭代"]
      }
    ],
    note: "行政职责：公司车辆管理"
  },

  // ========== 技能矩阵 ==========
  skills: {
    title: "技能矩阵",
    subtitle: "日常使用的技术栈，持续精进中",
    groups: [
      {
        group: "编程语言",
        items: [
          { name: "Python", letter: "Py", color: "#3776AB", desc: "自动化脚本 · 数据处理" }
        ]
      },
      {
        group: "开发工具",
        items: [
          { name: "影刀 RPA",           letter: "影", color: "#E63946", desc: "流程机器人开发 · 流程优化" },
          { name: "VSCode",             letter: "VS", color: "#007ACC", desc: "主力代码编辑器" },
          { name: "Wireshark",          letter: "W",  color: "#1A8FDB", desc: "网络抓包 · 协议分析" },
          { name: "Fiddler / Charles",  letter: "F",  color: "#8B5CF6", desc: "HTTP 抓包 · 接口调试" }
        ]
      },
      {
        group: "运维工具",
        items: [
          { name: "VMware",             letter: "VM", color: "#6965DB", desc: "虚拟化 · 服务器管理" },
          { name: "RedHat Linux",       letter: "R",  color: "#CC0000", desc: "服务器运维 · 系统管理" }
        ]
      },
      {
        group: "设计工具",
        items: [
          { name: "Photoshop",          letter: "Ps", color: "#31A8FF", desc: "图像处理 · 视觉设计" }
        ]
      }
    ]
  },

  // ========== 兴趣爱好（Linux / 军迷 带彩蛋） ==========
  hobbies: {
    title: "兴趣爱好",
    subtitle: "工作之余，保持对世界的好奇。",
    // 每个爱好都可以有彩蛋：鼠标放上去弹出小窗口
    // egg: "note"     → 弹出便签小窗，内容用 note 数组（以 "> " 开头的行显示为琥珀色）
    // egg: "terminal" → 弹出 Linux 终端（逐字打字动画）
    // egg: "dogtag"   → 弹出军迷身份牌（暗号随机）
    tags: [
      { label: "看书", egg: "note", note: [
        "> reading list",
        "技术类：计算机 / 网络 / 自动化",
        "人文类：历史与传记",
        "状态：常读常新"
      ] },
      { label: "探索新技术", egg: "note", note: [
        "> now exploring",
        "AI Agent 与大模型应用",
        "RPA + AI 的组合玩法",
        "HomeLab 折腾记录中"
      ] },
      { label: "篮球", egg: "note", note: [
        "> weekend mode",
        "风格：够出汗，够开心",
        "场地：港区 / 东区球场"
      ] },
      { label: "乒乓球", egg: "note", note: [
        "> ping-pong",
        "打法：近台快攻",
        "原则：输赢各半，气势不能输"
      ] },
      { label: "Linux", egg: "terminal" },
      { label: "军迷",  egg: "dogtag" }
    ],
    terminal: [
      [{ t: "matt@bondex", c: "user" }, { t: " ~ ", c: "path" }, { t: "$ ", c: "prompt" }, { t: "whoami", c: "cmd" }],
      [{ t: "matt", c: "out" }],
      [{ t: "matt@bondex", c: "user" }, { t: " ~ ", c: "path" }, { t: "$ ", c: "prompt" }, { t: "echo \"越努力越幸运\"", c: "cmd" }],
      [{ t: "越努力越幸运", c: "out" }],
      [{ t: "matt@bondex", c: "user" }, { t: " ~ ", c: "path" }, { t: "$ ", c: "prompt" }, { t: "cat /etc/motto", c: "cmd" }],
      [{ t: "Keep learning, keep building.", c: "out" }],
      [{ t: "matt@bondex", c: "user" }, { t: " ~ ", c: "path" }, { t: "$ ", c: "prompt" }]
    ],
    dogtag: {
      name: "MATT LI",
      unit: "BONDEX SSC-IT",
      blood: "O+",
      mottos: [
        "Semper Fidelis — 永远忠诚",
        "Infantry leads the way",
        "不抛弃，不放弃",
        "Sua Sponte — 自发主动"
      ]
    }
  },

  // ========== 个人积累（外链卡片） ==========
  portfolio: {
    title: "个人积累",
    subtitle: "持续学习，沉淀为可复用的知识与经验。",
    items: [
      {
        platform: "CSDN",
        title: "CSDN 个人博客",
        desc: "技术文章、学习笔记与实践经验分享",
        url: "https://blog.csdn.net/matt_li",
        color: "hsl(0 72% 51%)",
        letter: "C"
      },
      {
        platform: "有道云笔记",
        title: "Windows 问题总结",
        desc: "日常运维中遇到的 Windows 系统问题排查与解决方案汇总",
        url: "https://note.youdao.com/s/A1E3RRTw",
        color: "hsl(152 60% 42%)",
        letter: "W"
      },
      {
        platform: "有道云笔记",
        title: "Linux 问题总结",
        desc: "Linux 服务器运维经验积累，涵盖常见问题与最佳实践",
        url: "https://note.youdao.com/s/4KE6PY7l",
        color: "hsl(152 60% 42%)",
        letter: "L"
      }
    ]
  },

  // ========== 联系我 ==========
  contact: {
    title: "联系我",
    subtitle: "随时欢迎交流，选择你最方便的方式找到我。",
    methods: [
      { icon: "phone", label: "电话", value: "18137799323",       href: "tel:18137799323" },
      { icon: "mail",  label: "邮箱", value: "zhenyu@bondex.com.cn", href: "mailto:zhenyu@bondex.com.cn" }
    ],
    // level：primary 最大最醒目 / mid 中等 / low 最小
    preferences: [
      { emoji: "💬", label: "飞书", rank: 1, level: "primary" },
      { emoji: "🐧", label: "QQ",   rank: 2, level: "mid" },
      { emoji: "📱", label: "微信", rank: 3, level: "low" },
      { emoji: "📞", label: "电话", rank: 4, level: "low" }
    ],
    notes: [
      { icon: "calendar", text: "重要会议请提前日历邀约" },
      { icon: "clock",    text: "工作时间 7×12" }
    ],
    offices: [
      { label: "港区办公室", value: "航空港区锦荣广场 5 号楼" },
      { label: "东区办公室", value: "东区雅宝国际广场 4 号楼" }
    ]
  },

  // ========== 页脚 ==========
  footer: {
    motto: "越努力越幸运",
    copyright: "© 2026 Matt Li · 海程邦达供应链"
  }

};
