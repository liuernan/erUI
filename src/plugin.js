import Toast from './toast'

export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (message, toastOptions) {
      const Constructor = Vue.extend(Toast);
      const vm = new Constructor({
        propsData: toastOptions
      });
      vm.$slots.default = [message];
      vm.$mount();
      document.body.appendChild(vm.$el);
    }
  }
}