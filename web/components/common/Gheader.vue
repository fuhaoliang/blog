<template>
  <h1>{{ msg }}</h1>
</template>
<script>
export default {
  name: 'Gheader',
  data() {
    return {
      msg: '我是头部'
    }
  }
}
</script>
<style lang="scss">
h1 {
  color: red;
  transform: scale(1.5);
  p {
    color: blue;
  }
}
</style>
