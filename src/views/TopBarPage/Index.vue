<script setup lang="ts">
import Logo from "@/components/Icons/Logo.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";

type EnumNamesPage = {
  HomePage: string;
  CharacterPage: string;
};

const route = useRoute();

const enumNamesPage: EnumNamesPage = {
  HomePage: "Lista de Personagens",
  CharacterPage: "Personagem",
};

const pageName = computed(() => {
  return enumNamesPage[route.name as keyof EnumNamesPage];
});
</script>

<template>
  <div
    class="flex flex-col items-center gap-4 lg:flex-row lg:justify-between p-4 lg:py-[20px] lg:px-[180px]"
  >
    <logo />
    <span class="text-white font-bold text-2xl font-originalSurfer">
      {{ pageName }}
    </span>
  </div>
</template>
