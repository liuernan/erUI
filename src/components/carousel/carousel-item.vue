<template>
  <transition name="slide">
    <div class="er-carousel-item" v-if="visible" :class="{reverseSlide}">
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
        selected: undefined,
        reverseSlide: false
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
  .er-carousel-item {
    width: 100%;
    height: 100%;
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

  .slide-enter.reverseSlide {
    /*opacity: 0;*/
    transform: translateX(-100%);
  }

  .slide-leave-to.reverseSlide {
    /*opacity: 0;*/
    transform: translateX(100%);
  }

</style>