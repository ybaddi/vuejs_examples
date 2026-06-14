<template>
    <div>   
    <h1>Adresse Page</h1>

    <ul>
        <li>Rue: {{ adresse.rue }}</li>
        <li>Code Postal: {{ adresse.codePostal }}</li>
        <li>Ville: {{ adresse.ville }}</li>
    </ul>
    <router-link :to="{ name: 'adresse', query: { rue: '123 Main St', codePostal: '75000', ville: 'Casablanca' } }">clique pour avoir plus d'information</router-link>
    </div>
</template>

<script>
export default {
    name: 'AdresseView',
    computed: {
        adresse() {
            return this.$route.query;
        }
    },
    created() {
        console.log("create adresse");
        this.$watch(
            () => this.$route.query,
            (next) => {
                console.log(next);
            }
        );
    }

}
</script>