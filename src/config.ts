export default {
  // 网站标题
  Title: "小杜老师的博客",
  // 网站地址
  Site: "https://blog.dujx.top",
  // 网站副标题
  Subtitle: "皮卡乒皮卡乓皮卡乒皮卡乓皮卡乒丘丘丘丘丘丘丘皮卡兵皮卡丘",
  // 网站描述
  Description:
    "小杜老师的博客 专注于前开发与相关技术的实战分享，涵盖Vue框架、Node.js、Serverless等，并涉及Node、Python、Linux、Docker等领域。同时，博客也分享作者的生活、音乐和旅行的热爱。",
  // 网站作者
  Author: "皮妈的法克丘",
  // 作者头像
  Avatar: "/assets/images/icon.png",
  // 网站座右铭
  Motto: "不被定义，自有光芒。",
  // Cover 网站缩略图
  Cover: "/assets/images/banner/072c12ec85d2d3b5.webp",
  // 网站侧边栏公告 (不填写即不开启)
  Tips: "<p>欢迎光临我的博客 🎉</p><p>这里会分享我的日常和学习中的收集、整理及总结，希望能对你有所帮助:) 💖</p>",
  // 首页打字机文案列表
  TypeWriteList: [
    "在数字的荒原上，种下一棵思考的树",
    "Planting a tree of thought in the digital wilderness",
    "技术的深度决定视野的宽度",
    "Technical depth determines the breadth of vision",
    "技术探索，永不止步",
    "Exploring the boundaries of technology",
    "代码构建世界，思想定义未来",
    "Building worlds with code, defining future with ideas",
    "编程 · 探索 · 分享",
    "Code · Explore · Share",
    "在0和1之间，寻找无限可能",
    "Exploring the infinite possibilities between 0 and 1",
    "技术的深度探索，思想的无界分享",
    "Exploring the depth of technology, sharing the infinite ideas",
  ],
  // 网站创建时间
  CreateTime: "2025-12-01",
  // 顶部 Banner 配置
  HomeBanner: {
    enable: true,
    // 首页高度
    HomeHeight: "38.88rem",
    // 其他页面高度
    PageHeight: "28.88rem",
    // 背景
    background:
      "url('/assets/images/home-banner.jpg') no-repeat center 60%/cover",
  },
  // 博客主题配置
  Theme: {
    // 颜色请用 16 进制颜色码
    // 主题颜色
    "--main-color": "#01C4B6",
    // 字体颜色
    "--font-color": "#34495e",
    // 侧边栏宽度
    "--aside-width": "318px",
    // 全局圆角
    "--main-radius": "0.88rem",
    // 主体内容宽度
    "--main-max-width": "1458px",
  },
  // 导航栏 (新窗口打开 newWindow: true)
  Navs: [
    // 仅支持 SVG 且 SVG 需放在 public/assets/images/svg/ 目录下，填入文件名即可 <不需要文件后缀名>（封装了 SVG 组件 为了极致压缩 SVG）
    // 建议使用 https://tabler.io/icons 直接下载 SVG
    { text: "朋友", link: "/links", icon: "Nav_friends" },
    { text: "圈子", link: "/friends", icon: "Nav_rss" },
    { text: "动态", link: "/talking", icon: "Nav_talking" },
    { text: "昔日", link: "/archives", icon: "Nav_archives" },
    { text: "留言", link: "/message", icon: "Nav_message" },
    { text: "关于", link: "/about", icon: "Nav_about" },
  ],
  // 侧边栏个人网站
  WebSites: [
    // 仅支持 SVG 且 SVG 需放在 public/assets/images/svg/ 目录下，填入文件名即可 <不需要文件后缀名>（封装了 SVG 组件 为了极致压缩 SVG）
    // 建议使用 https://tabler.io/icons 直接下载 SVG
    {
      text: "Github",
      link: "https://github.com/dujx99",
      icon: "WebSite_github",
    },
    { text: "韩小韩API", link: "https://api.vvhan.com", icon: "WebSite_api" },
    { text: "每日热榜", link: "https://hot.vvhan.com", icon: "WebSite_hot" },
    {
      text: "骤雨重山图床",
      link: "https://wp-cdn.4ce.cn",
      icon: "WebSite_img",
    },
    {
      text: "HanAnalytics",
      link: "https://analytics.vvhan.com",
      icon: "WebSite_analytics",
    },
  ],
  // 侧边栏展示
  AsideShow: {
    // 是否展示个人网站
    WebSitesShow: true,
    // 是否展示分类
    CategoriesShow: true,
    // 是否展示标签
    TagsShow: true,
    // 是否展示推荐文章
    recommendArticleShow: true,
  },
  // DNS预解析地址
  DNSOptimization: [
    "https://i0.wp.com",
    "https://cn.cravatar.com",
    "https://analytics.vvhan.com",
    "https://vh-api.4ce.cn",
    "https://registry.npmmirror.com",
    "https://pagead2.googlesyndication.com",
  ],
  // 博客音乐组件解析接口
  vhMusicApi: "https://vh-api.4ce.cn/blog/meting",
  // 评论组件（只允许同时开启一个）
  Comment: {
    // Twikoo 评论
    Twikoo: {
      enable: false,
      envId: "",
    },
    // Waline 评论
    Waline: {
      enable: false,
      serverURL: "",
    },
  },
  // Han Analytics 统计（https://github.com/uxiaohan/HanAnalytics）
  HanAnalytics: {
    enable: true,
    server: "https://analytics.vvhan.com",
    siteId: "Hello-HanHexoBlog",
  },
  // Google 广告
  GoogleAds: {
    ad_Client: "", //ca-pub-xxxxxx
    // 侧边栏广告(不填不开启)
    asideAD_Slot: `<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-xxxxxx" data-ad-slot="xxxxxx" data-ad-format="auto" data-full-width-responsive="true"></ins>`,
    // 文章页广告(不填不开启)
    articleAD_Slot: `<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-xxxxxx" data-ad-slot="xxxxxx" data-ad-format="auto" data-full-width-responsive="true"></ins>`,
  },
  // 文章内赞赏码
  Reward: {
    // 支付宝收款码
    AliPay: "/assets/images/alipay.webp",
    // 微信收款码
    WeChat: "/assets/images/wechat.webp",
  },
  // 访问网页 自动推送到搜索引擎
  SeoPush: {
    enable: false,
    serverApi: "",
    paramsName: "url",
  },

};
