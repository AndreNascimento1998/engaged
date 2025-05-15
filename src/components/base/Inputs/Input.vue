<script setup lang="ts">
const emit = defineEmits(["clear", "enter"]);

defineProps<{
  label?: string;
  dense?: boolean;
}>();

const model = defineModel<string>();
</script>

<template>
  <q-input
    v-model="model"
    filled
    standout
    :label="label"
    :dense="dense"
    clearable
    @keyup.enter="emit('enter')"
    color="primary"
    class="text-white border border-primary rounded-[4px]"
    input-class="text-secondary"
    label-color="white"
    @clear="emit('clear')"
  >
    <template #prepend>
      <slot name="prepend" />
    </template>
  </q-input>
</template>

<style lang="scss">
/* Força o ícone de limpar a ficar branco */
.q-field__append .q-icon {
  color: white !important;
  opacity: 1;
}

.q-icon {
  color: white !important;
}
</style>
