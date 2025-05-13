<script setup lang="ts">
import Logo from "@/components/Icons/Logo.vue";
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";

type EnumNamesPage = {
  HomePage: string;
};

const route = useRoute();

const enumNamesPage: EnumNamesPage = {
  HomePage: "Lista de personagens",
};

const pageName = computed(() => {
  return enumNamesPage[route.name as keyof EnumNamesPage];
});
</script>

<template>
  <div
    class="flex flex-col items-center gap-4 lg:flex-row lg:justify-between p-4 lg:p-[20px]"
  >
    <logo />
    <span class="text-white font-bold text-2xl">{{ pageName }}</span>
  </div>
</template>
