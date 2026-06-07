const App = Vue.createApp({
  data() {
    return {
      message: "Hello ",
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
      lien: "https://ziryabtec.com/",
      linkTarget: { href: "https://ziryabtec.com/", target: "_blank" },
      rouge: false,
      blue: true,
      gras: true,
      couleur: "white",
      couleurBg: "red",
      disabled: true,
    };
  },
  watch: {
    message: function (newValue, oldValue) {
      console.log("message changed from " + oldValue + " to " + newValue);
    },
  },
  methods: {
    sayHello: function () {
      alert("hello world");
    },
    couleurConditionnelle: function () {
      if (this.rouge == false) {
        var resultat = "rouge";
      } else {
        var resultat = "bleu";
      }
      this.rouge = !this.rouge;
      return resultat;
    },
    showValue: function (str, event) {
      console.log(str);
      console.log(event.target.value);
      console.log(event.data);
    },
    updateMassage: function (event) {
      this.message = event.target.value;
    },
  },
});

App.mount("#app");
