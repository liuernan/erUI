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
      selected: {
        type: String
      }
    },
    mounted() {
      if (!this.$children.length) {
        console.error('erUI error：你应该给 er-carousel 传几个 er-carousel-item 作为子组件，空的算怎么回事？');
      } else {
        this.$children[0].selected = this.$children[0].name;

        let i = 1;
        setInterval(() => {
          this.$children.forEach((vm) => {
            vm.selected = i.toString();
          });
          i === this.$children.length ? i = 1 : i++;
        }, 3000)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .er-carousel {
  }

  .carousel-items-wrapper {
    display: flex;
    position: relative;
  }

</style>