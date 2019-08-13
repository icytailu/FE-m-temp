import axios from "axios"
import store from "store"
import config from "../config"
import {errHandle} from "../utils/util"
import {Toast} from "vant"
const apiMap = {
  login: "/api/agent/OAuth"
}

// 创建axios
const _axios = (url, methods, data, JWT) => {
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
  ERRJWT: new Set([2004, 2005, 2006, 2007])
}

// 处理请求
const handelRequest = async (
  apiKey,
  methods,
  data,
  needJWT,
  resolve,
  reject
) => {
  // 请求方法
  const request = (JWT = "") => {
    const url = `${config.domain}${apiMap[apiKey]}`
    _axios(url, methods, data, JWT)
      .then(async resp => {
        if (resp.data.code == statusCodeMap.OK) {
          resolve(resp.data)
        } else if (statusCodeMap.ERRJWT.has(resp.data.code)) {
          errHandle()
        } else {
          reject(resp.data)
        }
      })
      .catch(err => {
        Toast(err)
      })
  }

  // 获取JWT
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

  // 判断是否需要jwt
  if (needJWT) {
    if (JWT) {
      request(JWT)
    } else {
      errHandle()
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
