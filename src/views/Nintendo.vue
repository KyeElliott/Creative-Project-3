<template>
<div class = "body">
<h1 id = "consoles"> Consoles </h1>
  <ProductList :products = "nintendoConsoles" />
<h1 id = "games"> Games </h1>
  <ProductList :products = "nintendoGames" />
  <div class = 'github'>
     <center><a href = "https://github.com/KyeElliott/Creative-Project-3"> GitHub: https://github.com/KyeElliott/Creative-Project-3 </a></center>
   </div>
</div>
</template>

<script>
import ProductList from "../components/ProductList.vue"
export default {
  name: 'Nintendo',
  components: {
    ProductList
  },
  computed: {
    nintendoConsoles() {
      let nConsoles = this.$root.$data.products.filter(product => product.itemType === "console");
      nConsoles = nConsoles.filter(product => product.brand === "nintendo");

      return nConsoles;
    },
    nintendoGames() {
      let nGames = this.$root.$data.products.filter(product => product.itemType === "game");
      nGames = nGames.filter(product => product.brand === "nintendo");

      return nGames;
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
