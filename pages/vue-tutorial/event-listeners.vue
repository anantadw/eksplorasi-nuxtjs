<script setup>
const count = ref(0)

function increment() { 
  count.value++
}
</script>

<template>
  <div class="div">
    <!-- make this button work -->
    <button v-on:click="increment">count is: {{ count }}</button>
    <NuxtLink to="/">Kembali</NuxtLink>
  </div>
</template>