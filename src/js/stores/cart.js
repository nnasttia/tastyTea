import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [],
    }),
    getters: {
        totalQuantity(state) {
            return state.items.reduce((sum, item) => sum + (Number(item.quantity) || 0), 0);
        },
        totalPrice(state) {
            return state.items.reduce((sum, item) => {
                const price = Number(item.price) || 0;
                const quantity = Number(item.quantity) || 0;
                return sum + quantity * price;
            }, 0);
        },
        isEmpty(state) {
            return state.items.length === 0;
        },
    },
    actions: {
        addToCart(product) {
            const existingProduct = this.items.find(item => item.title === product.title);
            if (existingProduct) {
                existingProduct.quantity += product.quantity || 1;
            } else {
                this.items.push({
                    ...product,
                    quantity: product.quantity || 1,
                    price: product.price || 0,
                });
            }
        },
    },
});
