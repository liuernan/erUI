import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

chai.use(sinonChai)

import {shallowMount, mount} from '@vue/test-utils'

import Vue from 'vue';
import TabsContent from '../../src/components/tabs-content';

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('TabsContent', () => {
  it('存在.', () => {
    expect(TabsContent).to.be.exist;
  })
});