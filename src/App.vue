/* eslint-disable */ 
<template>
  <div>
     
    <MapGoogle />
  </div>
</template>

<script>
/* eslint-disable */ 
import MapGoogle from'./components/MapGoogle.vue';

/* eslint-disable */ 
export default {
  name: 'App',
  components: {
    MapGoogle
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
