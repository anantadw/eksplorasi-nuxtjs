<script setup>
const route = useRoute()

const id = route.params.id
</script>

<template>
  <div>
    <h1>This is post page</h1>
    <p>Post id : {{ id }}</p>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/about">About</NuxtLink>
  </div>
</template>