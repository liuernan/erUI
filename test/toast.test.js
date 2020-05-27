import Vue from 'vue';
import Toast from '../src/components/toast';

const expect = chai.expect;

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Toast', () => {
  it('存在', () => {
    expect(Toast).to.be.exist;
  });

  describe('的 props 接收', () => {
    const Constructor = Vue.extend(Toast);
    it('autoClose', (done) => {
      // https://github.com/vuejs/vue/issues/7140#issuecomment-347257849
      Vue.config.errorHandler = done;
      // Vue.nextTick(() => {
      //   throw new Error('test');
      // });
      const div = document.createElement('div');
      document.body.appendChild(div);
      const vm = new Constructor({
        propsData: {
          autoClose: 1
        }
      }).$mount(div);
      vm.$on('close', () => {
        expect(document.body.contains(vm.$el)).to.equal(false);
        vm.$el.remove();
        vm.$destroy();
        done();
      });
    });

    it('position', () => {
      const vm = new Constructor({
        propsData: {
          position: 'top'
        }
      }).$mount();

      expect(vm.$el.classList.contains('toast-position-top')).to.equal(true);
    });

    it('closeButton', () => {
      const spy = sinon.fake();
      const vm = new Constructor({
        propsData: {
          closeButton: {
            text: '烦不烦',
            callback: spy
          }
        }
      }).$mount();
      vm.clickClose();
      expect(spy).to.be.callCount(1);
    });
  });
});