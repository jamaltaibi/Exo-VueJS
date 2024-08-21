<script setup>
import {computed, ref} from "vue";
import MovieCard from "@/components/movieComponentCorr.vue";
import AddMovie from "@/components/addMovieCorr.vue";

const movies = ref([
  {
    title: 'Pulp Fiction',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Pulp_Fiction_Logo.svg/1200px-Pulp_Fiction_Logo.svg.png',
    isWatched: false
  },
  {
    title: 'The balad of the snake and songbird',
    image: "https://www.actusf.com/files/new_images/actualit%C3%A9s/hunger.jpeg",
    isWatched: true
  }
]);

const filter = ref(''); // seen || not seen

function changeFilter(newValue) {
  filter.value = newValue;
}


const filteredMovies = computed(() => {
  switch (filter.value) {
    case 'not-seen':
        return movies.value.filter(f => !f.isWatched);
    case 'seen':
      return movies.value.filter(f => f.isWatched)
    default:
        return movies.value;
  }
});

function handleRemove(movie) {
  const i = movies.value.indexOf(movie);
  movies.value.splice(i, 1);
}

function handleAdd(movie) {
  movies.value.push(movie);
}

</script>

<template>
<h1>Mes Films</h1>

  <AddMovie @add="handleAdd" />

  <div class="grid">
    <div>
      <button @click="changeFilter('')">Tous</button>
      <button @click="changeFilter('seen')">Vus</button>
      <button @click="changeFilter('not-seen')">Pas Vus</button>
    </div>
    <MovieCard
        v-for="movie in filteredMovies"
        v-bind:key="movie.title"
        v-bind:movie="movie"
        @remove="handleRemove"
    />
  </div>

</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 40px;
}


</style>