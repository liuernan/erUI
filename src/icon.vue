<template>
  <svg class="er-icon">
    <use :xlink:href="`#icon-${name}`"/>
  </svg>
</template>
<script>
  export default {
    name: 'er-icon',
    props: ["name"]
  }
</script>
<style lang="scss" scoped>
  .er-icon {
    width: 1em;
    height: 1em;
  }
</style>