<template>
  <AppHeader/>
  <AppMainPage/>
  <AppFooter/>
</template>

<script setup>
import { useHead } from '@vueuse/head';

useHead({
  htmlAttrs: {
    lang: 'eng',
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'description', content: 'Site about tea' },
  ],
  title: 'Tasty Tea',
});

import '@/styles/styles.css';
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import AppMainPage from "@/pages/AppMainPage.vue";

</script>

<style>

</style>
