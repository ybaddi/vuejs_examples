<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <HelloWorld />
</template>

<!-- 
one way binding:
- interpolation : {{ message }}
- v-bind : <img v-bind:src="imageSrc"> </img>
- event binfing v-on : <button v-on:click="doSomething">Click me</button>

two way binding : v-model 

-->