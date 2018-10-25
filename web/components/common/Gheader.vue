<template>
  <div class="g-header">
    <header class="header-max">
      <img class="logo" src="../../assets/image/common/logo_gif.gif" alt="">
      <div class="nav">
        <ul class="nav-l">
          <li>
            Home
            <i class="underline-icon"></i>
          </li>
          <li>Mobile</li>
          <li>Gellery</li>
          <li>Learn</li>
          <li>Blog</li>
          <li>About</li>
        </ul>
        <ul class="nav-r">
          <li>Sign In</li>
          <li>Join Now</li>
          <li>Language</li>
        </ul>
      </div>
    </header>
  </div>
</template>

<style lang="less">
@import url('../../assets/css/common');
.g-header {
  .header-max {
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    width: 100%;
    height: 54px;
    padding: 0 30px;
    .logo {
      .imgFull;
      width: 90px;
    }
    .nav {
      font-size: 14px;
      .nav-l {
        display: flex;
        li {
          display: block;
          width: 100px;
          color: #fff;
          text-align: center;
          line-height: 54px;
        }
      }
      .nav-r {
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        li {
          display: block;
          width: 100px;
          color: #fff;
          text-align: center;
          line-height: 54px;
        }
      }
      li {
        position: relative;
        &::after {
          content: '';
          position: absolute;
          top: 45px;
          left: 0;
          right: 0;
          margin: 0 auto;
          display: block;
          width: 0;
          height: 1px;
          background: #ffffff;
          transition: width 0.3s;
        }
        &:hover {
          &::after {
            width: 70px;
          }
        }
      }
    }
  }
}
</style>
