<template>
  <div class="row">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'erRow'
  }
</script>
<style lang="scss" scoped>
  .row {
    display: flex;
  }
</style>