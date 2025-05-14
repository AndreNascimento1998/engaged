<script setup lang="ts">
const emit = defineEmits(["clear"]);

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
    clearable
    @clear="emit('clear')"
  >
    <template #prepend>
      <slot name="prepend" />
    </template>
  </q-input>
</template>
