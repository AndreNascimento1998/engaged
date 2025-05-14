<script setup lang="ts">
import { computed } from "vue";
import ArrowLeft from "@/components/Icons/ArrowLeft.vue";
import ArrowRight from "@/components/Icons/ArrowRight.vue";
import ButtonRounded from "@/components/base/Button/ButtonRounded.vue";
import { Character, PaginationInfo } from "@/interfaces/Character";

const emit = defineEmits(["change-page"]);

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

  const prev = current > 1 ? current - 1 : null;
  const next = current < lastPage ? current + 1 : null;

  const pages = [firstPage, prev, current, next, lastPage];

  return [
    ...new Set(
      pages.filter((page) => page != null && page <= lastPage && page >= 1)
    ),
  ];
});

const prevPage = () => {
  if (props.currentPage > 1) emit("change-page", props.currentPage - 1);
};

const nextPage = () => {
  if (props.currentPage < props.pagination?.pages)
    emit("change-page", props.currentPage + 1);
};
</script>

<template>
  <div class="flex flex-col gap-4">
    <div v-if="!loading" class="flex gap-4 flex-wrap justify-center">
      <div
        v-for="item in items"
        :key="item.id"
        class="w-[150px] md:w-[200px] lg:w-[300px]"
      >
        <div class="cursor-pointer">
          <q-card>
            <img :src="item.image" />
            <q-card-section>
              <div class="text-h6">{{ item.name }}</div>
              <div class="text-subtitle2">{{ item.species }}</div>
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
        @click="emit('change-page', itemButton)"
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
</template>
