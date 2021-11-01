<template>
<div>
<div class = "yourCart" v-if="this.$root.$data.numItemsInCart > 0">
  <h1> Your Cart </h1>
</div>
<div class="wrapper">
  <div class="products">
    <h1 v-if="this.$root.$data.numItemsInCart == 0">You don't have any items in your cart!</h1>
    <div class="product" v-for="product in cart" :key="product.id">
      <div class="info">
        <h1>{{product.name}}</h1>
        <p>({{product.quantity}})</p>
      </div>
      <div class="image">
        <img :src = "product.image">
      </div>
      <div class="price">
        <button class="auto" v-on:click = "removefromCart(product)">Remove</button>
      </div>
    </div>
  </div>
</div>
<div class = "removeAll">
  <button v-if="this.$root.$data.numItemsInCart > 0" v-on:click = "removeAllItems()">Remove all items</button>
</div>
<div class = 'github'>
   <center><a href = "https://github.com/KyeElliott/Creative-Project-3"> GitHub: https://github.com/KyeElliott/Creative-Project-3 </a></center>
 </div>
</div>
</template>

<script>
export default {
  name: 'Cart',
  computed: {
    cart() {
      return this.$root.$data.cart
    }
  },
  methods: {
    removefromCart(product)
    {
      if (product.quantity > 1)
      {
          product.quantity--;
          this.$root.$data.numItemsInCart -= 1;
      }
      else
      {
          this.$root.$data.cart = this.$root.$data.cart.filter(function(el) {return el.name != product.name});
          this.$root.$data.numItemsInCart -= 1;
      }
    },

    removeAllItems()
    {
      this.$root.$data.cart = [];
      this.$root.$data.numItemsInCart = 0;
    }
  }
}
</script>

<style scoped>
.yourCart {
  padding-top: 100px;
  background-color: #23272a;
}

.yourCart h1 {
  font-size: 30px;
}

.wrapper {
  background-color: #23272a;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%
}

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  margin: 30px;
  width: 200px;
}

.product img {
  margin-top: 30px;
  margin-bottom: 30px;
  width: 200px;
  height: 200px;
}

.info {
  flex-wrap: wrap;
}

.info h1 {
  color: white;
  font-size: 18px;
}

h1 {
  color: white;
  font-size: 24px;
}

.info h2 {
  margin-top: 20px;
  color: white;
  font-size: 14px;
}

.info p {
  margin-top: 20px;
  color: white;
}

.removeAll {
  background-color: #23272a;
  padding-bottom: 100px;
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
