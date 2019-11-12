/*
 * @Author: your name
 * @Date: 2019-11-12 15:34:27
 * @LastEditTime: 2019-11-12 23:30:48
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /cms/Users/fuhaoliang/Desktop/公司/blog/plugins/http.js
 */
import Vue from 'vue'
import http from '@/utils/http'

// eslint-disable-next-line no-unused-vars
const install = (VueClass, opts = {}) => {
  VueClass.$http = http
  VueClass.prototype.$http = http
}

Vue.use(install)

export default function({ $axios, redirect }) {
  $axios.onRequest((config) => {
    console.log('Making request to ' + config.url)
  })

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}
