// Importo le funzioni di Vue Router
import { createRouter, createWebHistory } from "vue-router";

// Importo le pagine che voglio usare
import HomePage from'../pages/HomePage.vue';
import ContactPage from'../pages/ContactPage.vue';
import NotFoundPage from'../pages/NotFoundPage.vue';
import ProjectDetailPage from'../pages/ProjectDetailPage.vue';
import TypeProjectsPage from'../pages/TypeProjectsPage.vue';

// Creiamo il Router e ddefiniamo le rotte
const router = createRouter({
    history:createWebHistory(),
    linkExactActiveClass: 'active',
    linkActiveClass:'active',
    routes: [
        {path: '/', name:'home', component: HomePage },
        {path: '/contact', name:'contact', component: ContactPage },
        {path: '/projects/:id', name:'project-detail', component: ProjectDetailPage },
        {path: '/types/:id/projects', name:'type-projects', component: TypeProjectsPage },
        {path: '/:pathMatch(.*)*', name:'not-found', component: NotFoundPage },
    ]
});

export { router };


