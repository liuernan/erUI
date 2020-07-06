<template>
  <div class="er-nav-item">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'ErNavItem'
  }
</script>
<style lang="scss" scoped>
  .er-nav-item {
    border: 1px solid black;
    padding: .5em;
  }
</style>