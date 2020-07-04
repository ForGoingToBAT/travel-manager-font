import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'jquery/dist/jquery.min.js'
import  'popper.js/dist/popper.min'
import  'bootstrap/dist/js/bootstrap'
import 'jquery-match-height/dist/jquery.matchHeight-min'
import 'chart.js/dist/Chart.bundle.min'
import 'chartist/dist/chartist.min'
import 'chartist-plugin-legend/chartist-plugin-legend'
import 'moment/dist/moment'
import 'fullcalendar/dist/fullcalendar.min'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
