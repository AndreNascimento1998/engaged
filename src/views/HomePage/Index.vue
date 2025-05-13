<script setup lang="ts">
import InputComponent from "@/components/base/Inputs/Input.vue";
import CardGrid from "@/components/base/Cards/CardGrid.vue";
import { ref } from "vue";

const test = ref("");
</script>

<template>
  <div
    class="flex flex-col gap-4 lg:flex-row items-center justify-center w-full p-4 lg:p-[60px]"
  >
    <div class="flex w-full sm:justify-center lg:justify-end lg:w-full">
      <input-component v-model="test" label="Filtrar por nome" dense>
        <template #prepend>
          <q-icon name="search" />
        </template>
      </input-component>
    </div>
    <card-grid />
  </div>
</template>
