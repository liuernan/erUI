import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

chai.use(sinonChai)

import {shallowMount, mount} from '@vue/test-utils'

import Vue from 'vue';
import TabsPanel from '../../src/components/tabs/tabs-panel';

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('TabsPanel', () => {
  it('存在.', () => {
    expect(TabsPanel).to.be.exist;
  })
});