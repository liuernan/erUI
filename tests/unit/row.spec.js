import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

chai.use(sinonChai)

import {shallowMount, mount} from '@vue/test-utils'

import Vue from 'vue/dist/vue';
import Row from '../../src/components/row';
import Col from '../../src/components/col';

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Row', () => {
  it('存在', () => {
    expect(Row).to.be.ok;
  });

  describe('的 props 接收', () => {
    it('gutter', (done) => {
      Vue.component('er-row', Row);
      Vue.component('er-col', Col);

      const div = document.createElement('div');
      div.innerHTML = `
        <er-row :gutter="20">
          <er-col></er-col>
          <er-col></er-col>
        </er-row>  
      `;
      document.body.appendChild(div);

      const vm = new Vue({
        el: div
      });

      setTimeout(() => {
        const $row = vm.$el.querySelector('.row');
        const $cols = vm.$el.getElementsByClassName('col');

        expect(getComputedStyle($row).marginLeft).to.be.equal('-10px');
        expect(getComputedStyle($cols[0]).paddingRight === '10px').to.ok;
        expect(getComputedStyle($cols[1]).paddingLeft === '10px').to.ok;

        div.remove();
        vm.$destroy();
        done();
      }, 0);
    });

    it('align', () => {
      const div = document.createElement('div');
      document.body.appendChild(div);

      const Constructor = Vue.extend(Row);
      const vm = new Constructor({
        propsData: {
          align: 'right'
        }
      }).$mount(div);

      expect(getComputedStyle(vm.$el).justifyContent).to.be.equal('flex-end');

      div.remove();
      vm.$destroy();
    });

  });

});