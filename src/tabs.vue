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
        type: String,
        required: true
      },
      direction: {
        type: String,
        validator(value) {
          return ['horizontal', 'vertical'].indexOf(value) !== -1;
        }
      }
    },
    mounted() {
      this.$emit('update:selected', '')
    }
  }
</script>
<style lang="scss" scoped>

</style>