<template>
  <div class="er-cascader">
    <div class="er-cascader-trigger" @click="contentVisiable = !contentVisiable">
      <slot></slot>
      <span v-if="selectedLabel.length">
        {{selectedLabel}}
      </span>
      <span v-else class="placeHolder">{{placeholder}}</span>
    </div>
    <div class="er-cascader-content" v-if="contentVisiable">
      <er-cascader-item :source="source" :panel-height="panelHeight"
                        :selected.sync="selected" @update:selected="onUpdateSelected"
                        :load-data="loadData"
      ></er-cascader-item>
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
      },
      placeholder: {
        type: String
      },
      loadData: {
        type: Function
      }
    },
    data() {
      return {
        contentVisiable: false,
        selected: []
      }
    },
    computed: {
      selectedLabel() {
        return this.selected.map((item) => {
          return item.label
        }).join('/');
      },
      selectedValue() {
        return this.selected.map((item) => {
          return item.value
        }).join('/');
      }
    },
    methods: {
      onUpdateSelected($event) {
        if (this.loadData && !$event[$event.length - 1].isLeaf) {
          this.loadData($event);
        }
        this.$emit('change', this.selectedValue.split('/'));
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "var";

  .er-cascader {
    position: relative;

    .er-cascader-trigger {
      border: 1px solid $border-color;
      height: $input-height;
      display: inline-flex;
      align-items: center;
      padding: 0 1em;
      min-width: $input-min-width;
      .placeHolder{
        color: $color-light;
      }
    }

    .er-cascader-content {
      background-color: #fff;
      position: absolute;
      box-shadow: $box-shadow;
      display: flex;
    }
  }
</style>