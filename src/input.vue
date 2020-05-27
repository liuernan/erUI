<template>
  <div class="warpper" :class="error">
    <input type="text" :value="value" :disabled="disabled" :readonly="readonly"
           @click="$emit('click', $event.target.value)"
           @focus="$emit('focus', $event.target.value)"
           @input="$emit('input', $event.target.value)"
           @change="$emit('change', $event.target.value)"
           @blur="$emit('blur', $event.target.value)"

    />
    <template v-if="error">
      <er-icon name="error" class="error-icon"></er-icon>
      <span class="error-message">{{error}}</span>
    </template>
    <template v-else-if="tips">
      <er-icon name="tips" class="tips-icon"></er-icon>
      <span class="tips-message">{{tips}}</span>
    </template>
  </div>
</template>
<script>
  import Icon from './icon'

  export default {
    name: 'er-ui-input',
    components: {
      'er-icon': Icon
    },
    props: {
      value: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
      error: {
        type: String,
        default: ''
      },
      tips: {
        type: String,
        default: ''
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "var";

  .warpper {
    display: inline-flex;
    align-items: center;

    > input {
      height: $input-height;
      border: 1px solid $border-color;
      font-size: inherit;
      padding: 0 8px;
      border-radius: 4px;

      &:hover {
        border-color: $border-color-hover;
      }

      &:focus {
        outline: none;
        box-shadow: inset 0 1px 2px $box-shadow;
      }

      &[disabled],
      &[readonly] {
        border-color: #bbb;
        color: #bbb;
        cursor: not-allowed;
      }
    }

    .error {
      > input {
        border-color: $error-color;
      }
    }

    .error-icon {
      fill: $error-color;
    }

    .error-message {
      color: $error-color;
    }

    :not(:last-child) {
      margin-right: .2em;
    }

    .tips {
      > input {
        border-color: $tips-color;
      }
    }

    .tips-icon {
      fill: $tips-color;
    }

    .tips-message {
      color: $tips-color;
    }

  }
</style>