const App = Vue.createApp({
  data() {
    return {
      message: "<span>Hello world</span>",
      tab: [2, 4, 5, 8],
      personne: { id: 100, nom: "baddi", prenom: "youssef" },
      personnes: [
        { id: 100, nom: "baddi1", prenom: "youssef1" },
        { id: 101, nom: "baddi2", prenom: "youssef2" },
        { id: 102, nom: "baddi3", prenom: "youssef3" },
        { id: 103, nom: "baddi4", prenom: "youssef4" },
      ],
      students: [
        { id: 100, note: 18, nom: "baddi1", prenom: "youssef1" },
        { id: 101, note: 16, nom: "baddi2", prenom: "youssef2" },
        { id: 102, note: 5, nom: "baddi3", prenom: "youssef3" },
        { id: 103, note: 12, nom: "baddi4", prenom: "youssef4" },
      ],
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
