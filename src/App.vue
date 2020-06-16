<template>
  <div id="app">
    <div class="app-wrapper">
    </div>
  </div>
</template>

<script>

  export default {
    name: 'App',
    components: {},
    data() {
      return {}
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
    border: 1px solid black;
    margin: 100px;
    display: inline-block;
    width: 50%;
    height: 25%;
  }

</style>
