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
        this.$emit('update:selected', selectedItems);
      });

      this.eventHub.$on('removeSelected', (title) => {
        if (this.multiple) {
          selectedItems.splice(selectedItems.indexOf(title), 1);
        } else {
          selectedItems = [];
        }
        this.eventHub.$emit('update:selected', selectedItems);
        this.$emit('update:selected', selectedItems);
      })
    }
  }
</script>

<style lang="scss" scoped>
  $er-collapse-border-color: gray;
  $er-collapse-border-radius: 4px;

  .er-collapse {
    border: 1px solid $er-collapse-border-color;
    border-top-left-radius: $er-collapse-border-radius;
    border-top-right-radius: $er-collapse-border-radius;
  }
</style>