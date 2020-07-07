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
        <er-nav-item name="introduce">产品介绍</er-nav-item>
        <er-nav-item name="about">关于我们</er-nav-item>
        <er-nav-item name="contact">联系我们</er-nav-item>
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
        selected: ['introduce'],
        selected2: ['introduce'],
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
</style>
