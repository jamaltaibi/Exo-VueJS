<script setup>
  import {ref} from "vue";

  const secretPassword = 'TarteAuxFraises';
  let inputPassword = ref('');
</script>

<template>
  <h1>Message Secret</h1>
  <p>
    <input v-model="inputPassword"/>
  </p>

  <p v-show="inputPassword === secretPassword">A la fin du film, tout le monde meurt !</p>
</template>

<style scoped>

</style>