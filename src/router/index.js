import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/GHSS",
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
          name: "KFQPTYDSC",
          navTitle: "合规审查"
        },
        component: () =>
          import(/* webpackChunkName: "container" */ "../views/container.vue"),
        children: []
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
