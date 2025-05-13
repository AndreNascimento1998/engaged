<script setup lang="ts">
import Logo from "@/components/Icons/Logo.vue";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

type EnumNamesPage = {
  HomePage: string;
};

const route = useRoute();

const enumNamesPage: EnumNamesPage = {
  HomePage: "Lista de personagenss",
};

const pageName = ref(enumNamesPage[route.name]);

onMounted(() => {
  pageName.value = enumNamesPage[route.name];
  if (pageName) document.title = pageName.value;
});
</script>

<template>
  <div
    class="flex flex-col items-center gap-4 lg:flex-row lg:justify-between p-4"
  >
    <logo />
    <span class="text-white font-bold text-2xl">{{ pageName }}</span>
  </div>
</template>
