<script setup>
import { userNameSetup } from "@/store/userStore";
import { storeToRefs } from "pinia";
import { ref, computed } from "vue";

const user = userNameSetup();
const { name } = storeToRefs(user);

const newName = ref("");

const modifierName = () => {
  user.updateName(newName.value);
};

const noName = computed(() => !name.value);
</script>

<template>
  <h1  >Bienvenue {{ name }}</h1>

  <p v-if="noName">Veuillez vous connecter</p>
  <form v-if="noName">
    <label for="username">Nom Utilisateur : </label>
    <input type="text" id="username" v-model="newName" />
    <button @click="modifierName">connexion</button>
  </form>
</template>

<style></style>


