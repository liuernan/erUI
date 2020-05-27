const expect = chai.expect;
import Vue from 'vue';
import TabsContent from '../../src/components/tabs-content';

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('TabsContent', () => {
  it('存在.', () => {
    expect(TabsContent).to.be.exist;
  })
});