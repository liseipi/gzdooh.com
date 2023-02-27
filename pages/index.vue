<template>
  <div>
    <TABLE WIDTH=766 BORDER=0 CELLPADDING=0 CELLSPACING=0 align="center">
      <TR>
        <TD width="5">&nbsp;</TD>
        <TD WIDTH=455 ALT="" valign="top" style="padding-top:29px; padding-bottom:15px ">
          <div style=" line-height:20px; color:#666666;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;广州铎禾电力设备有限公司是一家开发和销售并引进国外先进电力产品为主的中型企业，是广东省高科技经营理事单位。公司专业从事国际领先水平的电力仪器仪表及工业监控设备的研发、设计、经营和销售,
            并提供相关的技术咨询、培训、支持和服务。公司始终着眼于国际领先科技，以国内外前沿技术为起点，为国内电力、石化、冶金及钢铁制造生产企业提供高品质的产品和服务。&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>
            <br>
            <span style="line-height:14px; color:#999999;">
              <img src="@/assets/images/about1.gif" width="234" height="226" style="float:left; margin-right:15px;">
              Electric Power Equipment Co., Ltd. Guangzhou Wo Duo is a development and sales and the introduction of foreign advanced power products in small and medium enterprises, director of the Guangzhou high-tech business units. Company specializes in the international advanced level of power monitoring equipment, instrumentation and industrial R & D, design, operations and sales, and provide technical advice, training, support and services. We always focus on the international leading technology, cutting-edge technology at home and abroad as a starting point for the domestic electric power, petrochemical, metallurgical and steel manufacturing enterprises to provide high quality products and services.</span>
          </div>
        </TD>
        <TD WIDTH=36 HEIGHT=337 ALT="" valign="top">
          <div align="right"><img src="@/assets/images/corner_left.jpg" width="35" height="56"></div>
        </TD>
        <TD WIDTH=234 HEIGHT=100% ALT="" valign="top" background="@/assets/images/px1.jpg">
          <table width="234" height="100%" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td valign="top" height="100%" style="padding-top:14px; padding-bottom:30px ">
                <div style="margin-left:28px; margin-right:30px "><span class="r_title">关于铎禾</span><br>
                  <br style="line-height:5px ">
                  <div style="height:2px; background-color:#FF9600 ">
                    <img src="@/assets/images/spacer.gif" width="1" height="1"></div>
                  <div style="margin:10px 0px; line-height:18px;  padding-bottom:5px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;致力于成为全球最专业的电力检测设备总体解决方案的提供和应用服务商。

                    为社会提供安全保障；为客户提供满意服务、创造价值的同时，企业赢得利益、获得发展！
                  </div>
                  <div
                    style="border-bottom:solid 1px #CCCCCC; padding-bottom:5px; margin-bottom:8px; color:#999999;">
                    To become the world's most profe-ssional electrical testing equipment to provide total
                    solution and appl-ication service providers.
                  </div>
                  <div
                    :style="{ backgroundImage: `url(${email})` }"
                    style="height:75px;  background-repeat:no-repeat; padding-top:50px; padding-left:10px;">
                    <a href="mailto:gzduohe@126.com">gzduohe@126.com</a></div>
                </div>
              </td>
            </tr>
            <tr>
              <td valign="top"><img src="@/assets/images/px2.jpg" width="234" height="4" style="vertical-align: bottom;"></td>
            </tr>
            <tr>
                <td valign="top" height="79">
                  <div style="display: flex; align-items: center;justify-content: center; height: 80px; background-color: #ddd;">
                    <input type="text" style="width:139px; padding: 2px 0;">
                    <img src="@/assets/images/ok.jpg" alt="" style="margin-left: 5px;">
                  </div>
                </td>
            </tr>
          </table>
        </TD>
        <TD WIDTH=31 HEIGHT=337 ALT="" valign="top">
          <img src="@/assets/images/corner_right.jpg" width="23" height="56">
        </TD>
      </TR>
    </TABLE>
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
