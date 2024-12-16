import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'main',
        component: () => import('../../pages/AppMainPage.vue'),
        meta: {
            public: true,
            title: 'Home' }
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../../pages/AppAboutPage.vue'),
        meta: {
            public: true,
            title: 'About Us'
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
