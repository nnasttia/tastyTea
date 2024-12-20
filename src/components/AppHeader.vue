<template>
  <header class="app-header">
    <div class="container">
      <div class="header-row">
        <div class="header-logo">
          <router-link to="/">
            <img src="../../src/img/logo.svg" alt="site logo Tasty Tea">
          </router-link>
        </div>
        <nav class="header-menu">
          <ul>
            <li>
              <a href="#">
                Shop
              </a>
            </li>
            <li>
              <router-link to="/about">About</router-link>
            </li>
            <li>
              <a href="#">
                Sale
              </a>
            </li>
            <li>
              <router-link to="/contacts">
                Contacts
              </router-link>
            </li>
          </ul>
        </nav>
        <div
            class="header-cart d-flex"
            @mouseenter="showCart = true"
            @mouseleave="showCart = false"
        >
          <div class="header-cart-container">
            <div class="header-cart-element">
              <a href="#">My account</a>
            </div>
          </div>
          <div class="header-cart-container">
            <div class="header-cart-element">
              <router-link to="/cart">Cart: {{ cartStore.totalQuantity }}</router-link>
            </div>
          </div>

          <div v-if="showCart" class="cart-dropdown">
            <p v-if="cartStore.isEmpty">No products in the cart</p>
            <div v-else>
              <div
                  v-for="(item, index) in cartStore.items"
                  :key="index"
                  class="cart-item d-flex"
              >
                <img
                    :src="item.image"
                    alt="Product Image"
                    class="cart-item-image"
                />
                <div class="cart-item-details">
                  <span class="cart-item-title">{{ item.title }}</span>
                  <span class="cart-item-quantity">{{ item.quantity }} × {{ item.price }}</span>
                </div>
                <button @click="removeItem(index)" class="cart-item-remove">×</button>
              </div>

              <div class="cart-subtotal d-flex">
                <span>Subtotal:</span>
                <span>${{ cartStore.totalPrice.toFixed(2)}}</span>
              </div>
              <button class="cart-checkout-button" @click="cartPage">
                <svg width="20" height="20" viewBox="0 0 902.86 902.86" fill="#ffffff"><path d="M671.504 577.829 781.989 145.22H902.86v-68H729.174L703.128 179.2 0 178.697l74.753 399.129h596.751v.003zm14.262-330.641-67.077 262.64h-487.49L81.928 246.756l603.838.432zM578.418 825.641c59.961 0 108.743-48.783 108.743-108.744s-48.782-108.742-108.743-108.742H168.717c-59.961 0-108.744 48.781-108.744 108.742s48.782 108.744 108.744 108.744S277.46 776.858 277.46 716.897c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107 12.59-7.928 26.342-7.928 40.742.001 59.961 48.783 108.744 108.744 108.744zM209.46 716.897c0 22.467-18.277 40.744-40.743 40.744s-40.744-18.277-40.744-40.744c0-22.465 18.277-40.742 40.744-40.742 22.466 0 40.743 18.277 40.743 40.742zm409.702 0c0 22.467-18.277 40.744-40.743 40.744s-40.743-18.277-40.743-40.744c0-22.465 18.277-40.742 40.743-40.742s40.743 18.277 40.743 40.742z"/></svg>
                CHECKOUT
              </button>
              <a href="/cart" class="cart-view-link">
                <svg width="20" height="20" viewBox="0 0 32 32" fill="#1e6648"><path d="M0 16q.064.128.16.352t.48.928.832 1.344T2.72 20.16t1.664 1.696 2.144 1.568 2.624 1.344 3.136.896 3.712.352 3.712-.352 3.168-.928 2.592-1.312 2.144-1.6 1.664-1.632 1.248-1.6.832-1.312.48-.928L32 16q-.032-.128-.16-.352t-.48-.896-.832-1.344-1.248-1.568-1.664-1.664-2.144-1.568-2.624-1.344-3.136-.896T16 6.016t-3.712.352-3.168.896-2.592 1.344-2.144 1.568T2.72 11.84t-1.248 1.568-.832 1.344-.48.928zm10.016 0q0-2.464 1.728-4.224T16 10.016t4.256 1.76T22.016 16t-1.76 4.256T16 22.016t-4.256-1.76T10.016 16zM12 16q0 1.664 1.184 2.848T16 20t2.816-1.152T20 16t-1.184-2.816T16 12t-2.816 1.184L16 16h-4z"/></svg>
                View cart
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="header-divider">
          <span>
          </span>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { useCartStore } from '@/js/stores/cart';
