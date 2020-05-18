<template>
  <div class="popover">
    <div class="popover-content-wrapper" :class="{[`popover-${position}`]: true}" ref="popoverContentWrapper"
         v-if="visible">
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
      },
      position: {
        type: String,
        default: 'top',
        validator(value) {
          return ['top', 'bottom', 'left', 'right'].indexOf(value) !== -1;
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
        const $popoverTrigger = this.$refs.popoverTriggerWrapper;
        const $popoverContent = this.$refs.popoverContentWrapper;
        const {width, height, top, left} = $popoverTrigger.getBoundingClientRect();
        const {height: contentHeight} = $popoverContent.getBoundingClientRect();
        if ('top' === this.position) {
          $popoverContent.style.top = top + window.scrollY + 'px';
          $popoverContent.style.left = left + window.scrollX + 'px';
        } else if ('bottom' === this.position) {
          $popoverContent.style.top = top + height + window.scrollY + 'px';
          $popoverContent.style.left = left + window.scrollX + 'px';
        } else if ('left' === this.position) {
          console.log(contentHeight);  //todo: height 怎么这么高？
          $popoverContent.style.top = top + window.scrollY + (height - contentHeight) / 2 + 'px';
          $popoverContent.style.left = left + window.scrollX + 'px';
        } else if ('right' === this.position) {
          $popoverContent.style.top = top + window.scrollY + (height - contentHeight) / 2 + 'px';
          $popoverContent.style.left = left + width + window.scrollX + 'px';
        }

        document.body.appendChild($popoverContent);
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
    filter: drop-shadow($popover-box-shadow);
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

    &.popover-top {
      transform: translateY(-100%);
      margin-top: -10px;

      &::before {
        border-top-color: $popover-border-color;
        top: 100%;
      }

      &:after {
        border-top-color: #fff;
        top: calc(100% - 1px);
      }
    }

    &.popover-bottom {
      margin-top: 10px;

      &::before {
        border-bottom-color: $popover-border-color;
        bottom: 100%;
      }

      &:after {
        border-bottom-color: #fff;
        bottom: calc(100% - 1px);
      }
    }

    &.popover-left {
      transform: translateX(-100%);
      margin-left: -10px;

      &::before, &::after {
        transform: translateY(-50%);
        top: 50%;
      }

      &::before {
        border-left-color: $popover-border-color;
        left: 100%;
      }

      &:after {
        border-left-color: #fff;
        left: calc(100% - 1px);
      }
    }

    &.popover-right {
      margin-left: 10px;

      &::before, &::after {
        transform: translateY(-50%);
        top: 50%;
      }

      &::before {
        border-right-color: $popover-border-color;
        right: 100%;
      }

      &:after {
        border-right-color: #fff;
        right: calc(100% - 1px);
      }
    }
  }
</style>