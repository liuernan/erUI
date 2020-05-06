<template>
  <div class="col" :class="[span && `col-${span}`, offset && `offset-${offset}`]">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'erCol',
    props: {
      span: {
        type: [Number, String]
      },
      offset: {
        type: [Number, String]
      }
    }
  }
</script>
<style lang="scss" scoped>
  .col {
    height: 100px;
    width: 50%;
    background-color: pink;
    border: 1px dotted grey;

    @for $n from 1 through 24 {
      &.col-#{$n} {
        width: ($n / 24) * 100%;
      }
      &.offset-#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
</style>