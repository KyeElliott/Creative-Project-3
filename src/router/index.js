import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Nintendo from '../views/Nintendo.vue'
import Sega from '../views/Sega.vue'
import Playstation from '../views/Playstation.vue'
import Xbox from '../views/Xbox.vue'
import Cart from '../views/Cart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/nintendo',
    name: 'Nintendo',
    component: Nintendo
  },
  {
    path: '/sega',
    name: 'Sega',
    component: Sega
  },
  {
    path: '/playstation',
    name: 'Playstation',
    component: Playstation
  },
  {
    path: '/xbox',
    name: 'Xbox',
    component: Xbox
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
