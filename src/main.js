// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '@/assets/style/reset.css'
import '@/assets/style/icon/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
//swiper插件
Vue.use(VueAwesomeSwiper)

Vue.prototype.bus = new Vue()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
