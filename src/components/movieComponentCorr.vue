<script setup>
defineProps({
  movie: {
    type: Object,
    required: true
  }
})

function toggleWatched(movie) {
  movie.isWatched = !movie.isWatched;
}
</script>

<template>
  <article>
    <img v-bind:src="movie.image" v-bind:alt="movie.title">
    <h3>{{movie.title}}</h3>
    <p v-show="movie.isWatched">Vu !</p>
    <button @click="toggleWatched(movie)">
      {{movie.isWatched ? 'Marquer comme pas vu' : 'Marquer comme vu'}}
    </button>
    <button @click="$emit('remove', movie)">Supprimer</button>
  </article>
</template>

<style scoped>
article {
  overflow: hidden;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 2px 2px 5px rgba(128, 128, 128, 0.55);
}



article img {
  width: 100%;
  border-radius: 5px;
}
</style>