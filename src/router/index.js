import {createRouter, createWebHistory} from "vue-router";
import CounterComponent from "@/pages/counterCorrComponent.vue";
import ListeComponent from "@/pages/courseCorrComponent.vue";
import ListeFilm from "@/pages/ListeFilm.vue";
import ListeFilmCorr from "@/pages/listeFilmCorr.vue";
import SecretMessage from "@/pages/SecretMessage.vue";
import ContactForm from "@/pages/ContactForm.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/counter', component: CounterComponent},
        {path: '/courses', component: ListeComponent},
        {path: '/movies', component: ListeFilm},
        {path: '/secret', component: SecretMessage},
        {path: '/contact', component: ContactForm},
        {path: '/FilmCorr', component: ListeFilmCorr},
    ]
});

export default router;