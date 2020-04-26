<template>
  <svg class="er-icon">
    <use :xlink:href="`#icon-${name}`"/>
  </svg>
</template>
<script>
  export default {
    props: ["name"]
  }
</script>
<style>
  .er-icon {
    width: 1em;
    height: 1em;
  }
</style>