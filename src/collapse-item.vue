<template>
  <div class="er-collapse-item-wrapper">
    <div class="er-collapse-item-title">
      {{title}}
    </div>
    <div class="er-collapse-item-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ErCollapseItem",
    props: {
      title: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  $er-collapse-border-color: gray;
  $er-collapse-border-radius: 4px;

  .er-collapse-item-wrapper {
    margin: -1px;

    &:first-child {
      > .er-collapse-item-title {
        border-top-left-radius: $er-collapse-border-radius;
        border-top-right-radius: $er-collapse-border-radius;
      }
    }


    > .er-collapse-item-title {
      border: 1px solid $er-collapse-border-color;
      min-height: 32px;
      display: flex;
      align-items: center;
      padding: 0 .5em;
      font-weight: 500;
    }

    > .er-collapse-item-content {
      padding: .5em;
    }
  }
</style>