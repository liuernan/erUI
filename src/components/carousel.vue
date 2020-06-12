<template>
  <div class="er-carousel">
    <div class="er-carousel-items-wrapper">
      <slot></slot>
    </div>
    <div class="er-carousel-dots-wrapper">
      <span v-for="n in carouselItemsLength" :class="{'er-carousel-dot-active': currentItemIndex + 1 === n}">
      </span>
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
        selectedIndex: 0
      }
    },
    computed: {
      currentItemIndex() {
        return this.$children.indexOf(this.$children.find((vm) => {
          return vm.selected === vm.name
        }))
      }
    },
    mounted() {
      if (!this.$children.length) {
        console.error('erUI error：你应该给 er-carousel 传几个 er-carousel-item 作为子组件，空的算怎么回事？');
      } else {
        this.carouselItemsLength = this.$children.length;

        if (this.autoPlay) {
          this.playAutomatically();
        } else {
          this.updateItems(this.selectedIndex)
        }
      }
    },
    methods: {
      updateItems(index) {
        this.$children.forEach((vm) => {
          vm.selected = this.$children[index].name;
        });
      },
      playAutomatically() {
        const run = () => {
          this.updateItems(this.selectedIndex);
          this.selectedIndex === this.$children.length - 1 ? this.selectedIndex = 0 : this.selectedIndex++;
          setTimeout(run, 5000)
        };
        run()
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "var";

  .er-carousel {
    position: relative;
    display: flex;
    justify-content: center;

    & > .er-carousel-items-wrapper {
      display: flex;
      overflow: hidden;
      position: relative;
    }

    & > .er-carousel-dots-wrapper {
      position: absolute;
      bottom: 8px;
      display: inline-flex;

      & > span {
        display: flex;
        width: 16px;
        height: 4px;
        justify-content: center;
        align-items: center;
        border-radius: 2px;
        margin: 0 4px;
        background-color: $white;

        &.er-carousel-dot-active {
          background-color: $border-color;
        }
      }
    }

  }
</style>