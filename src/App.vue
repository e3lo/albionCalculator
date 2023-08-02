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
  color: #FFFFFF;
  margin-top: 60px;
}

body {
  background-color: #141317;
}

.nav {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.nav__button {
  padding: 1rem 3rem;
  margin: 1rem;
  border: 2px solid rgba(255, 255, 255, 0.40);
  border-radius: 1.25rem;
  background: rgba(255, 255, 255, 0.05);
  color: #FFFFFF;
  text-decoration: none;
}

.nav__button:hover {
  background: rgba(255, 255, 255, 0.1);
}
</style>
