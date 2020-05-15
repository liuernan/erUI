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
          'tabs-item-active': this.active
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
        this.eventHub.$emit('update:selected', this.name);
      }
    }
  }
</script>
<style lang="scss" scoped>
  .tabs-item {
    padding: 0 1em;

    &:hover {
      cursor: pointer;
    }

    &.tabs-item-active {
      background-color: pink;
    }
  }
</style>