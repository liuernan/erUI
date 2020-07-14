<template>
  <div>
    <p>简单 Nav：</p>
    <er-nav :selected.sync="selected">
      <er-nav-item name="home">首页</er-nav-item>
      <er-nav-item name="introduce">产品介绍</er-nav-item>
      <er-nav-item name="about">关于我们</er-nav-item>
      <er-nav-item name="contact">联系我们</er-nav-item>
    </er-nav>
    <p>代码：</p>
    <pre><code>{{simpleCode}}</code></pre>

    <p>可多选的 Nav：</p>
    <er-nav :selected.sync="selected2" multiple>
      <er-nav-item name="home">首页</er-nav-item>
      <er-nav-item name="products1">产品1</er-nav-item>
      <er-nav-item name="products2">产品2</er-nav-item>
      <er-nav-item name="products3">产品3</er-nav-item>
      <er-nav-item name="about">关于我们</er-nav-item>
      <er-nav-item name="contact">联系我们</er-nav-item>
    </er-nav>
    <p>代码：</p>
    <pre><code>{{simpleCode2}}</code></pre>

    <p>支持多级菜单的 Nav：</p>
    <er-nav :selected.sync="selected3">
      <er-nav-item name="home">首页</er-nav-item>
      <er-sub-nav>
        <template slot="title">产品</template>
        <er-nav-item name="products1">产品1</er-nav-item>
        <er-nav-item name="products2">产品2</er-nav-item>
        <er-nav-item name="products3">产品3</er-nav-item>
      </er-sub-nav>
      <er-nav-item name="about">关于我们</er-nav-item>
      <er-nav-item name="contact">联系我们</er-nav-item>
    </er-nav>
    <p>代码：</p>
    <pre><code>{{simpleCode3}}</code></pre>

    <p>支持多级菜单的 Nav：</p>
    <er-nav :selected.sync="selected4">
      <er-nav-item name="home">首页</er-nav-item>
      <er-sub-nav>
        <template slot="title">产品</template>
        <er-nav-item name="products1">产品1</er-nav-item>
        <er-nav-item name="products2">产品2</er-nav-item>
        <er-nav-item name="products3">产品3</er-nav-item>
      </er-sub-nav>
      <er-nav-item name="about">关于我们</er-nav-item>
      <er-sub-nav>
        <template slot="title">联系我们</template>
        <er-sub-nav>
          <template slot="title">网络</template>
          <er-sub-nav>
            <template slot="title">QQ</template>
            <er-nav-item name="qq1">1 号小姐姐 QQ 在线</er-nav-item>
            <er-nav-item name="qq2">2 号小姐姐 QQ 在线</er-nav-item>
            <er-nav-item name="qq3">3 号小姐姐 QQ 在线</er-nav-item>
          </er-sub-nav>
          <er-nav-item name="wechat">微信</er-nav-item>
          <er-nav-item name="weibo">微博</er-nav-item>
        </er-sub-nav>
        <er-sub-nav>
          <template slot="title">电话</template>
          <er-nav-item name="tel">座机</er-nav-item>
          <er-sub-nav>
            <template slot="title">手机</template>
            <er-nav-item name="phone1">1 号小姐姐手机号</er-nav-item>
            <er-nav-item name="phone2">2 号小姐姐手机号</er-nav-item>
            <er-nav-item name="phone3">3 号小姐姐手机号</er-nav-item>
          </er-sub-nav>
        </er-sub-nav>
      </er-sub-nav>
    </er-nav>
    <p>代码：</p>
    <pre><code>{{simpleCode4}}</code></pre>


  </div>
</template>
<script>
  import ErNav from '../../../src/components/nav/nav';
  import ErSubNav from '../../../src/components/nav/sub-nav';
  import ErNavItem from '../../../src/components/nav/nav-item';

  export default {
    components: {ErNav, ErSubNav, ErNavItem},
    data() {
      return {
        simpleCode: `
<er-nav :selected.sync="selected">
  <er-nav-item name="home">首页</er-nav-item>
  <er-nav-item name="introduce">产品介绍</er-nav-item>
  <er-nav-item name="about">关于我们</er-nav-item>
  <er-nav-item name="contact">联系我们</er-nav-item>
</er-nav>`.replace(/ {8}/g, '').trim(),
        simpleCode2: `
<er-nav :selected.sync="selected2" multiple>
  <er-nav-item name="home">首页</er-nav-item>
  <er-nav-item name="products1">产品1</er-nav-item>
  <er-nav-item name="products2">产品2</er-nav-item>
  <er-nav-item name="products3">产品3</er-nav-item>
  <er-nav-item name="about">关于我们</er-nav-item>
  <er-nav-item name="contact">联系我们</er-nav-item>
</er-nav>`.replace(/ {8}/g, '').trim(),
        simpleCode3: `
// CSS
.er-nav-item {
  z-index: 30 !important;
}

// JS
<er-nav :selected.sync="selected3">
  <er-nav-item name="home">首页</er-nav-item>
  <er-sub-nav>
    <template slot="title">产品</template>
    <er-nav-item name="products1">产品1</er-nav-item>
    <er-nav-item name="products2">产品2</er-nav-item>
    <er-nav-item name="products3">产品3</er-nav-item>
  </er-sub-nav>
  <er-nav-item name="about">关于我们</er-nav-item>
  <er-nav-item name="contact">联系我们</er-nav-item>
</er-nav>`.replace(/ {8}/g, '').trim(),
        simpleCode4: `
// CSS
.er-nav-item {
  z-index: 30 !important;
}

// JS
<er-nav :selected.sync="selected4">
  <er-nav-item name="home">首页</er-nav-item>
  <er-sub-nav>
    <template slot="title">产品</template>
    <er-nav-item name="products1">产品1</er-nav-item>
    <er-nav-item name="products2">产品2</er-nav-item>
    <er-nav-item name="products3">产品3</er-nav-item>
  </er-sub-nav>
  <er-nav-item name="about">关于我们</er-nav-item>
  <er-sub-nav>
    <template slot="title">联系我们</template>
    <er-sub-nav>
      <template slot="title">网络</template>
      <er-sub-nav>
        <template slot="title">QQ</template>
        <er-nav-item name="qq1">1 号小姐姐 QQ 在线</er-nav-item>
        <er-nav-item name="qq2">2 号小姐姐 QQ 在线</er-nav-item>
        <er-nav-item name="qq3">3 号小姐姐 QQ 在线</er-nav-item>
      </er-sub-nav>
      <er-nav-item name="wechat">微信</er-nav-item>
      <er-nav-item name="weibo">微博</er-nav-item>
    </er-sub-nav>
    <er-sub-nav>
      <template slot="title">电话</template>
      <er-nav-item name="tel">座机</er-nav-item>
      <er-sub-nav>
        <template slot="title">手机</template>
        <er-nav-item name="phone1">1 号小姐姐手机号</er-nav-item>
        <er-nav-item name="phone2">2 号小姐姐手机号</er-nav-item>
        <er-nav-item name="phone3">3 号小姐姐手机号</er-nav-item>
      </er-sub-nav>
    </er-sub-nav>
  </er-sub-nav>
</er-nav>`.replace(/ {8}/g, '').trim(),

        selected: ['home'],
        selected2: ['products1', 'products2', 'products3'],
        selected3: ['contact'],
        selected4: ['about']
      }
    }
  }
</script>

<style lang="scss" scoped>
  .er-nav-item {
    z-index: 30 !important;
  }

</style>