<template>
  <div class="layout" :class="classList">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'ErLayout',
    data() {
      return {
        classList: {
          hasSider: false
        }
      }
    },
    mounted() {
      this.$children.forEach((vm) => {
        if ('ErSider' === vm.$options.name) {
          this.classList.hasSider = true;
        }
      });
    }
  }
</script>
<style lang="scss" scoped>
  .layout {
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    &.hasSider {
      flex-direction: row;
    }
  }
</style>