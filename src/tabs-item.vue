<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'ErTabsItem',
    props: {
      name: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    inject: ['eventHub'],
    mounted() {
      this.eventHub.$on('update:selected', (name) => {
        console.log(name);
      });
    }
  }
</script>
<style lang="scss" scoped>

</style>