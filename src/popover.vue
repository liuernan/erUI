<template>
  <div class="popover" @click="onClick">
    <div class="popover-content-wrapper" ref="popoverContentWrapper" v-if="visible">
      <slot name="popover-content"></slot>
    </div>
    <div ref="popoverTriggerWrapper">
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
        this.$nextTick(() => {
          document.addEventListener('click', this.domClickHandler);

          const {top, left} = this.$refs.popoverTriggerWrapper.getBoundingClientRect();
          this.$refs.popoverContentWrapper.style.top = top + window.scrollY + 'px';
          this.$refs.popoverContentWrapper.style.left = left + window.scrollX + 'px';
          document.body.appendChild(this.$refs.popoverContentWrapper);

        });
      },
      close() {
        this.visible = false;
        document.removeEventListener('click', this.domClickHandler);
      },
      domClickHandler(e) {

        if (!(this.$refs.popoverContentWrapper.contains(e.target) || this.$refs.popoverTriggerWrapper.contains(e.target))) {
          this.close();
        }
      },
      onClick(e) {
        if (this.$refs.popoverTriggerWrapper.contains(e.target)) {
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
  }

  .popover-content-wrapper {
    position: absolute;
    padding: 0 1em;
    transform: translateY(-110%);
    border: 1px solid gray;
    box-shadow: 0 0 3px rgba(0, 0, 0, .5);
  }
</style>