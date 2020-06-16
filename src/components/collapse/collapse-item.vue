<template>
  <div class="er-collapse-item-wrapper">
    <div class="er-collapse-item-title" @click="clickItem">
      {{title}}
    </div>
    <div class="er-collapse-item-content" v-if="open">
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
    },
    data() {
      return {
        open: false
      }
    },
    inject: ['eventHub'],
    mounted() {
      this.eventHub.$on('update:selected', (selected) => {
        if (selected.indexOf(this.title) !== -1) {
          this.open = true;
        } else {
          this.open = false;
        }
      })
    },
    methods: {
      clickItem() {
        if (this.open) {
          this.eventHub.$emit('removeSelected', this.title)
        } else {
          this.eventHub.$emit('addSelected', this.title);
        }
        this.$emit('click', this);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../styles/var";
  .er-collapse-item-wrapper {
    margin: -1px;

    &:first-child {
      > .er-collapse-item-title {
        border-top-left-radius: $border-radius;
        border-top-right-radius: $border-radius;
      }
    }


    > .er-collapse-item-title {
      border: 1px solid $border-color;
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