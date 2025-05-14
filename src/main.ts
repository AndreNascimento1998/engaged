import { createApp, h } from "vue";
import "./sytles/global.scss";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import { Quasar } from "quasar";
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/src/css/index.sass";
import { ApolloClients } from "@vue/apollo-composable";
import { apolloClient } from "@/lib/apollo";

const pinia = createPinia();

const app = createApp(App);

app.provide(ApolloClients, {
  default: apolloClient,
});

app.use(router).use(pinia).use(Quasar).mount("#app");
