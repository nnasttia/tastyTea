<template>
  <div class="container d-flex mb-130">
    <img src="../img/about-us.webp" alt="Picture for block about us">
    <div class="about-us d-flex p-10">
      <h2>
        Who we are
      </h2>
      <p>
        Swallowtail Tea is a natural step of growth for Red Rooster Coffee. We're excited to offer the finest tea and herbs available. Our tea lab and cafe is housed with in the Red Rooster building at 823 E. Main St. Swing by the new cafe to taste what we've created.
      </p>
      <a href="#">
        About us ➝
      </a>
    </div>
  </div>

</template>

<script setup>

</script>

<style scoped lang="scss">

.about-us {
  background-color: #e8f2ed;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    margin: 0 0 23px;
    font-family: 'Krona One', serif;
    color: var(--second-color);
    font-size: 36px;
    font-weight: 400;
    text-transform: none;
    line-height: 44px;
    letter-spacing: 0;
  }

  p {
    font-family: "Heebo", serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0;
    margin: 0;
    width: 80%;
  }

  a {
    padding: 0;
    margin: 46px 0 0 5px;
    color: var(--main-color);
    background-color: rgba(0, 0, 0, 0);

    &:hover {
      color: var(--second-color);
    }
  }
}

</style>