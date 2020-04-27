import Vue from "vue";
import Button from "./Button.vue";
import ButtonGroup from "./ButtonGroup";
import Icon from "./Icon.vue";

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

const expect = chai.expect;

// chai 是否成功引入
{
  expect(1).to.equal(1);
}

// Button 组件的单元测试
{ // 参数测试：icon
  const iconName = "settings";

  const vm = Vue.extend(Button),
        button = new vm({
    propsData: {
      icon: iconName
    }
  });

  button.$mount();

  const useElement = button.$el.querySelector("use");

  expect(useElement.getAttribute("xlink:href")).to.equal(`#icon-${iconName}`);

  button.$el.remove();
  button.$destroy();
}

{ // 参数测试：loading
  const iconName = "settings",
        loadingStatus = Math.random() < 0.5;

  const vm = Vue.extend(Button),
        button = new vm({
    propsData: {
      icon: iconName,
      loading: loadingStatus
    }
  });

  button.$mount();

  const useElement = button.$el.querySelector("use");

  if (loadingStatus) {
    expect(useElement.getAttribute("xlink:href")).to.equal("#icon-loading");
  } else {
    expect(useElement.getAttribute("xlink:href")).to.equal(`#icon-${iconName}`);
  }

  button.$el.remove();
  button.$destroy();
}

{ // 参数测试：icon-position 不传
  const div = document.createElement("div");
  document.querySelector("#app").appendChild(div);

  const iconName = "settings";

  const vm = Vue.extend(Button),
    button = new vm({
      propsData: {
        icon: iconName
      }
    });

  button.$mount(div);

  const $svg = button.$el.querySelector("svg");

  expect(window.getComputedStyle($svg).order).to.equal("1");

  button.$el.remove();
  button.$destroy();
}

{ // 参数测试：icon-position
  const div = document.createElement("div");
  document.querySelector("#app").appendChild(div);

  const iconName = "settings",
        iconPosition = "right";

  const vm = Vue.extend(Button),
    button = new vm({
      propsData: {
        icon: iconName,
        iconPosition: iconPosition
      }
    });

  button.$mount(div);

  const $svg = button.$el.querySelector("svg");

  expect(window.getComputedStyle($svg).order).to.equal("2");

  button.$el.remove();
  button.$destroy();
}

{ // 监听测试：click
  const iconName = "settings",
    iconPosition = "right";

  const vm = Vue.extend(Button),
    erButton = new vm({
      propsData: {
        icon: iconName,
        iconPosition: iconPosition
      }
    });

  erButton.$mount();
  erButton.$on("click", () => {
    console.log(1)
  });

  const button = erButton.$el;
  button.click();

  erButton.$el.remove();
  erButton.$destroy();
}