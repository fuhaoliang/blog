/*
 * @Author: your name
 * @Date: 2019-11-12 14:43:03
 * @LastEditTime: 2019-11-12 23:31:22
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /cms/Users/fuhaoliang/Desktop/公司/blog/config/buildconf.js
 */
/* eslint-disable no-useless-escape */
// 生成对应环境的配置文件
let path = require('path')
let fs = require('fs')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

function copyFile (sourceFile, destFile) {
  var version = +new Date()
  var data = fs.readFileSync(configFile, 'utf-8').replace(/\'version\'/, version)
  fs.writeFileSync(destFile, data)
}

let configFile = resolve('config/app.pro.js')
if (process.env.NODE_ENV === 'development') {
  configFile = resolve('config/app.dev.js')
} else if (process.env.NODE_ENV === 'alpha') {
  configFile = resolve('config/app.alp.js')
} else if (process.env.NODE_ENV === 'uat') {
  configFile = resolve('config/app.uat.js')
}

let sourceFile = configFile
let destFile = resolve('config/app.js')

copyFile(sourceFile, destFile)
