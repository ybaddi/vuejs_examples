const App = Vue.createApp({
  data() {
    return {
      message: "<span>Hello world</span>",
      tab: [2, 3, 5, 8],
      personne: { id: 100, nom: "baddi", prenom: "youssef" },
      name: "baddi youssef",
    };
  },
  methods: {
    sayHello: function (nom) {
      return `hello ${nom}`;
    },
  },
});

App.mount("#app");
