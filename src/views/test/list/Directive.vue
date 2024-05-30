<script setup>
import { ref } from 'vue'
const definition = ref('v- 접두사가 있는 특수한 속성')
</script>

<template>
  <div>
    <h1>디렉티브</h1>
    <div>{{ definition }}</div>
    <ul>
      <li>v-if</li>
      <li>v-if/else</li>
      <li>v-bind</li>
      <li>v-on</li>
      <li>...</li>
    </ul>
  </div>
</template>
