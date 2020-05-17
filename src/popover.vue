<template>
  <div class="popover">
    <div class="popover-content-warpper" v-if="visible" @click.stop>
      <slot name="popover-content"></slot>
    </div>
    <div @click.stop="clickButton">
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

        const domClickHandler = () => {
          this.visible = false;
          document.removeEventListener('click', domClickHandler);
        };

        if (this.visible) {
          document.addEventListener('click', domClickHandler);
        } else {
          // todo: 这里有 bug 自己删不掉
          document.removeEventListener('click', domClickHandler);
        }
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