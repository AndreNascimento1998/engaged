<script setup lang="ts">
const emit = defineEmits(["click"]);

defineProps<{
  label?: string;
}>();
</script>

<template>
  <q-btn @click="emit('click')" color="primary" :label="label" />
</template>
