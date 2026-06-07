<script >
import HelloWorld from './components/HelloWorld.vue'
import ReactiveValue from './components/ReactiveValue.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    ReactiveValue
  },
  data() {
    return {
      nom:null,
    }
  },
  methods: {
    afficherBonjour(nom) {
      this.nom=nom;
}
  }
}
</script>

<template>
  <div>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
   hello you are {{nom ?? 'inconnu'}}
    <HelloWorld  ville="El Jadida" @send-data="afficherBonjour"/>
    <ReactiveValue />

   <!-- <HelloWorld  >
     <template v-slot:nom>Baddi</template>
     <template v-slot:prenom>Youssef</template>
     <template v-slot:age>26</template>
   </HelloWorld >

   <HelloWorld  >
     <template #default>Baddi</template>
     <template #prenom>Youssef</template>
     <template #age>26</template>
   </HelloWorld > -->

</div>
   

</template>

<style scoped>


.logo {
  display: block;
  margin: 0 auto 2rem;
}


</style>
