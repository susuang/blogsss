// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store  from '@/store'
import 'bootstrap/css/bootstrap.min.css'
import 'bootstrap/js/bootstrap.min.js'

import Toast  from '@/components/Prompts'
Vue.use(Toast)

Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})


