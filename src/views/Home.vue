<template>
<div id = "home-page">
  <div class = "main-image">
  <center><h1> Welcome to Provo's premier retro gaming store! </h1></center>
  </div>
  <div class = "bricks">
  </div>

  <div class = "body">
  <div class = "options">
    <div class = "welcome-text"><p>	 Shop all our vintage 100% authentic products, including consoles,
               console accessories, and games. Choose from one of the banners below to view what we have in stock. </p></div>
  </div>

  <div class = "shop-grid">
    <div class = 'shop-window'>
      <router-link to = "/nintendo">
      <div button class = 'nintendo-button'>
        <a href = 'nintendo.html'><img src = '/Pictures/Nintendo Logo.png' class = 'logo'></a>
      </div>
      </router-link>
      <router-link to = "/sega">
      <div button class = 'sega-button'>
        <a href = 'sega.html'><img src = '/Pictures/Sega Logo.png' class = 'logo'></a>
      </div>
      </router-link>
      <router-link to = "/playstation">
      <div button class = 'playstation-button'>
        <a href = 'playstation.html'><img src = '/Pictures/Playstation Logo.png' class = 'logo'></a>
      </div>
      </router-link>
      <router-link to = "/xbox">
      <div button class = 'xbox-button'>
        <a href = 'xbox.html'><img src = '/Pictures/Xbox Logo.png' class = 'logo'></a>
      </div>
      </router-link>
    </div>
  </div>
 </div>

 <div class = 'github'>
		<center><a href = "https://github.com/KyeElliott/Creative-Project-3"> GitHub: https://github.com/KyeElliott/Creative-Project-3 </a></center>
	</div>
</div>
</template>

<style>
.main-image {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("/Pictures/Mario Bros. Background without Bricks.jpg");
  background-size: cover;
  height: 500px;
}

.main-image h1 {
  color: white;
}

.bricks
{
  height: 83px;
  background-image: url(/Pictures/Bricks.jpg);
  background-size: cover;
}

.options {
  display: flex;
  justify-content: center;
  padding-top: 100px;
  background-color: #23272a;
}

.welcome-text {
  width: 800px;
  font-size: 25px;
  color: white;
}

.logo {
  width: 150px;
}

.shop-grid {
  display: flex;
  flex-wrap:wrap;
  justify-content: center;
  background-color: #23272a;
}

.shop-window {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 100px;
  width: 1200px;
}

.nintendo-button {
  display: flex;
  width: 400px;
  height: 200px;
  justify-content: center;
  align-items: center;
  background-color: #e60012;
  border: 1px solid white;
  padding: 56.5px;
  margin: 20px;
}

.sega-button {
  display: flex;
  width: 400px;
  height: 200px;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 56.5px;
  border: 1px solid white;
  margin: 20px;
}

.playstation-button {
  display: flex;
  width: 400px;
  height: 200px;
  justify-content: center;
  align-items: center;
  background-color: black;
  border: 1px solid white;
  padding: 56.5px;
  margin: 20px;
}

.xbox-button {
  display: flex;
  width: 400px;
  height: 200px;
  justify-content: center;
  align-items: center;
  background-color: #107c10;
  border: 1px solid white;
  padding: 56.5px;
  margin: 20px;
}

.nintendo-button:hover,
.sega-button:hover,
.playstation-button:hover,
.xbox-button:hover
{
  box-shadow: 0 10px 12px -6px lightgrey;
}

.github {
  background-color: #0c0c0d;
  border-top: 2px solid white;
  font-size: 15px;
  padding: 30px;
}

.github a {
  text-decoration: none;
  color: white;
}

.github a:hover {
  color: gray;
}
</style>
