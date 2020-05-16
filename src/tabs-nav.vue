<template>
  <div class="er-tabs-nav">
    <slot></slot>
    <div class="er-nav-button-wrapper">
      <slot name="er-nav-button"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'ErTabsNav'
  }
</script>
<style lang="scss" scoped>
  $tabs-nav-height: 60px;
  .er-tabs-nav {
    display: flex;
    align-items: flex-end;
    height: $tabs-nav-height;
    > .er-nav-button-wrapper {
      margin-left: auto;
    }
  }
</style>