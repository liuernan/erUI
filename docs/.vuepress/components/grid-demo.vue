<template>
  <div>
    <p>设计理念：按照 24 等分的原则进行划分。</p>
    <p><b>注意：请在用到该组件的父元素上设置 CSS 的 <code>box-sizing</code> 属性为 <code>border-box</code>，建议最好将整个项目都添加该样式。</b></p>
    <p>基本用法，通过 <code>span</code> 给每个块指定宽度所占的比例，一个 <code>er-row</code> 组件下面的所有 <code>span</code> 之和为 24：</p>
    <div>
      <er-row class="row">
        <er-col class="col" :span="12">12</er-col>
        <er-col class="col" :span="12">12</er-col>
      </er-row>
      <er-row class="row">
        <er-col class="col" :span="8">8</er-col>
        <er-col class="col" :span="8">8</er-col>
        <er-col class="col" :span="8">8</er-col>
      </er-row>
      <er-row class="row">
        <er-col class="col" :span="6">6</er-col>
        <er-col class="col" :span="6">6</er-col>
        <er-col class="col" :span="6">6</er-col>
        <er-col class="col" :span="6">6</er-col>
      </er-row>
      <er-row class="row">
        <er-col class="col" :span="2">2</er-col>
        <er-col class="col" :span="22">22</er-col>
      </er-row>
      <er-row class="row">
        <er-col class="col" :span="2">2</er-col>
        <er-col class="col" :span="6">6</er-col>
        <er-col class="col" :span="16">16</er-col>
      </er-row>
    </div>
    <p>代码：</p>
    <pre class="codeContent"><code>{{simpleCode}}</code></pre>

    <p>还可以通过 <code>offset</code> 来指定块与块之间的间隔，需要注意的是，一个 <code>er-row</code> 组件下面的所有 <code>span</code> 和
      <code>offset</code> 相加之和为 24：</p>
    <div>
      <er-row class="row">
        <er-col class="col" span="2">2</er-col>
        <er-col class="col" :span="20" :offset="2">22</er-col>
      </er-row>
      <er-row class="row">
        <er-col class="col" :span="8">8</er-col>
        <er-col class="col" :span="2">2</er-col>
        <er-col class="col" :span="12" :offset="2">12</er-col>
      </er-row>
      <er-row class="row">
        <er-col class="col" :span="4">4</er-col>
        <er-col class="col" :span="6" :offset="2">6</er-col>
        <er-col class="col" :span="10" :offset="2">10</er-col>
      </er-row>
      <er-row class="row">
        <er-col class="col" :span="4">4</er-col>
        <er-col class="col" :span="4" :offset="1">4</er-col>
        <er-col class="col" :span="4" :offset="1">4</er-col>
        <er-col class="col" :span="4" :offset="1">4</er-col>
        <er-col class="col" :span="4" :offset="1">4</er-col>
      </er-row>
    </div>
    <p>代码：</p>
    <pre class="codeContent"><code>{{spanCode}}</code></pre>

    <p>还可以通过 <code>gutter</code> 来设置 <code>er-row</code> 组件下面的所有 <code>er-col</code> 的左右padding：</p>
    <div>
      <er-row class="row" :gutter="20">
        <er-col class="col" span="11">左右 padding 各是 10px</er-col>
        <er-col class="col" :span="11" :offset="2">左右 padding 各是 10px</er-col>
      </er-row>
    </div>
    <p>代码：</p>
    <pre><code>{{gutterCode}}</code></pre>

    <p>还支持响应式，且采用了移动端优先的原则，向下兼容：</p>
    <div>
      <er-row>
        <er-col class="col"
                :span="2"
                :ipad="{span: 8}"
                :narrow-pc="{span: 12}"
                :pc="{span: 16}"
                :wide-pc="{span: 20}"
        >支持 span 和 offset 两个属性响应式</er-col>
        <er-col class="col"
                :span="22"
                :ipad="{span: 16}"
                :narrow-pc="{span: 12}"
                :pc="{span: 8}"
                :wide-pc="{span: 4}"
        ></er-col>
      </er-row>
    </div>
    <p>代码：</p>
    <pre class="codeContent"><code>{{reactiveCode}}</code></pre>

  </div>
</template>
<script>
  import Row from '../../../src/components/row';
  import Col from '../../../src/components/col';

  export default {
    components: {
      'er-row': Row,
      'er-col': Col
    },
    data() {
      return {
        simpleCode: `
          <er-row class="row">
            <er-col class="col" :span="12">12</er-col>
            <er-col class="col" :span="12">12</er-col>
          </er-row>
          <er-row class="row">
            <er-col class="col" :span="8">8</er-col>
            <er-col class="col" :span="8">8</er-col>
            <er-col class="col" :span="8">8</er-col>
          </er-row>
          <er-row class="row">
            <er-col class="col" :span="6">6</er-col>
            <er-col class="col" :span="6">6</er-col>
            <er-col class="col" :span="6">6</er-col>
            <er-col class="col" :span="6">6</er-col>
          </er-row>
          <er-row class="row">
            <er-col class="col" :span="2">2</er-col>
            <er-col class="col" :span="22">22</er-col>
          </er-row>
          <er-row class="row">
            <er-col class="col" :span="2">2</er-col>
            <er-col class="col" :span="6">6</er-col>
            <er-col class="col" :span="16">16</er-col>
          </er-row>`.replace(/ {8}/g, '').trim(),
        spanCode: `
          <er-row class="row">
            <er-col class="col" span="2">2</er-col>
            <er-col class="col" :span="20" :offset="2">22</er-col>
          </er-row>
          <er-row class="row">
            <er-col class="col" :span="8">8</er-col>
            <er-col class="col" :span="2">2</er-col>
            <er-col class="col" :span="12" :offset="2">12</er-col>
          </er-row>
          <er-row class="row">
            <er-col class="col" :span="4">4</er-col>
            <er-col class="col" :span="6" :offset="2">6</er-col>
            <er-col class="col" :span="10" :offset="2">10</er-col>
          </er-row>
          <er-row class="row">
            <er-col class="col" :span="4">4</er-col>
            <er-col class="col" :span="4" :offset="1">4</er-col>
            <er-col class="col" :span="4" :offset="1">4</er-col>
            <er-col class="col" :span="4" :offset="1">4</er-col>
            <er-col class="col" :span="4" :offset="1">4</er-col>
          </er-row>`.replace(/ {8}/g, '').trim(),
        gutterCode: `
          <er-row class="row" :gutter="20">
            <er-col class="col" span="11">左右 padding 各是 10px</er-col>
            <er-col class="col" :span="11" :offset="2">左右 padding 各是 10px</er-col>
          </er-row>`.replace(/ {8}/g, '').trim(),
        reactiveCode: `
          <er-row>
            <er-col class="col"
                    :span="2"
                    :ipad="{span: 8}"
                    :narrow-pc="{span: 12}"
                    :pc="{span: 16}"
                    :wide-pc="{span: 20}"
            >支持 span 和 offset 两个属性响应式</er-col>
            <er-col class="col"
                    :span="22"
                    :ipad="{span: 16}"
                    :narrow-pc="{span: 12}"
                    :pc="{span: 8}"
                    :wide-pc="{span: 4}"
            ></er-col>
          </er-row>`.replace(/ {8}/g, '').trim()
      }
    }
  }
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }

  .row {
    margin: 10px auto;
  }

  .col {
    border: 1px dotted gray;
    background-color: lightpink;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .codeContent {
    height: 230px;
  }
</style>