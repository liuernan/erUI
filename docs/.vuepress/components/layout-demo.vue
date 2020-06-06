<template>
  <div>
    <p>布局：</p>
    <er-layout class="layout">
      <er-header class="header">header</er-header>
      <er-content class="content">content</er-content>
      <er-footer class="footer">footer</er-footer>
    </er-layout>
    <p>代码：</p>
    <pre><code>{{layoutCode1}}</code></pre>

    <p>布局：</p>
    <er-layout>
      <er-sider class="sider">sider</er-sider>
      <er-layout>
        <er-header class="header">header</er-header>
        <er-content class="content">content</er-content>
        <er-footer class="footer">footer</er-footer>
      </er-layout>
    </er-layout>
    <p>代码：</p>
    <pre><code>{{layoutCode2}}</code></pre>

    <p>布局：</p>
    <er-layout>
      <er-header class="header">header</er-header>
      <er-layout>
        <er-content class="content">content</er-content>
        <er-sider class="sider">sider</er-sider>
      </er-layout>
      <er-footer class="footer">footer</er-footer>
    </er-layout>
    <p>代码：</p>
    <pre><code>{{layoutCode3}}</code></pre>

    <p>布局：</p>
    <er-layout>
      <er-header class="header">header</er-header>
      <er-layout>
        <er-sider class="sider">sider</er-sider>
        <er-content class="content">content</er-content>
      </er-layout>
      <er-footer class="footer">footer</er-footer>
    </er-layout>
    <p>代码：</p>
    <pre><code>{{layoutCode4}}</code></pre>
  </div>
</template>
<script>
  import Layout from '../../../src/components/layout';
  import Header from '../../../src/components/header';
  import Content from '../../../src/components/content';
  import Footer from '../../../src/components/footer';
  import Sider from '../../../src/components/sider';

  export default {
    components: {
      'er-layout': Layout,
      'er-header': Header,
      'er-content': Content,
      'er-footer': Footer,
      'er-sider': Sider
    },
    data() {
      return {
        layoutCode1: `
          <er-layout class="layout">
            <er-header class="header">header</er-header>
            <er-content class="content">content</er-content>
            <er-footer class="footer">footer</er-footer>
          </er-layout>`.replace(/ {8}/g, '').trim(),
        layoutCode2: `
              <er-layout>
            <er-sider class="sider">sider</er-sider>
            <er-layout>
              <er-header class="header">header</er-header>
              <er-content class="content">content</er-content>
              <er-footer class="footer">footer</er-footer>
            </er-layout>
          </er-layout>`.replace(/ {8}/g, '').trim(),
        layoutCode3: `
          <er-layout>
            <er-header class="header">header</er-header>
            <er-layout>
              <er-content class="content">content</er-content>
              <er-sider class="sider">sider</er-sider>
            </er-layout>
            <er-footer class="footer">footer</er-footer>
          </er-layout>`.replace(/ {8}/g, '').trim(),
        layoutCode4: `
          <er-layout>
            <er-header class="header">header</er-header>
            <er-layout>
              <er-sider class="sider">sider</er-sider>
              <er-content class="content">content</er-content>
            </er-layout>
            <er-footer class="footer">footer</er-footer>
          </er-layout>`.replace(/ {8}/g, '').trim()
      }
    }
  }
</script>

<style scoped>
  .layout {
    height: 400px;
    background-color: lightgreen;
  }

  .header {
    height: 100px;
    background-color: deepskyblue;
  }

  .sider {
    width: 100px;
    background-color: lightskyblue;
  }

  .content {
    background-color: pink;
  }

  .footer {
    height: 100px;
    background-color: skyblue;
  }
</style>