import Vue from 'vue';
import Input from '../src/input';

const expect = chai.expect;

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Input', () => {
  it('存在', () => {
    expect(Input).to.ok;
  });

  describe('的 props 接收', () => {
    const Constructor = Vue.extend(Input);
    let vm;

    afterEach(() => {
      vm.$destroy();
    });

    it('value', () => {
      vm = new Constructor({
        propsData: {
          value: '我是文本'
        }
      }).$mount();

      const $input = vm.$el.querySelector('input');
      expect($input.value).to.equals('我是文本');
    });

    it('disabled', () => {
      vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount();

      const $input = vm.$el.querySelector('input');
      expect($input.disabled).to.equals(true);
    });

    it('readonly', () => {
      vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount();

      const $input = vm.$el.querySelector('input');
      expect($input.readOnly).to.equals(true);
    });

    it('error', () => {
      vm = new Constructor({
        propsData: {
          error: '我是一条错误信息'
        }
      }).$mount();

      const $use = vm.$el.querySelector('use');
      expect($use.getAttribute('xlink:href')).to.equal('#icon-error');

      const $msg = vm.$el.querySelector('.error-message');
      expect($msg.innerText).to.equals('我是一条错误信息');

    });

    it('tips', () => {
      vm = new Constructor({
        propsData: {
          tips: '我是一条提示信息'
        }
      }).$mount();

      const $use = vm.$el.querySelector('use');
      expect($use.getAttribute('xlink:href')).to.equal('#icon-tips');

      const $msg = vm.$el.querySelector('.tips-message');
      expect($msg.innerText).to.equals('我是一条提示信息');
    });
  });

  describe('监听', () => {
    const Constructor = Vue.extend(Input);
    let vm;

    afterEach(() => {
      vm.$destroy();
    });

    it('事件', () => {
      ['click', 'focus', 'input', 'blur', 'change']
        .forEach((eventName) => {
          vm = new Constructor({}).$mount();

          const spy = sinon.fake();
          vm.$on(eventName, spy);

          //触发input的change 事件
          let event = new Event(eventName);
          let $input = vm.$el.querySelector('input');
          $input.dispatchEvent(event);
          
          expect(spy).to.have.been.callCount(1);
        });
    });
  });

});