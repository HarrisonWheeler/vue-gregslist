import Vue from 'vue'
import VueRouter from 'vue-router'
// @ts-ignore
import Home from '../pages/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // @ts-ignore
    component: () => import(/* webpackChunkName: "about" */ '../pages/About.vue')
  },
  {
    path: '/cars',
    name: 'Cars',
    // @ts-ignore
    component: () => import(/* webpackChunkName: "cars" */ '../pages/Cars.vue')
  },
  {
    path: '/cars/:id',
    name: 'Car',
    // @ts-ignore
    component: () => import(/* webpackChunkName: "cardeetz" */ '../pages/CarDeetz.vue')
  },
  {
    path: '/houses',
    name: 'Houses',
    // @ts-ignore
    component: () => import(/* webpackChunkName: "houses" */ '../pages/Houses.vue')
  },
  {
    path: '/houses/:id',
    name: 'House',
    // @ts-ignore
    component: () => import(/* webpackChunkName: "housedeetz" */ '../pages/HouseDeetz.vue')
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes
})

export default router
