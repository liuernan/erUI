<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'ErToast'
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