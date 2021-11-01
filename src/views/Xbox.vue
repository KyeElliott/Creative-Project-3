<template>
<div class = "body">
<h1 id = "consoles"> Consoles </h1>
  <ProductList :products = "xboxConsoles" />
<h1 id = "games"> Games </h1>
  <ProductList :products = "xboxGames" />
  <div class = 'github'>
     <center><a href = "https://github.com/KyeElliott/Creative-Project-3"> GitHub: https://github.com/KyeElliott/Creative-Project-3 </a></center>
   </div>
</div>
</template>

<script>
import ProductList from "../components/ProductList.vue"
export default {
  name: 'Xbox',
  components: {
    ProductList
  },
  computed: {
    xboxConsoles() {
      let xConsoles = this.$root.$data.products.filter(product => product.itemType === "console");
      xConsoles = xConsoles.filter(product => product.brand === "xbox");

      return xConsoles;
    },
    xboxGames() {
      let xGames = this.$root.$data.products.filter(product => product.itemType === "game");
      xGames = xGames.filter(product => product.brand === "xbox");

      return xGames;
    }
  },
}
</script>

<style scoped>
.body {
  background-color: #23272a;
}

#consoles {
  padding-top: 75px;
  color: white;
}

#games {
  padding-top: 75px;
  color: white;
}
</style>
