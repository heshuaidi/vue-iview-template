import Vue from 'vue'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import es6promise from 'es6-promise'
es6promise.polyfill()

import iView from 'iview'
import 'iview/dist/styles/iview.css'
import locale from 'iview/src/locale/lang/zh-CN'

import '@/styles/index.css'

import App from './App.vue'

Vue.use(iView, { locale })

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
}).$mount('#app')
