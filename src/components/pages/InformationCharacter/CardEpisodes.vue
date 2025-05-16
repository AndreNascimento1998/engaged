<script setup lang="ts">
import { Episodes } from "@/interfaces/Character";
import CardInfo from "@/components/base/Cards/Card.vue";
import ExternalLink from "@/components/Icons/ExternalLink.vue";

defineProps<{
  episodes: { epNumber: string; name: string }[];
}>();

const formatsEpisodes: Record<string, string> = {
  Pilot: "Pilot_(Rick_and_Morty)",
  "Edge of Tomorty: Rick, Die, Rickpeat": "Edge_of_Tomorty:_Rick_Die_Rickpeat",
  "Claw and Hoarder: Special Ricktim's Morty":
    "Claw_and_Hoarder:_Special_Ricktim%27s_Morty",
  "One Crew Over the Crewcoo's Morty": "One_Crew_over_the_Crewcoo%27s_Morty",
  "Star Mort: Rickturn of the Jerri": "Star_Mort_Rickturn_of_the_Jerri",
};

const formatEspecifyEpisode = (episode: string) => {
  return formatsEpisodes[episode] || episode;
};

const parsedEpisode = (episode: string) => {
  const episodeFormatter =
    episode === "Pilot" ||
    episode === "Edge of Tomorty: Rick, Die, Rickpeat" ||
    episode === "Claw and Hoarder: Special Ricktim's Morty" ||
    episode === "One Crew Over the Crewcoo's Morty" ||
    episode === "Star Mort: Rickturn of the Jerri"
      ? formatEspecifyEpisode(episode)
      : episode.replace(" ", "_");

  window.open(`https://en.wikipedia.org/wiki/${episodeFormatter}`, "_blank");
};
</script>

<template>
  <card-info class="card-width overflow-auto animation-mounted-card-right">
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
        <div class="grid grid-cols-[4fr_0.4fr] items-center gap-12">
          <span class="text-information">
            {{ episode.name }}
          </span>
          <external-link
            class="cursor-pointer"
            @click="parsedEpisode(episode.name)"
          />
        </div>
      </div>
    </div>
  </card-info>
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

.animation-mounted-card-right {
  animation: fadeInRight 0.8s ease-in-out;
  overflow: hidden;
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translateX(300px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.flex-nowrap {
  flex-wrap: nowrap !important;
}
</style>
