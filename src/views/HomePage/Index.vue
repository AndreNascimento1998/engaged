<script setup lang="ts">
import InputComponent from "@/components/base/Inputs/Input.vue";
</script>

<template>
  <div class="flex flex-col lg:flex-row items-center">
    <div class="w-[320px]">
      <input-component />
    </div>
  </div>
</template>

<style lang="scss">
.test {
  color: red;

  &__test2 {
    color: blue;
  }
}
</style>
