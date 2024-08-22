<script setup>
import {useCounterStore} from "@/store/counter";
import { useCounterSetupStore } from "@/store/counterSetup";
import { storeToRefs } from "pinia";

const store = useCounterStore();


const stroreSetup = useCounterSetupStore();
const{increment,decrement} = stroreSetup;
const {counter,doubleCounter} = storeToRefs(stroreSetup);

</script>

<template>

    
    <h1>Store</h1>
    <p>Compteur : {{store.counter}}</p>
    <p>Compteur Doublé : {{ store.doubleCounter}}</p>
    <button @click="store.increment()"> + </button>
    <button @click="store.decrement()"> - </button>
    <button @click="store.add(2)"> +2 </button>
    <button @click="store.add(4)"> +4 </button>

    <h2>StoreSetup</h2>
    <p> Compteur Setup : {{ counter }} </p>
    <p>Double Compteur : {{ doubleCounter }} </p>
    <button @click="increment"> + </button>
    <button @click="decrement"> - </button>


</template>

<style scoped>

</style>