<script setup>
import { ref } from 'vue'
const msg = ref('보간법 메시지22')
</script>

<template>
  <div>
    <h1>텍스트 보간법</h1>
    {{ msg }}
    <p>데이터 바인딩의 가장 기본적인 형태는 "Mustache"(이중 중괄호) 문법</p>
  </div>
</template>
