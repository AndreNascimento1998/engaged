<script setup lang="ts">
import InputComponent from "@/components/base/Inputs/Input.vue";
import ButtonComponent from "@/components/Button/Button.vue";
import CardGrid from "@/components/base/Cards/CardGrid.vue";
import { useQuery } from "@vue/apollo-composable";
import { gql } from "graphql-tag";
import { ref } from "vue";

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
        status
        species
        type
        gender
        image
        episode {
          id
          name
        }
      }
    }
  }
`;

const { result, loading, error, refetch } = useQuery(GET_CHARACTERS, () => ({
  page: page.value,
  name: filterPage.value,
}));

const fetchCharacter = (pageValue: number | null) => {
  page.value = pageValue ? pageValue : 1;
  filterPage.value = serachInput.value;
  localStorage.setItem("page", page.value.toString());
  localStorage.setItem("name", filterPage.value);
  refetch({ page: page.value, name: filterPage.value });
};
</script>

<template>
  <div
    class="flex flex-col gap-4 lg:flex-row items-center justify-center w-full p-4 lg:p-[60px]"
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
      @change-page="fetchCharacter"
      :items="result?.characters?.results"
      :pagination="result?.characters?.info"
      :current-page="page"
    />
  </div>
</template>
