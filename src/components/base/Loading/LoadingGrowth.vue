<script setup lang="ts">
defineProps<{
  loading: boolean;
  label?: string;
}>();
</script>

<template>
  <div
    v-if="loading"
    class="flex flex-col items-center justify-center gap-4 fixed inset-0 bg-[#111827CC] z-50"
  >
    <div class="flex gap-4 p-8">
      <div class="bg-[#00b5cc] item-1"></div>
      <div class="bg-[#00b5cc] item-2"></div>
      <div class="bg-[#00b5cc] item-3"></div>
      <div class="bg-[#00b5cc] item-4"></div>
      <div class="bg-[#00b5cc] item-5"></div>
    </div>
    <div v-if="label" class="text-center gradient-text text-2xl">
      {{ label }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.item-1 {
  animation: loading-animation 0.8s linear 0s infinite alternate-reverse;
  border-radius: 10px;
  transform-origin: bottom;
  width: 60px;
  height: 200px;
}

.item-2 {
  animation: loading-animation 0.8s linear 0.2s infinite alternate-reverse;
  border-radius: 10px;
  transform-origin: bottom;
  width: 60px;
  height: 200px;
}

.item-3 {
  animation: loading-animation 0.8s linear 0.4s infinite alternate-reverse;
  border-radius: 10px;
  transform-origin: bottom;
  width: 60px;
  height: 200px;
}

.item-4 {
  animation: loading-animation 0.8s linear 0.8s infinite alternate-reverse;
  border-radius: 10px;
  transform-origin: bottom;
  width: 60px;
  height: 200px;
}

.item-5 {
  animation: loading-animation 0.8s linear 1s infinite alternate-reverse;
  border-radius: 10px;
  transform-origin: bottom;
  width: 60px;
  height: 200px;

  @media (max-width: 768px) {
    display: none;
  }
}

@keyframes loading-animation {
  0% {
    transform: scaleY(0);
    background-color: $secondary;
  }
  50% {
    background-color: $secondary;
  }
  75% {
    background-color: $primary;
  }
  100% {
    transform: scaleY(1);
  }
}

.gradient-text {
  background: linear-gradient(270deg, $secondary, $primary, $secondary);
  background-size: 200% 200%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: animatedGradient 3s ease infinite alternate;
}

@keyframes animatedGradient {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}
</style>
