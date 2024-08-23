import {ref} from "vue";
import axios from "axios";

export function useJoke() {
const API = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';
const joke = ref('');
async function getJoke() {
    try {
        const res = await axios.get(API);
        joke.value = res.data;
    } catch (e) {
        console.log(e);
    }
}

return {joke, getJoke}

}