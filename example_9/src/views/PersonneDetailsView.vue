<template>
    <div>
        <h1>Personne Details Page: {{  id }}</h1>
        <p> Personne recherche : {{  personne }} </p>
    </div>
</template>

<script>
export default {
    name: 'PersonneDetailsView',
    props:['id'],
    data(){
        return {
            Personnes: [
             {
                id: 1,
                nom: "John",
                prenom: "Doe",
                age: 30},
                
                {
                id: 2,
                nom: "Jane",
                prenom: "Smith",
                age: 25},
                {
                id: 3,
                nom: "Bob",
                prenom: "Johnson",
                age: 35}
            ]
    }
},
    computed: {
        
        personne() {
            // console.log(p.id);
            console.log(this.id);
            return this.Personnes.find(p => p.id == this.id);
        }
    }
}
</script>