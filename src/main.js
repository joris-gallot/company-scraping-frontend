import { createApp } from "vue";
import App from "./App.vue";
import Spinner from "./components/Spinner.vue";
import "./index.css";
import api from "./services";

const app = createApp(App);

app.component("Spinner", Spinner);
app.provide("api", api);
app.mount("#app");
