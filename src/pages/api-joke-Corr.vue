<script setup>
import {useJoke} from "@/composable/useJokeCorr";

const {joke, getJoke} = useJoke();
</script>

<template>
  <h1>Des blagues</h1>

  <div v-if="joke">
    <p>{{joke.joke || joke.setup}}</p>
    <p v-if="joke.delivery">{{joke.delivery}}</p>


  </div>
  <p>
    <button @click="getJoke()">Nouvelle blague</button>
  </p>

</template>

<style scoped>

</style>