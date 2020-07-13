<template>
  <div class="er-sub-nav">
    <div class="er-sub-nav-title" @click="clickTitle">
      <slot name="title"></slot>
    </div>
    <div class="er-sub-nav-items" v-show="visible">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'ErSubNav',
    data() {
      return {
        visible: false
      }
    },
    methods: {
      clickTitle() {
        this.visible = !this.visible
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../styles/var";

  .er-sub-nav {
    position: relative;

    &-title {
      padding: .5em;
      min-width: 6em;
    }

    &-items {
      position: absolute;
      white-space: nowrap;
    }

    & & &-items {
      left: 100%;
      top: 0
    }
  }

</style>