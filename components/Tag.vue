<template>
  <div class="tag-body">
    <div class="tag-box">
      <span class="i">#</span>{{ title }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tag',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
.tag-box {
  display: inline-block;
  background: #f6f6f6;
  border-radius: 15px;
  height: 30px;
  position: relative;
  padding-left: 30px;
  padding-right: 10px;
  line-height: 30px;
  overflow: hidden;
  font-size: 12px;
  color: #409eff;
  cursor: pointer;
  .i {
    display: block;
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    border-radius: 50%;
    position: absolute;
    left: 5px;
    top: 5px;
    overflow: hidden;
    background: #409eff;
    color: #fff;
    font-size: 14px;
  }
}
</style>
