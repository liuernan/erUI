<template>
  <div class="er-cascader">
    <div class="er-cascader-trigger" @click="contentVisiable = !contentVisiable">
      <slot></slot>
    </div>
    <div class="er-cascader-content" v-if="contentVisiable">
      <er-cascader-item :source="source" :panel-height="panelHeight"></er-cascader-item>
    </div>
  </div>
</template>
<script>
  import CascaderItem from './cascader-item';

  export default {
    name: "ErCascader",
    components: {
      'er-cascader-item': CascaderItem
    },
    props: {
      source: {
        type: Array
      },
      panelHeight: {
        type: String,
        default: '100'
      }
    },
    data() {
      return {
        contentVisiable: false
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "var";

  .er-cascader {
    .er-cascader-trigger {
      border: 1px solid skyblue;
      height: 32px;
      width: 200px;
      position: relative;
    }

    .er-cascader-content {
      background-color: #fff;
      position: absolute;
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
    }
  }
</style>