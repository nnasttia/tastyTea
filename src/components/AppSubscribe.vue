<template>
  <div class="container">
    <div class="subscribe p-10">
      <svg class="subscribe-img" width="50" height="50" viewBox="0 0 50 50" fill="none">
        <rect x="24" y="12" width="2" height="38" rx="1" fill="#1E6648"></rect>
        <path d="M18 12C18 17.0667 25 22 25 22C25 22 31.9999 17.0667 32 12C32.0001 7.58371 26.6818 2.50896 25.3164 1.27891C25.1347 1.11524 24.8653 1.11524 24.6836 1.27891C23.3182 2.50897 18 7.58371 18 12Z" stroke="#1E6648" stroke-width="2" stroke-linecap="round"></path><path d="M12.7782 35.6776C16.3608 39.2603 24.799 37.7989 24.799 37.7989C24.799 37.7989 26.2603 29.3608 22.6777 25.7781C19.5549 22.6552 12.2059 22.8275 10.3707 22.9232C10.1265 22.9359 9.93596 23.1264 9.92323 23.3706C9.82757 25.2058 9.65538 32.5548 12.7782 35.6776Z" stroke="#1E6648" stroke-width="2" stroke-linecap="round"></path><rect x="18" y="32.4143" width="2" height="8" rx="1" transform="rotate(-45 18 32.4143)" fill="#1E6648"></rect><path d="M37.9706 40.6776C34.3879 44.2603 25.9498 42.7989 25.9498 42.7989C25.9498 42.7989 24.4885 34.3608 28.0711 30.7781C31.1938 27.6552 38.5429 27.8275 40.3781 27.9232C40.6223 27.9359 40.8128 28.1264 40.8256 28.3706C40.9212 30.2058 41.0934 37.5548 37.9706 40.6776Z" stroke="#1E6648" stroke-width="2" stroke-linecap="round"></path><rect width="2" height="8" rx="1" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 32.7488 37.4143)" fill="#1E6648"></rect></svg>
      <h2>
        Sign up and get 10% off your <br>
        first purchase
      </h2>
      <p>
        Be up on the latest news and hot offers by subscribing
      </p>
      <form class="subscribe-form d-flex">
        <input class=""
               type="email"
               name="email"
               placeholder="Type your email"
        >
        <button type="submit" class="btn">
          <span class="submit-svg">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none"><path d="M3.3254 3.62037C3.11573 3.44066 2.80008 3.46494 2.62037 3.6746C2.44066 3.88427 2.46494 4.19992 2.6746 4.37963L10 10.6585L17.3254 4.37963C17.5351 4.19992 17.5593 3.88427 17.3796 3.6746C17.1999 3.46494 16.8843 3.44066 16.6746 3.62037L10 9.34146L3.3254 3.62037Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0 2C0 0.895431 0.895431 0 2 0H18C19.1046 0 20 0.895431 20 2V14C20 15.1046 19.1046 16 18 16H2C0.895431 16 0 15.1046 0 14V2ZM2 1H18C18.5523 1 19 1.44772 19 2V14C19 14.5523 18.5523 15 18 15H2C1.44772 15 1 14.5523 1 14V2C1 1.44772 1.44772 1 2 1Z" fill="white"></path></svg>
          </span>
          <span class="submit-text">Subscribe</span>
        </button>
      </form>
      <div class="social-media d-flex">
        <a href="#" target="_blank" title="Facebook">
          <span class="screen-reader-only">Facebook social media</span>
          <svg width="24" height="24" viewBox="0 0 310 310" fill="#1e6648"><path d="M81.703 165.106h33.981V305a5 5 0 0 0 5 5H178.3a5 5 0 0 0 5-5V165.765h39.064a5 5 0 0 0 4.967-4.429l5.933-51.502a5 5 0 0 0-4.966-5.572h-44.996V71.978c0-9.732 5.24-14.667 15.576-14.667h29.42a5 5 0 0 0 5-5V5.037a5 5 0 0 0-5-5h-40.545A39.746 39.746 0 0 0 185.896 0c-7.035 0-31.488 1.381-50.804 19.151-21.402 19.692-18.427 43.27-17.716 47.358v37.752H81.703a5 5 0 0 0-5 5v50.844a5 5 0 0 0 5 5.001z"/></svg>
        </a>
        <a href="#" target="_blank" title="X">
          <span class="screen-reader-only">X social media</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#1e6648"><path d="m2.867 3 6.87 9.818L2.733 21h2.647l5.539-6.49L15.46 21h5.911l-7.197-10.303L20.744 3H18.14l-5.143 6.01L8.8 3H2.867z"/></svg>
        </a>
        <a href="#" target="_blank" title="YouTube">
          <span class="screen-reader-only">YouTube social media</span>
          <svg width="24" height="24" viewBox="0 -3 20 20" fill="#1e6648"><path d="M7.988 9.586V3.974c1.993.938 3.536 1.843 5.36 2.82-1.505.834-3.367 1.77-5.36 2.792m11.103-8.403c-.344-.453-.93-.805-1.553-.922-1.833-.348-13.267-.349-15.099 0-.5.094-.945.32-1.328.673C-.5 2.429.005 10.452.393 11.75c.164.562.375.968.64 1.235.343.352.812.594 1.351.703 1.51.312 9.284.486 15.122.047a2.62 2.62 0 0 0 1.39-.712c1.49-1.49 1.388-9.962.195-11.841"/></svg>
        </a>
        <a href="#" target="_blank" title="Instagram">
          <span class="screen-reader-only">Instagram social media</span>
          <svg width="24" height="24" viewBox="0 0 20 20" fill="#1e6648"><path d="M5.87.123C4.242.196 2.83.594 1.69 1.729.548 2.869.155 4.286.081 5.897.037 6.902-.231 14.498.545 16.49a5.04 5.04 0 0 0 2.91 2.903c.634.246 1.356.412 2.416.461 8.86.401 12.145.183 13.53-3.364.246-.631.415-1.353.462-2.41.405-8.883-.066-10.809-1.61-12.351C17.027.507 15.586-.325 5.87.123m.081 17.944c-.97-.043-1.496-.205-1.848-.341a3.255 3.255 0 0 1-1.888-1.883c-.591-1.514-.395-8.703-.342-9.866.051-1.14.282-2.18 1.086-2.985C3.954 2 5.24 1.513 13.993 1.908c1.142.052 2.186.282 2.992 1.084.995.993 1.489 2.288 1.087 11.008-.044.968-.206 1.493-.342 1.843-.901 2.308-2.973 2.628-11.779 2.224M14.09 4.69c0 .657.534 1.19 1.194 1.19.66 0 1.195-.533 1.195-1.19a1.194 1.194 0 0 0-2.39 0M4.864 9.988a5.103 5.103 0 0 0 5.11 5.097 5.103 5.103 0 0 0 5.109-5.097 5.102 5.102 0 0 0-5.11-5.096 5.102 5.102 0 0 0-5.11 5.096m1.794 0A3.313 3.313 0 0 1 9.972 6.68a3.313 3.313 0 0 1 3.317 3.308 3.313 3.313 0 0 1-3.317 3.31 3.313 3.313 0 0 1-3.316-3.31"/></svg>
        </a>
        <a href="#" target="_blank" title="Pinterest">
          <span class="screen-reader-only">Pinterest social media</span>
          <svg width="24" height="24" viewBox="0 0 20 20" fill="#1e6648"><path d="M9.876 0C4.399 0 0 4.435 0 9.959c0 4.1 2.407 7.53 5.893 9.12 0-1.867-.013-1.626 1.41-7.699-.782-1.578-.174-4.183 1.577-4.183 2.43 0 .779 3.603.498 5.02-.249 1.088.581 1.925 1.577 1.925 1.909 0 3.153-2.427 3.153-5.271 0-2.176-1.493-3.767-4.066-3.767-4.575 0-5.735 5.096-4.149 6.695.399.604 0 .632 0 1.423-.277.836-2.49-.38-2.49-3.514 0-2.846 2.324-6.193 7.054-6.193 3.734 0 6.224 2.761 6.224 5.69 0 3.933-2.158 6.779-5.311 6.779-1.079 0-2.075-.586-2.407-1.256-.603 2.346-.725 3.535-1.66 4.854.913.25 1.826.418 2.822.418C15.602 20 20 15.565 20 10.042 19.752 4.435 15.353 0 9.876 0"/></svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.subscribe {
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    margin: 0 0 22px;
    font-family: var(--second-font), serif;
    color: var(--second-color);
    font-size: 36px;
    font-weight: 400;
    text-transform: none;
    line-height: 44px;
    letter-spacing: 0;
  }

  p {
    margin-bottom: 32px;
  }
}

.subscribe-img {
  margin-bottom: 1.45%;
}

.subscribe-form {
  width: auto;
  justify-content: center;
  margin-bottom: 48px;

  input {
    padding: 16px 0 17px 29px;
    border-radius: 0;
    background-color: #f4f6f5;
    color: #a5a5a5;
    font-family: var(--main-font), sans-serif;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0;
    border-style: solid;
    border-width: 0;
  }

  button {
    margin-left: 10px;

    &:hover {
      background-color: #1f1f1f;
    }
  }
}

.submit-svg {
  font-size: 20px;
  margin: 0 10px -3px 0;
}

.social-media {
  text-align: center;
  justify-content: center;
  align-items: center;

  a {
    margin-right: 14px;
    background-color: rgba(0, 0, 0, 0);
    font-size: 24px;
    padding: .5em;
  }

  svg:hover {
    fill: #6d2a2a;
  }
}
</style>