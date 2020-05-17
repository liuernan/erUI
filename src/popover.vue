<template>
  <div class="popover">
    <div class="popover-content-warpper" v-if="visible">
      <slot name="popover-content"></slot>
    </div>
    <div @click="clickButton">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ErPopover",
    data() {
      return {
        visible: false
      }
    },
    methods: {
      clickButton() {
        this.visible = !this.visible;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .popover {
    display: inline-block;
    position: relative;

    > .popover-content-warpper {
      position: absolute;
      bottom: 110%;
      padding: 0 1em;
      border: 1px solid gray;
      box-shadow: 0 0 3px rgba(0, 0, 0, .5);
    }
  }
</style>