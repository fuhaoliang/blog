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
  // css: ['ant-design-vue/dist/antd.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~/plugins/antd.js', ssr: true }],
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
    '@nuxtjs/pwa'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  generate: {
    minify: false
  },
  dev: true,
  build: {
    /*
     ** You can extend webpack config here
     */
    // 'html.minify': {
    //   collapseBooleanAttributes: false,
    //   collapseWhitespace: false,
    //   decodeEntities: false,
    //   minifyCSS: false,
    //   minifyJS: false,
    //   processConditionalComments: false,
    //   removeAttributeQuotes: false,
    //   removeComments: false,
    //   removeEmptyAttributes: false,
    //   removeOptionalTags: false,
    //   removeRedundantAttributes: false,
    //   removeScriptTypeAttributes: false,
    //   removeStyleLinkTypeAttributes: false,
    //   removeTagWhitespace: false,
    //   sortClassName: false,
    //   trimCustomFragments: false,
    //   useShortDoctype: false
    // },
    extractCSS: true,
    loaders: {
      // less: {
      //   javascriptEnabled: true
      // }
    },
    babel: {
      // plugins: [
      //   [
      //     'import',
      //     {
      //       libraryName: 'ant-design-vue',
      //       libraryDirectory: 'es',
      //       style: true
      //     }
      //   ]
      // ]
    },
    extend(config, ctx) {}
  }
}
