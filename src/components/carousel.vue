<template>
  <div class="er-carousel">
    <div class="er-carousel-items-wrapper">
      <slot></slot>
    </div>
    <div class="er-carousel-dots-wrapper">
      <span v-for="n in carouselItemsLength" :class="{'er-carousel-dot-active': currentItemIndex + 1 === n}"
            @click="clickDot(n)">
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
        selectedIndex: 0,
        timerId: undefined
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
          if (index === 0 && this.currentItemIndex === this.$children.length - 1) {
            vm.reverseSlide = false;
          } else {
            vm.reverseSlide = index < this.currentItemIndex;
          }
          this.$nextTick(() => {
            vm.selected = this.$children[index].name;
          })
        });
      },
      playAutomatically() {
        const run = () => {
          this.updateItems(this.selectedIndex);
          this.selectedIndex === this.$children.length - 1 ? this.selectedIndex = 0 : this.selectedIndex++;
          this.timerId = setTimeout(run, 5000)
        };
        run()
      },
      clickDot(n) {
        if (n === this.currentItemIndex + 1) {
          return
        } else {
          if (this.autoPlay) {
            this.selectedIndex = n - 1;
            window.clearTimeout(this.timerId);
            this.timerId = undefined;
            this.playAutomatically();
          } else {
            this.updateItems(n - 1);
          }
        }
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

        &:hover {
          cursor: pointer;
        }

        &.er-carousel-dot-active {
          background-color: $border-color;

          &:hover {
            cursor: default;
          }
        }
      }
    }

  }
</style>