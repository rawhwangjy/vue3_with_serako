<script setup>
import { ref } from 'vue'

// 변수
const activeColor = ref('red')
const fontSize = ref(30)

// 객체
const styleObject = {
  color: 'blue',
  fontSize: '20px'
}

// 배열
const firstArr = {
  fontStyle: 'italic'
}
const secondArr = {
  color: 'orange'
}
</script>

<template>
  <div>
    <h1>스타일 바인딩</h1>
    <br />
    <h2>인라인 바인딩</h2>
    <div :style="`color: ${activeColor}; font-size: 10px`">인라인으로 바인딩</div>
    <br />
    <h2>변수 바인딩</h2>
    <div :style="{ color: activeColor, fontSize: fontSize + 'px' }">인라인으로 변수 바인딩</div>
    <br />
    <h2>객체 바인딩</h2>
    <div :style="styleObject">인라인으로 객체 바인딩</div>
    <br />
    <h2>배열 바인딩</h2>
    <div :style="[firstArr, secondArr]">인라인으로 객체 바인딩</div>
  </div>
</template>
