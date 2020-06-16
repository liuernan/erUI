<template>
  <!-- todo: er-button-icon-${iconPosition} 传了 icon 才添加，不传不额外增加这个 class -->
  <button class="er-button" :class="{[`er-button-icon-${iconPosition}`]: true}" @click="$emit('click')">
    <er-icon v-if="icon && !loading" class="er-button-icon" :name=icon></er-icon>
    <er-icon class="er-button-icon loading" v-if="loading" name="loading"></er-icon>
    <div class="er-button-content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
  import Icon from "../icon";

  export default {
    name: 'er-button',
    components: {
      "er-icon": Icon
    },
    props: {
      icon: {
        type: String
      },
      loading: {
        type: Boolean,
        default: false
      },
      iconPosition: {
        type: String,
        default: 'left',
        validator(value) {
          return value === "left" || value === "right";
        }
      }
    }
  };
</script>
<style lang="scss" scoped>
  @import "src/components/var";

  .er-button {
    font-size: $font-size;
    height: $button-height;
    padding: 0 1em;
    border-radius: $border-radius;
    border: 1px solid $border-color;
    background: $button-bg;
    display: inline-flex;
    align-content: center;
    align-items: center;
    vertical-align: middle;

    &:hover {
      border-color: $border-color-hover;
    }

    &:active {
      background-color: $button-active-bg;
    }

    &:focus {
      outline: none;
    }

    > .er-button-icon {
      order: 1;
      margin-right: .2em;
    }

    > .er-button-content {
      order: 2;
    }

    &.er-button-icon-right {
      > .er-button-icon {
        order: 2;
        margin-right: 0;
        margin-left: .2em;
      }

      > .er-button-content {
        order: 1;
      }
    }

    .loading {
      animation: spin 1s infinite linear;
    }
  }
</style>