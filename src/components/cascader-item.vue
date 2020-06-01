<template>
  <div class="er-cascader-item" :style="{height: this.panelHeight + 'px'}">
    <div class="left">
      <div class="label" v-for="item in source" @click="onClickItem(item)">
        <span>{{item.label}}</span>
        <er-icon v-if="leafArrowVisible(item)" name="right" class="icon"></er-icon>
      </div>
    </div>
    <div class="right" v-if="rightItem">
      <er-cascader-item :source="rightItem" :panel-height="panelHeight" :level="level + 1"
                        :selected="selected" @update:selected="onUpdateSelected"
                        :load-data="loadData"
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
      },
      loadData: {
        type: Function
      }
    },
    computed: {
      rightItem() {
        if (this.selected[this.level]) {
          const currentSelected = this.source.find((item) => {
            return item.value === this.selected[this.level].value
          });
          if (currentSelected && currentSelected.children && currentSelected.children.length) {
            return currentSelected.children;
          } else {
            return null
          }
        }
      }
    },
    methods: {
      onClickItem(item) {
        const newSelected = JSON.parse(JSON.stringify(this.selected));
        newSelected[this.level] = item;
        newSelected.splice(this.level + 1);
        this.$emit('update:selected', newSelected);
      },
      onUpdateSelected(newSelected) {
        this.$emit('update:selected', newSelected)
      },
      leafArrowVisible(item) {
        return this.loadData ? !item.isLeaf : item.children;
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
    height: 100%;
    .left {
      white-space: nowrap;
      height: 100%;
      overflow: auto;

      .label {
        display: flex;
        align-items: center;
        cursor: pointer;
        padding: .3em 1em;
        user-select: none;

        &:hover {
          background-color: $border-color-light;
        }

        .icon {
          margin-right: -.5em;
          transform: scale(0.5);
        }
      }
    }

    .right {
      border-left: 1px solid $border-color-light;
      height: 100%;
    }
  }
</style>