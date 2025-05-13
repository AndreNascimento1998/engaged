<script setup lang="ts">
import { ref } from "vue";

const text = ref("");
</script>

<template>
  <div class="w-full">
    <q-input
      bg-color="teal"
      standout="text-white"
      v-model="text"
      label="Custom standout"
      :dense="dense"
    />
  </div>
</template>
