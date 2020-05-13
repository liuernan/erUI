<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'ErTabs',
    props: {
      selected: {
        type: String
      },
      direction: {
        type: String,
        validator(value) {
          return ['horizontal', 'vertical'].indexOf(value) !== -1;
        }
      }
    }
  }
</script>
<style lang="scss" scoped>

</style>