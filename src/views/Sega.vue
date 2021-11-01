<template>
<div class = "body">
<h1 id = "consoles"> Consoles </h1>
  <ProductList :products = "segaConsoles" />
<h1 id = "games"> Games </h1>
  <ProductList :products = "segaGames" />
  <div class = 'github'>
     <center><a href = "https://github.com/KyeElliott/Creative-Project-3"> GitHub: https://github.com/KyeElliott/Creative-Project-3 </a></center>
   </div>
</div>
</template>

<script>
import ProductList from "../components/ProductList.vue"
export default {
  name: 'Sega',
  components: {
    ProductList
  },
  computed: {
    segaConsoles() {
      let sConsoles = this.$root.$data.products.filter(product => product.itemType === "console");
      sConsoles = sConsoles.filter(product => product.brand === "sega");

      return sConsoles;
    },
    segaGames() {
      let sGames = this.$root.$data.products.filter(product => product.itemType === "game");
      sGames = sGames.filter(product => product.brand === "sega");

      return sGames;
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
