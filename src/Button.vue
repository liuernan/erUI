<template>
  <button class="er-button">
    <svg class="icon">
      <use v-bind:xlink:href="`#icon-${icon}`" />
    </svg>
    <slot></slot>
  </button>
</template>
<script>
export default {
  props: ["icon"]
};
</script>
<style lang="scss">
.er-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
}
</style>