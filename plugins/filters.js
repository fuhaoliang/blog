import Vue from 'vue'
import xss from 'xss'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import relativeTime from 'dayjs/plugin/relativeTime'

let xssWhiteListDefault = xss.whiteList

dayjs.locale('zh-cn')
dayjs.extend(customParseFormat)
dayjs.extend(relativeTime)


const xssOptions = {
  css: false,
  whiteList: {
    ...xssWhiteListDefault,
    pre: ['style', 'class'],
    code: ['style', 'class'],
    span: ['style', 'class'],
    img: ["src", "alt", "title", "width", "height", 'style', 'class']
  }
};


Vue.filter('$xss', function(htmlStr){
  return xss(htmlStr, xssOptions)
})





Vue.filter('$fromNow', function(old_time){
  return dayjs(old_time).fromNow()
})
