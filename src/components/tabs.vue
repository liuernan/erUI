<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
  import Vue from 'vue';

  export default {
    name: 'ErTabs',
    props: {
      selected: {
        type: [String, Number],
        required: true
      },
      direction: {
        type: String,
        validator(value) {
          return ['horizontal', 'vertical'].indexOf(value) !== -1;
        }
      }
    },
    data() {
      return {
        eventHub: new Vue()
      }
    },
    provide() {
      return {
        eventHub: this.eventHub
      }
    },
    methods: {
      checkChildren(){
        if (!this.$children.length
          || this.$children[0].$options.name !== 'ErTabsNav'
          || this.$children[1].$options.name !== 'ErTabsContent'
        ) {
          console && console.warn
          && console.warn('erUI: tabs 组件里面应该有且只有两个子组件，第一个是 tabs-nav，第二个是 tabs-content。请检查一下你的代码');
        }
      }
    },
    mounted() {
      this.checkChildren();
      this.eventHub.$emit('update:selected', this.selected);
    }
  }
</script>
<style lang="scss" scoped>

</style>