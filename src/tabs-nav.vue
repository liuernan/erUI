<template>
  <div>
    <slot></slot>
    <slot name="er-nav-button"></slot>
  </div>
</template>
<script>
  export default {
    name: 'ErTabsNav',
    inject: ['eventHub'],
    mounted() {
      this.eventHub.$on('update:selected', (name) => {
        console.log(name);
      });
    }
  }
</script>
<style lang="scss" scoped>
  
</style>