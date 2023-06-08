<script setup>
const message = ref('Hello World')
message.value = 'teks dinamis'
</script>

<template>
  <div>
    <h1>{{ message }}</h1>
    <NuxtLink to="/">Kembali</NuxtLink>
  </div>
</template>
