<!--
 * @Author: your name
 * @Date: 2019-11-25 23:20:46
 * @LastEditTime: 2019-11-25 23:21:06
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /cms/Users/fuhaoliang/Desktop/公司/blog/pages/jour.vue
 -->
<template>
  <div class="layout jour">
    <div class="leftWrap">
      <div class="article-tab">
        <span class="item checked">
          全部
        </span>
        <span class="item">杂的文</span>
        <span class="item">小程序</span>
        <span class="item">CMS</span>
      </div>
      <div>list</div>
      <div>分页</div>
    </div>
    <div class="rightWrap">
      22222
    </div>
  </div>
</template>
<script>
export default {
  name: 'Sort',
  data () {
  },
}
</script>

<style lang="less">
.jour{
  .article-tab{
    display: flex;
    align-items: flex-end;
    &::before{
      content: "#";
      color: #999;
      font-size: 20px;
      font-weight: lighter;
      height: 24px;
      line-height: 24px;
      width: 15px;
    }
    .item{
      margin-right: 20px;
      font-size: 14px;
      color: #666;
      line-height: 24px;
      &.checked{
        font-size: 20px;
        color: #409eff;
      }
    }
  }
}
  
</style>