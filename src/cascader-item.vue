<template>
  <div class="er-cascader-item">
    <div class="left" v-for="item in itemsArr" @click="leftSelected = item">
      {{item.label}}
    </div>
    <div class="right" v-if="rightItem">
      <er-cascader-item :itemsArr="rightItem"></er-cascader-item>
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
    },
    data() {
      return {
        leftSelected: null
      }
    },
    computed: {
      rightItem() {
        if (this.leftSelected && this.leftSelected.children) {
          return this.leftSelected.children
        } else {
          return null
        }
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