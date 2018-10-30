const UNITS = {
  Y: 31557600000,
  M: 2629800000,
  D: 86400000,
  H: 3600000,
  M: 60000,
  S: 1000
}

// function humanize(milliseconds) {
//   let humanize = ''
//   const nowDate = new Date().getTime()
//   for (const key in UNITS) {
//     console.info(key)
//     if (nowDate - milliseconds >= this.UNITS[key]) {
//       humanize =
//         Math.floor((nowDate - milliseconds) / this.UNITS[key]) + key + '前'
//       break
//     }
//   }
//   return humanize || '刚刚'
// }

const UNITS = {
  Y: 31557600000,
  M: 2629800000,
  D: 86400000,
  H: 3600000,
  M: 60000,
  S: 1000
}

const timeType = ['0', '1', '2', '3', '4', '5']
/**
 *0:刚刚
 *1:1小时之内
 *2:今天以内
 *3:昨天
 *4:昨天---今年
 *5:今年以前
 */
function humanize(milliseconds) {
  const nowDate = new Date().getTime()
  let humanizeTime = ''
  for (let key in UNITS) {
    if (nowDate - milliseconds >= UNITS[key]) {
      return key
    }
  }
}
