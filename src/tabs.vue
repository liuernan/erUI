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
    mounted() {
      this.eventHub.$emit('update:selected', this.selected);
    }
  }
</script>
<style lang="scss" scoped>

</style>