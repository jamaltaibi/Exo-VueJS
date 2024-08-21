<script setup>
import {ref} from "vue";

const list = ref(['Pomme','Lait','Eau'])

function suppList(index){
  list.value.splice(index, 1)
}


</script>

<template>
    <h1>Liste de Course</h1>

    <p v-if="list.length === 0"> Aucune course a afficher</p>

    <ul v-else>
      <li v-for="(C,index,) in list" v-bind:key="C">{{C}} 
        <button @click="suppList(index)">supp</button>
      </li>
    </ul>

</template>

<style scoped>
</style>