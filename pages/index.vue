<template>
  <div class="layout home">
    <!-- banner楼层 -->
    <h1>22222222</h1>
    <div class="mb40 banner">
      <div class="leftWrap banner-l">
        <a-carousel autoplay>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </a-carousel>
      </div>
      <div class="rightWrap banner-r">
        <div class="mb10 br5 banner-r-t">
          2
        </div>
        <div class="br5 banner-r-b">
          3
        </div>
      </div>
    </div>
    <!-- 内容楼层 -->
    <div class="content">
      <div class="home-l">
        <!-- 最新更新 -->
        <div class="latest"></div>
        <!-- 推荐资源 -->
        <div class="Resource"></div>
      </div>
      <div class="home-r">
        <!-- 热门标签 -->
        <div class="home-tags"></div>
        <!-- 特别推荐 -->
        <div class="home-recommend"></div>
        <!-- 一席话 -->
        <div class="home-word"></div>
        <!-- 最近留言 -->
        <div class="home-message"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style lang="less">
.leftWrap {
  float: left;
  width: 770px;
  height: 320px;
  overflow: hidden;
}
.rightWrap {
  float: right;
  width: 320px;
  height: 320px;
  overflow: hidden;
}
.br5 {
  border-radius: 5px;
}
.mb10 {
  margin-bottom: 10px;
}
.mb20 {
  margin-bottom: 20px;
}
.mb30 {
  margin-bottom: 30px;
}
.mb40 {
  margin-bottom: 40px;
}

.home {
  width: 100%;
  .banner {
    clear: both;
    overflow: hidden;
    .banner-l {
      border-radius: 5px;
    }
    .banner-r {
      .banner-r-t {
        height: 210px;
        background: #364d79;
      }
      .banner-r-b {
        height: 100px;
        background: #364d79;
      }
    }
  }
}
</style>
<style scoped>
/* For demo */
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 320px;
  background: #364d79;
  overflow: hidden;
  border-radius: 5px;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
</style>
