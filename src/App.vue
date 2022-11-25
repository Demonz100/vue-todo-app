<template>
  <Navigation />

  <router-view v-slot="{ Component }">
    <Transition name="route" mode="out-in">
      <Component :is="Component"></Component>
    </Transition>
  </router-view>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navigation from './shared/components/Navigation.vue';
</script>

<style>
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
