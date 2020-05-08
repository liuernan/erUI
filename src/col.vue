<template>
  <div class="col" :class="classList" :style="styleList">
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
      },
      phone: {
        type: Object,
        validator(obj) {
          const keys = Object.keys(obj);
          let validFlag = true;

          keys.forEach((key) => {
            if (!['span', 'offset'].includes(key)) {
              validFlag = false;
            }
          });

          return validFlag;
        }
      }
    },
    data() {
      return {
        gutter: 0
      }
    },
    computed: {
      classList() {
        const {span, offset, phone} = this;
        return [
          span && `col-${span}`,
          offset && `offset-${offset}`,
          phone && phone.span && `col-phone-${phone.span}`,
          phone && phone.offset && `offset-phone-${phone.offset}`
        ]
      },
      styleList() {
        const {gutter} = this;
        return {
          paddingLeft: gutter / 2 + 'px',
          paddingRight: gutter / 2 + 'px'
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .col {
    @for $n from 1 through 24 {
      &.col-#{$n} {
        width: ($n / 24) * 100%;
      }
      &.offset-#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }

    @media (max-width: 576px) {
      @for $n from 1 through 24 {
        &.col-phone-#{$n} {
          width: ($n / 24) * 100%;
        }
        &.offset-phone-#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
  }
</style>