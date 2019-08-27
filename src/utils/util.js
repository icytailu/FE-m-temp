import router from "../router/router"
import {Toast} from "vant"
import Vue from "vue"
Vue.use(Toast)

/**
 * 是否是app
 */
const isApp = () => {
  if (navigator.plus) {
    return true
  } else {
    return false
  }
}

/**
 * ios用户
 */
const isIOSUser = () => {
  if (isApp() && window.plus.device.vendor == "Apple") {
    return true
  } else {
    return false
  }
}

/**
 * android 用户
 */
const isAndroid = () => {
  if (isApp() && !isIOSUser()) {
    return true
  } else {
    return false
  }
}

/** 是否是有齐刘海 */
const hasNotchInScreen = () => {
  if (window.plus && window.plus.navigator) {
    return window.plus.navigator.hasNotchInScreen()
  }
}

/**
 *
 * @param {*string} name 路由名称
 * @param {*object} query 路由参数
 * @param {*boolean} needNewTag 是否需要从新标签打开 默认为false
 */
const go = (name, query = null, needNewTag = false) => {
  if (isIOSUser()) {
    const routeUrl = router.resolve({
      name,
      query
    })
    location.href = routeUrl.href
  } else {
    if (needNewTag) {
      const {href} = router.resolve({
        name,
        query
      })
      window.open(href, "_blank")
    } else {
      router.push({
        name,
        query
      })
    }
  }
}

/**
 *
 * @param {*string} name 路由名称
 * @param {*object} query 路由参数
 */
const goReplace = (name, query = null) => {
  router.replace({
    name,
    query
  })
}

/**
 * 路由返回
 */
const back = () => {
  if (isIOSUser()) {
    var ws = window.plus.webview.currentWebview()
    window.plus.webview.close(ws, "pop-out", 200)
  } else {
    router.back()
  }
}

/**
 * 监听窗口变化
 * @param {*function} cb 回调函数
 */
const windowRize = cb => {
  window.onresize = () => {
    cb()
  }
}

/**
 * rem适配
 */
const remAdaptive = () => {
  const r = document.documentElement
  let a = r.getBoundingClientRect().width
  let b = a

  if (b > 750) {
    b = 375
  }
  const rem = b / 7.5
  r.style.fontSize = `${rem}px`
}

/**
 * title
 * @param {*string} title 文档title
 */
const title = title => {
  document.title = title
}

export {
  go,
  goReplace,
  back,
  remAdaptive,
  windowRize,
  title,
  isIOSUser,
  hasNotchInScreen,
  isApp,
  isAndroid
}
