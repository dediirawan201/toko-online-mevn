<template>
  <div id="app">
  <div id="nav">
    <router-link :to="{ name: 'Product'}">Product</router-link> |
    <router-link :to="{ name: 'ProductDetail',params: {id: 123}}">Detail</router-link> |
    <router-link :to="{ name: 'Cart'}">Cart</router-link> |
  </div>
  <router-view/> 
  </div>
</template>

<style>

</style>
