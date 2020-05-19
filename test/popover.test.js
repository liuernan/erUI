const expect = chai.expect;
import Vue from 'vue';
import Popover from '../src/popover';

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Popover', () => {
  it('存在', () => {
    expect(Popover).to.exist;
  });

  describe('的 props 接收', () => {
    xit('存在', () => {
      expect(Popover).to.exist;
    });


  });
});