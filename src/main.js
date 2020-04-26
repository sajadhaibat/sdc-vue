import Vue from 'vue'
import App from './App.vue'
import router from './router'
import style from './assets/app.css'
import Paginate from 'vuejs-paginate'
import $ from 'jquery'

Vue.config.productionTip = false
Vue.component('paginate', Paginate)

// var $ = require('jquery')

new Vue({
  router,
  style,
  $,
  render: h => h(App)
}).$mount('#app')
