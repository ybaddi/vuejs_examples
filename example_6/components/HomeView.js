export default {
  data() {
    return {
      message: "Hello from component",
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
  template: `
    <div>
        <h1><p v-text="message"></p></h1>
        <!-- <h2><p >{{sayHello("baddi youssef") }}</p></h2> -->

        <h3>{{ message.length}}</h3>

        <ul>
            <li v-for="(item,index) in tab" :key="index">{{index}}-{{ item }}</li>
        </ul>

        <ul>
            <li>{{ tab[0] }}</li>
            <li>{{ tab[0] %2 ==0 ? "pair" : "impaire" }}</li>
            <li>{{ tab['1'] }}</li>
            <li>{{ tab["1"] }}</li>
            <li> {{ tab.length }}</li>
                        
            <li> {{ Math.sqrt(4) }}</li>
            <!-- <li> {{ var =4}}</li> -->

        </ul>

        <ul>
            <li>{{ personne.nom }}</li>
            <li>{{ personne.prenom }}</li>
            <li>{{ personne.id }}</li>
        </ul>

        <ul>
            <li v-for="(value, key) in personne" :key="key">{{ key }}: {{ value }}</li>
        </ul>


        <ul>
            <li v-for="item in personnes" :key="item.id">
                {{ item.nom }} {{ item.prenom }}</li>
        </ul>

        <ul>
            <li v-for="{id,nom,prenom} in personnes" :key="d">
                {{ nom }} {{ prenom }}</li>
        </ul>

        <ul>
            <li v-for="({id,nom,prenom},ind) in personnes" :key="id">
               {{ ind+1 }} - {{ nom }} {{ prenom }}</li>
        </ul>

        <ul>
            <li v-for="elt in 3" :key="elt">
               {{ elt }}</li>
        </ul>

        <ul>
            <li v-for="elt of 3" :key="elt">
               {{ elt }}</li>
        </ul>


        <ul>
            <li v-if="tab[1]%2 !=0">
               {{ tab[1] }} est impaire</li>
               <li v-else>
               {{ tab[1] }} est paire</li>
        </ul>

        <ul>
            <template v-if="tab[1]%2 !=0">
                <li>
                    {{ tab[1] }} est impaire
                </li>
            </template>
            <template v-else>
                <li>
                    {{ tab[1] }} est paire
                </li>
            </template>
        </ul>

        <ul>
            <template v-for="item in tab" :key="item">
                <li v-if="item%2 !=0">
                    {{ item }} est impaire
                </li>
            
                <li v-else>
                    {{ item }} est paire
                </li>
            </template>
        </ul>

        <h4>Exercice</h4>
        <ul>
            <template v-for="item in students" :key="item">
                <li v-if="item.note > 0 && item.note < 10">
                    {{ item.nom }} est echec
                </li>
            
                <li v-else-if="item.note >= 10 && item.note < 13">
                     {{ item.nom }} est moyen
                </li>

                <li v-else-if="item.note >= 13 && item.note < 16">
                     {{ item.nom }} est bien
                </li>

                <li v-else>
                     {{ item.nom }} est très bien
                </li>
            </template>
        </ul>

        <ul>
            <li v-if="tab[0] % 2 !=0">
                {{ tab[0] }} est impaire
            </li>
            <li v-show="tab[0] % 2 !=0">
                {{ tab[0] }} est impaire
            </li>
        </ul>
        <p>
            Voici le lien vers ma boite
            <a href="{{ lien }}" target="_blank">Ziryab Tec</a>    
        </p>
         <p>
            Voici le lien vers ma boite
            <a v-bind:href="lien" target="_blank">Ziryab Tec</a>    
        </p>
        <p>
            Voici le lien vers ma boite
            <a :href="lien" target="_blank">Ziryab Tec</a>    
        </p>

        <p>
            Voici le lien vers ma boite
            <a v-bind="linkTarget" >Ziryab Tec</a>    
        </p>

        <p :class="{'bleu': blue == true, 'rouge': rouge == true, 'gras': gras == true}">
            Voici le lien vers ma boite en style   
        </p>
        <button v-on:click="sayHello()">Say Hello</button>

        <button @click="sayHello()">Say Hello</button>

        <div>
            <div>
                <label for="text">Toggle</label>
                <input type="text" id="text" @input="updateMassage">
                {{ message }}
                </div>
                </div>


<div>
            <div>
                <label for="text">Toggle</label>
                <input type="text" id="text" v-model="message">
                {{ message }}
                </div>
                </div>

<div>
            <div>
                <button :disabled="disabled" 
                @click="() => disabled = !disabled">button 1</button>
            
                <button :disabled="!disabled"
                @click="() => disabled = !disabled">button 2</button>
            </div>
        </div>

    </div>
  `,
};
