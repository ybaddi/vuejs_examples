<template>
<p>{{ valeur1 }} + {{ valeur2 }} = {{ resultat }}</p>
</template>
<script>
import { watchEffect } from 'vue';

export default {
name: 'ReactiveValue',
data() {
return {
valeur1: 2,
valeur2: 3,
resultat: 0
}
},
created() {
watchEffect(() => {
this.resultat = this.valeur1 + this.valeur2
})
},
mounted() {
setInterval(() => this.valeur2 += 10, 5000);
},
}
</script>