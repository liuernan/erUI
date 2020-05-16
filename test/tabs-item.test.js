const expect = chai.expect;
import Vue from 'vue';
import TabsItem from '../src/tabs-item';

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('TabsItem', () => {
  it('存在.', () => {
    expect(TabsItem).to.be.exist;
  })
});