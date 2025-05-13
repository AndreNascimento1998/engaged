<script setup lang="ts">
const model = defineModel<string>();
</script>

<template>
  <q-input
    v-model="model"
    bg-color="teal"
    standout="text-white"
    label="Custom standout"
    dense
  >
    <template #prepend>
      <slot name="prepend" />
    </template>
  </q-input>
</template>
