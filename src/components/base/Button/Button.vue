<script setup lang="ts">
const emit = defineEmits(["click"]);

defineProps<{
  label?: string;
}>();
</script>

<template>
  <q-btn
    @click="emit('click')"
    class="custom-btn"
    color="primary"
    :label="label"
  />
</template>

<style lang="scss">
.custom-btn:hover {
  background-color: $hover !important;
  color: black !important;
}
</style>
