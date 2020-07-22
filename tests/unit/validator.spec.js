import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

chai.use(sinonChai)

import {shallowMount, mount} from '@vue/test-utils'
import Vue from 'vue'
import Valiadtor from '../../src/components/validator'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Validator', () => {
  it('存在.', () => {
    expect(Valiadtor).to.be.exist;
  })


})