import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

chai.use(sinonChai)

import {shallowMount, mount} from '@vue/test-utils'

import Vue from 'vue';
import TabsNav from '../../src/components/tabs-nav';

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('TabsNav', () => {
  it('存在.', () => {
    expect(TabsNav).to.be.exist;
  })
});