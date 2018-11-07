<template>
  <!-- You can find this swiper instance object in current component by the "mySwiper"  -->
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(banner, index) in banners" :key="index">
        <img class="swiperImg" :src="banner">
      </div>
    </div>
    <div class="swiper-pagination swiper-pagination-bullets"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banners: ['/image/1.jpg', '/image/2.jpg', '/image/3.jpg'],
      swiperOption: {
        loop: true,
        centeredSlides: true,
        slidesPerView: 3,
        spaceBetween: 30,
        tdFlow: {
          rotate: 509,
          stretch: 10,
          depth: 1000,
          modifier: 1,
          shadows: true
        },
        on: {
          slideChange() {
            console.log('onSlideChangeEnd', this)
          },
          tap() {
            console.log('onTap', this)
          }
        }
      }
    }
  },
  mounted() {
    console.log('app init', this)
    setTimeout(() => {
      // this.banners.push('/image/5.png')
      console.log('banners update')
    }, 3000)
    console.log(
      'This is current swiper instance object',
      this.mySwiper,
      'I will slideTo banners 3'
    )
    this.mySwiper.slideTo(3)
  }
}
</script>


<style lang="scss" scoped>
.my-swiper {
  height: 300px;
  width: 100%;
  .swiper-slide {
    text-align: center;
    font-size: 38px;
    font-weight: 700;
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .swiper-pagination {
    > .swiper-pagination-bullet {
      background-color: red;
    }
  }
}
.swiperImg {
  width: 100%;
  height: 300px;
}
</style>
