import Vue from 'vue';
import Input from '../src/input';

const expect = chai.expect;

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Input', () => {
  it('存在', () => {
    expect(Input).to.ok;
  });

  it('有属性 value', () => {
    const Constructor = Vue.extend(Input);
    const vm = new Constructor({
      propsData: {
        value: '我是文本'
      }
    }).$mount();

    const inputElement = vm.$el.querySelector('input');

    expect(inputElement.value).to.equals('我是文本');
    vm.$destroy();
  });
});