<script setup>
const childMsg = ref('No child msg yet')
</script>

<template>
  <div>
    <child-comp3 v-on:response="(msg) => childMsg = msg" />
    <p>{{ childMsg }}</p>
    <NuxtLink to="/">Kembali</NuxtLink>
  </div>
</template>