<template>
  <div class="er-collapse">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue';

  export default {
    name: "ErCollapse",
    props: {
      selected: {
        type: Array
      },
      multiple: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        eventHub: new Vue()
      }
    },
    provide() {
      return {
        eventHub: this.eventHub
      }
    },
    mounted() {
      this.eventHub.$emit('update:selected', this.selected);

      let selectedItems = JSON.parse(JSON.stringify(this.selected));

      this.eventHub.$on('addSelected', (title) => {
        if (this.multiple) {
          selectedItems.push(title);
        } else {
          selectedItems = [title];
        }
        this.eventHub.$emit('update:selected', selectedItems);
        this.$emit('update:selected', selectedItems, this);
      });

      this.eventHub.$on('removeSelected', (title) => {
        if (this.multiple) {
          selectedItems.splice(selectedItems.indexOf(title), 1);
        } else {
          selectedItems = [];
        }
        this.eventHub.$emit('update:selected', selectedItems);
        this.$emit('update:selected', selectedItems, this);
      })
    }
  }
</script>

<style lang="scss" scoped>
  @import "src/components/var";

  .er-collapse {
    border: 1px solid $border-color;
    border-top-left-radius: $border-radius;
    border-top-right-radius: $border-radius;
  }
</style>