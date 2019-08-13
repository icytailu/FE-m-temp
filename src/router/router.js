import Vue from "vue";
import Router from "vue-router";
// 首页
const Home = resolve => {
  import("../views/home/Home.vue").then(module => {
    resolve(module);
  });
};

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/home"
    },

    {
      path: "/home",
      name: "home",
      component: Home
    },

  ]
});
