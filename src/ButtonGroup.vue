<template>
  <div class="er-button-group">
    <slot></slot>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="scss">
  .er-button-group {
    display: inline-flex;
    vertical-align: middle;

    > .er-button {
      border-radius: 0;

      &:not(:first-child) {
        margin-left: -1px;
      }

      &:first-child {
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
      }

      &:last-child {
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
      }

      &:hover {
        z-index: 1;
      }
    }
  }
</style>