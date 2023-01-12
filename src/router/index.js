/*
 * @Author: cola
 * @Date: 2023-01-09 14:46:34
 * @LastEditors: cola
 * @Description:
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: {
      name: "content"
    },
    children: [
      {
        path: "content",
        name: "content",
        meta: {
          name: "KFQPTYDSC"
        },
        component: () =>
          import(/* webpackChunkName: "container" */ "../views/container.vue"),
        children: []
      }
    ]
  }
];

const createRouter = (base = "") =>
  new VueRouter({
    base: base,
    routes,
    mode: "history"
  });

export default createRouter;
