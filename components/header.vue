<template>
  <div class="topnav">
    <div class="bgimg">
      <div class="bgimg-l"></div>
      <div class="bgimg-r"></div>
      <img class="banner-img" width="766" height="267" src="~/assets/images/header.jpg" alt="">
    </div>
    <div class="nav">
      <ul>
        <li><NuxtLink to="/">关于铎禾</NuxtLink></li>
        <li><NuxtLink to="/news/">新闻动态</NuxtLink></li>
        <li><NuxtLink to="/products/">产品介绍</NuxtLink></li>
        <li><NuxtLink to="/case/">典型业绩</NuxtLink></li>
        <li><NuxtLink to="/contact/">联系我们</NuxtLink></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "page-header"
}
</script>
