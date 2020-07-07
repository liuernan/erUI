<template>
  <div class="er-nav-item" :class="{selected}">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'ErNavItem',
    props: {
      name: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        selected: false
      }
    }
  }
</script>
<style lang="scss" scoped>
  .er-nav-item {
    border: 1px solid black;
    padding: .5em;

    &:hover {
      cursor: pointer;
    }
    &.selected {
      background-color: red;
    }
  }
</style>