<script setup>

import {ErrorMessage, Field, Form} from "vee-validate";

function handleSubmit(values) {
  console.log(values);
}

function checkEmail(value) {
  if(!value) {
    return 'Veuillez entrer un email';
  }

  if(!value.match( /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)) {
    return 'Email invalide';
  }

  return true;
}

function checkName(value) {
  if(!value) {
    return 'Veuillez entrer un nom';
  }

  if(value.length < 3) {
    return 'Veuillez entrer un nom valide ( min 2 caractères )';
  }

  return true;
}

function checkMsg(value) {
  if(!value) {
    return 'Veuillez entrer un message';
  }
  if(value.length < 10) {
    return 'Message trop court'
  }

  if(value.length > 100) {
    return 'Message trop long';
  }

  return true;
}

</script>

<template>
  <h1>Contact</h1>

  <Form @submit="handleSubmit">
    <p>
      <label for="email">Email</label>
      <Field id="email" name="email" type="email" v-bind:rules="checkEmail" />
      <ErrorMessage name="email" />
    </p>
    <p>
      <label for="name">Nom</label>
      <Field id="name" name="name" v-bind:rules="checkName" />
      <ErrorMessage name="name" />
    </p>
    <p>
      <label for="msg">Message</label>
      <Field as="textarea" id="msg" name="message" v-bind:rules="checkMsg"/>
      <ErrorMessage name="message" />
    </p>
    <p>
      <button>Envoyer</button>
    </p>
  </Form>

</template>

<style scoped>

</style>