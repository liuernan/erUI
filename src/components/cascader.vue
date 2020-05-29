<template>
  <div class="er-cascader">
    <div class="er-cascader-trigger" @click="contentVisiable = !contentVisiable">
      <slot></slot>
      <span v-if="value.length">
        {{value}}
      </span>
      <span v-else class="placeHolder">{{placeholder}}</span>
    </div>
    <div class="er-cascader-content" v-if="contentVisiable">
      <er-cascader-item :source="source" :panel-height="panelHeight"
                        :selected="selected" @update:selected="onUpdateSelected"
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
        type: String,
        default: '请选择'
      }
    },
    data() {
      return {
        contentVisiable: false,
        selected: []
      }
    },
    computed: {
      value() {
        return this.selected.map((item) => {
          return item.label
        }).join('/');
      }
    },
    methods: {
      onUpdateSelected($event) {
        this.selected = $event;
        this.$emit('change', this.value.split('/'));
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
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
    }
  }
</style>