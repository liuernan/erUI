const expect = chai.expect;

import Vue from 'vue';

Vue.config.productionTip = false;
Vue.config.devtools = false;

import Tabs from '../src/components/tabs';
import TabsNav from '../src/components/tabs-nav';
import TabsItem from '../src/components/tabs-item';
import TabsContent from '../src/components/tabs-content';
import TabsPanel from '../src/components/tabs-panel';
Vue.component('er-tabs', Tabs);
Vue.component('er-tabs-nav', TabsNav);
Vue.component('er-tabs-item', TabsItem);
Vue.component('er-tabs-content', TabsContent);
Vue.component('er-tabs-panel', TabsPanel);

describe('Tabs', () => {
  it('存在.', () => {
    expect(Tabs).to.be.exist;
  });

  describe('的 props 接收', () => {
    it('selected', (done) => {
      const div = document.createElement('div');
      div.innerHTML = `    
        <er-tabs :selected.sync="selectedTab" direction="horizontal">
          <er-tabs-nav>
            <template slot="er-nav-button">
              <button icon="settings">操作按钮</button>
            </template>
            <er-tabs-item class="item-test" name="women">美女</er-tabs-item>
            <er-tabs-item class="item-test" name="live">直播</er-tabs-item>
            <er-tabs-item class="item-test" name="videos" disabled>小电影</er-tabs-item>
          </er-tabs-nav>
          <er-tabs-content>
            <er-tabs-panel class="panel-test" name="women">美女的区域美女的区域美女的区域美女的区域美女的区域美女的区域</er-tabs-panel>
            <er-tabs-panel class="panel-test" name="live">直播的区域直播的区域直播的区域直播的区域直播的区域直播的区域直播的区域</er-tabs-panel>
            <er-tabs-panel class="panel-test" name="videos">全是小电影全是小电影全是小电影全是小电影全是小电影全是小电影全是小电影全是小电影全是小电影</er-tabs-panel>
          </er-tabs-content>
        </er-tabs>
      `;
      const vm = new Vue({
        el: div,
        data: {
          selectedTab: 'live'
        }
      });

      vm.$nextTick(() => {
        const items = vm.$el.querySelectorAll('.tabs-item');
        const panels = vm.$el.querySelectorAll('.tabs-panel');

        items.forEach((item)=>{
          if ('live' === item.getAttribute('data-name')) {
            expect(item.classList.contains('tabs-item-active')).to.eq(true);
          } else {
            expect(item.classList.contains('tabs-item-active')).to.eq(false);
          }
        });

        expect(panels.length).to.eq(1);
        expect(panels[0].getAttribute('data-name')).to.eq('live');

        vm.$el.remove();
        vm.$destroy();
        done();
      });
    });
  });
});