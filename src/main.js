import Vue from 'vue'
import App from './App.vue'

// import './components'

import myUI from '../packages/'

Vue.use(myUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
