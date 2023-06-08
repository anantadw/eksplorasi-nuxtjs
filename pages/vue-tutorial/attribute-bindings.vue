<script setup>
const titleClass = ref('title')
</script>

<template>
  <div>
    <h1 v-bind:class="titleClass">Make me red</h1> <!-- add dynamic class binding here -->
    <NuxtLink to="/">Kembali</NuxtLink>
  </div>
</template>

<style>
.title {
  color: red;
}
</style>