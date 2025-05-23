<script setup lang="ts">
import { computed } from "vue";
import ArrowLeft from "@/components/Icons/ArrowLeft.vue";
import ArrowRight from "@/components/Icons/ArrowRight.vue";
import ButtonRounded from "@/components/base/Button/ButtonRounded.vue";
import { Character, PaginationInfo } from "@/interfaces/Character";
import imageVoid from "@/assets/no-request.png";
import { TranslateKey } from "@/helpers/TranslateKey";

const emit = defineEmits(["change-page", "click"]);

const props = defineProps<{
  items: Character[];
  pagination: PaginationInfo;
  currentPage: number;
  loading: boolean;
}>();

const buttonRoundedOptions = computed(() => {
  const firstPage = 1;
  const lastPage = props.pagination?.pages;
  const current = props.currentPage;

  const prev = current > 3 ? current - 3 : null;
  const next = current < lastPage ? current + 3 : null;

  const pages = [firstPage, prev, current, next, lastPage];

  return [
    ...new Set(
      pages.filter((page) => page != null && page <= lastPage && page >= 1)
    ),
  ];
});

const prevPage = () => {
  if (props.currentPage > 1 && !props.loading) {
    emit("change-page", props.currentPage - 1);
    resetPageToTop();
  }
};

const nextPage = () => {
  if (props.currentPage < props.pagination?.pages && !props.loading)
    emit("change-page", props.currentPage + 1);
  resetPageToTop();
};

const handleClick = (itemNumber: number | null) => {
  if (!props.loading && itemNumber) emit("change-page", itemNumber);
  resetPageToTop();
};

const resetPageToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<template>
  <div v-if="items?.length !== 0" class="flex flex-col gap-12">
    <div
      v-if="!loading"
      class="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 items-stretch gap-8 animation-card-mount"
    >
      <div @click="emit('click', item.id)" v-for="item in items" :key="item.id">
        <div class="cursor-pointer h-full animation-card">
          <q-card class="h-full">
            <img :src="item.image" />
            <q-card-section>
              <div class="text-base font-bold">{{ item.name }}</div>
              <div class="text-sm">
                {{ TranslateKey[item.species] || item.species }}
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
    <div class="self-center flex gap-4">
      <button-rounded
        @click="prevPage"
        :disabled="currentPage === 1 || items?.length === 0"
      >
        <arrow-left />
      </button-rounded>
      <button-rounded
        v-for="(itemButton, index) in buttonRoundedOptions"
        :key="index"
        :active="currentPage === itemButton"
        @click="handleClick(itemButton)"
      >
        {{ itemButton }}
      </button-rounded>
      <button-rounded
        @click="nextPage"
        :disabled="currentPage === pagination?.pages || items?.length === 0"
      >
        <arrow-right />
      </button-rounded>
    </div>
  </div>
  <div v-else>
    <img :src="imageVoid" alt="Banner" />
  </div>
</template>

<style lang="scss">
.disable-button {
  @media (max-width: 768px) {
    display: none !important;
  }
}

.animation-card {
  &:hover {
    animation: scale-card 0.2s forwards;
    border: 2px solid $hover;
    border-radius: 6px;
  }
}

@keyframes scale-card {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.08);
  }
}

.animation-card-mount {
  animation: mount-card 0.5s forwards;
}

@keyframes mount-card {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
