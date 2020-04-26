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
