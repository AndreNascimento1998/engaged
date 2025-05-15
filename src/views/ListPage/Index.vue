<script setup lang="ts">
import { gql } from "graphql-tag";
import { computed, ref, watch } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { useRoute } from "vue-router";
import router from "@/router";
import CardInfo from "@/components/base/Cards/Card.vue";
import LoadingGrowth from "@/components/base/Loading/LoadingGrowth.vue";
import { Episodes } from "@/interfaces/Character";
import ArrowChangePage from "@/components/Icons/ArrowChangePage.vue";
import { TranslateKey } from "@/helpers/TranslateKey";

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
    class="flex flex-col items-center gap-12 w-full py-12 lg:pt-0"
  >
    <div class="flex flex-col gap-4">
      <div class="rounded-full border-[4px] border-white w-[280px] h-[280px]">
        <img
          :src="result?.character?.image"
          :alt="result?.character?.name"
          class="rounded-full border border-white"
          width="280"
          height="280"
        />
      </div>
      <span class="flex justify-center text-3xl gradient-text">{{
        result?.character.name
      }}</span>
    </div>
    <div class="flex gap-20 flex-col lg:flex-row">
      <card-info class="card-width overflow-auto">
        <div class="flex flex-col gap-8 text-xl">
          <span class="text-title text-2xl sticky pt-6 pb-2 top-0 bg-white"
            >Ficha técnica</span
          >
          <div class="flex flex-col border-b-2 border-[#21212114]">
            <span class="text-text-card font-bold">Gênero</span>
            <span class="text-information">
              {{
                TranslateKey[result?.character?.gender] ||
                result?.character?.gender
              }}
            </span>
          </div>
          <div class="flex flex-col border-b-2 border-[#21212114]">
            <span class="text-text-card font-bold">Espécie</span>
            <span class="text-information">
              {{
                TranslateKey[result?.character?.species] ||
                result?.character?.species
              }}
            </span>
          </div>
          <div class="flex flex-col border-b-2 border-[#21212114]">
            <span class="text-text-card font-bold">Origem</span>
            <span class="text-information">
              {{
                TranslateKey[result?.character?.origin.name] ||
                result?.character?.origin.name
              }}
            </span>
          </div>
          <div class="flex flex-col border-b-2 border-[#21212114]">
            <span class="text-text-card font-bold">Status</span>
            <span class="text-information">
              {{
                TranslateKey[result?.character?.status] ||
                result?.character?.status
              }}
            </span>
          </div>
          <div class="flex flex-col border-b-2 border-[#21212114]">
            <span class="text-text-card font-bold">Localização</span>
            <span class="text-information">
              {{
                TranslateKey[result?.character?.location.type] ||
                result?.character?.location.type
              }}
              -
              {{
                TranslateKey[result?.character?.location.name] ||
                result?.character?.location.name
              }}
            </span>
          </div>
        </div>
      </card-info>
      <card-info class="card-width overflow-auto">
        <div class="flex flex-col gap-8 text-xl">
          <span class="text-title text-2xl sticky pt-6 pb-2 top-0 bg-white">
            Participação Episódios
          </span>
          <div
            v-for="episode in episodes"
            :key="episode.epNumber"
            class="flex flex-col border-b-2 border-[#21212114]"
          >
            <span class="text-text-card font-bold">
              {{ episode.epNumber }}
            </span>
            <span class="text-information">
              {{ episode.name }}
            </span>
          </div>
        </div>
      </card-info>
    </div>
  </div>
  <div class="flex justify-center text-2xl text-white pb-12">
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

.hover-back-page {
  &:hover {
    color: $primary;

    fill: $primary;

    stroke: $primary;
  }
}
</style>
