<script setup>
  import {useApiJoke} from "@/composable/useApiJoke";

  const { jokeSetup, jokeDelivery, error, load } = useApiJoke();

</script>

<template>
    <div v-if="error">
      <p>{{ error }}</p>
    </div>
    <div v-else>
      <p v-if="!jokeSetup && !jokeDelivery">En cours de chargement...</p>
      <div v-else>
        <p>{{ jokeSetup }}</p>
        <p>{{ jokeDelivery }}</p>
      </div>
    </div>
    <button @click="load">Recharger la blague</button>
  </template>

<style scoped>

</style>