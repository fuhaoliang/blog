<template>
  <div class="detail-title">
    <div class="title">
      <h1>{{ title }}<span> / {{ tagName }}</span></h1>
    </div>
    <div class="info">
      <span>{{ $fromNow | timeDate }}</span>
      <span>阅读量 / {{ views }}</span>
      <span>来源 / 原创</span>
      <span>文 / 付豪亮</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailTitle',
  props: {
    title: {
      type: String,
      default: ''
    },
    tagName: {
      type: String,
      default: ''
    },
    timeDate: {
      type: Number,
      default: 0
    },
    views: {
      type: Number,
      default: 0
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
