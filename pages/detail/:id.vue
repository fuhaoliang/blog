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
      <div class="article"></div>
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
