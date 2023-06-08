<script setup>
const greeting = ref('Hello from parent')
</script>

<template>
  <div>
    <child-comp2 v-bind:msg="greeting" />
    <NuxtLink to="/">Kembali</NuxtLink>
  </div>
</template>