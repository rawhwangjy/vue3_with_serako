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

    <!-- 페이징 있는 리스트 -->
    <!-- <div class="lis" v-if="list.length > 5"></div> -->
    <!-- 페이징 없는 리스트 -->
    <!-- <div class="lis" v-else-if="list.length < 5"></div> -->
    <!-- 데이터 없을 때 -->
    <!-- <div class="no-data" v-else-if="list.length === 0"></div> -->
    = 할당 == 값 비교 === strict 값 비교
  </div>
</template>
