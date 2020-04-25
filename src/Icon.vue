<template>
  <svg class="icon">
    <use :xlink:href="`#icon-${icon}`"/>
  </svg>
</template>
<script>
  export default {
    props: ["icon"]
  }
</script>
<style>
  .icon {
    width: 1em;
    height: 1em;
  }
</style>