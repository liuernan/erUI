import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import Button from './components/button/button.vue';
import ButtonGroup from './components/button/button-group';
import Icon from './components/icon.vue';
import Input from './components/input';
import Row from './components/row';
import Col from './components/col';
import Layout from './components/layout';
import Header from './components/header';
import Sider from './components/sider';
import Content from './components/content';
import Footer from './components/footer';
import Toast from './components/toast';
import Plugin from './components/plugin';
import Tabs from './components/tabs';
import TabsNav from './components/tabs-nav';
import TabsItem from './components/tabs-item';
import TabsContent from './components/tabs-content';
import TabsPanel from './components/tabs-panel';
import Popover from './components/popover';
import Collapse from './components/collapse/collapse';
import CollapseItem from './components/collapse/collapse-item';
import Cascader from './components/cascader/cascader';

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
Vue.component('er-popover', Popover);
Vue.component('er-collapse', Collapse);
Vue.component('er-collapse-item', CollapseItem);
Vue.component('er-cascader', Cascader);

Vue.use(Plugin);

new Vue({
  render: h => h(App),
}).$mount('#app')
