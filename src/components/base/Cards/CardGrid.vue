<script setup lang="ts">
import { ref } from "vue";
import ArrowLeft from "@/components/Icons/ArrowLeft.vue";
import ArrowRight from "@/components/Icons/ArrowRight.vue";
import ButtonRounded from "@/components/Button/ButtonRounded.vue";

const test = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

const test2 = ref([
  {
    id: "381",
    name: "Woman Rick",
    status: "Alive",
    species: "Alien",
    type: "Chair",
    gender: "Female",
    image: "https://rickandmortyapi.com/api/character/avatar/381.jpeg",
    episode: [
      {
        id: "10",
        name: "Close Rick-counters of the Rick Kind",
      },
    ],
  },
  {
    id: "382",
    name: "Worldender",
    status: "Dead",
    species: "Alien",
    type: "",
    gender: "Male",
    image: "https://rickandmortyapi.com/api/character/avatar/382.jpeg",
    episode: [
      {
        id: "25",
        name: "Vindicators 3: The Return of Worldender",
      },
    ],
  },
  {
    id: "383",
    name: "Yaarb",
    status: "Alive",
    species: "Alien",
    type: "",
    gender: "Male",
    image: "https://rickandmortyapi.com/api/character/avatar/383.jpeg",
    episode: [
      {
        id: "19",
        name: "Interdimensional Cable 2: Tempting Fate",
      },
    ],
  },
  {
    id: "384",
    name: "Yellow Headed Doctor",
    status: "Alive",
    species: "Alien",
    type: "",
    gender: "Male",
    image: "https://rickandmortyapi.com/api/character/avatar/384.jpeg",
    episode: [
      {
        id: "19",
        name: "Interdimensional Cable 2: Tempting Fate",
      },
    ],
  },
  {
    id: "385",
    name: "Yellow Shirt Rick",
    status: "unknown",
    species: "Human",
    type: "",
    gender: "Male",
    image: "https://rickandmortyapi.com/api/character/avatar/385.jpeg",
    episode: [
      {
        id: "22",
        name: "The Rickshank Rickdemption",
      },
    ],
  },
]);
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex gap-4 flex-wrap justify-center">
      <div
        v-for="item in test2"
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
      <button-rounded>
        <arrow-left />
      </button-rounded>
      <button-rounded> 1 </button-rounded>
      <button-rounded> 2 </button-rounded>
      <button-rounded active> 3 </button-rounded>
      <button-rounded> ... </button-rounded>
      <button-rounded> 42 </button-rounded>
      <button-rounded>
        <arrow-right />
      </button-rounded>
    </div>
  </div>
</template>
