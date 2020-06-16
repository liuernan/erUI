<template>
  <div>
    <p>简单用法：</p>
    <er-button>基本按钮</er-button>
    <er-button icon="settings">左图标</er-button>
    <er-button icon="settings" icon-position="right">右图标</er-button>
    <er-button :loading="loading1" @click="loading1 = !loading1">loading</er-button>
    <er-button disabled>不可用</er-button>
    <p>代码：</p>
    <pre><code>{{simpleCode}}</code></pre>

    <p>按钮组合：</p>
    <er-button-group>
      <er-button icon="left" icon-position="left">上一步</er-button>
      <er-button icon="right" icon-position="right">下一步</er-button>
    </er-button-group>
    <span style="display: block;margin-top: 20px"></span>
    <er-button-group>
      <er-button icon="left" icon-position="left">上一步</er-button>
      <er-button>更多</er-button>
      <er-button icon="right" icon-position="right">下一步</er-button>
    </er-button-group>
    <p>代码：</p>
    <pre><code>{{complexCode}}</code></pre>
  </div>
</template>
<script>
  import Button from '../../../src/components/button/button';
  import ButtonGroup from '../../../src/components/button/button-group';

  export default {
    components: {
      'er-button': Button,
      'er-button-group': ButtonGroup
    },
    data() {
      return {
        simpleCode: `
          <er-button>基本按钮</er-button>
          <er-button icon="settings">左图标</er-button>
          <er-button icon="settings" icon-position="right">右图标</er-button>
          <er-button :loading="loading1" @click="loading1 = !loading1">loading</er-button>
          <er-button disabled>不可用</er-button>`.replace(/ {8}/g, '').trim(),
        complexCode: `
          <er-button-group>
            <er-button icon="left" icon-position="left">上一步</er-button>
            <er-button icon="right" icon-position="right">下一步</er-button>
          </er-button-group>
          <er-button-group>
            <er-button icon="left" icon-position="left">上一步</er-button>
            <er-button>更多</er-button>
            <er-button icon="right" icon-position="right">下一步</er-button>
          </er-button-group>`.replace(/ {8}/g, '').trim(),
        loading1: true
      }
    }
  }
</script>

<style>

</style>