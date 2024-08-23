import {ref} from "vue";
import axios from "axios";

export function useApiJoke() {
    const jokeSetup = ref('');
    const jokeDelivery = ref('');
    const error = ref(null);

    const API = 'https://v2.jokeapi.dev/joke/Any?lang=fr';

    async function load() {
        try {
            const res = await axios.get(API);
            jokeSetup.value = res.data.setup;
            jokeDelivery.value = res.data.delivery;
            error.value = null;

        } catch (e) {
            error.value = 'Erreur lors du chargement de la blague.';
            jokeSetup.value = '';
            jokeDelivery.value = '';

        }
    }

    return {jokeSetup, jokeDelivery, error,load};
}