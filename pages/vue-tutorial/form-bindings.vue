<script setup>
const text = ref('')
</script>

<template>
  <div>
    <input v-model="text" placeholder="Type here">
    <p>{{ text }}</p>
    <NuxtLink to="/">Kembali</NuxtLink>
  </div>
</template>