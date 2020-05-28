<template>
  <div class="er-cascader-item" :style="{height: this.panelHeight + 'px'}">
    <div class="left">
      <div class="label" v-for="item in source" @click="onClickItem(item)">
        {{item.label}}
        <er-icon v-if="item.children" name="right" class="icon"></er-icon>
      </div>
    </div>
    <div class="right" v-if="rightItem">
      <er-cascader-item :source="rightItem" :panel-height="panelHeight" :level="level + 1"
                        :selected="selected" @update:selected="onUpdateSelected"
      ></er-cascader-item>
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
      source: {
        type: Array
      },
      level: {
        type: Number,
        default: 0
      },
      selected: {
        type: Array
      },
      panelHeight: {
        type: String,
        default: '100'
      }
    },
    computed: {
      rightItem() {
        const currentSelected = this.selected[this.level];
        if (currentSelected && currentSelected.children) {
          return currentSelected.children
        } else {
          return null
        }
      }
    },
    methods: {
      onClickItem(item){
        const newSelected = JSON.parse(JSON.stringify(this.selected));
        newSelected[this.level] = item;
        this.$emit('update:selected', newSelected);
      },
      onUpdateSelected(newSelected){
        this.$emit('update:selected', newSelected)
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