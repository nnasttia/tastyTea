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
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../pages/AppLoginPage.vue'),
        meta: {
            public: true,
            title: 'Login'
        }
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../pages/AppRegisterPage.vue'),
        meta: {
            public: true,
            title: 'Register'
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
