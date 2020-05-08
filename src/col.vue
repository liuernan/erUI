<template>
  <div class="col" :class="classList" :style="styleList">
    <slot></slot>
  </div>
</template>
<script>
  const checkResponsiveParams = (obj) => {
    const keys = Object.keys(obj);
    let validFlag = true;

    keys.forEach((key) => {
      if (!['span', 'offset'].includes(key)) {
        validFlag = false;
      }
    });

    return validFlag;
  };

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
        validator: checkResponsiveParams
      },
      ipad: {
        type: Object,
        validator: checkResponsiveParams
      },
      narrowPc: {
        type: Object,
        validator: checkResponsiveParams
      },
      pc: {
        type: Object,
        validator: checkResponsiveParams
      },
      widePc: {
        type: Object,
        validator: checkResponsiveParams
      }
    },
    data() {
      return {
        gutter: 0
      }
    },
    computed: {
      classList() {
        const {span, offset, phone, ipad, narrowPc, pc, widePc} = this;
        return [
          span && `col-${span}`,
          offset && `offset-${offset}`,
          phone && this.createClasses(phone, 'phone'),
          ipad && this.createClasses(ipad, 'ipad'),
          narrowPc && this.createClasses(narrowPc, 'narrowPc'),
          pc && this.createClasses(pc, 'pc'),
          widePc && this.createClasses(widePc, 'widePc'),
        ]
      },
      styleList() {
        const {gutter} = this;
        return {
          paddingLeft: gutter / 2 + 'px',
          paddingRight: gutter / 2 + 'px'
        }
      }
    },
    methods: {
      createClasses(obj, str) {
        let classesArr = [];

        obj.span && classesArr.push('col-' + str + '-' + obj.span);
        obj.offset && classesArr.push('offset-' + str + '-' + obj.offset);

        return classesArr;
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

    @media (min-width: 577px) {
      @for $n from 1 through 24 {
        &.col-ipad-#{$n} {
          width: ($n / 24) * 100%;
        }
        &.offset-ipad-#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }

    @media (min-width: 769px) {
      @for $n from 1 through 24 {
        &.col-narrowPc-#{$n} {
          width: ($n / 24) * 100%;
        }
        &.offset-narrowPc-#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }

    @media (min-width: 993px) {
      @for $n from 1 through 24 {
        &.col-pc-#{$n} {
          width: ($n / 24) * 100%;
        }
        &.offset-pc-#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }

    @media (min-width: 1201px) {
      @for $n from 1 through 24 {
        &.col-widePc-#{$n} {
          width: ($n / 24) * 100%;
        }
        &.offset-widePc-#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
  }
</style>