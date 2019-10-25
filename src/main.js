// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import vueHeadful from 'vue-headful'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
/* eslint-disable no-new */

Vue.component('HeaderVue')
Vue.component('Carousel')
Vue.component('vue-headful', vueHeadful)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
