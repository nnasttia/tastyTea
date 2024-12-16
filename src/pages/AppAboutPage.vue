<template>
  <main class="container">
    <section class="about-page p-10 mb-130">
      <div class="about-page-header">
        <h2>
          Who we are
        </h2>
      </div>
      <div class="about-page-text">
        <p>
          Tasty Tea is a natural step of growth for Red Rooster Coffee. We’re excited to offer the finest tea and herbs available. Our tea lab and cafe is housed with in the Red Rooster building at 823 E. Main St. Swing by the new cafe to taste what we’ve created.
        </p>
      </div>
      <div class="p-10">
        <img src="../img/about/person.webp" alt="Person image for about page">
      </div>
    </section>

    <section class="our-story p-10">
      <div class="d-flex mb-130">
        <div class="image">
          <img src="../img/about/spoon%20witj%20tes.webp" alt="spoon with tea">
        </div>
        <div class="text margin-122-left">
          <h2>Our Story</h2>
          <p>
            Created in 2016 as an answer to the demand from cafes and restaurants
            for a high-quality tea source, Red Rooster Coffee Roaster developed
            Swallowtail Tea. Nestled in the tiny hamlet of Floyd, Virginia,
            Swallowtail has met that need by working with high-end tea importers
            and local herb farmers.
          </p>
        </div>
      </div>
      <div class="d-flex">
        <div class="text margin-122-right">
          <h2>Our Values</h2>
          <p>
            At Swallowtail, quality is not just a word, it is
            the cornerstone of our business. Every step, from
            importing to tasting to blending and packaging is
            all done with the intent of providing our customer
            with the highest quality product. We inspect and cup
            every batch of tea and herbs we receive at our lab in
            Floyd and taste them religiously throughout their time
            in our care.
          </p>
        </div>
        <div class="image">
          <img src="../img/about/cups%20of%20tea.webp" alt="Cups of tea">
        </div>
      </div>
    </section>
</main>
</template>

<script setup>

</script>

<style scoped lang="scss">

h2 {
  margin: 0 0 23px;
  font-family: 'Krona One', serif;
  color: var(--second-color);
  font-weight: 400;
  text-transform: none;
  letter-spacing: 0;
}

.about-page {
  margin-top: 30px;

  .about-page-header {
    text-align: center;
    margin-bottom: 20px;

    h2 {
      font-size: 48px;
      line-height: 64px;
    }

  }

  .about-page-text {
    padding: 0 25% 0 25%;
    margin: 6px 0 72px;
    text-align: center;
  }
}

.margin-122-left {
  margin: 0 0 0 122px;
}

.margin-122-right {
  margin: 0 122px 0 0;
}

.our-story {
  margin-bottom: 80px;
  .text {
    align-content: center;
    align-items: center;
  }

  h2 {
    font-size: 36px;
    line-height: 40px;
  }
}
</style>