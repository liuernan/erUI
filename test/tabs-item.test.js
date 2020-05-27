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

describe('TabsItem', () => {
  it('存在.', () => {
    expect(TabsItem).to.be.exist;
  });

  describe('的 props 接收', () => {

    const Constructor = Vue.extend(TabsItem);

    it('name', function () {
      const vm = new Constructor({
        propsData: {
          name: 'xxx'
        }
      }).$mount();

      expect(vm.$el.getAttribute('data-name')).to.eq('xxx');

      vm.$el.remove();
      vm.$destroy();
    });

    it('disabled', function () {
      const vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount();

      expect(vm.$el.classList.contains('tabs-item-disabled')).to.be.true;

      const spy = sinon.fake();
      vm.$on('click', spy);
      vm.$el.click();
      expect(spy).to.be.callCount(0);

      vm.$el.remove();
      vm.$destroy();
    });
  });
});