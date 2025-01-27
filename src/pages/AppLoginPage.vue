<template>
  <div class="login-page d-flex">
    <div class="login-container d-flex">
      <div class="login-image d-flex">
        <router-link to="/">
          <img src="../../src/img/logo.svg" alt="site logo Tasty Tea">
        </router-link>
      </div>
      <div class="login-form">
        <h1>Sign In</h1>
        <form @submit.prevent="handleLogin">
          <div class="form-group">
            <input
                type="email"
                v-model="email"
                placeholder="Enter your email"
                required
            />
          </div>
          <div class="form-group">
            <input
                type="password"
                v-model="password"
                placeholder="Enter your password"
                required
            />
          </div>
          <button type="submit" class="login-button btn">Sign in</button>
          <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        </form>
        <div class="extra-links">
          <a href="#" @click.prevent="forgotPassword">Forgot Password?</a><br>
          <router-link to="/register">Don`t have account yet? Sign Up</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import users from "@/json/users.json";
import router from "@/router";

const email = ref("");
const password = ref("");
const errorMessage = ref("");

const handleLogin = () => {
  const user = users.find(
      (user) => user.email === email.value && user.password === password.value
  );

  if (user) {
    errorMessage.value = "";
    localStorage.setItem("currentUser", JSON.stringify(user));

    router.push("/");
  } else {
    errorMessage.value = "Wrong email or password.";
  }
};
</script>

<style scoped lang="scss">
.login-page {
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.login-container {
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 100%;
  max-width: 600px;
  gap: 40px;
}

.login-image {
  align-items: center;
  justify-content: center;
}

h1 {
  margin-bottom: 1rem;
  color: var(--main-color);
  font-family: var(--second-font),serif;
}

.form-group {
  margin-bottom: 1rem;
}

input {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;

  &:focus {
    outline: none;
    border-color: var(--main-color);
    box-shadow: 0 0 5px rgba(30, 102, 72, 0.5);
  }
}

.login-button {
  line-height: 30px;
  border-radius: 5px;
  width: 100%;

  &:hover {
    background: var(--second-color);
  }
}

.extra-links {
  margin-top: 1rem;
  font-size: 0.9rem;

  a {
    color: var(--main-color);
    text-decoration: none;
    margin: 0 0.5rem;

    &:hover {
      text-decoration: underline;
      color: var(--second-color);
    }
  }

}
</style>