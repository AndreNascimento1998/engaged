<script setup lang="ts">
import InputComponent from "@/components/base/Inputs/Input.vue";
import CardGrid from "@/components/base/Cards/CardGrid.vue";
import { useQuery } from "@vue/apollo-composable";
import { gql } from "graphql-tag";
import { ref } from "vue";

const test = ref("");

const page = ref(parseInt(localStorage.getItem("page")) || 1);

const GET_CHARACTERS = gql`
  query ($page: Int!) {
    characters(page: $page) {
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
}));

const handleClick = (pageValue: number) => {
  page.value = pageValue;
  localStorage.setItem("page", pageValue.toString());
  refetch({ page: page.value });
};
</script>

<template>
  <div
    class="flex flex-col gap-4 lg:flex-row items-center justify-center w-full p-4 lg:p-[60px]"
  >
    <div class="flex w-full sm:justify-center lg:justify-end lg:w-full">
      <input-component v-model="test" label="Filtrar por nome" dense>
        <template #prepend>
          <q-icon name="search" />
        </template>
      </input-component>
    </div>
    <card-grid
      @change-page="handleClick"
      :items="result?.characters?.results"
      :pagination="result?.characters?.info"
      :current-page="page"
    />
  </div>
</template>
