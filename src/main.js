// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import request from './utils/request'
import db from './utils/localstorage'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import Moment from 'moment'
import JsonViewer from 'vue-json-viewer'

// 定义全局时间戳过滤器
Vue.filter('formatDate', function (value) {
  return Moment(value).format('YYYY-MM-DD')
})

Vue.config.productionTip = false

Vue.use(Antd)
Vue.use(db)
Vue.use(JsonViewer)

Vue.prototype.$post = request.post
Vue.prototype.$postDate = request.postDate
Vue.prototype.$get = request.get
Vue.prototype.$put = request.put
Vue.prototype.$delete = request.delete
Vue.prototype.$export = request.export
Vue.prototype.$download = request.download
Vue.prototype.$upload = request.upload

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
