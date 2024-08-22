<script setup>
import {userNameSetup} from "@/store/userStore";
import {storeToRefs} from "pinia";

const store = userNameSetup();
const {name} = storeToRefs(store);
</script>

<template>
  <h1 v-if="name">Bienvenue {{name}}</h1>
  <p v-else>Veuillez vous connecter !</p>
</template>

<style scoped>

</style>