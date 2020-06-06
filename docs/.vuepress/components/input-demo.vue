<template>
  <div>
    <p>简单用法：</p>
    <er-input></er-input>
    <span style="display: block;margin-top: 20px"></span>
    <er-input v-model="message"></er-input><span style="margin-left: 20px">{{ message }}</span>
    <span style="display: block;margin-top: 20px"></span>
    <er-input value="disabled" disabled></er-input>
    <span style="display: block;margin-top: 20px"></span>
    <er-input value="readonly" readonly></er-input>
    <p>代码：</p>
    <pre><code>{{simpleCode}}</code></pre>

    <p>带提示信息：</p>
    <er-input value="我被 error" error="你怎么可能有错"></er-input>
    <span style="display: block;margin-top: 20px"></span>
    <er-input value="我被 tips" tips="我就是想提示你点什么"></er-input>
    <p>代码：</p>
    <pre><code>{{tipsCode}}</code></pre>
  </div>
</template>
<script>
  import Input from '../../../src/components/input';

  export default {
    components: {
      'er-input': Input
    },
    data() {
      return {
        simpleCode: `
          <er-input></er-input>
          <er-input v-model="message"></er-input>
          <er-input value="disabled" disabled></er-input>
          <er-input value="readonly" readonly></er-input>`.replace(/ {8}/g, '').trim(),
        message: '数据双向绑定',
        tipsCode:`
          <er-input value="我被 error" error="你怎么可能有错"></er-input>
          <er-input value="我被 tips" tips="我就是想提示你点什么"></er-input>`.replace(/ {8}/g, '').trim()
      }
    }
  }
</script>

<style>

</style>