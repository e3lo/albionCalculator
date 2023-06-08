<template>
  <div id="nav">
    <router-link to="/" class="nav__button"> Home </router-link>
    <router-link to="/cooking" class="nav__button"> Cooking </router-link>
    <router-link to="/refining" class="nav__button"> Refining </router-link>
    <router-link to="/brewing" class="nav__button"> Brewing </router-link>
  </div>
  <router-view />
</template>

<script>

export default {
  name: 'App',
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

.nav__button {
  padding: 2em;
}
</style>
