<template>
  <div class="er-collapse">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "ErCollapse"
  }
</script>

<style lang="scss" scoped>
  $er-collapse-border-color: gray;
  $er-collapse-border-radius: 4px;

  .er-collapse {
    border: 1px solid $er-collapse-border-color;
    border-top-left-radius: $er-collapse-border-radius;
    border-top-right-radius: $er-collapse-border-radius;
  }
</style>