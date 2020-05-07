<template>
  <div class="row" :style="styleList">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'erRow',
    props: {
      gutter: {
        type: [Number, String],
        default: 0
      }
    },
    computed: {
      styleList() {
        const {gutter} = this;
        return {
          marginLeft: -gutter / 2 + 'px',
          marginRight: -gutter / 2 + 'px'
        }
      }
    },
    mounted() {
      this.$children.forEach((vm) => {
        vm.gutter = this.gutter;
      });
    }
  }
</script>
<style lang="scss" scoped>
  .row {
    display: flex;
  }
</style>