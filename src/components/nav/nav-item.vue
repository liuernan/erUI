<template>
  <div class="er-nav-item" :class="{selected}" @click="clickNavItem">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'ErNavItem',
    inject: ['rootVm'],
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
    },
    created() {
      this.rootVm.navItems.push(this);
    },
    methods: {
      clickNavItem() {
        this.$emit('add:selected', this.name);
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../styles/var";

  .er-nav-item {
    padding: .5em;
    min-width: 6em;
    position: relative;

    &:hover {
      cursor: pointer;
    }

    &.selected {
      &::after {
        content: '';
        position: absolute;
        border: 1px solid $blue;
        width: 100%;
        bottom: 0;
        left: 0;
      }

    }
  }
</style>