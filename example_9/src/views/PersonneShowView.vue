<template>
    <div>
    <h1>Personne Show Page</h1>
    <ul>
        <li v-for="personne in Personnes" :key="personne.id">
           <router-link :to="{ path: '/personne/' + personne.id }">
             {{ personne.nom }} {{ personne.prenom }} ({{ personne.age }} ans)
           </router-link>
        </li>
    </ul>  
    </div> 
</template>

<script>
export default {
    name: 'PersonneShowView',
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
}
}
</script>