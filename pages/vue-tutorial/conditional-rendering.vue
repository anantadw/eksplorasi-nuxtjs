<script setup>
const awesome = ref(true)

function toggle() {
  awesome.value = !awesome.value
}
</script>

<template>
  <div>
    <button @click="toggle">toggle</button>
    <h1 v-if="awesome">Vue is awesome!</h1>
    <h1 v-else>Oh no 😢</h1>
    <NuxtLink to="/">Kembali</NuxtLink>
  </div>
</template>