/* eslint-disable no-unused-vars */
module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '~/assets/css/common.less',
    'ant-design-vue/dist/antd.css',
    '~/assets/css/cover.less'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/antd.js', ssr: true },
    { src: '~/plugins/axios.js', ssr: true }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    less: './assets/css/var.less'
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  generate: {
    // minify: false
  },
  dev: true,
  build: {
    /*
     ** You can extend webpack config here
     */
    extractCSS: true,
    loaders: {
      less: {
        javascriptEnabled: true
      }
    },
    babel: {
      plugins: [
        "@babel/plugin-transform-modules-commonjs",
        [
          'babel-plugin-import',
          {
            libraryName: 'ant-design-vue',
            libraryDirectory: 'lib',
            style: false
          }
        ],
        [
          "prismjs",
          {
            "languages": ["javascript", "css", "markup"], //这是语言类型
            "plugins": ["line-numbers"],//使用了行号还可以添加其他插件，具体去官网看看吧
            "theme": "twilight",//主题！！
            "css": true
          }
        ]
      ]
    },
    extend(config, ctx) {}
  },
  server: {
    port: 8866, // default: 6666
    host: '0.0.0.0' // default: localhost
  },
  router: {
    base: '/blog/'
  }
}
