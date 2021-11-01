<template>
  <div id="app">
    <div id="nav">
      <router-link to="/nintendo">Nintendo</router-link>
      <router-link to="/sega">Sega</router-link>
      <router-link to="/">Home</router-link>
      <router-link to="/playstation">Playstation</router-link>
      <router-link to="/xbox">Xbox</router-link>
      <div class = "cart">
        <router-link to ="/cart"><img src = "/Pictures/Shopping Cart.png" width = "40px;"></router-link>
        <p>({{this.$root.$data.numItemsInCart}})</p>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style>
* {
  margin: 0px;
}

@font-face
{
  font-family: "ArcadeNormal";
  src: local("ArcadeNormal"),
   url(./fonts/ArcadeNormal.woff) format("woff");
}

#app {
  font-family: ArcadeNormal, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  display: flex;
  padding: 30px;
  justify-content: space-around;
  background-color: #0c0c0d;
}

.cart {
  position: absolute;
  top: 10px;
  right: 25px;
  color: white;
  font-size: 15px;
}

#nav a {
  text-decoration: none;
  color: white;
}

#nav a:hover {
  color: gray;
}
</style>
