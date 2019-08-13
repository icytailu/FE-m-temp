import Vue from "vue";
import localStore from "store";
import API from "./api";
import config from "../config";
import { go, goReplace, back, windowRize, title } from "./util";
// 添加config配置
Vue.prototype.$config = config;

// 路由跳转
Vue.prototype.$go = go;

// 路由跳转replace
Vue.prototype.$goReplace = goReplace;

// 路由返回
Vue.prototype.$back = back;

// 接口请求
Vue.prototype.$API = API;

// 本地存储
Vue.prototype.$localStore = localStore;

// 监听窗口变化
Vue.prototype.$windowRize = windowRize;

// 判断是否是app
Vue.prototype.$isApp = false;

// IOS用户
Vue.prototype.$isIOS = false;

// Android用户
Vue.prototype.$isAndroid = false;

// 文档title
Vue.prototype.$title = title;
