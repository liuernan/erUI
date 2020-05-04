import Vue from "vue";
import Button from "./button.vue";
import ButtonGroup from "./button-group";
import Icon from "./icon.vue";
import Input from "./input"

Vue.component("er-button", Button);
Vue.component("er-icon", Icon);
Vue.component("er-button-group", ButtonGroup);
Vue.component("er-input", Input);

new Vue({
  el: "#app",
  data: {
    loading1: true,
    loading2: false,
    message: '支持双向绑定'
  }
});