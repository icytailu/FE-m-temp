import axios from "axios"
import store from "store"
import config from "../config"
import {go} from "../utils/util"
// import {Toast} from "vant" Toast=> element
const apiMap = {
  login: "/api/user/login"
}

/**
 * 发起axios请求
 * @param {*string} url 请求地址
 * @param {*staring} methods 请求方法
 * @param {*object} data 携带的数据
 * @param {*string} JWT header添加的 jwt
 */
const _axios = (url, methods, data, JWT = "") => {
  // 处理请求方式
  let _data = ""
  let _params = data
  if (methods !== "get") {
    _data = data
    _params = ""
  }

  // 判断是否需要token
  let httpHeaders = ""

  if (JWT) {
    httpHeaders = {Authorization: "bearer " + JWT}
  }

  return axios({
    url,
    method: methods,
    data: _data,
    params: _params,
    responseType: "json",
    timeout: 10000,
    headers: httpHeaders
  })
}

/**
 * 后台数据返回statusCodeMap
 */
const statusCodeMap = {
  OK: 1000,
  JwtError: new Set([2004, 2005, 2006, 2007])
}

/**
 * JWT失效的处理
 */

const JwtErrorHandle = resp => {
  if (resp && resp.data.msg) {
    Toast(resp.data.msg)
  } else {
    Toast("登陆失效，请重新登陆")
  }
  store.remove("JWT")
  store.set("isLogin", false)
  go("login")
}

/**
 * 处理请求
 * @param {*string} apiKey
 * @param {*string} methods
 * @param {*object} data
 * @param {*boolean} needJWT
 * @param {*fn} resolve
 * @param {*fn} reject
 */
const handelRequest = (apiKey, methods, data, needJWT, resolve, reject) => {
  // 请求方法
  const request = (JWT = "") => {
    const url = `${config.domain}${apiMap[apiKey]}`
    _axios(url, methods, data, JWT)
      .then(async resp => {
        // 如果返回的code为1000 将数据返回
        if (resp.data.code == statusCodeMap.OK) {
          resolve(resp.data)
          // JWT错误处理
        } else if (statusCodeMap.JwtError.has(resp.data.code)) {
          JwtErrorHandle(resp)
        } else {
          reject(resp.data)
        }
      })
      .catch(err => {
        const errInfo = {
          msg: err
        }
        reject(errInfo)
      })
  }

  // 定义JWT
  let JWT = store.get("JWT")

  // 判断是否存在apikey
  if (!apiMap[apiKey]) {
    Toast(`请求接口未添加---apiKey：${apiKey}`)
    const err = {
      msg: `请求接口未添加---apiKey：${apiKey}`
    }
    reject(err)
    return
  }

  // 判断是否需要JWT
  if (needJWT) {
    // 是否有JWT
    if (JWT) {
      request(JWT)
    } else {
      JwtErrorHandle()
    }
  } else {
    request()
  }
}

const API = {
  beforeRequest: () => {},
  get: (apiKey, data = "", needJWT = true) => {
    return new Promise((resolve, reject) => {
      handelRequest(apiKey, "get", data, needJWT, resolve, reject)
    })
  },
  post: (apiKey, data = "", needJWT = true) => {
    return new Promise((resolve, reject) => {
      handelRequest(apiKey, "post", data, needJWT, resolve, reject)
    })
  },
  afterRequest: () => {}
}
export default API
