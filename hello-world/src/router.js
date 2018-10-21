import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// const Child = resolve => require.ensure([], () => resolve(require('./views/Child.vue')))
// const About = resolve => require.ensure([], () => resolve(require('./views/About.vue')))
// const Child = () => import('./views/Child.vue')
// const About = () => import('./views/About.vue')
import About from './views/About.vue'
import Child from './views/Child.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'index',
    component: Home,
    meta: { index: 0 },
    children: [{
      path: 'child/:id',
      props: { id: '这几天' },
      component: Child,
      meta: { index: 2 }
    }]
  }, {
    path: '/about',
    name: 'about',
    meta: { index: 2 },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About // () => import(/* webpackChunkName: "about" */ './views/About.vue')
  }]
})
