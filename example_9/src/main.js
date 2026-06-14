import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");

// $route.pamars.  => /chemin/pparam1/param2/param3
// $route.query.  => /chemin?param1=valeur1&param2=valeur2&param3=valeur3