import {useRouter} from "vue-router";

const router = useRouter();
const cartStore = useCartStore();

const showCart = ref(false);

const removeItem = (index) => {
  cartStore.items.splice(index, 1);
}

const cartPage = () => {
  router.push({ name: 'cart' });
}

</script>

<style scoped lang="scss">
.app-header {
  margin-top: 20px;
  margin-bottom: 0;
}

.header-row {
  width: 100%;
  display: flex;
}

.header-logo {
  padding: 10px 0 0 0;
  display: flex;
  transition: background .3s, border .3s, border-radius .3s, box-shadow .3s,
  -webkit-border-radius .3s, -webkit-box-shadow .3s;
  justify-content: flex-start;
  /*width: 100%;*/
}

.header-menu {
  position: relative;
  min-height: 1px;
  display: flex;
  margin: 15px 0 0 0;
  padding: 10px;

  ul {
    display: flex;
    justify-content: flex-start;
    flex-flow: row wrap;
    align-items: center;
    align-content: center;
    margin: 0;

    li {
      flex-grow: 0;
      position: static;
      justify-content: space-between;
    }

    a {
      padding: 0;
      margin: 0 31px 0 0;

      &:hover {
        color: var(--main-color);
      }
    }
  }

  ul li {
    position: relative;
  }

  ul li .submenu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
    border: 1px solid #ddd;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    min-width: 200px;
  }

  ul li:hover .submenu {
    display: block;
  }

  ul li a {
    padding: 0;
    margin: 0 31px 0 0;
    position: relative;
  }

  ul li a:hover {
    color: var(--main-color);
  }
}

.header-cart {
  align-items: center;
  align-content: center;
  padding: 10px;
  margin: 15px 0 0 auto;
  position: relative;


  .header-cart-container {
    width: auto;
  }

  .header-cart-element {
    margin: 0 31px 0 0;

    a {
      font-size: 18px;
      text-transform: none;
      fill: var(--main-color);
      color: var(--main-color);
      background-color: rgba(0, 0, 0, 0);
      padding: 0;

      &:hover {
        color: var(--second-color);
      }
    }
  }

  .cart-dropdown {
    position: absolute;
    top: 100%;
    right: 0;
    background: white;
    border: 1px solid #ddd;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: none;
    width: 300px;
    z-index: 1000;

    .cart-item {
      align-items: center;
      padding: 10px;
      border-bottom: 1px solid #f1f1f1;

      .cart-item-image {
        width: 50px;
        height: 50px;
        object-fit: cover;
        margin-right: 10px;
      }

      .cart-item-title {
        display: block;
        font-size: 14px;
      }

      .cart-item-quantity {
        font-size: 13px;
        color: #777;
      }

      .cart-item-remove {
        background: none;
        border: none;
        font-size: 18px;
        color: #777;
        cursor: pointer;
      }
    }

    .cart-subtotal {
      justify-content: space-between;
      padding: 10px;
      font-size: 14px;
      font-weight: bold;
    }

    .cart-checkout-button {
      width: 100%;
      background-color: var(--main-color);
      color: #fff;
      border: none;
      padding: 10px;
      text-transform: uppercase;
      cursor: pointer;
      margin-bottom: 10px;

      &:hover,
      &:active,
      &:focus {
        background-color: #fef9c3;
        color: var(--main-color);
        svg {
          fill: var(--main-color);
        }
      }
    }

    .cart-view-link {
      display: block;
      text-align: center;
      padding: 10px;
      background-color: #fef9c3;
      color: var(--main-color);
      text-decoration: none;

      &:hover,
      &:active,
      &:focus {
        background-color: var(--main-color);
        color: #fef9c3;
        svg {
          fill: #fef9c3;
        }
      }
    }
  }

  &:hover .cart-dropdown {
    display: block;
  }
}

.header-divider {
  margin: 20px 0 0 0;
  display: flex;
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

/*@media screen and (min-width: 768px) {
  .header-logo {
    width: 18.438%;
  }
}

@media screen and (min-width: 992px) {}*/
</style>
