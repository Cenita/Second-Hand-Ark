import Vue from 'vue'
import App from './App'
import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.adapter = function (config) {
  return new Promise((resolve, reject) => {
    let data = config.method === 'get' ? config.params : qs.stringify(config.data)
    // wx小程序 发起请求相应 log 就可以看到熟悉的返回啦
    wx.request({
      url: config.url,
      method: config.method,
      data: data,
      success: (res) => {
        return resolve(res)
      },
      fail: (err) => {
        return reject(err)
      }
    })
  })
}
Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$axios = axios
const app = new Vue(App)
app.$mount()
