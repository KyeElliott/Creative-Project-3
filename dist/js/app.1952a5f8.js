(function(t){function e(e){for(var n,o,s=e[0],c=e[1],u=e[2],m=0,d=[];m<s.length;m++)o=s[m],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var c=a[s];0!==r[c]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"2d2e":function(t,e,a){},"3a0d":function(t,e,a){"use strict";a("e1ab")},"4a5d":function(t,e,a){"use strict";a("cfd1")},"4fa4":function(t,e,a){},5147:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("router-link",{attrs:{to:"/nintendo"}},[t._v("Nintendo")]),a("router-link",{attrs:{to:"/sega"}},[t._v("Sega")]),a("router-link",{attrs:{to:"/"}},[t._v("Home")]),a("router-link",{attrs:{to:"/playstation"}},[t._v("Playstation")]),a("router-link",{attrs:{to:"/xbox"}},[t._v("Xbox")]),a("div",{staticClass:"cart"},[a("router-link",{attrs:{to:"/cart"}},[a("img",{attrs:{src:"/Pictures/Shopping Cart.png",width:"40px;"}})]),a("p",[t._v("("+t._s(this.$root.$data.numItemsInCart)+")")])],1)],1),a("router-view")],1)},i=[],o=(a("034f"),a("2877")),s={},c=Object(o["a"])(s,r,i,!1,null,null,null),u=c.exports,l=a("8c4f"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"home-page"}},[a("div",{staticClass:"main-image"},[a("center",[a("h1",[t._v(" Welcome to Provo's premier retro gaming store! ")])])],1),a("div",{staticClass:"bricks"}),a("div",{staticClass:"body"},[t._m(0),a("div",{staticClass:"shop-grid"},[a("div",{staticClass:"shop-window"},[a("router-link",{attrs:{to:"/nintendo"}},[a("div",{staticClass:"nintendo-button",attrs:{button:""}},[a("a",{attrs:{href:"nintendo.html"}},[a("img",{staticClass:"logo",attrs:{src:"/Pictures/Nintendo Logo.png"}})])])]),a("router-link",{attrs:{to:"/sega"}},[a("div",{staticClass:"sega-button",attrs:{button:""}},[a("a",{attrs:{href:"sega.html"}},[a("img",{staticClass:"logo",attrs:{src:"/Pictures/Sega Logo.png"}})])])]),a("router-link",{attrs:{to:"/playstation"}},[a("div",{staticClass:"playstation-button",attrs:{button:""}},[a("a",{attrs:{href:"playstation.html"}},[a("img",{staticClass:"logo",attrs:{src:"/Pictures/Playstation Logo.png"}})])])]),a("router-link",{attrs:{to:"/xbox"}},[a("div",{staticClass:"xbox-button",attrs:{button:""}},[a("a",{attrs:{href:"xbox.html"}},[a("img",{staticClass:"logo",attrs:{src:"/Pictures/Xbox Logo.png"}})])])])],1)])]),a("div",{staticClass:"github"},[a("center",[a("a",{attrs:{href:"https://github.com/KyeElliott/Creative-Project-3"}},[t._v(" GitHub: https://github.com/KyeElliott/Creative-Project-3 ")])])],1)])},d=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"options"},[a("div",{staticClass:"welcome-text"},[a("p",[t._v(" Shop all our vintage 100% authentic products, including consoles, console accessories, and games. Choose from one of the banners below to view what we have in stock. ")])])])}],p=(a("cccb"),{}),g=Object(o["a"])(p,m,d,!1,null,null,null),f=g.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"body"},[a("h1",{attrs:{id:"consoles"}},[t._v(" Consoles ")]),a("ProductList",{attrs:{products:t.nintendoConsoles}}),a("h1",{attrs:{id:"games"}},[t._v(" Games ")]),a("ProductList",{attrs:{products:t.nintendoGames}}),a("div",{staticClass:"github"},[a("center",[a("a",{attrs:{href:"https://github.com/KyeElliott/Creative-Project-3"}},[t._v(" GitHub: https://github.com/KyeElliott/Creative-Project-3 ")])])],1)],1)},b=[],h=(a("4de4"),a("d3b7"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("div",{staticClass:"products"},t._l(t.products,(function(e){return a("div",{key:e.name,staticClass:"product"},[a("div",{staticClass:"info"},[a("h1",[t._v(t._s(e.name))]),a("h2",[t._v(t._s(e.price))]),a("div",{staticClass:"image"},[a("img",{attrs:{src:e.image}})]),a("button",{staticClass:"auto",on:{click:function(a){return t.addToCart(e)}}},[t._v("Add to Cart")])])])})),0)])}),v=[],C=(a("caad"),a("2532"),{name:"ProductList",props:{products:Array},methods:{addToCart:function(t){this.$root.$data.cart.includes(t)||this.$root.$data.cart.push(t),this.$root.$data.numItemsInCart+=1,t.quantity+=1}}}),$=C,P=(a("c44a"),Object(o["a"])($,h,v,!1,null,"24d9cfa4",null)),_=P.exports,x={name:"Nintendo",components:{ProductList:_},computed:{nintendoConsoles:function(){var t=this.$root.$data.products.filter((function(t){return"console"===t.itemType}));return t=t.filter((function(t){return"nintendo"===t.brand})),t},nintendoGames:function(){var t=this.$root.$data.products.filter((function(t){return"game"===t.itemType}));return t=t.filter((function(t){return"nintendo"===t.brand})),t}}},T=x,j=(a("3a0d"),Object(o["a"])(T,y,b,!1,null,"1ba945e5",null)),I=j.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"body"},[a("h1",{attrs:{id:"consoles"}},[t._v(" Consoles ")]),a("ProductList",{attrs:{products:t.segaConsoles}}),a("h1",{attrs:{id:"games"}},[t._v(" Games ")]),a("ProductList",{attrs:{products:t.segaGames}}),a("div",{staticClass:"github"},[a("center",[a("a",{attrs:{href:"https://github.com/KyeElliott/Creative-Project-3"}},[t._v(" GitHub: https://github.com/KyeElliott/Creative-Project-3 ")])])],1)],1)},B=[],q={name:"Sega",components:{ProductList:_},computed:{segaConsoles:function(){var t=this.$root.$data.products.filter((function(t){return"console"===t.itemType}));return t=t.filter((function(t){return"sega"===t.brand})),t},segaGames:function(){var t=this.$root.$data.products.filter((function(t){return"game"===t.itemType}));return t=t.filter((function(t){return"sega"===t.brand})),t}}},G=q,k=(a("e68d"),Object(o["a"])(G,S,B,!1,null,"9e0bbe8a",null)),E=k.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"body"},[a("h1",{attrs:{id:"consoles"}},[t._v(" Consoles ")]),a("ProductList",{attrs:{products:t.playstationConsoles}}),a("h1",{attrs:{id:"games"}},[t._v(" Games ")]),a("ProductList",{attrs:{products:t.playstationGames}}),a("div",{staticClass:"github"},[a("center",[a("a",{attrs:{href:"https://github.com/KyeElliott/Creative-Project-3"}},[t._v(" GitHub: https://github.com/KyeElliott/Creative-Project-3 ")])])],1)],1)},w=[],L={name:"Playstation",components:{ProductList:_},computed:{playstationConsoles:function(){var t=this.$root.$data.products.filter((function(t){return"console"===t.itemType}));return t=t.filter((function(t){return"playstation"===t.brand})),t},playstationGames:function(){var t=this.$root.$data.products.filter((function(t){return"game"===t.itemType}));return t=t.filter((function(t){return"playstation"===t.brand})),t}}},H=L,K=(a("ad8f"),Object(o["a"])(H,O,w,!1,null,"f5ae0222",null)),M=K.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"body"},[a("h1",{attrs:{id:"consoles"}},[t._v(" Consoles ")]),a("ProductList",{attrs:{products:t.xboxConsoles}}),a("h1",{attrs:{id:"games"}},[t._v(" Games ")]),a("ProductList",{attrs:{products:t.xboxGames}}),a("div",{staticClass:"github"},[a("center",[a("a",{attrs:{href:"https://github.com/KyeElliott/Creative-Project-3"}},[t._v(" GitHub: https://github.com/KyeElliott/Creative-Project-3 ")])])],1)],1)},X=[],A={name:"Xbox",components:{ProductList:_},computed:{xboxConsoles:function(){var t=this.$root.$data.products.filter((function(t){return"console"===t.itemType}));return t=t.filter((function(t){return"xbox"===t.brand})),t},xboxGames:function(){var t=this.$root.$data.products.filter((function(t){return"game"===t.itemType}));return t=t.filter((function(t){return"xbox"===t.brand})),t}}},R=A,F=(a("4a5d"),Object(o["a"])(R,N,X,!1,null,"4d6001de",null)),D=F.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[this.$root.$data.numItemsInCart>0?a("div",{staticClass:"yourCart"},[a("h1",[t._v(" Your Cart ")])]):t._e(),a("div",{staticClass:"wrapper"},[a("div",{staticClass:"products"},[0==this.$root.$data.numItemsInCart?a("h1",[t._v("You don't have any items in your cart!")]):t._e(),t._l(t.cart,(function(e){return a("div",{key:e.id,staticClass:"product"},[a("div",{staticClass:"info"},[a("h1",[t._v(t._s(e.name))]),a("p",[t._v("("+t._s(e.quantity)+")")])]),a("div",{staticClass:"image"},[a("img",{attrs:{src:e.image}})]),a("div",{staticClass:"price"},[a("button",{staticClass:"auto",on:{click:function(a){return t.removefromCart(e)}}},[t._v("Remove")])])])}))],2)]),a("div",{staticClass:"removeAll"},[this.$root.$data.numItemsInCart>0?a("button",{on:{click:function(e){return t.removeAllItems()}}},[t._v("Remove all items")]):t._e()]),a("div",{staticClass:"github"},[a("center",[a("a",{attrs:{href:"https://github.com/KyeElliott/Creative-Project-3"}},[t._v(" GitHub: https://github.com/KyeElliott/Creative-Project-3 ")])])],1)])},J=[],Y=(a("b0c0"),{name:"Cart",computed:{cart:function(){return this.$root.$data.cart}},methods:{removefromCart:function(t){t.quantity>1?(t.quantity--,this.$root.$data.numItemsInCart-=1):(this.$root.$data.cart=this.$root.$data.cart.filter((function(e){return e.name!=t.name})),this.$root.$data.numItemsInCart-=1)},removeAllItems:function(){this.$root.$data.cart=[],this.$root.$data.numItemsInCart=0}}}),Z=Y,V=(a("99e2"),Object(o["a"])(Z,W,J,!1,null,"35e80f5a",null)),z=V.exports;n["a"].use(l["a"]);var Q=[{path:"/",name:"Home",component:f},{path:"/nintendo",name:"Nintendo",component:I},{path:"/sega",name:"Sega",component:E},{path:"/playstation",name:"Playstation",component:M},{path:"/xbox",name:"Xbox",component:D},{path:"/cart",name:"Cart",component:z}],U=new l["a"]({mode:"history",base:"/",routes:Q}),tt=U,et=[{name:"NES",price:"$55",image:"/Pictures/NES.png",itemType:"console",brand:"nintendo",quantity:0},{name:"SNES",price:"$60",image:"/Pictures/SNES.png",itemType:"console",brand:"nintendo",quantity:0},{name:"N64",price:"$70",image:"/Pictures/N64.png",itemType:"console",brand:"nintendo",quantity:0},{name:"Sega Genesis",price:"$45",image:"/Pictures/Sega Genesis.png",itemType:"console",brand:"sega",quantity:0},{name:"Sega Game Gear",price:"$100",image:"/Pictures/Sega Game Gear.png",itemType:"console",brand:"sega",quantity:0},{name:"PS1",price:"$45",image:"/Pictures/Playstation.png",itemType:"console",brand:"playstation",quantity:0},{name:"PS2",price:"$60",image:"/Pictures/Playstation 2.png",itemType:"console",brand:"playstation",quantity:0},{name:"Original XBOX",price:"$35",image:"/Pictures/Original XBOX.png",itemType:"console",brand:"xbox",quantity:0},{name:"Super Mario Bros. 2 CIB",price:"$100",image:"/Pictures/Mario Bros 2.png",itemType:"game",brand:"nintendo",quantity:0},{name:"Super Mario Bros. 3 CIB",price:"$120",image:"/Pictures/Mario Bros 3.jpg",itemType:"game",brand:"nintendo",quantity:0},{name:"Battletoads CIB",price:"$150",image:"/Pictures/Battletoads.jpg",itemType:"game",brand:"nintendo",quantity:0},{name:"Donkey Kong Country 2 CIB",price:"$150",image:"/Pictures/Donkey Kong Country 2.jpg",itemType:"game",brand:"nintendo",quantity:0},{name:"Chrono Trigger (Cartridge Only)",price:"$170",image:"/Pictures/Chrono Trigger.jpg",itemType:"game",brand:"nintendo",quantity:0},{name:"Earthbound CIB",price:"$700",image:"/Pictures/Earthbound.jpg",itemType:"game",brand:"nintendo",quantity:0},{name:"Super Mario 64 CIB",price:"$110",image:"/Pictures/Mario 64.jpg",itemType:"game",brand:"nintendo",quantity:0},{name:"Super Smash Bros CIB",price:"$175",image:"/Pictures/Super Smash Bros.jpg",itemType:"game",brand:"nintendo",quantity:0},{name:"Legend of Zelda OOT CIB",price:"$200",image:"/Pictures/Legend of Zelda OOT.jpg",itemType:"game",brand:"nintendo",quantity:0},{name:"Sonic the Hedgehog 2 CIB",price:"$15",image:"/Pictures/Sonic 2.png",itemType:"game",brand:"sega",quantity:0},{name:"Streets of Rage 2 CIB",price:"$50",image:"/Pictures/Streets of Rage 2.jpg",itemType:"game",brand:"sega",quantity:0},{name:"Dr. Robotnik's Mean Bean Machine CIB",price:"$20",image:"/Pictures/Mean Bean Machine.png",itemType:"game",brand:"sega",quantity:0},{name:"Gunstar Heroes CIB",price:"$150",image:"/Pictures/Gunstar Heroes.jpg",itemType:"game",brand:"sega",quantity:0},{name:"Metal Gear Solid CIB",price:"$25",image:"/Pictures/Metal Gear Solid.jpg",itemType:"game",brand:"playstation",quantity:0},{name:"Final Fantasy VII CIB",price:"$20",image:"/Pictures/Final Fantasy 7.jpg",itemType:"game",brand:"playstation",quantity:0},{name:"Tony Hawk's Pro Skater 2 CIB",price:"$15",image:"/Pictures/Tony Hawk Pro Skater.jpg",itemType:"game",brand:"playstation",quantity:0},{name:"Kingdom Hearts II CIB",price:"$15",image:"/Pictures/Kingdom Hearts 2.jpg",itemType:"game",brand:"playstation",quantity:0},{name:"Crash Bandicoot: Wrath of Cortex CIB",price:"$20",image:"/Pictures/Crash Bandicoot Wrath of Cortex.jpg",itemType:"game",brand:"playstation",quantity:0},{name:"Grand Theft Auto III CIB",price:"$170",image:"/Pictures/GTA 3.jpg",itemType:"game",brand:"playstation",quantity:0},{name:"Ninja Gaiden Black CIB",price:"$25",image:"/Pictures/Ninja Gaiden Black.jpg",itemType:"game",brand:"xbox",quantity:0},{name:"Halo: Combat Evolved CIB",price:"$15",image:"/Pictures/Halo Combat Evolved.jpg",itemType:"game",brand:"xbox",quantity:0},{name:"Psychonauts CIB",price:"$10",image:"/Pictures/Psychonauts.jpg",itemType:"game",brand:"xbox",quantity:0}],at=et;n["a"].config.productionTip=!1;var nt={products:at,cart:[],numItemsInCart:0};new n["a"]({router:tt,data:nt,render:function(t){return t(u)}}).$mount("#app")},"5ced":function(t,e,a){},"85ec":function(t,e,a){},"99e2":function(t,e,a){"use strict";a("ee2b")},ad8f:function(t,e,a){"use strict";a("4fa4")},c44a:function(t,e,a){"use strict";a("5147")},cccb:function(t,e,a){"use strict";a("5ced")},cfd1:function(t,e,a){},e1ab:function(t,e,a){},e68d:function(t,e,a){"use strict";a("2d2e")},ee2b:function(t,e,a){}});
//# sourceMappingURL=app.1952a5f8.js.map