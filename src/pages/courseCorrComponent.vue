<script setup>
  import {ref} from "vue";
  const courses = ref(['pain', 'lait', 'céréales']);

  function removeItem(index) {
    courses.value.splice(index, 1);
  }

  let element = '';
  function addItem() {
    courses.value.push(element);
    element = '';
  }
</script>

<template>
  <h1>Liste de courses</h1>

  <form @submit.prevent="addItem()">
    <input v-model="element" />
    <button>Save</button>
  </form>

  <p v-if="courses.length === 0">Aucune course à afficher</p>
  <ul v-else>
    <li v-for="(c, index,) in courses" v-bind:key="c">
      {{ c }}
      <button @click="removeItem(index)">Del</button>
    </li>
  </ul>

</template>

<style scoped>

</style>