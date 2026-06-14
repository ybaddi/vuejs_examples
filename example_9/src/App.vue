<script >
import MenuNav from './components/MenuNav.vue'
import ReactiveValue from './components/ReactiveValue.vue'
export default {
  name: 'App',
  components: {
    MenuNav
  },
  data() {
    return {
      nom:null,
    }
  },
  
}
</script>

<template>
  <div>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    <menu-nav />
    <router-view />
</div>
   

</template>

<style scoped>


.logo {
  display: block;
  margin: 0 auto 2rem;
}


</style>
