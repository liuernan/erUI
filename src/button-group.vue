<template>
  <div class="er-button-group">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    mounted() {
      for (let element of this.$el.children) {
        if ("button" !== element.localName) {
          console.warn("er-button-group 组件里面应该只有 er-button，你写了一个 " + element.localName)
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
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