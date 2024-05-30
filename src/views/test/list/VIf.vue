<script setup>
import { ref } from 'vue'
const toggleState = ref(false)
const onClick = () => {
  toggleState.value = !toggleState.value
}
</script>

<template>
  <div>
    <h1>조건부 렌더링</h1>
    <div v-if="toggleState">현재 toggleState 값은 True 입니다.</div>
    <div v-else>현재 toggleState 값은 False 입니다.</div>
    <button type="button" v-on:click="onClick">토글 On/Off</button>
  </div>
</template>
