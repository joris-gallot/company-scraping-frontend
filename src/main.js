import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import api from "./services";

const app = createApp(App);

app.provide("api", api);
app.mount("#app");
