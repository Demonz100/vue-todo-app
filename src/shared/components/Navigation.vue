<template>
    <header>
        <div class="d-flex align-items-center">
            <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="50" height="50" />
            <h1>{{ $t('navigation.appTitle') }}</h1>
        </div>
        <div class="d-flex align-items-center">
            <router-link :to="{ name: 'home' }">{{ $t('navigation.home') }}</router-link>
            <router-link :to="{ name: 'about' }">{{ $t('navigation.about') }}</router-link>

            <LanguageSwitcher />
        </div>
    </header>
</template>
  
<script setup lang="ts">
import { RouterLink } from "vue-router";
import LanguageSwitcher from "@/shared/components/LanguageSwitcher.vue"

</script>
  
<style>
header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
}

header a {
    color: inherit;
    text-decoration: none;
    font-size: 1.2rem;
    margin: 0 0.5rem;
}
</style>