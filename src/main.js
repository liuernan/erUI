import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import Plugin from './components/plugin'
Vue.use(Plugin);

new Vue({
  render: h => h(App),
}).$mount('#app')
