<script setup lang="ts">
import InputComponent from "@/components/base/Inputs/Input.vue";
import ButtonComponent from "@/components/base/Button/Button.vue";
import CardGrid from "@/components/pages/HomePage/CardGrid.vue";
import LoadingGrowth from "@/components/base/Loading/LoadingGrowth.vue";
import { useQuery } from "@vue/apollo-composable";
import { gql } from "graphql-tag";
import { ref } from "vue";

const page = ref(parseInt(localStorage.getItem("page") || "") || 1);
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
    class="flex flex-col gap-12 lg:flex-row items-center justify-center w-full p-4 pb-12 lg:px-[180px] relative"
  >
    <div
      class="flex w-full gap-4 lg:w-full adjustment-position animation-input"
    >
      <input-component
        v-model="serachInput"
        @keypress.enter="fetchCharacter(null)"
        @clear="fetchCharacter"
        label="Nome do personagem"
        dense
      >
        <template #prepend>
          <q-icon name="search" />
        </template>
      </input-component>
      <button-component @click="fetchCharacter(null)" label="Buscar" />
    </div>
    <card-grid
      v-if="result?.characters?.results"
      @click="(id: string) => $router.push({ name: 'CharacterPage', params: { id } })"
      @change-page="fetchCharacter"
      :items="result?.characters?.results"
      :pagination="result?.characters?.info"
      :current-page="page"
      :loading="loading"
    />
    <loading-growth :loading="loading" label="AGUARDE UM INSTANTE..." />
  </div>
</template>

<style scoped lang="scss">
.adjustment-position {
  justify-content: center;
  flex-wrap: nowrap;

  @media (min-width: 1024px) {
    justify-content: end;
  }
}

.animation-input {
  animation: fadeIn 0.5s ease-in-out;
  overflow: hidden !important;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(-300px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
