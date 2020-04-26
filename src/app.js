import Vue from "vue";
import Button from "./Button.vue";
import ButtonGroup from "./ButtonGroup";
import Icon from "./Icon.vue";

Vue.component("er-button", Button);
Vue.component("er-icon", Icon);
Vue.component("er-button-group", ButtonGroup)
new Vue({
  el: "#app",
  data: {
    loading1: true,
    loading2: false
  }
});

// 单元测试
import chai from "chai";

const expect = chai.expect;

{
  expect(1).to.equal(1);
}
