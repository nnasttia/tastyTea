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
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  .category {
    flex: 1 1 calc(33.33% - 10px);

    img {
      width: 100%;
      height: auto;
    }
  }
}

@media (max-width: 767px) {
  .categories {
    flex-direction: column;
    align-items: center;
  }

  .category {
    flex: 1 1 100%; // Элементы занимают всю ширину родителя
  }
}
</style>