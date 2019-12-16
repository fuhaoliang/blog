let count = 0



if (process.client) {
  console.info('埋点初始化')
  console.info('我调用了 ', ++count)
}

export default ({ app: { router } }) => {
  /*
  ** 每次路由变更时进行pv统计
  */
  router.afterEach((to) => {
    /*
    ** 告诉 GA 增加一个 PV
    */
    console.info('我调用了 ', ++count)
    console.info('我是一个统计', to.fullPath)
  })
}