<template>
  <div class="layout home">
    <!-- banner楼层 -->
    <div class="mb40 banner">
      <div class="leftWrap banner-l">
        <a-carousel
          autoplay
          arrows
        >
          <div
            slot="prevArrow"
            class="custom-slick-arrow"
            style="left: 10px;zIndex: 1"
          >
            <a-icon type="left-circle" />
          </div>
          <div
            slot="nextArrow"
            class="custom-slick-arrow"
            style="right: 10px"
          >
            <a-icon type="right-circle" />
          </div>
          <div
            v-for="(item, index) in swiperArr"
            :key="index"
          >
            <img
              :src="item"
              alt=""
            >
          </div>
        </a-carousel>
      </div>
      <div class="rightWrap banner-r">
        <div class="mb10 br5 banner-r-t">
          <img
            src="~/assets/img/banner_t.jpg"
            alt=""
          >
        </div>
        <div class="br5 banner-r-b">
          <img
            src="~/assets/img/banner_b.png"
            alt=""
          >
        </div>
      </div>
    </div>
    <!-- 内容楼层 -->
    <div class="content">
      <div class="leftWrap home-l">
        <!-- 最新更新 -->
        <div class="latest">
          <h2 class="type-title">
            最近更新
          </h2>
          <nuxt-link
            v-for="item in articlesList"
            :key="item.id"
            :to="`/detail/${item.id}`"
          >
            <article-item
              v-if="articlesList.length > 0"
              :articleObj="item"
            />
          </nuxt-link>
          <div class="latest-item">
            <Tag
              title="小程序"
              class="mb5"
            />
            <div class="latest-content">
              <div class="latest-content-l">
                <h2 class="mb5 title">
                  如何在微信小程序中使用iconfont字体图标（阿里图标库）？如何在微信小程序中使用iconfont字体图标（阿里图标库）？如何在微信小程序中使用iconfont字体图标（阿里图标库）？如何在微信小程序中使用iconfont字体图标（阿里图标库）？
                </h2>
                <p class="mb10 detail">
                  我们在小程序的项目开发过程中，也不可避免的需要使用到字体图标，毕竟小程序那2M代码包大小的限制，还是挺让人隐隐作痛的。相对于传统web项目中使用icon的。相对于传统web项目中使用i相对于传统web项目中使用i相对于传统web项目中使用i
                </p>
                <p class="otherInfo">
                  <span class="mr5">2月前</span>
                  <span class="mr5">浏览 465</span>
                </p>
              </div>
              <div class="latest-content-r">
                <img
                  src="https://www.duoguyu.com/uploads/201908/28/190828052102855.png"
                  alt=""
                >
              </div>
            </div>
          </div>
        </div>
        <!-- 推荐资源 -->
        <div class="Resource" />
      </div>
      <div class="rightWrap home-r">
        <!-- 热门标签 -->
        <div class="home-tags">
          <h2 class="type-title">
            热门标签
          </h2>
          <div class="home-tags-box">
            <nuxt-link
              v-for="item in articlesTag"
              :key="item.id"
              :to="{ name: 'jour-id', params: { id: item.id }}"
              class="home-tags-item"
            >
              {{ item.tagName }}
            </nuxt-link>
            <a
              class="home-tags-item"
              href=""
            >
              代码片段
            </a>
          </div>
        </div>
        <!-- 特别推荐 -->
        <div class="home-recommend" />
        <!-- 一席话 -->
        <div class="home-word" />
        <!-- 最近留言 -->
        <div class="home-message" />
      </div>
    </div>
  </div>
</template>

<script>
import ArticleItem from '@/components/ArticleItem'
import Tag from '@/components/Tag'
import utils from '@/utils/utils'

export default {
  name: 'Home',
  components: {
    Tag,
    ArticleItem
  },
  filters: {
    lastArrValue (arr) {
      if (Array.isArray(arr)) {
        return arr[arr.length - 1]
      } else {
        return ''
      }
    }
  },
  data () {
    return {
      articlesList: [],
      articlesTag:[],
      swiperArr: [
        require('@/assets/img/swiper1.jpg'),
        require('@/assets/img/swiper2.jpg'),
      ]
    }
  },
  async asyncData({ app, error }) {
     const [ getArticlesData, getTagsData ] = await Promise.all([
       app.$http.articleApi.getArticles({}, {error : false}),
       app.$http.articleApi.getTags({}, {error : false})
     ])
     try {
       if (getArticlesData.status.code === 0 && getArticlesData.status.code === 0) {
         return {
            articlesList: getArticlesData.data.data,
            articlesTag: getTagsData.data.tagArr
          }
       } else {
         return error({ statusCode: 404, message: 'Post not found' })
       }
     } catch {
       return error({ statusCode: 404, message: 'Post not found' })
     }
  },
  methods: {
    fromNow: utils.fromNow
  }
}
</script>

<style lang="less">
.home {
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
        border-radius: 5px;
        overflow: hidden;
      }
      .banner-r-b {
        height: 100px;
        background: #364d79;
        border-radius: 5px;
        overflow: hidden;
      }
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
  .content {
    h2.type-title {
      color: @c1;
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 20px;
      &::before {
        content: '#';
        color: #666;
        font-size: 20px;
        font-weight: 100;
        height: 24px;
        line-height: 24px;
        width: 15px;
        margin-right: 2px;
      }
    }
    .latest-item {
      padding: 10px 0 20px;
      border-bottom: 1px solid #eee;
      margin-bottom: 20px;
      .latest-content {
        display: flex;
        cursor: pointer;
        .latest-content-l {
          flex: 1;
          min-width: 0;
          padding-right: 20px;
          .title {
            .ellipsis();
            font-size: 16px;
            color: #454545;
            margin-bottom: 10px;
            line-height: 1.5;
          }
          .detail {
            .ellipsis(2);
            line-height: 1.5;
            font-size: 14px;
            color: #999;
          }
          .otherInfo {
            font-size: 13px;
            color: #999;
            line-height: 1.5;
          }
        }
        .latest-content-r {
          width: 140px;
          height: 105px;
          flex-basis: 140px;
          border-radius: 4px;
          overflow: hidden;
          img {
            width: 140px;
            height: 105px;
            object-fit: contain;
          }
        }
      }
      &:hover {
        .latest-content {
          .latest-content-l {
            .title {
              color: #409eff;
            }
          }
        }
      }
    }
    .home-l {
      padding-right: 10px;
    }
    .home-r {
      padding-left: 10px;
      .home-tags-box {
        .home-tags-item {
          float: left;
          display: inline-block;
          padding: 0 20px;
          margin: 0 10px 10px 0;
          text-align: center;
          font-size: 13px;
          color: #666;
          height: 34px;
          line-height: 32px;
          overflow: hidden;
          transition: all 0.2s ease;
          border-radius: 18px;
          border: 1px solid #f6f6f6;
          background: #f6f6f6;
          transition: all 0.2s ease;
          &:hover {
            border: 1px solid #409eff;
            color: #409eff;
            background: #fff;
          }
        }
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

  .ant-carousel >>> .custom-slick-arrow {
    width: 25px;
    height: 25px;
    font-size: 25px;
    color: #fff;
    background-color: rgba(31, 45, 61, 0.11);
    opacity: 0.3;
  }
  .ant-carousel >>> .custom-slick-arrow:before {
    display: none;
  }
  .ant-carousel >>> .custom-slick-arrow:hover {
    opacity: 0.5;
  }
</style>
