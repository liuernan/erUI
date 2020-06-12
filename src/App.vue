<template>
  <div id="app">
    <div class="app-wrapper">
      <er-carousel>
        <er-carousel-item v-for="item in 4" :key="item" :name="item.toString()">
          <div class="carousel-demo">{{item}}</div>
        </er-carousel-item>
      </er-carousel>
    </div>
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

  .app-wrapper {
    border: 1px solid black;
    margin: 100px;
    display: inline-block;
  }

  .carousel-demo {
    width: 400px;
    height: 200px;
    border: 1px dotted grey;
    background-color: lightpink;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 5em;
  }

</style>
