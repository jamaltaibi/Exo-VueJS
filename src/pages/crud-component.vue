<script setup>
import { useCreatedUser } from "@/composable/useCreateUser";
import { useDeleteUser } from "@/composable/useDeleteUser";
import { useUsers } from "@/composable/useUsers";
import {Field,Form} from "vee-validate";
import { ref } from "vue";
import {useUpdateUser} from "@/composable/useUpdateUser";

const {create} = useCreatedUser();
const {users,load} = useUsers();
const {remove} = useDeleteUser();
const {update} = useUpdateUser();
const updatedUser = ref(null);

async function handleRemove(id){
    await remove(id);
    load();
}

async function handleCreate(user){
    await create(user);
    load();
}

function updateUser(user){
    updatedUser.value = user;
}

async function handleUpdate(formValue){
    await update(updatedUser.value.id, formValue);
    load();
}

</script>

<template>
    <h1>Crud User</h1>

    <h2>Créer</h2>

    <Form @submit="handleCreate">
        <Field name="username" placeholder="username"/>
        <Field name="email" placeholder="email"/>
        <button>Save</button>
    </Form>

    <h2>Lire</h2>
    <ul v-if="users">
        <li v-for="u in users" :key="u.id">
            {{ u.username}} - {{ u.email }}
            <button @click="updateUser(u)">Update</button>
            <button @click="handleRemove(u.id)">Delete</button>
        </li>
    </ul>

    <h2>Mise a jour</h2>
    <Form @submit="handleUpdate" v-if="updatedUser" >
        <Field name="username" placeholder="" :model-value="updatedUser.username"/>
        <Field name="email" placeholder="" :model-value="updatedUser.email" />
        <button>Update</button>
    </Form>

</template>

<style scoped>

</style>