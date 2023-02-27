<template>
  <div>
    <table width="766" border="0" cellpadding="0" cellspacing="0" align="center">
      <tbody><tr>
        <td><img src="@/assets/images/spacer.gif" width="31" height="337" alt=""></td>
        <td width="425" height="337" alt="" valign="top" style="padding-top:29px; padding-bottom:15px ">
          <img src="@/assets/images/5txt1.jpg" width="22" height="10"><span style="font-weight:bold;">在线留言\Message</span><br>
          <br style="line-height:6px ">
          <div style="height:2px; background-color:#C9C9C9 "><img src="@/assets/images/spacer.gif" width="1" height="1"></div>
          <br style="line-height:18px ">
          <div><table width="425" height="145" border="0" cellspacing="0" cellpadding="0">
            <tbody><tr>
              <td width="120" valign="top" style="padding-top:3px ">
                <div align="right" style="margin-right:17px; font-weight:normal;">
                  您的姓名:<br>
                  <br style="line-height:12px ">
                  公司名称:<br>
                  <br style="line-height:12px ">
                  通讯地址:<br>
                  <br style="line-height:12px ">
                  联系电话:<br>
                  <br style="line-height:12px ">
                  留言内容:
                </div>
              </td>
              <form></form><td width="305" valign="top">
              <input type="text" class="form"><br>
              <br style="line-height:4px ">
              <input type="text" class="form"><br>
              <br style="line-height:4px ">
              <input type="text" class="form"><br>
              <br style="line-height:4px ">
              <input type="text" class="form"><br>
              <br style="line-height:4px ">
              <textarea class="textarea"></textarea><br>
              <br>
              <div align="right" style="margin-right:18px ">
                <img src="@/assets/images/clear.jpg" width="37" height="10">
                <img src="@/assets/images/send.jpg" style="margin-left:22px " width="36" height="10">
              </div>
            </td>
            </tr>
            </tbody></table>
          </div>

        </td>
        <td width="45" height="337" alt="" valign="top"><div align="right"><img src="@/assets/images/corner_left.jpg" width="35" height="56"></div></td>
        <td width="234" height="100%" alt="" valign="top">
          <table width="234" height="100%" border="0" cellspacing="0" cellpadding="0">
            <tbody><tr>
              <td valign="top" height="100%" style="padding-top:14px; padding-bottom:15px ">	<div style="margin-left:28px; margin-right:30px "><span style="font-weight:bold;">联系我们\Contact</span><br>
                <br style="line-height:5px ">
                <div style="height:2px; background-color:#FF9600 "><img src="@/assets/images/spacer.gif" width="1" height="1"></div>
                <br style="line-height:18px ">
                <strong class="blue">Guangzhou DOOH Electric Power Equipment Co., Ltd. </strong><br>
                TEL:<img src="@/assets/images/spacer.gif" width="15" height="1">+ 86 20 38219434<br>
                FAX:<img src="@/assets/images/spacer.gif" width="15" height="1">+ 86 20 38219534<br>
                Technical Support:+ 189 2270 7603<br>
                E-mail：<a href="mailto:gzduohe@126.com">gzduohe@126.com</a><br>
                Zip：<a href="#" class="gray">511430</a><br>
                <span style="line-height:15px;">Address:<img src="@/assets/images/spacer.gif" width="15" height="1">Panyu District, Guangzhou City Shi Zhennan Puyan Shalu Li River Business Center, Building 220A A<br><br></span>
                <br style="line-height:3px;">
                <strong>广州铎禾电力设备有限公司</strong><br>
                <br style="line-height:3px ">
                电 话:<img src="@/assets/images/spacer.gif" width="15" height="1">+ 86 20 38219434<br>
                传 真:<img src="@/assets/images/spacer.gif" width="15" height="1">+ 86 20 38219534<br>
                技术支持:<img src="@/assets/images/spacer.gif" width="15" height="1">+189 2270 7603<br>
                邮箱：<a href="mailto:gzduohe@126.com">gzduohe@126.com</a><br>
                邮编：<a href="#" class="gray">511430</a><br>
                <span style="line-height:20px;">地址:<img src="@/assets/images/spacer.gif" width="15" height="1">广州市番禺区和悦大厦10楼<br></span>
                <br style="line-height:3px ">
              </div>
              </td>
            </tr>
            </tbody></table>

        </td>
        <td width="31" height="337" alt="" valign="top"><img src="@/assets/images/corner_right.jpg" width="23" height="56"></td>
      </tr>
      </tbody></table>
  </div>
</template>

<script>
import email from '~/assets/images/email.gif'
export default {
  name: 'IndexPage',
  data() {
    return { email }
  }
}
</script>
