<script setup>

import {Field, Form} from "vee-validate";

const emit = defineEmits(['add'])

function handleSubmit(value) {
  emit('add', value)
}


</script>

<template>
 <Form @submit="handleSubmit">
    <p>
      <label>Titre</label>
      <Field name="title" />
    </p>
    <p>
      <label>Image</label>
      <Field name="image" />
    </p>
    <button>Save</button>
  </Form>
 
</template>

<style scoped>

</style>