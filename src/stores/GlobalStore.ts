import { defineStore } from "pinia";
import { ref } from "vue";

export const useGlobalStore = defineStore("global", () => {
  const count = ref(0);

  return {
    count,
  };
});
