<template>
  <div id="nav">
    <router-link to="/" class="nav__button" :class="getActiveClass('/')" > Home </router-link>
    <router-link to="/cooking" class="nav__button" :class="getActiveClass('/cooking')"> Cooking </router-link>
    <router-link to="/refining" class="nav__button" :class="getActiveClass('/refining')"> Refining </router-link>
    <router-link to="/brewing" class="nav__button" :class="getActiveClass('/brewing')"> Brewing </router-link>
  </div>
  <router-view />
</template>

<script setup>
import { useRoute } from 'vue-router';

// Component name is defined as a comment
// name: 'App',

const route = useRoute()

function getActiveClass(path) {
  return {
    active : route.path === path
  }
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

#nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: auto;
  max-width: 50rem;
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

.active {
  border: 2px solid #FF595E;;
  background: rgba(255, 89, 94, 0.10);
}

.active:hover {
  border: 2px solid #FF595E;;
  background: rgba(255, 89, 94, 0.20);
}
</style>
