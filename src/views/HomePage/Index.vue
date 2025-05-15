<script setup lang="ts">
import InputComponent from "@/components/base/Inputs/Input.vue";
import ButtonComponent from "@/components/base/Button/Button.vue";
import CardGrid from "@/components/pages/HomePage/CardGrid.vue";
import LoadingGrowth from "@/components/base/Loading/LoadingGrowth.vue";
import { useQuery } from "@vue/apollo-composable";
import { gql } from "graphql-tag";
import { ref, watch } from "vue";
import { useCharacterStore } from "@/stores/CharacterStore";

const characterStore = useCharacterStore();

const page = ref(parseInt(localStorage.getItem("page")) || 1);
const serachInput = ref(localStorage.getItem("name") || "");
const filterPage = ref(serachInput.value);

const GET_CHARACTERS = gql`
  query ($page: Int!, $name: String) {
    characters(page: $page, filter: { name: $name }) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        species
        image
      }
    }
  }
`;

const { result, loading, error, refetch } = useQuery(GET_CHARACTERS, () => ({
  page: page.value,
  name: filterPage.value,
}));

watch(result, (newResult) => {
  if (newResult?.characters?.results) {
    characterStore.charactersResult = newResult.characters.results;
  }
});

const fetchCharacter = (pageValue: number | null) => {
  page.value = pageValue ? pageValue : 1;
  filterPage.value = serachInput.value;
  localStorage.setItem("page", page.value.toString());
  localStorage.setItem("name", filterPage.value ?? "");
  refetch({ page: page.value, name: filterPage.value });
};
</script>

<template>
  <div
    class="flex flex-col gap-4 lg:flex-row items-center justify-center w-full p-4 lg:p-[60px] relative"
  >
    <div class="flex w-full sm:justify-center lg:justify-end lg:w-full">
      <input-component
        v-model="serachInput"
        @clear="fetchCharacter"
        label="Filtrar por nome"
        dense
      >
        <template #prepend>
          <q-icon name="search" />
        </template>
      </input-component>
      <button-component @click="fetchCharacter(null)" label="Filtrar" />
    </div>
    <card-grid
      v-if="result?.characters?.results"
      @emit-card="(id) => $router.push({ name: 'ListPage', params: { id } })"
      @change-page="fetchCharacter"
      :items="result?.characters?.results"
      :pagination="result?.characters?.info"
      :current-page="page"
      :loading="loading"
    />
    <loading-growth :loading="loading" label="AGUARDE UM INSTANTE..." />
  </div>
</template>
