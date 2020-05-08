<template>
  <div class="row" :class="classList" :style="styleList">
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
      },
      align: {
        type: String,
        validator(value) {
          return ['left', 'center', 'right'].includes(value);
        }
      }
    },
    computed: {
      classList() {
        const {align} = this;
        return [
          align && `align-${align}`
        ]
      },
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
    flex-wrap: wrap;

    &.align-left {
      justify-content: flex-start;
    }

    &.align-center {
      justify-content: center;
    }

    &.align-right {
      justify-content: flex-end;
    }
  }
</style>