var posts=["2024/06/10/CI-CD技术/","2024/06/07/Docker学习笔记/","2024/07/08/Git的基本使用/","2024/04/25/Java练习题/","2024/06/10/K8S技术/","2024/05/02/JavaWeb开发学习/","2024/04/08/Java学习笔记/","2024/06/10/Nginx网关/","2024/06/10/Redis缓存技术/","2024/06/10/RabbitMQ消息队列笔记/","2023/12/10/SpingCloud学习/","2023/12/04/SpringBoot学习/","2024/06/08/SpringBoot缓存以及结合Redis/","2024/06/17/SpringMVC学习/","2024/06/30/Vue-js/","2023/12/04/Springboot模块学习2/","2023/12/04/hello-world/","2024/07/06/jQuery学习/","2023/12/06/基于ruoyi框架的开发笔记/","2024/03/21/开发-基于ruoyiui-笔记/","2024/03/30/记录Hadoop中HDFS命令统计词频错误/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };