<template>
  <div class="er-nav">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'ErNav',
    props: {
      selected: {
        type: Array,
        default: []
      },
      multiple: {
        type: Boolean
      }
    },
    mounted() {
      this.$children.forEach(vm => {
        if (vm.$options.name === 'ErNavItem') {
          if (this.selected.indexOf(vm.name) !== -1) {
            vm.selected = true;
          } else {
            vm.selected = false;
          }
        }
      })
    }
  }
</script>
<style lang="scss" scoped>
  .er-nav {
    display: flex;
    border: 1px solid red;
  }
</style>