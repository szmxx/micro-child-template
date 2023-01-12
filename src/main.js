/*
 * @Author: cola
 * @Date: 2023-01-09 14:46:34
 * @LastEditors: cola
 * @Description:
 */
import "core-js/stable";
import "regenerator-runtime/runtime";

import "./public-path";
import Vue from "vue";
import App from "./App.vue";
import createRouter from "./router";
import store from "./store";

Vue.config.productionTip = false;

let instance = null;
let router = null;
async function render(props = {}) {
  // await import("@/components");
  const { container, activeRule } = props;
  const base = getBaseRoute(activeRule);
  console.log(base);
  router = createRouter(base);
  instance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount(container ? container.querySelector("#app") : "#app");
}
function getBaseRoute(activeRule) {
  let pathname = "";
  if (location.pathname.startsWith("/")) {
    pathname = location.pathname.split("/")[1];
  } else {
    pathname = location.pathname.split("/")[0];
  }
  pathname = "/" + pathname;
  if (Array.isArray(activeRule)) {
    return activeRule.find(i => i === pathname);
  }
  return activeRule;
}
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {}

export async function mount(props) {
  store.commit("props", props);

  props.onGlobalStateChange(value => {
    if (value.userInfo) {
      store.commit("userInfo", value.userInfo);
      store.commit("userRegionCode", value.userInfo.ownRegion);
    }
    if (value.mapConfig) {
      store.commit("MAP_INIT_CONFIG", value.mapConfig);
    }
  }, true);

  render(props);
}

export async function unmount() {
  if (instance) {
    instance.$destroy();
    instance.$el.innerHTML = "";
  }
  router = null;
  instance = null;
}

export async function update(props) {
  console.log("update props", props);
}
