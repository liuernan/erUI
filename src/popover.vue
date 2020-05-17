<template>
  <div class="popover" ref="popoverwrapper" @click.stop="onClick">
    <div class="popover-content-wrapper" ref="popoverContentWrapper" v-if="visible">
      <slot name="popover-content"></slot>
    </div>
    <div ref="triggerWrapper">
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
      open() {
        this.visible = true;
        document.addEventListener('click', this.domClickHandler);
      },
      close() {
        this.visible = false;
        document.removeEventListener('click', this.domClickHandler);
      },
      domClickHandler() {
        this.close();
      },
      onClick(e) {
        if (this.$refs.triggerWrapper.contains(e.target)) {
          if (this.visible) {
            this.close();
          } else {
            this.open();
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .popover {
    display: inline-block;
    position: relative;

    > .popover-content-wrapper {
      position: absolute;
      bottom: 110%;
      padding: 0 1em;
      border: 1px solid gray;
      box-shadow: 0 0 3px rgba(0, 0, 0, .5);
    }
  }
</style>