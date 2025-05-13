<script setup lang="ts">
import { useGlobalStore } from "@/stores/GlobalStore";

const globalStore = useGlobalStore();
</script>

<template>
  <div class="text-[34px] test">HomePage</div>
  <div class="test__test2" @click="globalStore.count += 1">
    {{ globalStore.count }}
  </div>
  <q-btn label="Click" color="primary" />
</template>

<style lang="scss">
.test {
  color: red;

  &__test2 {
    color: blue;
  }
}
</style>
