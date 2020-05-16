<template>
  <div class="tabs-panel" v-if="active" :data-name="name">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'ErTabsPanel',
    props: {
      name: {
        type: String
      }
    },
    data() {
      return {
        active: {
          type: Boolean,
          default: false
        }
      }
    },
    inject: ['eventHub'],
    mounted() {
      this.eventHub.$on('update:selected', (name) => {
        this.active = name === this.name;
      });
    }
  }
</script>
<style lang="scss" scoped>
  $tabs-panel-height: 200px;
  $tabs-panel-border: 1px solid #999;
  .tabs-panel {
    height: $tabs-panel-height;
    border: $tabs-panel-border;
  }
</style>