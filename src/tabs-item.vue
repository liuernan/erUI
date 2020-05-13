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
      }
    }
  }
</script>
<style lang="scss" scoped>
  
</style>