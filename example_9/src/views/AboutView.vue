<template>
    <div> 
    <h1>About Page</h1>
    <button @click="goToPersonne">Go to Personne</button>
    </div>
</template>

<script>
export default {
    methods: {
        goToPersonne() {
            // this.$router.push('/personne/2'); // Redirige vers la page de la personne avec l'ID 2
            // this.$router.push({path: '/personne/2'});
            this.$router.push({name: 'personne-details', params: {id: 2}}); // Redirige vers la page de la personne avec l'ID 2 en utilisant le nom de la route
        }
    }
}
</script>