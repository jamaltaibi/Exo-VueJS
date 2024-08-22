import {createRouter, createWebHistory} from "vue-router";
import CounterComponent from "@/pages/counterComponent.vue";
import CounterComponentCorr from "@/pages/counterCorrComponent.vue";
import ListeComponent from "@/pages/courseComponent.vue";
import ListeComponentCorr from "@/pages/courseCorrComponent.vue";
import ListeFilm from "@/pages/ListeFilm.vue";
import ListeFilmCorr from "@/pages/listeFilmCorr.vue";
import SecretMessage from "@/pages/SecretMessage.vue";
import ContactForm from "@/pages/ContactForm.vue";
import Store from "@/pages/storeComponent.vue";
import LoginStore from "@/pages/LoginComponent.vue";
import LoginStoreCorr from "@/pages/loginComponentCorr.vue";
import HomeComponent from "@/pages/homeComponent.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: HomeComponent},
        {path: '/counter', component: CounterComponent},
        {path: '/counterCorr', component: CounterComponentCorr},
        {path: '/courses', component: ListeComponent},
        {path: '/coursesCorr', component: ListeComponentCorr},
        {path: '/movies', component: ListeFilm},
        {path: '/secret', component: SecretMessage},
        {path: '/contact', component: ContactForm},
        {path: '/FilmCorr', component: ListeFilmCorr},
        {path: '/Store', component: Store},
        {path: '/Login', component: LoginStore},
        {path: '/LoginCorr', component: LoginStoreCorr},
    ]
});

export default router;