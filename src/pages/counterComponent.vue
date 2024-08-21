<script setup>
import {reactive} from "vue";

const state = reactive({ 
    nbr: 0,
});

function nbrPlus(){
    state.nbr++;
    console.log(state.nbr);  
}

function nbrMoins(){
    state.nbr--;
    console.log(state.nbr);  
}

</script>

<template>
    <h1>Compteur</h1>
    <p>
        Nombre : {{ state.nbr }}
    </p>
    <button @click="nbrPlus()" > + </button>
    <button @click="nbrMoins()"> - </button>
</template>

<style scoped>

</style>