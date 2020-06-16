<template>
  <div>
    <p>布局：</p>
    <er-tabs :selected.sync="selectedTab" direction="horizontal">
      <er-tabs-nav>
        <template slot="er-nav-button">
          <er-button icon="settings">操作按钮</er-button>
        </template>
        <er-tabs-item class="item-test" @click="selectedTab = $event.name" name="women">美女</er-tabs-item>
        <er-tabs-item class="item-test" @click="selectedTab = $event.name" name="live">直播</er-tabs-item>
        <er-tabs-item class="item-test" @click="selectedTab = $event.name" name="videos" disabled>小电影</er-tabs-item>
      </er-tabs-nav>
      <er-tabs-content>
        <er-tabs-panel class="panel-test" name="women">美女的区域美女的区域美女的区域美女的区域美女的区域美女的区域</er-tabs-panel>
        <er-tabs-panel class="panel-test" name="live">直播的区域直播的区域直播的区域直播的区域直播的区域直播的区域直播的区域</er-tabs-panel>
        <er-tabs-panel class="panel-test" name="videos">全是小电影全是小电影全是小电影全是小电影全是小电影全是小电影全是小电影全是小电影全是小电影</er-tabs-panel>
      </er-tabs-content>
    </er-tabs>
    <p>选中的 Tab 是：{{selectedTab}}</p>
    <p>代码：</p>
    <pre><code>{{selectedCode}}</code></pre>
  </div>
</template>
<script>
  import Tabs from '../../../src/components/tabs/tabs';
  import TabsNav from '../../../src/components/tabs/tabs-nav';
  import TabsContent from '../../../src/components/tabs/tabs-content';
  import TabsItem from '../../../src/components/tabs/tabs-item';
  import TabsPanel from '../../../src/components/tabs/tabs-panel';
  import Button from '../../../src/components/button/button';

  export default {
    components: {
      'er-tabs': Tabs,
      'er-tabs-nav': TabsNav,
      'er-tabs-content': TabsContent,
      'er-tabs-item': TabsItem,
      'er-tabs-panel': TabsPanel,
      'er-button': Button
    },
    data() {
      return {
        selectedTab: 'live',
        selectedCode: `
          <er-tabs-nav>
            <template slot="er-nav-button">
              <er-button icon="settings">操作按钮</er-button>
            </template>
            <er-tabs-item class="item-test" @click="selectedTab = $event.name" name="women">美女</er-tabs-item>
            <er-tabs-item class="item-test" @click="selectedTab = $event.name" name="live">直播</er-tabs-item>
            <er-tabs-item class="item-test" @click="selectedTab = $event.name" name="videos" disabled>小电影</er-tabs-item>
          </er-tabs-nav>
          <er-tabs-content>
            <er-tabs-panel class="panel-test" name="women">美女的区域美女的区域美女的区域美女的区域美女的区域美女的区域</er-tabs-panel>
            <er-tabs-panel class="panel-test" name="live">直播的区域直播的区域直播的区域直播的区域直播的区域直播的区域直播的区域</er-tabs-panel>
            <er-tabs-panel class="panel-test" name="videos">全是小电影全是小电影全是小电影全是小电影全是小电影全是小电影全是小电影全是小电影全是小电影</er-tabs-panel>
          </er-tabs-content>
        </er-tabs>`.replace(/ {8}/g, '').trim()
      }
    }
  }
</script>

<style scoped>

</style>