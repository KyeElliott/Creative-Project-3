<template>
<div class = "wrapper">
  <div class = "products">
    <div class = "product" v-for="product in products" :key = "product.name">
      <div class = "info">
        <h1>{{product.name}}</h1>
        <h2>{{product.price}}</h2>
      <div class = "image">
        <img :src = "product.image">
      </div>
        <button class = "auto" v-on:click = "addToCart(product)">Add to Cart</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    products: Array
  },

  methods: {
    addToCart(product)
    {
      if (this.$root.$data.cart.includes(product))
      {
          this.$root.$data.numItemsInCart += 1;
      }
      else
      {
          this.$root.$data.cart.push(product);
          this.$root.$data.numItemsInCart += 1;
      }
      product.quantity += 1;
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  margin: 30px;
  width: 250px;
}

.product img {
  margin-top: 30px;
  margin-bottom: 30px;
  width: 200px;
  height: 200px;
}

.info h1 {
  color: white;
  font-size: 16px;
}

.info h2 {
  margin-top: 20px;
  color: white;
  font-size: 14px;
}

button {
  font-family: ArcadeNormal;
  color: white;
  background-color: #343434;
  padding: 20px;
}

.auto {
  margin-left: auto;
}
</style>
