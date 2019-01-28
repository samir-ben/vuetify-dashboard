import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store/store'
import Donut from 'vue-css-donut-chart';
import Chart from 'vue2-frappe';


Vue.use(Chart);
Vue.use(Donut);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
