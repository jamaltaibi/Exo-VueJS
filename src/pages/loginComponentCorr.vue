<script setup>
import {userNameSetup} from "@/store/userStore";
import {ref} from "vue";

const login = ref('');
const store = userNameSetup();
const {updateName} = store;
  function handleSubmit() {
    updateName(login);
  }
</script>

<template>
<h1>Login</h1>

  <form @submit.prevent="handleSubmit()">
    <input v-model="login" placeholder="login" />
    <button>Connexion</button>
  </form>

</template>

<style scoped>

</style>