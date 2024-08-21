<script setup>
import {ref} from "vue";

const nav = ref(null);

function changeColor(){
  if (nav.value){
    nav.value.style.backgroundColor = 'yellow';
  }
}

</script>

<template>
<nav ref="nav">
  <ul>
    <li>
      <RouterLink to="./counter">Compteur</RouterLink>
    </li>
    <li>
      <RouterLink to="./courses">Liste courses</RouterLink>
    </li>
    <li>
      <RouterLink to="./movies">Films</RouterLink>
    </li>
    <li>
      <RouterLink to="./secret">Message Secret</RouterLink>
    </li>
    <li>
      <RouterLink to="./contact">Contact</RouterLink>
    </li>
    <li>
      <RouterLink to="./FilmCorr">Film Corr</RouterLink>
    </li>
    <li>
      <button @click="changeColor()" >Go Yellow</button>
    </li>
  </ul>
</nav>
</template>

<style scoped>

</style>