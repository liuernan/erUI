<template>
  <div class="er-cascader-item" :style="{height: this.panelHeight + 'px'}">
    <div class="left">
      <div class="label" v-for="item in itemsArr" @click="leftSelected = item">
        {{item.label}}
        <er-icon v-if="item.children" name="right" class="icon"></er-icon>
      </div>
    </div>
    <div class="right" v-if="rightItem">
      <er-cascader-item :itemsArr="rightItem" :panel-height="panelHeight"></er-cascader-item>
    </div>
  </div>
</template>

<script>
  import Icon from './icon'

  export default {
    name: "ErCascaderItem",
    components: {
      'er-icon': Icon
    },
    props: {
      itemsArr: {
        type: Array
      },
      panelHeight: {
        type: String,
        default: '100'
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
  @import "var";

  .er-cascader-item {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    .left {
      white-space: nowrap;
      padding: .5em 1em;

      .label {
        display: flex;
        align-items: center;

        .icon {
          margin-right: -.5em;
          transform: scale(0.5);
        }
      }
    }

    .right {
      border-left: 1px solid $border-color-light;
    }
  }
</style>