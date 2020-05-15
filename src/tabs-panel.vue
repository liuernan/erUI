<template>
  <div class="tabs-panel" v-if="active">
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
  $height: 200px;
  .tabs-panel {
    height: $height;
  }
</style>