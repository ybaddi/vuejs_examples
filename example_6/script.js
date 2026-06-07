import HomeView from "./components/HomeView.js";

const App = Vue.createApp({
  components: {
    "home-view": HomeView,
  },
});

App.mount("#app");
