<template>
  <div id="app">
    <div class="app-wrapper">
      <er-nav :selected.sync="selected">
        <er-nav-item name="home">首页</er-nav-item>
        <er-nav-item name="introduce">产品介绍</er-nav-item>
        <er-nav-item name="about">关于我们</er-nav-item>
        <er-nav-item name="contact">联系我们</er-nav-item>
      </er-nav>
    </div>
    <div class="app-wrapper">
      <er-nav :selected.sync="selected2" multiple>
        <er-nav-item name="home">首页</er-nav-item>
        <er-nav-item name="products1">产品1</er-nav-item>
        <er-nav-item name="products2">产品2</er-nav-item>
        <er-nav-item name="products3">产品3</er-nav-item>
        <er-nav-item name="about">关于我们</er-nav-item>
        <er-nav-item name="contact">联系我们</er-nav-item>
      </er-nav>
    </div>
    <div class="app-wrapper">
      <er-nav :selected.sync="selected3">
        <er-nav-item name="home">首页</er-nav-item>
        <er-sub-nav>
          <template slot="title">产品</template>
          <er-nav-item name="products1">产品1</er-nav-item>
          <er-nav-item name="products2">产品2</er-nav-item>
          <er-nav-item name="products3">产品3</er-nav-item>
        </er-sub-nav>
        <er-nav-item name="about">关于我们</er-nav-item>
        <er-nav-item name="contact">联系我们</er-nav-item>
      </er-nav>
    </div>
    <div class="app-wrapper" style="margin-top: 200px">
      <er-nav :selected.sync="selected4">
        <er-nav-item name="home">首页</er-nav-item>
        <er-sub-nav>
          <template slot="title">产品</template>
          <er-nav-item name="products1">产品1</er-nav-item>
          <er-nav-item name="products2">产品2</er-nav-item>
          <er-nav-item name="products3">产品3</er-nav-item>
        </er-sub-nav>
        <er-nav-item name="about">关于我们</er-nav-item>
        <er-sub-nav>
          <template slot="title">联系我们</template>
          <er-sub-nav>
            <template slot="title">网络</template>
            <er-sub-nav>
              <template slot="title">QQ</template>
              <er-nav-item name="qq1">1 号小姐姐 QQ 在线</er-nav-item>
              <er-nav-item name="qq2">2 号小姐姐 QQ 在线</er-nav-item>
              <er-nav-item name="qq3">3 号小姐姐 QQ 在线</er-nav-item>
            </er-sub-nav>
            <er-nav-item name="wechat">微信</er-nav-item>
            <er-nav-item name="weibo">微博</er-nav-item>
          </er-sub-nav>
          <er-sub-nav>
            <template slot="title">电话</template>
            <er-nav-item name="tel">座机</er-nav-item>
            <er-nav-item name="phone">手机</er-nav-item>
          </er-sub-nav>
        </er-sub-nav>
      </er-nav>
    </div>
  </div>
</template>

<script>
  import ErNav from './components/nav/nav'
  import ErNavItem from './components/nav/nav-item'
  import ErSubNav from './components/nav/sub-nav'

  export default {
    name: 'App',
    components: {ErNav, ErNavItem, ErSubNav},
    data() {
      return {
        selected: ['home'],
        selected2: ['products1', 'products2', 'products3'],
        selected3: ['contact'],
        selected4: ['about']
      }
    },
    methods: {}
  }
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  /* box-sizing: border-box; IE 8 以上兼容 */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .app-wrapper {
    margin: 50px;
  }
</style>
