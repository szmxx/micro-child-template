import Vue from "vue";

// 检索目录下的模块
const req = require.context(".", true, /\.vue$/);

req.keys().forEach(fileName => {
  // 过滤demo文件夹下的组件
  if (/^\.\/demo\//.test(fileName)) {
    return;
  }
  // require模块
  // 过滤掉不以 Nr 开头的文件夹，比如eyemap
  if (fileName.includes("Nr")) {
    const componentConfig = req(fileName);
    const name =
      fileName.name ||
      fileName.replace(/^\.\/(.*\/)?/, "").replace(/\.vue$/, "");
    // 过滤掉不以 Nr 开头的 .vue 文件
    /^Nr/.test(name) &&
      Vue.component(name, componentConfig.default || componentConfig);
  }
});
