<template>
  <div class="toast" :class="classList">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'ErToast',
    props: {
      autoClose: {
        type: [Boolean, Number],
        default: 3,
        validator(value) {
          return false === value || typeof value === "number";
        }
      },
      position: {
        type: String,
        default: 'top',
        validator(value) {
          return ['top', 'middle', 'bottom'].indexOf(value) !== -1;
        }
      }
    },
    data() {
      return {
        classList: {
          [`toast-position-${this.position}`]: true
        }
      }
    },
    mounted() {
      if (this.autoClose) {
        setTimeout(this.close, this.autoClose * 1000)
      }

    },
    methods: {
      close() {
        this.$el.remove();
        this.$destroy();
      }
    }
  }
</script>
<style lang="scss" scoped>
  $font-size: 14px;
  $toast-min-height: 40px;
  $toast-bg: rgba(0, 0, 0, 0.75);
  .toast {
    display: flex;
    align-items: center;
    position: fixed;
    font-size: $font-size;
    min-height: $toast-min-height;
    background: $toast-bg;
    color: white;
    padding: 4px 16px;
    border-radius: 4px;

    &.toast-position-top {
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }

    &.toast-position-middle {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    &.toast-position-bottom {
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
</style>