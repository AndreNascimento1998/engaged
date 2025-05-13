<script setup lang="ts">
defineProps<{
  label?: string;
  dense?: boolean;
}>();

const model = defineModel<string>();
</script>

<template>
  <q-input
    v-model="model"
    bg-color="teal"
    standout="text-white"
    :label="label"
    :dense="dense"
  >
    <template #prepend>
      <slot name="prepend" />
    </template>
  </q-input>
</template>
