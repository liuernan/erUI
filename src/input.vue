<template>
  <div class="warpper">
    <input type="text"/>
  </div>
</template>
<script>
  export default {
    name: 'er-ui-input'
  }
</script>
<style lang="scss" scoped>
  $height: 30px;
  $border-color: #999;
  $border-color-hover: #666;
  $box-shadow-color: rgba(0, 0, 0, .5);

  .warpper {
    > input {
      height: $height;
      border: 1px solid $border-color;
      font-size: inherit;
      padding: 0 8px;
      border-radius: 4px;

      &:hover {
        border-color: $border-color-hover;
      }

      &:focus {
        outline: none;
        box-shadow: inset 0 1px 2px $box-shadow-color;
      }
    }
  }
</style>