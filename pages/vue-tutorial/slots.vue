<script setup>
const msg = ref('from parent')
</script>

<template>
  <div>
    <child-comp4>
      {{ msg }}
    </child-comp4>
    <NuxtLink to="/">Kembali</NuxtLink>
  </div>
</template>