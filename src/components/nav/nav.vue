<template>
  <div class="er-nav">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'ErNav',

    props: {
      selected: {
        type: Array,
        default: []
      },
      multiple: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        navItems: []
      }
    },

    provide() {
      return {
        rootVm: this
      }
    },

    mounted() {
      this.updateChildren();
      this.listenToChildren();
    },

    updated() {
      this.updateChildren();
    },

    methods: {
      updateChildren() {
        this.navItems.forEach(vm => {
          if (this.selected.indexOf(vm.name) !== -1) {
            vm.selected = true;
          } else {
            vm.selected = false;
          }

        });
      },

      listenToChildren() {
        this.navItems.forEach(vm => {
          vm.$on('add:selected', (navItemName) => {
            if (this.multiple) {
              let copySelected = JSON.parse(JSON.stringify(this.selected));
              if (copySelected.indexOf(name) === -1) {
                copySelected.push(navItemName);
                this.$emit('update:selected', copySelected);
              }
            } else {
              if (this.selected[0] === navItemName) return;
              this.$emit('update:selected', [navItemName])
            }
          })
        });
      }
    }
  }
</script>
<style lang="scss" scoped>
  .er-nav {
    display: flex;
    border: 1px solid red;
  }
</style>