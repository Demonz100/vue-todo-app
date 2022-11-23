<template>
    <select v-model="locale" @change="handleChangeLocale">
        <option v-for="supportedLocale in supportedLocales" :value="supportedLocale">{{$t(`navigation.${supportedLocale}`)}}</option>
    </select>
</template>
  
<script lang="ts">
import { getSupportedLocale } from '../utils/i18n';

export default {
    data(){
        return{
            locale: this.$i18n.locale,
            supportedLocales: getSupportedLocale
        }
    },
    methods:{
        handleChangeLocale(){
            this.$i18n.locale = this.locale
            localStorage.setItem("setLocale", this.locale);
        }
    }
}
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