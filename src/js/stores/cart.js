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
                let price = item.price;
                if (typeof price === "string") {
                    if (price.includes("-")) {
                        const prices = price
                            .replace(/\$/g, "")
                            .split("-")
                            .map((p) => parseFloat(p.trim()));
                        price = (prices[0] + prices[1]) / 2;
                    } else {
                        price = parseFloat(price.replace(/\$/g, ""));
                    }
                }
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
        removeFromCart(index) {
            this.items.splice(index, 1);
        },
        clearCart() {
            this.items = [];
        },
    },
});
