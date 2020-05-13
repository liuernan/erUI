import Vue from 'vue';
import Button from './button.vue';
import ButtonGroup from './button-group';
import Icon from './icon.vue';
import Input from './input';
import Row from './row';
import Col from './col';
import Layout from './layout';
import Header from './header';
import Sider from './sider';
import Content from './content';
import Footer from './footer';
import Toast from './toast'
import Plugin from './plugin'
import Tabs from './tabs';
import TabsNav from './tabs-nav';
import TabsItem from './tabs-item';
import TabsContent from './tabs-content';
import TabsPanel from './tabs-panel';

Vue.component('er-button', Button);
Vue.component('er-icon', Icon);
Vue.component('er-button-group', ButtonGroup);
Vue.component('er-input', Input);
Vue.component('er-row', Row);
Vue.component('er-col', Col);
Vue.component('er-layout', Layout);
Vue.component('er-header', Header);
Vue.component('er-sider', Sider);
Vue.component('er-content', Content);
Vue.component('er-footer', Footer);
Vue.component('er-toast', Toast);
Vue.component('er-tabs', Tabs);
Vue.component('er-tabs-nav', TabsNav);
Vue.component('er-tabs-item', TabsItem);
Vue.component('er-tabs-content', TabsContent);
Vue.component('er-tabs-panel', TabsPanel);

Vue.use(Plugin);

new Vue({
  el: '#app',
  data: {
    loading1: true,
    loading2: false,
    message: '支持双向绑定'
  },
  methods: {
    testToastTop() {
      this.testToast('top');
    },
    testToastMiddle() {
      this.testToast('middle');
    },
    testToastBottom() {
      this.testToast('bottom');
    },
    testToast(position) {
      this.$toast('我是一个 toast', {
        autoClose: 50,
        position: position,
        closeButton: {
          text: '关闭',
          callback: () => {
            console.log('用户的 callback 触发了');
          }
        }
      })
    }
  }
});