<script setup lang="ts">
const emit = defineEmits(["click"]);

defineProps<{
  active?: boolean;
  disabled?: boolean;
}>();
</script>

<template>
  <div
    @click="emit('click')"
    class="button-rounded-container text-white"
    :class="{ 'active-button': active, 'disabled-button': disabled }"
  >
    <span><slot /></span>
  </div>
</template>

<style lang="scss" scoped>
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

.disabled-button {
  border: 1px solid $button-rounded-disabled;
  color: $button-rounded-disabled;
  cursor: not-allowed;

  span {
    color: $button-rounded-disabled;
  }

  * {
    fill: $button-rounded-disabled;
  }

  &:hover {
    border: 1px solid $button-rounded-disabled;
    color: $button-rounded-disabled;

    span {
      color: $button-rounded-disabled;
    }

    * {
      fill: $button-rounded-disabled;
    }
  }
}
</style>
