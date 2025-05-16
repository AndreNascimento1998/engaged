<script setup lang="ts">
import { TranslateKey } from "@/helpers/TranslateKey";
import CardInfo from "@/components/base/Cards/Card.vue";
import { Origin, Location } from "@/interfaces/Location";

defineProps<{
  gender: string;
  species: string;
  origin: Origin;
  status: string;
  location: Location;
}>();
</script>

<template>
  <card-info class="card-width overflow-auto animation-mounted-card-left">
    <div class="flex flex-col gap-8 text-xl">
      <span class="text-title text-2xl sticky pt-6 pb-2 top-0 bg-white"
        >Ficha técnica</span
      >
      <div class="flex flex-col border-b-2 border-[#21212114]">
        <span class="text-text-card font-bold">Gênero</span>
        <span class="text-information">
          {{ TranslateKey[gender] || gender }}
        </span>
      </div>
      <div class="flex flex-col border-b-2 border-[#21212114]">
        <span class="text-text-card font-bold">Espécie</span>
        <span class="text-information">
          {{ TranslateKey[species] || species }}
        </span>
      </div>
      <div class="flex flex-col border-b-2 border-[#21212114]">
        <span class="text-text-card font-bold">Origem</span>
        <span class="text-information">
          {{ TranslateKey[origin.name] || origin.name }}
        </span>
      </div>
      <div class="flex flex-col border-b-2 border-[#21212114]">
        <span class="text-text-card font-bold">Status</span>
        <span class="text-information">
          {{ TranslateKey[status] || status }}
        </span>
      </div>
      <div class="flex flex-col border-b-2 border-[#21212114]">
        <span class="text-text-card font-bold">Localização</span>
        <span class="text-information">
          {{ TranslateKey[location.type] || location.type }}
          -
          {{ TranslateKey[location.name] || location.name }}
        </span>
      </div>
    </div>
  </card-info>
</template>

<style lang="scss" scoped>
.text-title {
  color: $title-card;
  font-weight: bold;
}

.text-information {
  color: $information-card;
  font-style: italic;
}

.card-width {
  width: 480px;
  height: 580px;

  @media (max-width: 768px) {
    width: 340px;
    height: 600px;
  }
}

.animation-mounted-card-left {
  animation: fadeInLeft 0.8s ease-in-out;
  overflow: hidden;
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-300px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
