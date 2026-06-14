<template>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/personne">Personnes</router-link>
      <router-link :to="{ path: '/adresse', query: { rue: '123 Main St', codePostal: '75000', ville: 'Paris' } }">Adresse</router-link>
    </nav>
</template>

<script>
export default {
    name: 'MenuNav',
}
</script>   

<style scoped>  
.active-link{
    font-style: italic;
    color: red;
}
</style>