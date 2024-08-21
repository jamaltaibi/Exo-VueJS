<script setup>
import {reactive} from 'vue';
import {defineEmits } from 'vue';

const emit = defineEmits(['add-movie']);

const newMovie = reactive({
  title: '',
  image: ''
});

function addMovie() {

  if (newMovie.title && newMovie.image) {
    emit('add-movie', { ...newMovie});

  newMovie.title = '';
  newMovie.image = '';
  }
}
</script>

<template>

    <h2>Titre</h2>

    <form @submit.prevent="addMovie">

      <div>
        <label for="title">Titre :</label>
        <input v-model="newMovie.title" id="title" type="text" required>
      </div>

      <div>
        <label for="image">URL de l'image :</label>
        <input v-model="newMovie.image" id="image" type="text" required>
      </div>

      <button type="submit">Ajouter</button>
    </form>

</template>

<style scoped>
h2{
    margin: auto;
    width: 500px;
}
form{
    margin: auto;
    width: 500px;
    border: solid;
}
</style>
