import Vue from 'vue';
import Col from '../src/col';

const expect = chai.expect;

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Col', () => {
  it('存在', () => {
    expect(Col).to.be.exist;
  });

  describe('的 props 接收', () => {
    const Constructor = Vue.extend(Col);

    it('span', (done) => {
      const div = document.createElement('div');
      document.body.appendChild(div);

      const vm = new Constructor({
        propsData: {
          span: 1
        }
      }).$mount(div);

      setTimeout(() => {
        expect(vm.$el.classList.contains('col-1')).to.be.true;
      }, 0);

      vm.$destroy();
      div.remove();
      done();
    });

    it('offset', (done) => {
      const div = document.createElement('div');
      document.body.appendChild(div);

      const vm = new Constructor({
        propsData: {
          offset: 1
        }
      }).$mount(div);

      setTimeout(() => {
        expect(vm.$el.classList.contains('offset-1')).to.be.true;
      }, 0);

      vm.$destroy();
      div.remove();
      done();
    });

    it('ipad', (done) => {
      const div = document.createElement('div');
      document.body.appendChild(div);

      const vm = new Constructor({
        propsData: {
          ipad: {
            span: 1,
            offset: 1
          }
        }
      }).$mount(div);

      setTimeout(() => {
        expect(vm.$el.classList.contains('col-ipad-1')).to.be.true;
        expect(vm.$el.classList.contains('offset-ipad-1')).to.be.true;
      }, 0);

      vm.$destroy();
      div.remove();
      done();
    });

    it('narrowPc', (done) => {
      const div = document.createElement('div');
      document.body.appendChild(div);

      const vm = new Constructor({
        propsData: {
          narrowPc: {
            span: 1,
            offset: 1
          }
        }
      }).$mount(div);

      setTimeout(() => {
        expect(vm.$el.classList.contains('col-narrowPc-1')).to.be.true;
        expect(vm.$el.classList.contains('offset-narrowPc-1')).to.be.true;
      }, 0);

      vm.$destroy();
      div.remove();
      done();
    });

    it('pc', (done) => {
      const div = document.createElement('div');
      document.body.appendChild(div);

      const vm = new Constructor({
        propsData: {
          pc: {
            span: 1,
            offset: 1
          }
        }
      }).$mount(div);

      setTimeout(() => {
        expect(vm.$el.classList.contains('col-pc-1')).to.be.true;
        expect(vm.$el.classList.contains('offset-pc-1')).to.be.true;
      }, 0);

      vm.$destroy();
      div.remove();
      done();
    });

    it('widePc', (done) => {
      const div = document.createElement('div');
      document.body.appendChild(div);

      const vm = new Constructor({
        propsData: {
          widePc: {
            span: 1,
            offset: 1
          }
        }
      }).$mount(div);

      setTimeout(() => {
        expect(vm.$el.classList.contains('col-widePc-1')).to.be.true;
        expect(vm.$el.classList.contains('offset-widePc-1')).to.be.true;
      }, 0);

      vm.$destroy();
      div.remove();
      done();
    });
  });
});