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
    }
  }
</script>
<style lang="scss" scoped>
  
</style>