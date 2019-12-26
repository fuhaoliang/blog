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
      <article-tab
        :tabList="tagArr"
        :checkedId="tagId"
      />
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
      <div>分页</div>
    </div>
    <div class="rightWrap">
      22222
    </div>
  </div>
</template>
<script>
import ArticleTab from '@/components/ArticleTab'
import ArticleItem from '@/components/ArticleItem'

export default {
  name: 'Jour',
  components: {
    ArticleTab,
    ArticleItem
  },
  data () {
  },
  async asyncData({ app, params, error }) {
    const { id: tagId = '' } = params
    const [ getArticlesData, getTagsData ] = await Promise.all([
       app.$http.articleApi.getArticlesByTagId({ tagId }, {error : false}),
       app.$http.articleApi.getTags({}, {error : false})
     ])
     try {
       if (getArticlesData.status.code === 0 && getArticlesData.status.code === 0) {
         return {
            tagId,
            articlesList: getArticlesData.data.data,
            tagArr: getTagsData.data.tagArr
          }
       } else {
         return error({ statusCode: 404, message: 'Post not found' })
       }
     } catch {
       return error({ statusCode: 404, message: 'Post not found' })
     }

  }
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