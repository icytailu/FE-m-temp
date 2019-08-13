import router from "../router/router"

/**
 *
 * @param {*string} name 路由名称
 * @param {*object} query 路由参数
 * @param {*boolean} needNewTag 是否需要从新标签打开 默认为false
 */
const go = (name, query = null, needNewTag = false) => {
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
  router.back()
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
  if (a > 750) {
    a = 750
  }
  const rem = a / 7.5
  r.style.fontSize = `${rem}px`
}

/**
 *
 * @param {*string} title 文档title
 */
const title = title => {
  document.title = title
}

/**
 * 获取url参数
 */
const getParam = name => {
  var reg = new RegExp("([?])" + name + "=([^&]*)(&|$)", "i")
  var r = window.location.hash.substr(1).match(reg)
  if (r != null) return r[2]

  reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i")
  r = window.location.search.substr(1).match(reg)
  if (r != null) return r[2]

  return null
}

/**
 * 跳转页面并携带code
 */
const backWithCode = () => {
  let locationHref = location.href
  let url
  if (config.isTestMode) {
    url = `http://***********/jumpBackWithCode?url=${encodeURIComponent(
      locationHref
    )}&appid=${config.appid}`
  } else {
    // 正式网址获取code
    // url = `https://****** */?appid=${
    //   config.appid
    // }&response_type=code&scope=snsapi_userinfo&state=0&redirect_uri=${encodeURIComponent(
    //   locationHref
    // )}#wechat_redirect`;
  }
  location.href = url
}

/**
 * 获取code失败 jwt失效处理
 */
const errHandle = () => {
  store.set("isLogin", false)
  store.remove("JWT")
  backWithCode()
}

/**
 * 登陆
 */
const login = async code => {
  const resp = await API.post("login", {code}, false)
    .then(resp => resp)
    .catch(() => {
      errHandle()
    })
  if (resp.code == 1000) {
    store.set("isLogin", true)
    store.set("JWT", resp.data.token)
  } else {
    errHandle()
  }
}

/**
 * 检查是否登陆
 */
const checkLogin = () => {
  let code = getParam("code")
  const isLogin = store.get("isLogin")
  return new Promise(async resolve => {
    // 判断是否登陆
    if (isLogin) {
      resolve()
    } else {
      if (code) {
        code = decodeURIComponent(code)
          .split("?code=")
          .pop()
        await login(code)
        resolve()
      } else {
        backWithCode()
      }
    }
  })
}

export {go, goReplace, back, remAdaptive, windowRize, title, getParam}
