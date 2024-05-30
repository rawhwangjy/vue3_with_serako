<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
onMounted(() => {
  console.log('route >>>', route)
})
</script>

<template>
  <div class="about">
    <h1>현재 페이지 ID : {{ route.params.id }}</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
