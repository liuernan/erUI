<template>
  <div class="tabs-item" :class="classList" @click="clickItem">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'ErTabsItem',
    props: {
      name: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        active: {
          type: Boolean,
          default: false
        }
      }
    },
    computed: {
      classList() {
        return {
          'tabs-item-active': this.active,
          'tabs-item-disabled': this.disabled
        }
      }
    },
    inject: ['eventHub'],
    mounted() {
      this.eventHub.$on('update:selected', (name) => {
        this.active = name === this.name;
      });
    },
    methods: {
      clickItem() {
        if (this.disabled) return false;
        this.eventHub.$emit('update:selected', this.name);
      }
    }
  }
</script>
<style lang="scss" scoped>
  $tabs-item-height: 40px;
  $tabs-item-active-bg: lightpink;
  $tabs-item-disabled-bg: lightgray;
  .tabs-item {
    padding: 0 1em;
    height: $tabs-item-height;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    display: flex;
    align-items: center;

    &:hover {
      cursor: pointer;
    }

    &.tabs-item-active {
      background-color: $tabs-item-active-bg;
    }

    &.tabs-item-disabled {
      background: $tabs-item-disabled-bg;
      cursor: not-allowed;
    }
  }
</style>