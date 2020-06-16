import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

chai.use(sinonChai)

import {shallowMount, mount} from '@vue/test-utils'

import Vue from 'vue/dist/vue';
import Collapse from '../../src/components/collapse/collapse';
import CollapseItem from '../../src/components/collapse/collapse-item'

Vue.component('er-collapse', Collapse);
Vue.component('er-collapse-item', CollapseItem);

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Collapse', () => {
  it('存在', () => {
    expect(Collapse).to.ok;
  });

  describe('的 props 接收', () => {
    it('selected', (done) => {
      const div = document.createElement('div');
      div.innerHTML = `
          <er-collapse :selected.sync="selectedCollapses" multiple>
            <er-collapse-item title="标题1">内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1</er-collapse-item>
            <er-collapse-item title="标题2">内容2内容2内容2</er-collapse-item>
            <er-collapse-item title="标题3">内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3</er-collapse-item>
          </er-collapse>
      `;
      const vm = new Vue({
        el: div,
        data: {
          selectedCollapses: ['标题2']
        }
      });

      vm.$nextTick(() => {
        const $contents = vm.$el.querySelectorAll('.er-collapse-item-content');
        expect($contents.length).to.equal(1);
        expect($contents[0].innerHTML).to.equal('内容2内容2内容2');

        vm.$el.remove();
        vm.$destroy();
        done();
      });
    });

    it('multiple', (done) => {
      const div = document.createElement('div');
      div.innerHTML = `
          <er-collapse :selected.sync="selectedCollapses" multiple>
            <er-collapse-item title="标题1">内容1</er-collapse-item>
            <er-collapse-item title="标题2">内容2</er-collapse-item>
            <er-collapse-item title="标题3">内容3</er-collapse-item>
          </er-collapse>
      `;
      const vm = new Vue({
        el: div,
        data: {
          selectedCollapses: ['标题2']
        }
      });

      vm.$nextTick(() => {
        const $titles = vm.$el.querySelectorAll('.er-collapse-item-title');
        $titles[0].click();

        vm.$nextTick(() => {
          const $contents = vm.$el.querySelectorAll('.er-collapse-item-content');

          expect($contents.length).to.eq(2);
          expect($contents[0].innerHTML).to.equal('内容1');
          expect($contents[1].innerHTML).to.equal('内容2');

          vm.$el.remove();
          vm.$destroy();
          done();
        });
      });
    });

  });

  it('点击 title 触发 update:selected 事件', (done) => {
    const div = document.createElement('div');
    div.innerHTML = `
        <er-collapse :selected.sync="selectedCollapses" @update:selected="xxx" multiple>
          <er-collapse-item title="标题1">内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1</er-collapse-item>
          <er-collapse-item title="标题2">内容2内容2内容2</er-collapse-item>
          <er-collapse-item title="标题3">内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3</er-collapse-item>
        </er-collapse>
    `;

    const spy = sinon.fake();
    const vm = new Vue({
      el: div,
      data: {
        selectedCollapses: ['标题2']
      },
      methods: {
        xxx: spy
      }
    });

    vm.$nextTick(() => {
      const $titles = vm.$el.querySelectorAll('.er-collapse-item-title');
      $titles[0].click();

      expect(spy).to.be.callCount(1);

      vm.$el.remove();
      vm.$destroy();
      done();
    });
  });

});