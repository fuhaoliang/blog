/**
 * 辅助函数
 * @author wangyipeng
 */
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
// import zh_cn from 'dayjs/locale/zh-cn'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.locale('zh-cn')
dayjs.extend(customParseFormat)
dayjs.extend(relativeTime)




export default {
  isFunction(fn) {
    return Object.prototype.toString.call(fn) === '[object Function]'
  },
  /**
   *@param {Object}|{Array} object 需要遍历处理的对象或数组
   *@param {Function} callback 遍历处理回调函数
   *@param {Array} args callback回调函数的附加参数
   */
  each(object, callback, args) {
    let name
    let i = 0
    const length = object.length
    const isObj = length === undefined || this.isFunction(object)
    if (args) {
      if (isObj) {
        for (name in object) {
          if (callback.apply(object[name], args) === false) {
            break
          }
        }
      } else {
        for (; i < length; ) {
          if (callback.apply(object[i++], args) === false) {
            break
          }
        }
      }
    } else if (isObj) {
      for (name in object) {
        if (callback.call(object[name], name, object[name]) === false) {
          break
        }
      }
    } else {
      for (
        let value = object[0];
        i < length && callback.call(value, i, value) !== false;
        value = object[++i]
      ) {
        // 暂时不处理
      }
    }
    return object
  },
  /* 判断密码强度 */
  judgePsw(psw) {
    const obj = {
      pswStrength: 0,
      hasLength: false,
      hasNumber: false,
      hasUpperLetter: false,
      hasLetter: false
    }
    let tag = 0
    const upperCaseCount = psw.match(/([A-Z])/g) ? psw.match(/([A-Z])/g) : []
    const lowercaseCount = psw.match(/([a-z])/g) ? psw.match(/([a-z])/g) : []
    const numberCount = psw.match(/[0-9]/gi) ? psw.match(/[0-9]/gi) : []
    const specialCount = psw.match(/([^a-z0-9])/gi)
      ? psw.match(/([^a-z0-9])/gi)
      : []
    const pswLengh = psw.length
    if (upperCaseCount.length > 0) {
      obj.hasUpperLetter = true
      tag++
    }
    if (lowercaseCount.length > 0) {
      obj.hasLetter = true
      tag++
    }
    if (numberCount.length > 0) {
      obj.hasNumber = true
      tag++
    }
    if (pswLengh > 7) {
      obj.hasLength = true
      tag++
    }
    let repeatNum = 0
    const pswArr = psw.split('')
    const allNum = [...new Set(pswArr)]
    const strs = [
      '0123456789',
      'abcdefghijklmnopqrstuvwxyz',
      'qwertyuiop',
      'asdfghjkl',
      'zxcvbnm'
    ]

    pswArr.forEach((item, index) => {
      if (index < pswArr.length - 2 && repeatNum < 3) {
        if (pswArr[index + 1] === item && pswArr[index + 2] === item) {
          repeatNum = 3
        }
        strs.forEach((str) => {
          if (repeatNum < 3) {
            const nowNum = str.indexOf(item)
            if (
              nowNum > -1 &&
              pswArr[index + 1] === str[nowNum + 1] &&
              pswArr[index + 2] === str[nowNum + 2]
            ) {
              repeatNum = 3
            } else {
              repeatNum = 0
            }
          }
        })
      }
    })
    // console.log(repeatNum)
    if (tag > 3) {
      if (pswLengh < 10 || repeatNum > 2 || allNum < 4) {
        obj.pswStrength = 1
      } else if (pswLengh > 9 && specialCount.length > 0) {
        obj.pswStrength = 3
      } else {
        obj.pswStrength = 2
      }
    }
    return obj
  },
  date2String(date) {
    const year = date.getFullYear()
    const month =
      date.getMonth() + 1 < 10
        ? '0' + (date.getMonth() + 1)
        : date.getMonth() + 1
    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
    return year + '-' + month + '-' + day
  },
  addDate(nowDate, day = 0, month = 0, year = 0) {
    if (!nowDate) {
      return ''
    }
    if (day !== 0) {
      const nowDateValue = new Date(nowDate).getTime() + 3600 * 1000 * 24 * day
      nowDate = new Date(nowDateValue)
    }
    let nowYear = nowDate.getFullYear()
    let nowMonth = nowDate.getMonth() + 1
    let nowDay = nowDate.getDate()
    if (month !== 0) {
      nowMonth = nowMonth + month
      if (nowMonth < 1) {
        nowMonth += 12
        nowYear = nowYear - 1
      }
      if (nowMonth > 12) {
        nowMonth -= 12
        nowYear = nowYear + 1
      }
    }
    if (year !== 0) {
      nowYear = nowYear + year
    }
    if (nowMonth === 4 || nowMonth === 6 || nowMonth === 9 || nowMonth === 11) {
      if (nowDay > 30) nowDay = 30
    } else if (nowMonth === 2) {
      if (nowYear % 4 === 0 && (nowYear % 100 !== 0 || nowYear % 400 === 0)) {
        if (nowDay > 29) nowDay = 29
      } else if (nowDay > 28) nowDay = 28
    }
    return new Date(nowYear + '/' + nowMonth + '/' + nowDay).getTime()
  },
  formatDate(date, fmt) {
    if (date) {
      date = Number(date)
      const d = new Date(date)
      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          (d.getFullYear() + '').substr(4 - RegExp.$1.length)
        )
      }
      const o = {
        'M+': d.getMonth() + 1,
        'd+': d.getDate(),
        'h+': d.getHours(),
        'm+': d.getMinutes(),
        's+': d.getSeconds()
      }
      for (const k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
          const str = o[k] + ''
          fmt = fmt.replace(
            RegExp.$1,
            RegExp.$1.length === 1 ? str : ('00' + str).substr(str.length)
          )
        }
      }
      return fmt
    }
    return ''
  },
  // 时间转换
  formatterTime(row, column, cellValue) {
    if (cellValue) {
      const date = new Date(Number(cellValue))
      const year = date.getFullYear()
      const month =
        date.getMonth() + 1 < 10
          ? '0' + (date.getMonth() + 1)
          : date.getMonth() + 1
      const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
      return year + '-' + month + '-' + day
    } else {
      return ''
    }
  },
  fromNow (old_time) {
    return dayjs(old_time).fromNow()
  },
  setCookie(name, value, days) {
    // console.log('name:' + name + ' value:' + value)
    const Days = days || 1
    const exp = new Date()
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000)
    document.cookie =
      name +
      ' = ' +
      encodeURIComponent(value) +
      ';expires=' +
      exp.toGMTString() +
      ';path=/;domain=.homestyler.com'
    if (location.host.includes('shejijia.com')) {
      document.cookie =
        name +
        ' = ' +
        encodeURIComponent(value) +
        ';expires=' +
        exp.toGMTString() +
        ';path=/;domain=.shejijia.com'
    }
    if (location.host.includes('homestyler.com')) {
      document.cookie =
        name +
        ' = ' +
        encodeURIComponent(value) +
        ';expires=' +
        exp.toGMTString() +
        ';path=/;domain=.homestyler.com'
    }
  },
  getCookie(name) {
    const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
    const arr = document.cookie.match(reg)
    if (arr) {
      return decodeURIComponent(arr[2])
    } else {
      return null
    }
  },
  delCookie(name) {
    const exp = new Date()
    exp.setTime(exp.getTime() - 1)
    const cval = this.getCookie(name)
    if (cval != null) {
      document.cookie =
        name +
        ' = ' +
        encodeURIComponent(cval) +
        ';expires=' +
        exp.toGMTString() +
        ';path=/;domain=.homestyler.com'
      if (location.host.includes('shejijia.com')) {
        document.cookie =
          name +
          ' = ' +
          encodeURIComponent(cval) +
          ';expires=' +
          exp.toGMTString() +
          ';path=/;domain=.shejijia.com'
      }
      if (location.host.includes('homestyler.com')) {
        document.cookie =
          name +
          ' = ' +
          encodeURIComponent(cval) +
          ';expires=' +
          exp.toGMTString() +
          ';path=/;domain=.homestyler.com'
      }
    }
  },
  // 验证手机号
  validatePhone(phone) {
    const reg = /^1[3456789]\d{9}$/
    return reg.test(phone)
  },
  // 短信码
  validateSNSCode(code) {
    const reg = /[0-9]{4,6}/
    return reg.test(code)
  },
  alert(msg) {
    this.$alert(msg, '信息', {
      confirmButtonText: '确定'
    })
  },
  getBodyClass() {
    let cls = 'response-normal'
    if (document.body.clientWidth > 1500) {
      cls = 'response-wider'
    } else if (document.body.clientWidth > 1250) {
      cls = 'response-normal'
    } else {
      cls = 'response-narrow'
    }
    return cls
  },
  uuid() {
    const s = []
    const hexDigits = '0123456789abcdef'
    for (let i = 0; i < 36; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
    }
    s[14] = '4'
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1)
    s[8] = s[13] = s[18] = s[23] = '-'
    const uuid = s.join('')
    return uuid
  },
  getParamsObj(search) {
    let str = search || location.search
    let params
    const obj = {}
    if (str.includes('?')) {
      str = str.substr(1)
      params = str.split('&')
      for (let i = 0; i < params.length; i++) {
        obj[params[i].split('=')[0]] = decodeURIComponent(
          params[i].split('=')[1]
        )
      }
    }
    return obj
  },
  isIE() {
    if (!!window.ActiveXObject || 'ActiveXObject' in window) {
      return true
    } else {
      return false
    }
  },
  createAuthoriationHeader(accessToken) {
    const Authorization = 'Bearer ' + accessToken
    const header = {
      Authorization
    }
    return header
  },
  dataURLtoFile(dataurl, filename) {
    // 将base64转换为文件
    const arr = dataurl.split(',')
    const mime = arr[0].match(/:(.*?);/)[1]
    const bstr = atob(arr[1])
    let n = bstr.length
    const u8arr = new Uint8Array(n)
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n)
    }
    return new File([u8arr], filename, { type: mime })
  },
  copyData(dataArr = [{ name: '', value: '' }]) {
    this.SELF_DATA = this.SELF_DATA || {}
    dataArr.forEach((item) => {
      const { name, value } = item
      const nameOld = `${name}_old`
      this.SELF_DATA[nameOld] = JSON.parse(JSON.stringify(value))
    })
  },
  compareData(oldObj = { name: '', value: '' }, clear = true) {
    const { name, value } = oldObj
    const nameOld = `${name}_old`
    const changeArr = []
    const oldData = this.SELF_DATA[nameOld]
    const newData = value
    for (const key in oldData) {
      let isChange = false
      try {
        isChange = oldData[key].toString() !== newData[key].toString()
      } catch (e) {
        isChange = JSON.stringify(oldData[key]) !== JSON.stringify(newData[key])
      }
      if (isChange) {
        changeArr.push(key)
      }
      if (clear) {
        delete this.SELF_DATA[nameOld]
      }
    }
    return changeArr
  }
}
