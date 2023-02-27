<template>
  <div>
    <table width="766" border="0" cellpadding="0" cellspacing="0" align="center">
      <tbody><tr>
        <td></td>
        <td width="425" height="337" alt="" valign="top" style="padding-top:29px; padding-bottom:15px ">
          <div>
            <div class="r_title" style="height:18px;"><span style="float:left;">行业新闻</span><span style="float:right;"><a href="news_more.asp?c=2" class="orange"><strong>more</strong></a></span></div>

            <div style="height:2px; background-color:#C9C9C9 "><img src="@/assets/images/spacer.gif" width="1" height="1"></div>
            <div style="margin:10px 0px;">
              <div v-for="(news, index) in newsData2" style="line-height:22px;">
                <img src="@/assets/images/arr.gif" style="margin-right:8px; margin-top:-5px;">
                <NuxtLink :to="{path: `/news/hyxw/${news.id}`}">{{ news.title }}</NuxtLink>
              </div>
            </div>

            <div style="height:1px;"></div>
          </div>
        </td>
        <td width="45" height="337" alt="" valign="top"><div align="right"><img src="@/assets/images/corner_left.jpg" width="35" height="56"></div></td>
        <td width="234" height="100%" alt="" valign="top" background="@/assets/images/px1.jpg">
          <table width="234" height="100%" border="0" cellspacing="0" cellpadding="0">
            <tbody><tr>
              <td valign="top" height="100%" style="padding-top:14px; padding-bottom:30px ">	<div style="margin-left:28px; margin-right:30px; height: 260px; ">
                <img src="@/assets/images/2txt4.jpg" width="12" height="10"><span class="r_title">新闻中心\News</span><br>
                <br style="line-height:5px ">
                <div style="height:2px; background-color:#FF9600 "><img src="@/assets/images/spacer.gif" width="1" height="1"></div>
                <div style="height:1px; background-image:url(@/assets/images/dot.gif) "><img src="@/assets/images/spacer.gif" width="1" height="1"></div>
                <div><div style="margin:15px 0px;">
                  <strong>Lorem ipsum consectetur</strong><br>
                  aliqua minim veniam exercitat dolore fugiat elit sed pariatur eiusmod.</div>
                  <div style="line-height:20px; height:20px;"><img src="@/assets/images/arr.gif" align="absmiddle" style="margin-right:4px " width="3" height="3"><NuxtLink to="/news/qydt/" class="u" id="a">企业动态</NuxtLink></div>
                  <div style="line-height:20px; height:20px;"><img src="@/assets/images/arr.gif" align="absmiddle" style="margin-right:4px " width="3" height="3"><NuxtLink to="/news/hyxw/" class="u" id="a">行业新闻</NuxtLink></div>
                </div>
              </div>	</td>
            </tr>
            <tr><td valign="top"><img src="@/assets/images/px2.jpg" width="234" height="4" style="vertical-align: bottom;"></td></tr>
            <tr>
              <td valign="top" height="79">
                <div style="display: flex; align-items: center;justify-content: center; height: 80px; background-color: #ddd;">
                  <input type="text" style="width:139px; padding: 2px 0;">
                  <img src="@/assets/images/ok.jpg" alt="" style="margin-left: 5px;">
                </div>
              </td>
            </tr>
            </tbody></table>		</td>
        <td width="31" height="337" alt="" valign="top"><img src="@/assets/images/corner_right.jpg" width="23" height="56"></td>
      </tr>
      </tbody></table>
  </div>
</template>

<script>
export default {
  name: "news",
  data: () => {
    return {
      newsData2: require('~/assets/data/news2.json'),
    }
  }
}
</script>

<style scoped>

</style>
