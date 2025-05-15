<script setup lang="ts">
import { gql } from "graphql-tag";
import { computed, ref, watch } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { useRoute } from "vue-router";
import router from "@/router";
import CardInfo from "@/components/base/Cards/Card.vue";
import LoadingGrowth from "@/components/base/Loading/LoadingGrowth.vue";
import { Episodes } from "@/interfaces/Character";

const route = useRoute();

const selectedId = ref(route.params.id);

const translateKeys: any = {
  unknown: "Desconhecido",
  Alive: "Vivo",
  Dead: "Morto",
  Human: "Humano",
  Male: "Masculino",
  "Earth (C-137)": "Terra (C-137)",
  "Earth (Replacement Dimension)": "Terra (Dimensão Substituta)",
  Female: "Feminino",
  Humanoid: "Humanoide",
  "Mythological Creature": "Criatura Mitológica",
  "Fantasy World": "Mundo da fantasia",
  "Bird World": "Mundo dos pássaros",
  "Post-Apocalyptic Earth": "Terra pós-apocalíptica",
  "Rick's Battery Microverse": "Microverso da bateria do Rick",
  Robot: "Robô",
  "Earth (K-83)": "Terra (K-83)",
  "Hideout Planet": "Planeta Escondido",
  "Cronenberg Earth": "Terra Cronenberg",
  "Space station": "Estação espacial",
  "Citadel of Ricks": "Cidadela dos Ricks",
  Planet: "Planeta",
  "Giant's Town": "Cidade dos Gigantes",
  "Fantasy town": "Cidade da fantasia",
  "Unity's Planet": "Planeta da Unidade",
  "Earth (C-500A)": "Terra (C-500A)",
  "Rick's Memories": "Memórias do Rick",
  Memory: "Memória",
  "Anatomy Park": "Parque de Anatomia",
  Microverse: "Microverso",
  Disease: "Doença",
  "Planet Squanch": "Planeta Squanch",
  "Eric Stoltz Mask Earth": "Terra da Máscara do Eric Stoltz",
  "Interdimensional Cable": "Cabo Interdimensional",
  Genderless: "Sem gênero",
  "Resort Planet": "Planeta Resort",
  Customs: "Alfândega",
  "Interdimensional Customs": "Alfândega Interdimensional",
  "Galactic Federation Prison": "Prisão da Federação Galáctica",
  "Hamster in Butt World": "Mundo do Hamster no C#",
  "Earth (Giant Telepathic Spiders Dimension)":
    "Terra (Dimensão de Aranhas Telepáticas Gigantes)",
  Alphabetrium: "Alfabeto",
  Daycare: "Creche",
  "Earth (5-126)": "Terra (5-126)",
  "Zigerion's Base": "Base dos Zigerions",
  "Dwarf planet (Celestial Dwarf)": "Planeta anão (Anão Celestial)",
  Pluto: "Plutão",
  "Zeep Xanflorp's Miniverse": "Miniverso de Zeep Xanflorp",
  "Larva Alien's Planet": "Planeta da Larva Alienígena",
  "Purge Planet": "Planeta da Purificação",
  "Immortality Field Resort": "Resort do Campo da Imortalidade",
  "Worldender's lair": "Covil do Worldender",
  "Mr. Goldenfold's dream": "Sonho do Sr. Goldenfold",
  "Earth (K-22)": "Terra (K-22)",
  "Earth (Fascist Dimension)": "Terra (Dimensão Fascista)",
  "Mr. Meeseeks Box": "Caixa do Sr. Meeseeks",
  Spacecraft: "Nave espacial",
  "Vindicator's Base": "Base dos Vindicator",
  "Pawn Shop Planet": "Planeta da Loja de Penhores",
  Dream: "Sonho",
  "St. Gloopy Noops Hospital": "Hospital St. Gloopy Noops",
  "Earth (D-99)": "Terra (D-99)",
  "Gear World": "Mundo de Engrenagens",
  "Earth (D716)": "Terra (D716)",
  "Earth (D716-B)": "Terra (D716-B)",
  "Earth (D716-C)": "Terra (D716-C)",
  "Earth (Evil Rick's Target Dimension)":
    "Terra (Dimensão Alvo do Rick Maligno)",
  "Earth (J-22)": "Terra (J-22)",
  "Signus 5 Expanse": "Expansão Signus 5",
  "Snake Planet": "Planeta Cobra",
  "Death Star": "Estrela da Morte",
  "NX-5 Planet Remover": "Removedor de Planeta NX-5",
  "Artificially generated world": "Mundo gerado artificialmente",
  Detoxifier: "Desintoxicador",
  "Trunk World": "Mundo do Porta-Malas",
  "Roy: A Life Well Lived": "Roy: Uma Vida Bem Vivida",
  "Snuffles' Dream": "Sonho do Snuffles",
  "Earth (Phone Dimension)": "Terra (Dimensão do Telefone)",
  "Earth (Pizza Dimension)": "Terra (Dimensão da Pizza)",
  "Greasy Grandma World": "Mundo da Vovó Gordurosa",
  "Earth (Chair Dimension)": "Terra (Dimensão da Cadeira)",
  "Testicle Monster Dimension": "Dimensão do Monstro Testículo",
  "Alien Day Spa": "Spa de Dia Alienígena",
  "The Menagerie": "O Menagerie",
  "Earth (Wasp Dimension)": "Terra (Dimensão da Vespa)",
  "Earth (Fascist Shrimp Dimension)": "Terra (Dimensão do Camarão Fascista)",
  "Earth (Fascist Teddy Bear Dimension)":
    "Terra (Dimensão do Urso Teddy Fascista)",
  "Monogatron Mothership": "Nave Mãe Monogatron",
  "Mount Space Everest": "Montanha Espaço Everest",
  Liquid: "Água",
  "Gorgon Quadrant": "Quadrante do Gorgon",
  Convention: "Convenção",
  "Heistotron Base": "Base do Heistotron",
  "Mount Olympus": "Monte Olimpo",
  "Earth (Tusk Dimension)": "Terra (Dimensão de Tusk)",
  "Story Train": "Trem da História",
  "Non-Diegetic Alternative Reality": "Realidade Alternativa Não Diegética",
  "Tickets Please Guy Nightmare": "Pesadelo do Bilhete Por Favor",
  "Morty’s Story": "História do Morty",
  "Ricks’s Story": "História do Rick",
  Asteroid: "Asteroide",
  "Glorzo Asteroid": "Asteroide Glorzo",
  "Acid Plant": "Planta Ácida",
  "Alien Acid Plant": "Planta Ácida Alienígena",
  "Merged Universe": "Universo Fundido",
  Dimension: "Dimensão",
  "Near-Duplicate Reality": "Realidade Quase Duplicada",
  Reality: "Realidade",
  "Defiance's Ship": "Nave da Defiance",
  "Defiance's Base": "Base da Defiance",
  "The Ocean": "Oceano",
  "Narnia Dimension": "Dimensão de Narnia",
  "Elemental Rings": "Anéis Elementares",
  Space: "Espaço",
  "Police Department": "Departamento de Polícia",
  Hell: "Inferno",
  "Space Tahoe": "Espaço de Tahoe",
  "Rick and Two Crows Planet": "Planeta do Rick e Dois Corvos",
  "Avian Planet": "Planeta Aviário",
  "Normal Size Bug Dimension": "Dimensão de Insetos de Tamanho Normal",
  "Earth (Unknown dimension)": "Terra (Dimensão Desconhecida)",
};

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
              {{
                translateKeys[result?.character?.gender] ||
                result?.character?.gender
              }}
            </span>
          </div>
          <div class="flex flex-col border-b-2 border-[#21212114]">
            <span class="text-description font-bold">Espécie</span>
            <span class="text-information">
              {{
                translateKeys[result?.character?.species] ||
                result?.character?.species
              }}
            </span>
          </div>
          <div class="flex flex-col border-b-2 border-[#21212114]">
            <span class="text-description font-bold">Origem</span>
            <span class="text-information">
              {{
                translateKeys[result?.character?.origin.name] ||
                result?.character?.origin.name
              }}
            </span>
          </div>
          <div class="flex flex-col border-b-2 border-[#21212114]">
            <span class="text-description font-bold">Status</span>
            <span class="text-information">
              {{
                translateKeys[result?.character?.status] ||
                result?.character?.status
              }}
            </span>
          </div>
          <div class="flex flex-col border-b-2 border-[#21212114]">
            <span class="text-description font-bold">Localização</span>
            <span class="text-information">
              {{
                translateKeys[result?.character?.location.type] ||
                result?.character?.location.type
              }}
              -
              {{
                translateKeys[result?.character?.location.name] ||
                result?.character?.location.name
              }}
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
  <div
    @click="$router.push({ name: 'HomePage' })"
    class="text-center text-3xl text-white"
  >
    Voltar
  </div>
  <loading-growth :loading="loading" label="AGUARDE UM INSTANTE..." />
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
