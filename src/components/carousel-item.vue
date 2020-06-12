<template>
  <transition name="slide">
    <div class="carousel-item" v-if="visible">
      <slot></slot>
    </div>
  </transition>
</template>
<script>
  export default {
    name: 'ErCarouselItem',
    props: {
      name: {
        type: String
      },
    },
    data() {
      return {
        selected: undefined
      }
    },
    computed: {
      visible() {
        return this.selected === this.name;
      }

    }
  }
</script>
<style lang="scss" scoped>
  .carousel-item {
  }

  .slide-enter-active,
  .slide-leave-active {
    transition: all 1s;
  }

  .slide-leave-active {
    position: absolute;
  }

  .slide-enter {
    /*opacity: 0;*/
    transform: translateX(100%);
  }

  .slide-leave-to {
    /*opacity: 0;*/
    transform: translateX(-100%);
  }
</style>