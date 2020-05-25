<template>
  <div>
    <div v-for="item in itemsArr" class="er-cascader-item">
      {{item.label}}
      <er-cascader-item v-if="item.children" :itemsArr="item.children"></er-cascader-item>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ErCascaderItem",
    props: {
      itemsArr: {
        type: Array
      }
    }
  }
</script>

<style lang="scss" scoped>
  .er-cascader-item {
    border: 1px solid red;
    margin: 10px
  }
</style>