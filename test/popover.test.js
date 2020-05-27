const expect = chai.expect;
import Vue from 'vue';
import Popover from '../src/components/popover';

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Popover', () => {

  it('存在', () => {
    expect(Popover).to.exist;
  });

  describe('的 props 接收', () => {

    it('position', (done) => {
      const div = document.createElement('div');
      Vue.component('er-popover', Popover);
      div.innerHTML = `
        <er-popover position="bottom">
          <template slot="popover-content" slot-scope="{close}">
            <div>我是 popover 的内容</div>
            <button icon="settings" @click="close">关闭</button>
          </template>
          <button class="button">点我上面出现 popover</button>
        </er-popover>
      `;

      const vm = new Vue({
        el: div
      });
      const button = vm.$el.querySelector('button');
      button.click();

      vm.$nextTick(() => {
        const popoverContent = document.body.querySelector('.popover-bottom');
        expect(popoverContent).to.exist;

        vm.$el.remove();
        vm.$destroy();
        done();
      });
    });

    xit('trigger', (done) => {
      const div = document.createElement('div');
      Vue.component('er-popover', Popover);
      div.innerHTML = `
        <er-popover trigger="hover">
          <template slot="popover-content" slot-scope="{close}">
            <div>我是 popover 的内容</div>
            <button icon="settings" @click="close">关闭</button>
          </template>
          <button class="button">点我上面出现 popover</button>
        </er-popover>
      `;

      const vm = new Vue({
        el: div
      });
      const $button = vm.$el.querySelector('button');
      $button.click();

      //触发 button 的 mouseenter 事件
      let event = new Event('mouseenter');
      $button.dispatchEvent(event);

      vm.$nextTick(() => {
        //todo: mouseenter 事件触发不了
        const popoverContent = document.body.querySelector('.popover-content-wrapper');
        console.log(popoverContent);
        expect(popoverContent).to.exist;

        vm.$el.remove();
        vm.$destroy();
        done();
      });
    });

  });

});