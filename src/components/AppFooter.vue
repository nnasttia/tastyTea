<template>
  <footer class="app-footer">
    <div class="container">
      <div class="header-divider d-flex">
          <span></span>
      </div>
      <div class="footer-inner-container d-flex">
        <article class="footer-info">
          <h2>Shop</h2>
          <ul>
            <li>
              <a href="#">
                Merch
              </a>
            </li>
            <li>
              <a href="#">Wares</a>
            </li>
            <li>
              <a href="#">
                Black tea
              </a>
            </li>
            <li>
              <a href="#">
                Green tea
              </a>
            </li>
            <li>
              <a href="#">
                White tea
              </a>
            </li>
            <li>
              <a href="#">
                Tisanes tea
              </a>
            </li>
            <li>
              <a href="#">
                Blends tea
              </a>
            </li>
          </ul>
        </article>
        <article class="footer-info">
          <h2>Company</h2>
          <ul>
            <li>
              <a href="#">
                About us
              </a>
            </li>
            <li>
              <a href="#">
                Contacts
              </a>
            </li>
            <li>
              <a href="#">
                FAQs
              </a>
            </li>
          </ul>
        </article>
        <article class="footer-info">
          <h2>Account</h2>
          <ul>
            <li>
              <a href="#">
                My account
              </a>
            </li>
            <li>
              <a href="#">
                Checkout
              </a>
            </li>
            <li>
              <a href="#">
                Cart
              </a>
            </li>
            <li>
              <a href="#">
                Sample page
              </a>
            </li>
          </ul>
        </article>
        <div class="footer-info">

          <address class="footer-address">
            <div class="footer-number">
              <a href="tel: +1 800 456 87 91">
                +1 800 456 87 91
              </a>
            </div>
            <div class="footer-email">
              <a href="mailto:demolik@mail.com">
                demolik@mail.com
              </a>
            </div>
          </address>
          <div>
            <p>
              Monday — Friday <time datetime="7:00">7:00am </time> — <time datetime="17:00">5:00pm</time> <br>
              Saturday <time datetime="8:00"> 8:00am </time> — <time datetime="17:00"> 5:00pm </time> <br>
              Closed Sunday
            </p>
            <p>
              130 Kings Highway E Haddonfield, NJ 08033
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="copyright">
      <p>Tasty Tea. 2019 Theme Design by
        <span>
          <a>Zemez</a>
        </span> Inc.</p>
    </div>
  </footer>
</template>

<script setup>

</script>

<style scoped lang="scss">

  .header-divider {
    margin: 20px 0 0 0;
    width: 100%;
    position: relative;
    padding: 10px 0;

    span {
      display: inline-block;
      width: 100%;
      border-top: 1px solid #ededed;
      margin: 0;
    }
  }

  .app-footer {
    margin-top: 32px;
    margin-bottom: 0;
  }

  .footer-inner-container {
    margin-top: 32px;
    margin-bottom: 0;
  }

  .footer-info {
    width: 100%;
    position: relative;
    padding: 10px;
    justify-content: flex-start;

    h2 {
      color: var(--second-color);
      font-family: var(--second-font), sans-serif;
      font-size: 18px;
      font-weight: 400;
      line-height: 34px;
      letter-spacing: 0;
      padding: 0;
      margin: 0 0 20px;
    }

    ul {
      padding: 0;
      margin: 0;
    }

    li {
      padding: 0;
      margin: 0;

      a {
        color: var(--main-color);
        padding: 0 0 6px 0;
      }

      a:hover {
        color: var(--second-color);
      }
    }
  }

  .footer-number {
    a {
      color: var(--second-color);
      font-family: var(--second-font), sans-serif;
      font-size: 24px;
      transition: all 0.3s ease;
    }

    a:hover {
      color: var(--main-color);
    }
  }

  .footer-email {
    margin: 11px 0 20px 0;

    a {
      color: var(--main-color);
      text-decoration: underline;
      text-decoration-color: gray;
      font-weight: 700;
      font-size: 18px;
    }

    a:hover {
      color: var(--second-color);
    }

    p {
      font-style: normal;
    }
  }

  .copyright {
    max-width: 1280px;
    margin: 50px auto;
    display: flex;
    font-size: 14px;
    padding: 10px;

    a {
      color: var(--main-color);
      text-decoration: underline;
      text-decoration-color: black;
      font-weight: bold;
      font-size: 14px;
    }
  }

  @media screen and (max-width: 767px) {
    .footer-inner-container {
      flex-wrap: wrap;
    }
  }
</style>