import Vue from "vue"
import App from "./App.vue"
import router from "./router/router"
import store from "./store/store"
import VConsole from "vconsole"
import {windowRize, remAdaptive} from "./utils/util"
import config from "./config"
import fastclick from "fastclick"

import "./assets/stylus/index.styl"
// 引入全局组件注册
import componentRegister from "./utils/componentsImport"

// 引入vant组件
import "./libs/vantRegist"

// 引入全局方法
import "./utils/addPrototypeMethods"

// 全局Vue过滤器
import * as filterObj from "./utils/vueFilter"
Object.keys(filterObj).forEach(key => Vue.filter(key, filterObj[key]))

Vue.config.productionTip = false

// 解决移动端点击300ms延迟
fastclick.attach(document.body)

// 在开发环境中显示移动端调试
if (config.showVconsole) {
  new VConsole()
}

new Vue({
  componentRegister,
  router,
  store,
  render: h => h(App),
  created() {
    remAdaptive()
    windowRize(() => {
      remAdaptive()
    })
  }
}).$mount("#app")
