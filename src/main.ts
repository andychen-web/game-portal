import { createApp } from "vue";
import App from "./App.vue";
import "./assets/index.css";
import router from "./router";
import * as lucide from "lucide-vue-next";

const app = createApp(App);
app.use(router);

for (const [key, component] of Object.entries(lucide)) {
  app.component(key, component);
}

app.mount("#app");
