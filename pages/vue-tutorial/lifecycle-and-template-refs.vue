<script setup>
const p = ref(null)

onMounted(() => {
  p.value.textContent = "test teks"
})
</script>

<template>
  <div>
    <p ref="p">hello</p>
    <NuxtLink to="/">Kembali</NuxtLink>
  </div>
</template>