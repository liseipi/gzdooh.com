<template>
  <div class="footer">
    <div class="footer-bg">
      <img src="@/assets/images/bot_px.gif" width="766" style="vertical-align: top;" alt="">
    </div>
    <div class="link">
      <a href="index.asp" class="blue">关于铎禾</a>
      |
      <a href="news.asp" class="blue">新闻动态</a>
      |
      <a href="products.asp" class="blue">产品介绍</a>
      |
      <a href="case.asp" class="blue">典型业绩</a>
      |
      <a href="contact.asp" class="blue">联系我们</a>

    </div>
    <div class="copyright">
      <a href="#" class="gray">Copyright</a > &copy; <a href="http://www.miitbeian.gov.cn/" target="_blank" class="grays">粤ICP备12033595号</a> Companyname, 2011 - {{new Date().getFullYear()}}	DOOH版权所有
    </div>
  </div>
</template>

<script>
export default {
  name: "footer"
}
</script>
