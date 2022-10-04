import Vue from 'vue'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import es6promise from 'es6-promise'
es6promise.polyfill()
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
