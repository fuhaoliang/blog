<template>
  <div class="latest-item">
    <Tag
      :title="item.tagArr | lastArrValue"
      class="mb5"
    />
    <div class="latest-content">
      <span class="latest-content-l">
        <h2 class="mb5 title">
          {{ item.title }}
        </h2>
        <p class="mb10 detail">
          {{ item.summary }}
        </p>
        <p class="otherInfo">
          <span class="mr5">{{ fromNow(item.timeDate) }} </span>
          <span class="mr5">浏览 {{ item.views }}</span>
        </p>
      </span>
      <div
        v-if="item.coverUrl"
        class="latest-content-r"
      >
        <img
          :src="item.coverUrl"
          alt=""
        >
      </div>
    </div>
  </div>
</template>

<script>
import Tag from '@/components/Tag'
import { fromNow } from '@/utils/utils'
export default {
  name: 'AtricleItem',
  porps: {
    articleObj: {
      type: Object,
      default: () => ({
        title: '',
        tagArr: [],
        summary: '',
        coverUrl: '',
        views: 0,
        timeDate: 0,
      })
    }
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
  components: {
    Tag
  },
  methods: {
    fromNow
  }
}
</script>

<style lang="less" scoped>
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
  
</style>