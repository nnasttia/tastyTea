import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'main',
        component: () => import('../pages/AppMainPage.vue'),
        meta: {
            public: true,
            title: 'Home' }
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../pages/AppAboutPage.vue'),
        meta: {
            public: true,
            title: 'About Us'
        }
    },
    {
        path: '/cart',
        name: 'cart',
        component: () => import('../pages/AppCartPage.vue'),
        meta: {
            public: true,
            title: 'Cart'
        }
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: () => import('../pages/AppContactsPage.vue'),
        meta: {
            public: true,
            title: 'Contacts'
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
