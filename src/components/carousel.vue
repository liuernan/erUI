<template>
  <div class="er-carousel">
    <div class="carousel-items-wrapper">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'ErCarousel',
    props: {
      autoPlay: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        carouselItemsLength: undefined,
        currentSelectedIndex: undefined
      }
    },
    mounted() {
      if (!this.$children.length) {
        console.error('erUI error：你应该给 er-carousel 传几个 er-carousel-item 作为子组件，空的算怎么回事？');
      } else {
        this.carouselItemsLength = this.$children.length;

        this.$children[0].selected = this.$children[0].name;
        this.currentSelectedIndex = 0;
        this.autoPlay && this.playAutomatically();
      }
    },
    methods: {
      playAutomatically() {
        const run = () => {
          this.$children.forEach((vm) => {
            vm.selected = this.$children[this.currentSelectedIndex].name;
          });
          this.currentSelectedIndex === this.$children.length - 1 ? this.currentSelectedIndex = 0 : this.currentSelectedIndex++;
          setTimeout(run, 5000)
        };
        run()
      }
    }
  }
</script>
<style lang="scss" scoped>
  .er-carousel {
  }

  .carousel-items-wrapper {
    display: flex;
    overflow: hidden;
    position: relative;
  }

</style>