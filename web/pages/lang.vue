<template>
  <div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <h1>{{ msg | capitalize(t) }}</h1>
    <hr>
    <h2 @click="filtest">点击</h2>
  </div>
</template>

<script>
export default {
  name: 'Lang',
  filters: {
    capitalize: function(value, msg) {
      console.info('我过滤啦')
      return `我是${msg}`
    }
  },
  data() {
    return {
      msg: 'moment',
      t: 1
    }
  },
  mounted() {
    moment.locale('fr')
    let m = moment(1316116057189)
    let a = m.fromNow() // il y a une heure
    //console.info('fr', a)

    moment.locale('en')
    m.fromNow() // il y a une heure
    a = moment(1316116057189).fromNow() // an hour ago
    //console.info('en', a)
  },
  methods: {
    filtest(lang) {
      let time = new Date().getTime() - 1000 * 60 * 12
      const UNITS = {
        Y: 31557600000,
        M: 2629800000,
        D: 86400000 * 2,
        YD: 86400000,
        h: 3600000,
        m: 60000,
        s: 1000
      }
      let diff = new Date().getTime() - time
      let timeType = ''
      let newTimeStr = ''
      for (const key in UNITS) {
        if (diff >= UNITS[key]) {
          timeType = key
          break
        }
      }

      moment.locale('en')
      let tStr = moment(time).fromNow()
      let s = moment(time).get('second')
      let m = moment(time).get('minute')
      let h = moment(time).get('hour')
      let D = moment(time).get('date')
      let M = moment(time).get('month')
      let Y = moment(time).get('year')
      // 中 日 繁体
      switch (true) {
        case timeType === 's':
          newTimeStr = '刚刚'
          break
        case timeType === 'm':
          newTimeStr = m + ' 分钟前'
          break
        case timeType === 'h':
          newTimeStr = h + ' 小时前'
          break
        case timeType === 'YD':
          newTimeStr = '昨天'
          break
        case timeType === 'D' || timeType === 'M':
          newTimeStr = M + '-' + D
          break
        case timeType === 'Y':
          newTimeStr = Y + '-' + M + '-' + D
          break
      }
      // 其他语言
      switch (true) {
        case timeType === 's':
          newTimeStr = 'Just now'
          break
        case timeType === 'm':
          newTimeStr = m + ' min'
          break
        case timeType === 'h':
          newTimeStr = h + ' hr'
          break
        case timeType === 'YD':
          newTimeStr = 'YesterDay'
          break
        case timeType === 'D' || timeType === 'M':
          newTimeStr = D + ' ' + M
          break
        case timeType === 'Y':
          newTimeStr = Y + '-' + M + '-' + D
          break
      }
      console.info('newTimeStr', newTimeStr)
    }
  }
}
</script>
