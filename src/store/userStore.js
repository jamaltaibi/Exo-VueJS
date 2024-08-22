import { defineStore } from "pinia";
import { ref } from "vue";

export const userNameSetup = defineStore("userName", () => {
  const name = ref("");

  function updateName(newName) {
    name.value = newName;
  }
  return { name, updateName };
});

