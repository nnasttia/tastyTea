<template>
  <main class="container">
    <AppBanner/>
    <AppCategories/>
    <AppProducts/>
    <AppAbout/>
    <AppSubscribe/>
  </main>
</template>

<script setup>

import AppBanner from "@/components/AppBanner.vue";
import AppAbout from "@/components/AppAbout.vue";
import AppCategories from "@/components/AppCategories.vue";
import AppSubscribe from "@/components/AppSubscribe.vue";
import AppProducts from "@/components/AppProducts.vue";
</script>

<style scoped lang="scss">

</style>