<template>
  <section class="banner">
    <div class="banner-content d-flex">
      <div class="banner-title">
        <h1>Buy 5 <br>
          Wellness Blends for <br>
          15% Discount</h1>
      </div>
      <button class="btn">Choose your tea
        <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="9" fill="#FFF">
              <path d="M12.51 8.938v-3.96H.918v-.756H12.51V.262L17.154 4.6 12.51 8.938Z"/>
            </svg>
          </span>
      </button>
    </div>
  </section>
</template>

<script setup>

</script>

<style scoped lang="scss">
  .banner {
    background-image: url('../../src/img/tea.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 15px;
  }

  .banner-content {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
    margin: 0 10px 0 10px;
    padding: 7.9% 0 18.9% 0;

    button {
      margin: 25px 0 0 0;
      text-align: center;
      border-radius: 5px;
    }

    button:hover {
      background-color: var(--second-color);
    }
  }

  .banner-title {
    text-align: center;
    margin-bottom: 20px;
    width: 100%;

    h1 {
      color: var(--second-color);
      font-family: var(--second-font), sans-serif;
      font-size: 48px;
      font-weight: 400;
      line-height: 64px;
    }
  }
</style>