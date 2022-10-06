import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routers'

Vue.use(VueRouter)
const router = new VueRouter({
  routes,
})

router.beforeEach((to, from, next) => {
  console.log('beforeEach')
  next()
})

router.afterEach(to => {
  console.log('afterEach')
})

export default router
