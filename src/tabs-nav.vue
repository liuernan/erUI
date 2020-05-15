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
    name: 'ErTabsNav',
    inject: ['eventHub'],
    mounted() {
      this.eventHub.$on('update:selected', (name) => {
        // console.log(name);
      });
    }
  }
</script>
<style lang="scss" scoped>
  $tabs-nav-height: 40px;
  .er-tabs-nav {
    display: flex;
    justify-content: center;
    align-items: center;
    height: $tabs-nav-height;
    > .er-nav-button-wrapper {
      margin-left: auto;
    }
  }
</style>