<template>
  <div>
    <div>
      {{title}}
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ErCollapseItem",
    props: {
      title: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>