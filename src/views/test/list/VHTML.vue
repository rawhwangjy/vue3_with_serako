<script setup>
import { ref } from 'vue'
const myHTML = ref('<span style="color: red;">빨간 글자가 출력된다.</span>')
</script>

<template>
  <div>
    <h1>HTML 출력</h1>
    <div>텍스트 보간법 사용: {{ myHTML }}</div>
    v-html 디렉티브 사용: <span v-html="myHTML"></span>
  </div>
</template>
