<script setup lang="ts">
const emit = defineEmits(["click"]);

defineProps<{
  active?: boolean;
}>();
</script>

<template>
  <div
    @click="emit('click')"
    class="button-rounded-container text-white"
    :class="{ 'active-button': active }"
  >
    <span><slot /></span>
  </div>
</template>

<style lang="scss">
.button-rounded-container {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid $button-rounded-default;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  cursor: pointer;

  &:hover {
    border: 1px solid $button-rounded-hover;
    color: $button-rounded-hover;

    span {
      color: $button-rounded-hover;
    }

    * {
      fill: $button-rounded-hover;
    }
  }
}

.active-button {
  border: 1px solid $button-rounded-hover;
  color: $button-rounded-hover;

  span {
    color: $button-rounded-hover;
  }

  * {
    fill: $button-rounded-hover;
  }
}
</style>
