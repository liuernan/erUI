import Toast from './toast'

let currentToast = null;

export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (message, toastOptions) {
      if (currentToast) {
        currentToast.close();
      }
      currentToast = createToast(Vue, message, toastOptions)
    }
  }
}

function createToast(Vue, message, toastOptions) {
  const Constructor = Vue.extend(Toast);
  const vm = new Constructor({
    propsData: toastOptions
  });
  vm.$slots.default = [message];
  vm.$mount();
  vm.$on('close', () => {
    currentToast = null;
  });
  document.body.appendChild(vm.$el);
  return vm;
}