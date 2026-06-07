<script>
export default {
    name: 'HelloWorld',
    data() {
        return {
           bgColor: 'blue',
           msg: 'Hello World',
           nom: null,
        }
    },
    props: {

    ville: {
      type: String,
      default: 'Casablanca'
    } ,
  },
    methods: {
      envoyer() {
        this.$emit('send-data', this.nom);
        console.log("hello")
      },
      beforeCreate() {
console.log('before create')
},
created() {
console.log('created')
},
beforeMount() {
console.log('before mount')
},
mounted() {
console.log('mounted')
},
beforeUpdate() {
console.log('before update')
},
updated() {
console.log('updated')
},
beforeUnmount() {
console.log('before unmount')
},
unmounted() {
console.log('unmounted')
},
}
}
</script>

<template>
  <div>
  <div>
    <div class="hello">
    {{ msg }} from {{ ville }}
     </div>
  </div>
  <div >
    hello <slot></slot> <slot name="prenom">youssef</slot> <slot name="nom">baddi</slot> <slot name="age">24</slot>
  
  </div>
  <div>
    <label for="nom">Nom:</label>
    <input type="text" id="nom" name="nom" v-model="nom">
    <button @click="envoyer">Envoyer</button>
  </div>
  </div>
  
</template>

<style scoped>
/* div{
  background-color: v-bind(bgColor);
} */
</style>
