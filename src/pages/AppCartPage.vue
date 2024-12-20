<template>
  <main class="cart-container">
    <h2>Cart</h2>
    <div v-if="cartStore.isEmpty" class="alert">
      <div class="alert-icon">
        <span>
          <svg width="24" height="24" viewBox="0 0 27.963 27.963" fill="#fff"><path d="M13.983 0C6.261 0 .001 6.259.001 13.979c0 7.724 6.26 13.984 13.982 13.984s13.98-6.261 13.98-13.984C27.963 6.259 21.705 0 13.983 0zm0 26.531c-6.933 0-12.55-5.62-12.55-12.553 0-6.93 5.617-12.548 12.55-12.548 6.931 0 12.549 5.618 12.549 12.548-.001 6.933-5.619 12.553-12.549 12.553z"/><path d="m15.579 17.158.612-12.579h-4.387l.61 12.579zM13.998 18.546c-1.471 0-2.5 1.029-2.5 2.526 0 1.443.999 2.528 2.444 2.528h.056c1.499 0 2.469-1.085 2.469-2.528-.026-1.497-.999-2.526-2.469-2.526z"/></svg>
        </span>
      </div>
      <div class="alert-message">
        Your cart is currently empty.
      </div>
    </div>

    <div v-else class="cart-items">
      <div v-for="(item, index) in cartStore.items" :key="item.id" class="cart-item">
        <img :src="item.image" alt="item.title" class="cart-item__image" />
        <div class="cart-item__details">
          <h3 class="cart-item__title">{{ item.title }}</h3>
          <p class="cart-item__quantity">{{ item.quantity }} × {{ item.price }}</p>
        </div>
        <button @click="removeFromCart(index)" class="cart-item__remove">✕</button>
      </div>
      <div class="cart-summary">
        <p class="cart-summary__total">
          <span>Total:</span> ${{ cartStore.totalPrice.toFixed(2) }}
        </p>
      </div>
    </div>
    <button class="return-button" @click="goToShop">Return to Shop</button>
  </main>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useCartStore } from '@/js/stores/cart';

const cartStore = useCartStore();

const removeFromCart = (index) => {
  cartStore.removeFromCart(index);
};

const router = useRouter();
const goToShop = () => {
  router.push({ name: 'main' });
};
</script>

<style scoped lang="scss">

.cart-page {
  max-width: 800px;
  margin: 0 auto;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  background: #f9f9f9;
  border: 1px solid #ebeced;
  border-radius: 8px;
  padding: 15px;
  gap: 15px;

  &__image {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 8px;
  }

  &__details {
    flex: 1;

    &__title {
      font-size: 16px;
      font-weight: bold;
      margin: 0;
      color: #333;
    }

    &__quantity {
      font-size: 14px;
      color: #555;
    }
  }

  &__remove {
    background: transparent;
    border: none;
    font-size: 20px;
    color: #e74c3c;
    cursor: pointer;
    padding: 0;
    transition: color 0.3s ease;

    &:hover {
      color: #c0392b;
    }
  }
}

.cart-summary {
  margin-top: 20px;
  font-size: 18px;
  text-align: right;

  &__total {
    font-size: 18px;
    font-weight: bold;
    color: #333;

    span {
      font-weight: normal;
      color: #555;
    }
  }
}

.cart-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  h2 {
    font-size: 36px;
    margin-bottom: 40px;
    text-align: center;
    font-family: var(--second-font), sans-serif;
    font-weight: 400;
  }

  .alert {
    display: flex;
    align-items: center;
    border: 1px solid #ebeced;
    border-radius: 5px;
    margin-top: 20px;
    margin-bottom: 50px;

    .alert-icon {
      background-color: #fdbc32;
      color: #fff;
      padding: 10px;
      border-radius: 3px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      margin-right: 15px;
    }

    .alert-message {
      font-size: 18px;
      color: var(--black);
      padding: 20px;
    }
  }

  .return-button {
    display: inline-block;
    margin-top: 20px;
    background-color: #1f1f1f;
    color: var(--white);
    font-size: 11px;
    font-weight: 900;
    line-height: 1;
    letter-spacing: 1px;
    text-transform: uppercase;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px 20px;
    max-width: 100%;
    text-align: center;
    text-decoration: none;
    border-radius: 3px;

    &:hover {
      background-color: rgb(69, 69, 69);
    }
  }
}
</style>

