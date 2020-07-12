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
      clickNavItem(){
        this.$emit('add:selected', this.name);
      }
    }
  }
</script>
<style lang="scss" scoped>
  .er-nav-item {
    border: 1px solid black;
    padding: .5em;
    min-width: 6em;

    &:hover {
      cursor: pointer;
    }
    &.selected {
      background-color: red;
    }
  }
</style>