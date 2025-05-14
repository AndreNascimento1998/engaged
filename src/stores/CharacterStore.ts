import { defineStore } from "pinia";
import { ref } from "vue";

export const useCharacterStore = defineStore("character", () => {
  const charactersResult = ref([]);

  return {
    charactersResult,
  };
});
