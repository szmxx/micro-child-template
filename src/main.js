import "core-js/stable";
import "regenerator-runtime/runtime";

import "./public-path";

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ViewUI from "view-design";
// import echarts from "vue-echarts-v3/src/full.js";
import "view-design/dist/styles/iview.css";

Vue.use(ViewUI);
// Vue.component("echarts", echarts);

Vue.config.productionTip = false;

let instance = null;
async function render(props = {}) {
  await import("@/components");

  const { container } = props;

  instance = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector("#app") : "#app");
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {}

export async function mount(props) {
  store.commit("props", props);


  props.onGlobalStateChange((value) => {
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
  }
  instance = null;
}

export async function update(props) {
  console.log("update props", props);
}
