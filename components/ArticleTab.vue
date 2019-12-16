<template>
  <div class="article-tab">
    <nuxt-link
      v-for="item in tabList"
      :key="item.id"
      :to="{name: 'sort-id', params: { id: item.id }}"
    >
      <span class="item checked">
        {{ item.title }}
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
      default: () => []
    }
  },
  computed: {
    id: {
      handle: function(){
        
      },
      immediate: true
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