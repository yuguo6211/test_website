import Vue from 'vue'
import Router from 'vue-router'
const HomeIndex = () => import('@/pages/home/index')
const TestIndex = () => import('@/pages/test/index')
const Testsub = () => import('@/pages/test/sub')
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomeIndex',
      component: HomeIndex
    },
    {
      path: '/test',
      name: 'TestIndex',
      component: TestIndex
    },
    {
      path: '/testsub',
      name: 'Testsub',
      component: Testsub
    }
  ]
})
