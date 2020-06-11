<template>
  <div id="app">
    <er-carousel>
      <er-carousel-item v-for="item in 4" :key="item">
        <div>{{item}}</div>
      </er-carousel-item>
    </er-carousel>
  </div>
</template>

<script>
  import Carousel from './components/carousel'
  import Carouseltem from './components/carousel-item'
  export default {
    name: 'App',
    components: {
      'er-carousel': Carousel,
      'er-carousel-item': Carouseltem
    },
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

</style>
