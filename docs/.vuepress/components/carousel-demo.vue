<template>
  <div>
    <p>自动轮播：</p>
    <er-carousel>
      <er-carousel-item v-for="item in 4" :key="item" :name="item.toString()">
        <div class="carousel-demo">{{item}}</div>
      </er-carousel-item>
    </er-carousel>
    <p>代码：</p>
    <pre><code>{{simpleCode}}</code></pre>

    <p>不自动轮播：</p>
    <er-carousel :auto-play="false">
      <er-carousel-item v-for="item in 4" :key="item" :name="item.toString()">
        <div class="carousel-demo">{{item}}</div>
      </er-carousel-item>
    </er-carousel>
    <p>代码：</p>
    <pre><code>{{complexCode}}</code></pre>
  </div>
</template>
<script>
  import Carousel from '../../../src/components/carousel/carousel';
  import CarouselItem from '../../../src/components/carousel/carousel-item';

  export default {
    components: {
      'er-carousel': Carousel,
      'er-carousel-item': CarouselItem
    },
    data() {
      return {
        simpleCode: `
// demo CSS
.carousel-demo {
  border: 1px dotted grey;
  background-color: lightpink;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6em;
  height: 200px;
}
// JS
<er-carousel>
  <er-carousel-item v-for="item in 4" :key="item" :name="item.toString()">
    <div class="carousel-demo">{{item}}</div>
  </er-carousel-item>
</er-carousel>`.replace(/ {8}/g, '').trim(),
        complexCode: `
// demo CSS
.carousel-demo {
  border: 1px dotted grey;
  background-color: lightpink;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6em;
  height: 200px;
}
// JS
<er-carousel :auto-play="false">
  <er-carousel-item v-for="item in 4" :key="item" :name="item.toString()">
    <div class="carousel-demo">{{item}}</div>
  </er-carousel-item>
</er-carousel>`.replace(/ {8}/g, '').trim(),
        loading1: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .carousel-demo {
    border: 1px dotted grey;
    background-color: lightpink;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 6em;
    height: 200px;
  }

</style>