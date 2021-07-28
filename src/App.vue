<template>
  <div id="app">
      <div style="
      display: flex;width: 300px;margin: 0 auto;
      justify-content: space-between;
">
          <router-link  to="/" tag="h3">home</router-link>
          <router-link to="/List" tag="h3">List</router-link>
      </div>
      <router-view />
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
   h3{
       cursor: pointer;
   } 
}
</style>
