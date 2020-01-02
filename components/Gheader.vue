<template>
  <div class="layout gheader">
    <div class="gheader-t">
      <div class="gheader-t-l">
        <nuxt-link to="/">
          <img
            class="logo"
            src="https://www.duoguyu.com/uploads/201904/23/190423113846842.png"
            alt=""
          >
        </nuxt-link>
      </div>
      <div class="gheader-t-r">
        <nuxt-link to="/">
          登录/注册
        </nuxt-link>
      </div>
    </div>
    <div class="gheader-m">
      <div class="gheader-m-l">
        <nuxt-link
          to="/"
          exact
        >
          首页
        </nuxt-link>
        <nuxt-link
          to="/jour/"
        >
          札记
        </nuxt-link>
      </div>
      <div class="gheader-m-r">
        <a-input-search
          placeholder="input search text"
          style="width: 200px"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
.gheader {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 99;
  background: #fff;
}
.gheader-t {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  .logo {
    display: inline-block;
    height: 30px;
    border: 0;
  }
  .gheader-t-r {
    a {
      font-weight: bold;
      line-height: 30px;
      display: inline-block;
      font-size: 14px;
      overflow: hidden;
    }
  }
}
.gheader-m {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0;
  width: 1100px;
  height: 40px;
  margin: 0 auto;
  border-bottom: 1px solid #eee;
  border-top: 1px solid #eee;
   
  .gheader-m-l {
    a {
      font-weight: bold;
    }
    a + a {
      margin-left: 35px;
    }
    a.nuxt-link-active{
      color: #1890ff;
    }
  }
}
</style>
