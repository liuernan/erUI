<template>
  <div class="er-cascader-item">
    <div class="left">
      <div class="label" v-for="item in itemsArr" @click="leftSelected = item">
        {{item.label}}
        <er-icon v-if="item.children" name="right" class="icon"></er-icon>
      </div>
    </div>
    <div class="right" v-if="rightItem">
      <er-cascader-item :itemsArr="rightItem"></er-cascader-item>
    </div>
  </div>
</template>

<script>
  import Icon from './icon'

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
    },
    components: {
      'er-icon': Icon
    }
  }
</script>

<style lang="scss" scoped>
  .er-cascader-item {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    height: 100px;

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
      border-left: 1px solid lightgray;
    }
  }
</style>