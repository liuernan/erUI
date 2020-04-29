import Vue from "vue";
import Button from "./button.vue";
import ButtonGroup from "./button-group";
import Icon from "./icon.vue";

Vue.component("er-button", Button);
Vue.component("er-icon", Icon);
Vue.component("er-button-group", ButtonGroup);

new Vue({
  el: "#app",
  data: {
    loading1: true,
    loading2: false
  }
});

// 单元测试
import chai from "chai";
import spies from "chai-spies";

chai.use(spies);

const expect = chai.expect;

// chai 是否成功引入
{
  expect(1).to.equal(1);
}

// Button 组件的单元测试
{ // 参数测试：icon
  const iconName = "settings";

  const vueConstructor = Vue.extend(Button),
    vm = new vueConstructor({
      propsData: {
        icon: iconName
      }
    });

  vm.$mount();

  const useElement = vm.$el.querySelector("use");

  expect(useElement.getAttribute("xlink:href")).to.equal(`#icon-${iconName}`);

  vm.$el.remove();
  vm.$destroy();
}

{ // 参数测试：loading
  const iconName = "settings",
    loadingStatus = Math.random() < 0.5;

  const vueConstructor = Vue.extend(Button),
    vm = new vueConstructor({
      propsData: {
        icon: iconName,
        loading: loadingStatus
      }
    });

  vm.$mount();

  const useElement = vm.$el.querySelector("use");

  if (loadingStatus) {
    expect(useElement.getAttribute("xlink:href")).to.equal("#icon-loading");
  } else {
    expect(useElement.getAttribute("xlink:href")).to.equal(`#icon-${iconName}`);
  }

  vm.$el.remove();
  vm.$destroy();
}

{ // 参数测试：icon-position 不传
  const div = document.createElement("div");
  document.querySelector("#app").appendChild(div);

  const iconName = "settings";

  const vueConstructor = Vue.extend(Button),
    vm = new vueConstructor({
      propsData: {
        icon: iconName
      }
    });

  vm.$mount(div);

  const $svg = vm.$el.querySelector("svg");

  expect(window.getComputedStyle($svg).order).to.equal("1");

  vm.$el.remove();
  vm.$destroy();
}

{ // 参数测试：icon-position
  const div = document.createElement("div");
  document.querySelector("#app").appendChild(div);

  const iconName = "settings",
    iconPosition = "right";

  const vueConstructor = Vue.extend(Button),
    vm = new vueConstructor({
      propsData: {
        icon: iconName,
        iconPosition: iconPosition
      }
    });

  vm.$mount(div);

  const $svg = vm.$el.querySelector("svg");

  expect(window.getComputedStyle($svg).order).to.equal("2");

  vm.$el.remove();
  vm.$destroy();
}

{ // 用 chai-spies 监听测试 click
  const iconName = "settings",
    iconPosition = "right";

  const vueConstructor = Vue.extend(Button),
    vm = new vueConstructor({
      propsData: {
        icon: iconName,
        iconPosition: iconPosition
      }
    });

  vm.$mount();

  const spy = chai.spy(() => {});
  vm.$on("click", spy);

  vm.$el.click();

  expect(spy).to.have.been.called.exactly(1);

  vm.$el.remove();
  vm.$destroy();
}