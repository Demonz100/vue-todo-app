<template>
  <Navigation />

  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navigation from './shared/components/Navigation.vue';
</script>
