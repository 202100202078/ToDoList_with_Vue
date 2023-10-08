import Vue from 'vue'
import App from './App.vue'
import './css/base.css'
import router from './router/index.js'

Vue.config.productionTip = false
Vue.directive('focus', {
  inserted(el) {
    el.focus()
  }
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
