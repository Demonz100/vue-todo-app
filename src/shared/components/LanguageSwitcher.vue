<template>
    <select v-model="$i18n.locale">
        <option>{{ $t('navigation.en') }}</option>
        <option>{{ $t('navigation.km') }}</option>
    </select>
</template>
  
<script setup lang="ts">
</script>
  
<style scoped>
select {
    border: none;
    padding: 0;
    color: inherit;
    font-size: 1rem;
    background-color: transparent;
}
</style>