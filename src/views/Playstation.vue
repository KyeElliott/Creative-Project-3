<template>
<div class = "body">
<h1 id = "consoles"> Consoles </h1>
  <ProductList :products = "playstationConsoles" />
<h1 id = "games"> Games </h1>
  <ProductList :products = "playstationGames" />
  <div class = 'github'>
     <center><a href = "https://github.com/KyeElliott/Creative-Project-3"> GitHub: https://github.com/KyeElliott/Creative-Project-3 </a></center>
   </div>
</div>
</template>

<script>
import ProductList from "../components/ProductList.vue"
export default {
  name: 'Playstation',
  components: {
    ProductList
  },
  computed: {
    playstationConsoles() {
      let pConsoles = this.$root.$data.products.filter(product => product.itemType === "console");
      pConsoles = pConsoles.filter(product => product.brand === "playstation");

      return pConsoles;
    },
    playstationGames() {
      let pGames = this.$root.$data.products.filter(product => product.itemType === "game");
      pGames = pGames.filter(product => product.brand === "playstation");

      return pGames;
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
