<template>
  <div class="layout detail-body">
    <div class="leftWrap">
      <detail-title></detail-title>
      <div class="pr description">
        <p>
          云开发数据库查询失败errCode: -1 | errMsg: document.get:fail Error:
          cannot find document XXX错误原因： 云开发数据库的...
        </p>
        <i class="flag"></i>
      </div>
      <div class="article">
        <div v-html="content"></div>
      </div>
    </div>
    <div class="rightWrap"></div>
  </div>
</template>

<script>
import DetailTitle from '@/components/DeatilTitle'
export default {
  name: 'Detail',
  components: {
    DetailTitle
  },
  data() {
    return {
      content: `<p style="box-sizing: border-box; margin: 0px; padding: 0px; text-size-adjust: none; white-space: normal; -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;">在传统的web项目开发过程中，为了优化项目体积、削弱臃肿的图片资源，尤其是碎片图标等对服务器的压力。</p>
<p style="box-sizing: border-box; margin: 0px; padding: 0px; text-size-adjust: none; white-space: normal; -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;">为此，我们就会优先使用一些矢量字体图标文件，比如：阿里提供的免费开源图标库iconfont。它的好处就是可以像使用字体一样去渲染我们的图标，无比顺畅。</p>
<p style="box-sizing: border-box; margin: 0px; padding: 0px; text-size-adjust: none; white-space: normal; -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;">&nbsp;</p>
<p style="box-sizing: border-box; margin: 0px; padding: 0px; text-size-adjust: none; white-space: normal; -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;">同样，我们在微信小程序的项目开发过程中，也不可避免的需要使用到字体图标，毕竟微信小程序那&nbsp;<strong style="box-sizing: border-box;">2M</strong>&nbsp;代码包大小的限制，还是挺让人隐隐作痛的。</p>
<p style="box-sizing: border-box; margin: 0px; padding: 0px; text-size-adjust: none; white-space: normal; -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important; text-align: center;"><img src="http://139.224.24.179:8888/cms-server/upload/1566980997602666.jpg" alt="" width="570" height="283" /></p>
<p style="box-sizing: border-box; margin: 0px; padding: 0px; text-size-adjust: none; white-space: normal; -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important; text-align: left;"><span style="text-align: justify;">对此，微信官方文章里也有优化说明：</span></p>
<ol>
<li style="box-sizing: border-box; text-size-adjust: none; white-space: normal; text-align: left; -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;"><span style="text-align: justify;"><strong style="box-sizing: border-box;">精简代码，去掉不必要的WXML结构和未使用的WXSS定义；</strong></span></li>
<li style="box-sizing: border-box; text-size-adjust: none; white-space: normal; text-align: left; -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;"><span style="text-align: justify;"><strong style="box-sizing: border-box;"><strong style="box-sizing: border-box;">减少在代码包中直接嵌入的资源文件；</strong></strong></span></li>
<li style="box-sizing: border-box; text-size-adjust: none; white-space: normal; text-align: left; -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;"><span style="text-align: justify;"><strong style="box-sizing: border-box;"><strong style="box-sizing: border-box;"><strong style="box-sizing: border-box;">压缩图片，使用适当的图片格式；</strong></strong></strong></span></li>
</ol>
<p>&nbsp;</p>`
    }
  }
}
</script>

<style lang="less">
.detail-body {
  .description {
    padding: 20px 25px;
    background: #f7f8f9;
    border-radius: 4px;
    margin-left: 20px;
    p {
      text-indent: 2em;
      text-align: justify;
    }
    .flag {
      position: absolute;
      top: -20px;
      left: -8px;
      z-index: 5;
      width: 60px;
      height: 60px;
      background: url('~assets/img/icon-flag.png') no-repeat;
      background-size: 45px;
    }
  }
}
</style>
