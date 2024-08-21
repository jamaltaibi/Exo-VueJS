<script setup>
import {ref} from "vue";

const counter = ref(0);

function increment() {
  counter.value++;
}

function decrement() {
  counter.value--;
}


</script>

<template>
  <h1>Compteur</h1>
  <p v-bind:class="(counter % 2 === 0 ) ? 'green' : 'red' " >{{counter}}</p>
  <p>
    <button @click="decrement">-</button>
    <button @click="increment">+</button>
  </p>
</template>

<style>
.green {
  color: green;
}

.red {
  color: red;
}

</style>