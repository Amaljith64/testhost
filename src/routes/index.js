import { createRouter, createWebHistory } from "vue-router";
import LoginView from '../views/login/LoginView.vue';
import PasswordResetView from '../views/password/PasswordResetView.vue';
import AuthLayout from '../layouts/AuthLayout.vue';
const router = createRouter({
    history: createWebHistory(),
    
    routes: [
        {
            path: "/",
            component: AuthLayout,
            children:[
                {
                    path:'/',
                    name:'Login',
                    component:LoginView
                },
                {
                    path: "/request-reset-password",
                    name:'PasswordReset',
                    component: PasswordResetView,
        
                },

            ]


        },
        
    ],
});
export default router