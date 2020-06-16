<template>
  <div class="er-cascader" ref="cascader">
    <div class="er-cascader-trigger" @click="toggle">
      <slot></slot>
      <span v-if="selectedLabel.length">
        {{selectedLabel}}
      </span>
      <span v-else class="placeHolder">{{placeholder}}</span>
    </div>
    <div class="er-cascader-content" v-if="contentVisiable">
      <er-cascader-item :source="source" :panel-height="panelHeight"
                        :selected.sync="selected" @update:selected="onUpdateSelected"
                        :load-data="loadData" :close="close"
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
      },
      toggle() {
        if (this.contentVisiable) {
          this.close();
        } else {
          this.open();
        }
      },
      clickOutside(e) {
        if (this.$refs.cascader.contains(e.target)) {
          return
        } else {
          this.close();
        }
      },
      open() {
        this.contentVisiable = true;
        document.addEventListener('click', this.clickOutside);
      },
      close() {
        this.contentVisiable = false;
        document.removeEventListener('click', this.clickOutside);
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../styles/var";

  .er-cascader {
    position: relative;
    display: inline-block;

    .er-cascader-trigger {
      border: 1px solid $border-color;
      height: $input-height;
      display: inline-flex;
      align-items: center;
      padding: 0 1em;
      min-width: $input-min-width;

      .placeHolder {
        color: $color-light;
      }
    }

    .er-cascader-content {
      background-color: #fff;
      position: absolute;
      box-shadow: $box-shadow;
      display: flex;
      z-index: 1;
    }
  }
</style>