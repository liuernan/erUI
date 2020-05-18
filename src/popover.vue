<template>
  <div class="popover">
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
    props: {
      trigger: {
        type: String,
        default: 'click',
        validator(value) {
          return ['click', 'hover'].indexOf(value) !== -1;
        }
      }
    },
    mounted() {
      if ('click' === this.trigger) {
        this.$el.addEventListener('click', this.clickHandler);
      } else {
        this.$el.addEventListener('mouseenter', this.open);
        this.$el.addEventListener('mouseleave', this.close);
      }
    },
    destroyed() {
      if ('click' === this.trigger) {
        this.$el.removeEventListener('click', this.clickHandler);
      } else {
        this.$el.removeEventListener('mouseenter', this.open);
        this.$el.removeEventListener('mouseleave', this.close);
      }
    },
    methods: {
      open() {
        this.visible = true;
        this.$nextTick(() => {
          document.addEventListener('click', this.domClickHandler);
          this.setPosition();
        });
      },
      setPosition() {
        const {top, left} = this.$refs.popoverTriggerWrapper.getBoundingClientRect();
        this.$refs.popoverContentWrapper.style.top = top + window.scrollY + 'px';
        this.$refs.popoverContentWrapper.style.left = left + window.scrollX + 'px';
        document.body.appendChild(this.$refs.popoverContentWrapper);
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
      clickHandler(e) {
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
  $popover-border-color: gray;
  $popover-border-radius: 4px;
  $popover-max-width: 20em;
  $popover-box-shadow: 0 0 3px rgba(0, 0, 0, .5);
  .popover {
    display: inline-block;
    position: relative;
  }

  .popover-content-wrapper {
    position: absolute;
    padding: .5em 1em;
    max-width: $popover-max-width;
    word-break: break-all;
    border: 1px solid $popover-border-color;
    border-radius: $popover-border-radius;
    box-shadow: $popover-box-shadow;
    filter: drop-shadow($popover-box-shadow);
    transform: translateY(-100%);
    margin-top: -10px;
    background: #fff;

    &::before,
    &::after {
      display: block;
      content: '';
      width: 0;
      height: 0;
      border: 10px solid transparent;
      position: absolute;
    }

    &::before {
      border-top-color: $popover-border-color;
      top: 100%;
    }

    &:after {
      border-top-color: #fff;
      top: calc(100% - 1px);
    }
  }
</style>