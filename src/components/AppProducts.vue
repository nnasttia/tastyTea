<template>
  <div class="container mb-130">
    <div class="product-type d-flex">
      <a
          href="#"
          v-for="filter in filters"
          :key="filter"
          :class="{ active: filter === selectedFilter }"
          @click.prevent="selectFilter(filter)"
      >
        {{ filter }}
      </a>
    </div>
    <div class="product-list d-flex p-10">
      <div
          class="product-card"
          v-for="product in filteredProducts"
          :key="product.title"
      >
        <img :src="product.image" :alt="`Picture for ${product.title}`" />
        <p class="product-title">{{ product.title }}</p>
        <p class="price">{{ product.price }}</p>
        <button class="add-to-cart-btn btn" @click="addToCart(product)">
          <svg
              width="15"
              height="15"
              viewBox="0 0 902.86 902.86"
          >
            <path
                d="M671.504 577.829 781.989 145.22H902.86v-68H729.174L703.128 179.2 0 178.697l74.753 399.129h596.751v.003zm14.262-330.641-67.077 262.64h-487.49L81.928 246.756l603.838.432zM578.418 825.641c59.961 0 108.743-48.783 108.743-108.744s-48.782-108.742-108.743-108.742H168.717c-59.961 0-108.744 48.781-108.744 108.742s48.782 108.744 108.744 108.744S277.46 776.858 277.46 716.897c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107 12.59-7.928 26.342-7.928 40.742.001 59.961 48.783 108.744 108.744 108.744zM209.46 716.897c0 22.467-18.277 40.744-40.743 40.744s-40.744-18.277-40.744-40.744c0-22.465 18.277-40.742 40.744-40.742 22.466 0 40.743 18.277 40.743 40.742zm409.702 0c0 22.467-18.277 40.744-40.743 40.744s-40.743-18.277-40.743-40.744c0-22.465 18.277-40.742 40.743-40.742s40.743 18.277 40.743 40.742z"
            />
          </svg>
          ADD TO CART
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, computed } from "vue";
import { useCartStore } from '@/js/stores/cart';

const cartStore = useCartStore();

function addToCart(product) {
  cartStore.addToCart({
    ...product,
    quantity: 1,
    price: product.price
  });
}

const filters = ["All", "Black", "Green", "White", "Tisanes", "Blends"];
const selectedFilter = ref("All");

const products = reactive([
  {
    title: "Bright Morning Stars Mental",
    type: "Black",
    price: "$25.00",
    image: new URL("../img/products/Bright-Morning-Stars-Mental.webp", import.meta.url).href,
  },
  {
    title: "Fire Tower Lapsang",
    type: "Black",
    price: "$8.00 - $17.00",
    image: new URL("../img/products/Fire-tower-lapsang.webp", import.meta.url).href,
  },
  {
    title: "Slumber Party Tisane",
    type: "Tisanes",
    price: "$25.00",
    image: new URL("../img/products/Slumber-party-tisane.webp", import.meta.url).href,
  },
  {
    title: "Aroma Candle",
    type: "Blends",
    price: "$9.99",
    image: new URL("../img/products/Aroma-candle.webp", import.meta.url).href,
  },
  {
    title: "Appalachian Sunrise Herbal",
    type: "Blends",
    price: "$10.00",
    image: new URL("../img/products/Appalachian-sunrise-herbal.webp", import.meta.url).href,
  },
  {
    title: "White Peony",
    type: "White",
    price: "$15.00 - $34.00",
    image: new URL("../img/products/White-Peony.webp", import.meta.url).href,
  },
  {
    title: "Burgeoning farm honey",
    type: "Other",
    price: "$4.00",
    image: new URL("../img/products/Burgeoning-farm-honey.webp", import.meta.url).href,
  },
  {
    title: "First tower lapsang souchong",
    type: "Green",
    price: "$4.00",
    image: new URL("../img/products/Fire-tower-lapsang.webp", import.meta.url).href,
  }
]);

const selectFilter = (filter) => {
  selectedFilter.value = filter;
};

const filteredProducts = computed(() => {
  if (selectedFilter.value === "All") {
    return products;
  }
  return products.filter((product) => product.type === selectedFilter.value);
});
</script>


<style scoped lang="scss">
.product-type {
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  a {
    padding: 10px 20px;
    color: var(--main-color);
    font-family: var(--second-font), sans-serif;
    font-size: 24px;
    font-weight: 400;
    text-transform: none;
    line-height: 34px;
    letter-spacing: 0;

    &:hover,
    &:focus,
    &:active {
      color: var(--second-color);
    }
  }
}

.product-list {
  justify-content: space-around;
  flex-wrap: wrap;
}

.product-card {
  position: relative;
  text-align: center;
  padding: 50px 30px 0 30px;
  cursor: pointer;

  img {
    width: 240px;
    height: 240px;
  }

  .product-list {
    flex-wrap: wrap;
  }

  .product-title, .price {
    transition: opacity 0.3s ease-out;
  }

  .price {
    color: #a5a5a5;
  }

  .add-to-cart-btn {
    display: none;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    font-size: 13px;
    padding: 0 10px;
    height: 60px;
    border-radius: 10px;

    &:hover {
      background-color: var(--second-color);
    }
  }

  &:hover {
    .product-title, .price {
      opacity: 0;
    }

    .add-to-cart-btn {
      display: block;
    }
  }
}
</style>