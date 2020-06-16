<template>
  <div class="er-cascader-item" :style="{height: this.panelHeight + 'px'}">
    <div class="left">
      <div class="label" v-for="item in source" @click="onClickItem(item)">
        <span>{{item.label}}</span>
        <span class="icon">
          <template v-if="loadData && item.loading">
            <er-icon name="loading" class="loadingIcon"></er-icon>
          </template>
          <template v-else>
            <er-icon v-if="leafArrowVisible(item)" name="right" class="rightIcon"></er-icon>
          </template>
        </span>
      </div>
    </div>
    <div class="right" v-if="rightItem">
      <er-cascader-item :source="rightItem" :panel-height="panelHeight" :level="level + 1"
                        :selected="selected" @update:selected="onUpdateSelected"
                        :load-data="loadData" :close="close"
      ></er-cascader-item>
    </div>
  </div>
</template>

<script>
  import Icon from '../icon'

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
      },
      close: {
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

        if (this.loadData && item.isLeaf || !this.loadData && (!item.children || item.children && !item.children.length)) {
          this.close();
        }

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
  @import "../../styles/var";

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
          margin-left: .5em;
          margin-right: -.5em;
          display: flex;
          justify-content: center;

          .loadingIcon {
            animation: spin 2s infinite linear;
          }

          .rightIcon {
            transform: scale(.5);
          }
        }
      }
    }

    .right {
      border-left: 1px solid $border-color-light;
      height: 100%;
    }
  }
</style>