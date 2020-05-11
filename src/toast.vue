<template>
  <div class="toast">
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
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: $font-size;
    min-height: $toast-min-height;
    background: $toast-bg;
    color: white;
    padding: 4px 16px;
    border-radius: 4px;
  }
</style>