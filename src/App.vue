<template>
  <Navigation />

  <router-view v-slot="{ Component }">
    <Transition name="route" mode="out-in">
      <KeepAlive>
        <Component :is="Component"></Component>
      </KeepAlive>
    </Transition>
  </router-view>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navigation from './shared/components/Navigation.vue';
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  position: relative;
  font-weight: normal;
}

body {
  min-height: 100vh;
  color: var(--color-text);
  background: var(--color-background);
  transition: color 0.5s, background-color 0.5s;
  line-height: 1.6;
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 15px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body{
  background-color: rgb(245, 245, 245);
}

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

a{
  color: #4ab886;
  text-decoration: none;
  font-size: 1.2rem;
  margin: 0 0.5rem;
}

.d-flex{
  display: flex;
}

.justify-content-center{
  justify-content: center;
}

.justify-content-between{
  justify-content: space-between;
}

.align-items-center{
  align-items: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media screen and (max-width: 768px) {
  #app {
    padding: 1rem;
  }
  .todos {
    padding: 1rem 1rem 0.5rem 1rem;
  }
}

.route-enter-from{
  opacity: 0;
  transform: translateX(10px);
}
.route-enter-active{
  transition: all 0.2s ease-out;
}
.route-leave-to{
  opacity: 0;
  transform: translateX(-10px);
}
.route-leave-active{
  transition: all 0.2s ease-out;
}
</style>
