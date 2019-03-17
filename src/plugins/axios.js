import axios from 'axios'
import qs from 'qs'
let API = {}
const ENV = require('../../local_env')
function getHeaders () {
  let headersobj = {
    'X-DP-Key': '0c31e550cfdab86f2c2ea59327907798',
    'X-DP-ID': 'cfdab86f2c2ea593'
  }
  return axios.create({
    baseURL: ENV.baseUrl,
    headers: headersobj
  })
}

// axios的get请求方式
// 2018-06-07 yuguo
// url(string)请求url地址，params(object)请求对象
API.GET = function (url, params) {
  return getHeaders().get(url, {params: params})
}

// axios的post请求方式
// 2018-06-07 yuguo
// url(string)请求url地址，params(object)请求对象
API.POST = function (url, params) {
  return getHeaders().post(url, params)
}

// axios的put请求方式
// 2018-06-07 yuguo
// url(string)请求url地址，params(object)请求对象
API.PUT = function (url, params) {
  return getHeaders().put(url, params)
}

// axios的delete请求方式
// 2018-06-07 yuguo
// url(string)请求url地址，params(object)请求对象
API.DELETE = function (url, params) {
  return getHeaders().delete(url, {data: qs.stringify(params)})
}

export default API
