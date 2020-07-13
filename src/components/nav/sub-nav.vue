<template>
  <div class="er-sub-nav" v-click-outside="close">
    <div class="er-sub-nav-title" @click="clickTitle">
      <slot name="title"></slot>
    </div>
    <div class="er-sub-nav-items" v-show="visible">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  import ClickOutside from '../click-outside'

  export default {
    name: 'ErSubNav',
    directives: {ClickOutside},
    data() {
      return {
        visible: false
      }
    },
    methods: {
      clickTitle() {
        this.visible = !this.visible
      },
      close(){
        this.visible = false;
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
      box-shadow: $box-shadow-light;
      margin-top: 4px;
    }

    & & &-items {
      left: 100%;
      top: 0;
      margin-left: 4px;
      margin-top: 0;
    }
  }

</style>