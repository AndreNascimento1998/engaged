<script setup lang="ts">
import { gql } from "graphql-tag";
import { computed, ref, watch } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { useRoute } from "vue-router";
import router from "@/router";
import CardInfo from "@/components/base/Cards/Card.vue";

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
      }
    }
  }
`;

const { result, loading, error } = useQuery(GET_CHARACTER_BY_ID, () => ({
  id: selectedId.value,
}));

const episodes = computed(() => {
  console.log(result.value?.character?.episode);
  return result.value?.character?.episode.map((episode) => {
    return {
      epNumber: episode.id,
      name: episode.name,
    };
  });
});

watch(result, (newError) => {
  if (!newError.character) router.push({ name: "HomePage" });
});
</script>

<template>
  <div v-if="result" class="flex flex-col items-center gap-12 w-full pb-20">
    <div class="flex flex-col gap-4">
      <div class="rounded-full border-[4px] border-white">
        <img
          :src="result?.character?.image"
          :alt="result?.character?.name"
          class="rounded-full border border-white"
          width="300"
          height="300"
        />
      </div>
      <span class="flex justify-center text-2xl text-white">{{
        result?.character.name
      }}</span>
    </div>
    <div class="flex gap-20 flex-col lg:flex-row">
      <card-info class="w-[480px] h-[580px] overflow-auto">
        <div class="flex flex-col gap-8 text-xl">
          <span class="text-title text-4xl sticky pt-6 pb-2 top-0 bg-white"
            >Ficha técnica</span
          >
          <div class="flex flex-col border-b-2 border-[#21212114]">
            <span class="text-description font-bold">Gênero</span>
            <span class="text-information">
              {{ result?.character?.gender }}
            </span>
          </div>
          <div class="flex flex-col border-b-2 border-[#21212114]">
            <span class="text-description font-bold">Espécie</span>
            <span class="text-information">
              {{ result?.character?.species }}
            </span>
          </div>
          <div class="flex flex-col border-b-2 border-[#21212114]">
            <span class="text-description font-bold">Origem</span>
            <span class="text-information">
              {{ result?.character?.origin.name }}
            </span>
          </div>
          <div class="flex flex-col border-b-2 border-[#21212114]">
            <span class="text-description font-bold">Status</span>
            <span class="text-information">
              {{ result?.character?.status }}
            </span>
          </div>
          <div class="flex flex-col border-b-2 border-[#21212114]">
            <span class="text-description font-bold">Localização</span>
            <span class="text-information">
              {{ result?.character?.location.name }} -
              {{ result?.character?.location.type }}
            </span>
          </div>
        </div>
      </card-info>
      <card-info class="w-[480px] h-[580px] overflow-auto">
        <div class="flex flex-col gap-8 text-xl">
          <span class="text-title text-4xl sticky pt-6 pb-2 top-0 bg-white">
            Participação Episódios
          </span>
          <div
            v-for="episode in episodes"
            :key="episode.epNumber"
            class="flex flex-col border-b-2 border-[#21212114]"
          >
            <span class="text-description font-bold">
              Episódio - {{ episode.epNumber }}</span
            >
            <span class="text-information">
              {{ episode.name }}
            </span>
          </div>
        </div>
      </card-info>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.text-title {
  color: $title-card;
  font-weight: 500;
}

.text-information {
  color: $description-card;
}

.text-information {
  color: $information-card;
  font-style: italic;
}
</style>
