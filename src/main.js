import Vue from 'vue'
import App from './App.vue'
import router from './router'
import products from './products.js'


Vue.config.productionTip = false

let data = {
  products: products,
  cart: [],
  numItemsInCart: 0
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
