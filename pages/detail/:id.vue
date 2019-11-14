<!--
 * @Author: your name
 * @Date: 2019-11-12 18:12:13
 * @LastEditTime: 2019-11-12 23:24:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /cms/Users/fuhaoliang/Desktop/公司/blog/pages/detail/:id.vue
 -->
<template>
  <div class="layout detail-body">
    <div class="leftWrap">
      <detail-title :title="articleObj.title " />
      <div class="pr mb60 description">
        <p>
          {{ counter }}
          {{ articleObj.title }}
        </p>
        <i class="flag" />
      </div>
      <div class="article">
        <div v-html="articleObj.content" />
      </div>
    </div>
    <div class="rightWrap" />
  </div>
</template>

<script>
import DetailTitle from '@/components/DeatilTitle'
import Prism from 'prismjs'

import xss from 'xss'
export default {
  name: 'Detail',
  components: {
    DetailTitle
  },
  data() {
    return {
      articleObj: {
        content: '',
        title: ''
      },
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
  },
  computed: {
    counter() {
      return this.$store.state.counter
    }
  },
  // eslint-disable-next-line no-unused-vars
  async asyncData({ app,params, query, error }) {
    const { id } = params
     let {status, data}  = await app.$http.articleApi.getAtricleInfo({ id }, {error : false})
     const { code, message } = status
     if (status.code === 0) {
       console.info('data',data )
     } else {
       error({ statusCode: code, message })
     }

     return {
       ...data
     }
    // error({ statusCode: 404, message: 'Post not found' })
  },
  mounted() {
    Prism.highlightAll()
    console.info('xss(articleObj.content)', this.xss, '--->', this.xss(this.articleObj.content) )
  },
  methods: {
    xss,
    test() {
      this.$http.articleApi.getArticles()
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
