<script setup>
import { ref } from "vue";
import { useCounterStore } from "@/store/counter";

const nav = ref(null);
const store = useCounterStore();

function changeColor() {
  if (nav.value) {
    nav.value.style.backgroundColor = "yellow";
  }
}
</script>

<template>
  <nav ref="nav">
    <ul>
      <li>
        <RouterLink to="./">Accueil</RouterLink>
      </li>
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
        <RouterLink to="./Login">Login</RouterLink>
      </li>

      <li>
        <button @click="changeColor()">Go Yellow</button>
      </li>
    </ul>
  </nav>
  <nav>
    <ul>
      <li>
        <RouterLink to="./counterCorr">Compteur-Correction</RouterLink>
      </li>
      <li>
        <RouterLink to="./coursesCorr">Liste courses-Correction</RouterLink>
      </li>
      <li>
        <RouterLink to="./FilmCorr">Film-Correction</RouterLink>
      </li>
      <li>
        <RouterLink to="./LoginCorr">Login-Correction</RouterLink>
      </li>
      <li>
        <RouterLink to="./Store">Store</RouterLink>
      </li>
      <li>
        {{ store.counter }}
      </li>
      <li>
        {{ store.doubleCounter }}
      </li>
    </ul>
  </nav>
</template>

<style scoped>
ul {
  display: flex;
  justify-content: space-around;
}

li {
  list-style-type: none;
}
</style>
