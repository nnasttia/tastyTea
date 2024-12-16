<template>
  <section class="categories container d-flex">
    <article class="category">
      <a href="#">
        <img src="../../src/img/teas.webp" alt="Teas discover now">
      </a>
    </article>
    <article class="category">
      <img src="../img/wares.webp" alt="Wares discover now">
    </article>
    <article class="category">
      <img src="../../src/img/merch.webp" alt="Merch discover now">
    </article>
  </section>
</template>

<script setup>

</script>

<style scoped lang="scss">
.categories {
  cursor: pointer;
  margin: 30px auto 110px;
}

.category {
  padding-top: 10px;
}

.category:not(:last-child) {
  padding-bottom: 10px;
  width: 100%;
  padding-right: 10px;
}
</style>