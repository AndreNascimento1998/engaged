<script setup lang="ts">
import { gql } from "graphql-tag";
import { computed, ref, watch } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { useRoute } from "vue-router";
import router from "@/router";
import LoadingGrowth from "@/components/base/Loading/LoadingGrowth.vue";
import { Episodes } from "@/interfaces/Character";
import ArrowChangePage from "@/components/Icons/ArrowChangePage.vue";
import CardInformation from "@/components/pages/InformationCharacter/CardInformation.vue";
import CardEpisodes from "@/components/pages/InformationCharacter/CardEpisodes.vue";

const route = useRoute();

const selectedId = ref(route.params.id);

const GET_CHARACTER_BY_ID = gql`
  query ($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      image
      location {
        name
        type
        dimension
      }
      origin {
        name
        type
        dimension
      }
      episode {
        id
        name
        episode
      }
    }
  }
`;

const { result, loading, error } = useQuery(GET_CHARACTER_BY_ID, () => ({
  id: selectedId.value,
}));

const episodes = computed(() => {
  return result.value?.character?.episode.map((episode: Episodes) => {
    return {
      epNumber: episode.episode,
      name: episode.name,
    };
  });
});

watch(result, (newError) => {
  if (!newError.character) router.push({ name: "HomePage" });
});
</script>

<template>
  <div
    v-if="result"
    class="flex flex-col items-center gap-12 w-full py-12 lg:pt-0 animation-mounted-header-top"
  >
    <div class="flex flex-col items-center gap-4 px-4">
      <div class="rounded-full border-[4px] border-white w-[280px] h-[280px]">
        <img
          :src="result?.character?.image"
          :alt="result?.character?.name"
          class="rounded-full border border-white"
          width="280"
          height="280"
        />
      </div>
      <span class="flex justify-center text-3xl gradient-text text-center">{{
        result?.character.name
      }}</span>
    </div>
    <div class="flex gap-20 flex-col lg:flex-row">
      <card-information
        :gender="result?.character?.gender"
        :species="result?.character?.species"
        :origin="result?.character?.origin"
        :status="result?.character?.status"
        :location="result?.character?.location"
      />
      <card-episodes :episodes="episodes" />
    </div>
  </div>
  <div v-if="result" class="flex justify-center text-2xl text-white pb-12">
    <div
      @click="$router.push({ name: 'HomePage' })"
      class="hover-back-page flex justify-center items-center gap-2 cursor-pointer"
    >
      <arrow-change-page class="hover-back-page" />
      <span class="hover-back-page">Voltar</span>
    </div>
  </div>
  <loading-growth :loading="loading" label="AGUARDE UM INSTANTE..." />
</template>

<style lang="scss" scoped>
.hover-back-page {
  &:hover {
    color: $hover;

    fill: $hover;

    stroke: $hover;
  }
}

.animation-mounted-header-top {
  animation: fadeInBottom 0.8s ease-in-out;
  overflow: hidden;
}

@keyframes fadeInBottom {
  0% {
    opacity: 0;
    transform: translateY(300px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
