const expect = chai.expect;
import Vue from 'vue';
import TabsPanel from '../src/components/tabs-panel';

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('TabsPanel', () => {
  it('存在.', () => {
    expect(TabsPanel).to.be.exist;
  })
});