<template>
  <div class="detail-title">
    <div class="title">
      <h1>小程序云开发数据库查询失败的解决方案<span> / 小程序</span></h1>
    </div>
    <div class="info">
      <span>2月前</span>
      <span>阅读量 / 237</span>
      <span>来源 / 原创</span>
      <span>文 / 倔强的巴顿</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailTitle',
  prop: {
    txt: {
      type: String
    }
  }
}
</script>

<style lang="less" scoped>
.detail-title {
  margin-bottom: 40px;
  .title {
    h1 {
      font-size: 24px;
      line-height: 28px;
      font-weight: bold;
      &::before {
        display: inline-block;
        content: '#';
        font-size: 24px;
        font-weight: 100;
        height: 30px;
        line-height: 28px;
        width: 25px;
      }
      span {
        margin-left: 5px;
        font-size: 14px;
        color: #999;
        font-weight: normal;
      }
    }
  }
  .info {
    padding-left: 25px;
    font-size: 12px;
    color: #999;
    span {
      margin-right: 8px;
    }
  }
}
</style>
