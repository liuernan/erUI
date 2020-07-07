<template>
  <div class="er-nav">
    <slot></slot>
  </div>
</template>
<script>
  export default  {
    name: 'ErNav',
    props: {
      selected: {
        type: Array
      },
      multiple: {
        type: Boolean
      }
    }
  }
</script>
<style lang="scss" scoped>
  .er-nav {
    display: flex;
    border: 1px solid red;
  }
</style>