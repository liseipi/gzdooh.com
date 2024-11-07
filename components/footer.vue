<template>
  <div class="footer">
    <div class="footer-bg">
      <img src="~/assets/images/bot_px.gif" width="766" style="vertical-align: top;" alt="">
    </div>
    <div class="link">
      <NuxtLink to="/" class="blue">关于铎禾</NuxtLink>
      |
      <NuxtLink to="/news/" class="blue">新闻动态</NuxtLink>
      |
      <NuxtLink to="/products/" class="blue">产品介绍</NuxtLink>
      |
      <NuxtLink to="/case/" class="blue">典型业绩</NuxtLink>
      |
      <NuxtLink to="/contact/" class="blue">联系我们</NuxtLink>

    </div>
    <div class="copyright">
      <a href="#" class="gray">Copyright</a > &copy; <a href="https://beian.miit.gov.cn/" target="_blank" class="grays">粤ICP备12033595号-5</a> Companyname, 2011 - {{new Date().getFullYear()}}	DOOH版权所有
    </div>
  </div>
</template>

<script>
export default {
  name: "page-footer"
}
</script>
