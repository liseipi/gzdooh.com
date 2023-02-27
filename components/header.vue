<template>
  <div class="topnav">
    <div class="bgimg">
      <div class="bgimg-l"></div>
      <div class="bgimg-r"></div>
      <img class="banner-img" width="766" height="267" src="@/assets/images/header.jpg" alt="">
    </div>
    <div class="nav">
      <ul>
        <li><NuxtLink to="/">关于铎禾</NuxtLink></li>
        <li><NuxtLink to="/news/">新闻动态</NuxtLink></li>
        <li><a href="./products.asp">产品介绍</a></li>
        <li><a href="./case.asp">典型业绩</a></li>
        <li><a href="./contact.asp">联系我们</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "header"
}
</script>

<style scoped>

</style>
