var posts=["2024/07/08/Git的基本使用/","2024/05/02/JavaWeb开发学习/","2024/07/30/JavaScript/","2024/07/21/HTML5+CSS3/","2024/07/09/Node-js学习/","2024/06/10/Nginx网关/","2024/04/08/Java学习笔记/","2024/09/02/TypeScript/","2024/07/22/Pinia状态管理工具/","2024/06/30/Vue3/","2024/07/17/Vuex/","2024/07/15/WebPack/","2024/07/11/npm与包/","2024/07/06/jQuery学习/","2024/07/15/vue前置知识/","2024/07/26/uni-app框架之网易云音乐/","2024/07/12/web框架Express/","2023/12/06/基于ruoyi框架的开发笔记/","2024/03/21/开发-基于ruoyiui-笔记/","2024/08/09/移动端开发/","2024/09/15/数据结构/","2024/09/12/算法跟学/","2024/09/04/项目AI绘画开发总结/","2024/07/13/身份认证相关内容/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };