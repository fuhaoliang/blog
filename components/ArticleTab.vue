<template>
  <div class="article-tab">
    <nuxt-link :to="{name: 'jour-id'}">
      <span
        class="item"
        :class="{ checked: checkedId === ''}"
      >
        全部
      </span>
    </nuxt-link>
    <nuxt-link
      v-for="item in tabList"
      :key="item.id"
      :to="{name: 'jour-id', params: { id: item.id }}"
    >
      <span
        class="item"
        :class="{ checked: checkedId === item.id }"
      >
        {{ item.tagName }}
      </span>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'ArticleTab',
  props: {
    checkedId: {
      type: String,
      default: ''
    },
    tabList: {
      type: Array,
      default: () => ([
        {
          "id": "6c221fa0-0782-11ea-b89e-91cddb96695f",
          "createDate": 1573806732954,
          "tagName": "小程序"
        }
      ])
    }
  },
  data () {
    return {

    }
  },
  watch: {
    '$route.params':{
      handler(paramObj) {
        console.info('paramObj--->', paramObj)
      }
    }
  }
}
</script>

<style lang="less" scoped>
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
</style>