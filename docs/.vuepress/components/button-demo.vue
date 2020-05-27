<template>
  <div>
    <er-button>基本按钮</er-button>
    <er-button icon="settings">左图标</er-button>
    <er-button icon="settings" icon-position="right">右图标</er-button>
    <er-button :loading="true">loading</er-button>
    <er-button disabled>不可用</er-button>
    <div>
      <pre><code>{{code}}</code></pre>
    </div>
  </div>
</template>
<script>
  import Button from '../../../src/components/button';

  export default {
    components: {
      'er-button': Button
    },
    data() {
      return {
        code:
`<er-button>基本按钮</er-button>
<er-button icon="settings">左图标</er-button>
<er-button icon="settings" icon-position="right">右图标</er-button>
<er-button :loading="true">loading</er-button>
<er-button disabled>不可用</er-button>`
      }
    },
    props: {
      loading1: false,
      loading2: false
    }
  }
</script>

<style>

</style>