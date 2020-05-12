<template>
  <div class="warpper" :class="classList">
    <div class="toast" ref="toast">
      <slot></slot>
      <div v-if="closeButton" class="close" @click="clickClose">
        <div class="line" ref="line"></div>
        <span class="close-text">{{closeButton.text}}</span>
      </div>
    </div>
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
      },
      closeButton: {
        type: Object
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
      this.updateStyles();
      if (this.autoClose) {
        setTimeout(this.close, this.autoClose * 1000)
      }
    },
    methods: {
      updateStyles() {
        this.$nextTick(() => {
          this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`;
        })
      },
      clickClose() {
        this.closeButton && typeof this.closeButton.callback === 'function' && this.closeButton.callback();
        this.close()
      },
      close() {
        this.$el.remove();
        this.$emit('close');
        this.$destroy();
      }
    }
  }
</script>
<style lang="scss" scoped>
  $font-size: 14px;
  $toast-min-height: 30px;
  $toast-bg: rgba(0, 0, 0, 0.75);
  $animation-duration: .3s;

  @keyframes slide-down {
    0% {
      opacity: 0;
      transform: translateY(-100%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes slide-up {
    0% {
      opacity: 0;
      transform: translateY(100%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .warpper {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);

    &.toast-position-top {
      top: 0;
      transform: translateX(-50%);

      .toast {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        animation: slide-down $animation-duration;
      }
    }

    &.toast-position-middle {
      top: 50%;
      transform: translate(-50%, -50%);

      .toast {
        animation: fade-in $animation-duration;
      }
    }

    &.toast-position-bottom {
      bottom: 0;
      transform: translateX(-50%);

      .toast {
        animation: slide-up $animation-duration;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
    }
  }

  .toast {
    display: flex;
    align-items: center;
    font-size: $font-size;
    min-height: $toast-min-height;
    background: $toast-bg;
    color: white;
    padding: 4px 16px;
    border-radius: 4px;
    cursor: default;


    & > .close {
      display: flex;
      align-items: center;
      padding-right: 8px;

      &:hover {
        cursor: pointer;
      }
    }

    & > .close > .line {
      height: 100%;
      border-left: 1px solid white;
      margin: 0 8px;
    }

    & > .close > .close-text {
      flex-shrink: 0;
    }
  }
</style>