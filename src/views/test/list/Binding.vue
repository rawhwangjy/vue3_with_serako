<script setup>
import { ref } from 'vue'
const arr = ref(['String', 'Number'])

const onClick = () => {
  console.log('AA')
}
</script>

<template>
  <div>
    <h1>속성 바인딩</h1>
    <span>📌 v-bind</span>
    <span>:</span>
    <ul>
      <li>String</li>
      <li>Number</li>
      <li>Boolean</li>
      <li>Array</li>
      <li>Object</li>
    </ul>
    ///
    <ul>
      <li v-for="(item, index) in arr" v-bind:key="`key${index}`" :class="`class${index}`">
        {{ item }}
      </li>
    </ul>

    <!-- <span>📌 동적 바인딩</span> -->

    <h2>이벤트 바인딩</h2>
    <span>📌 v-on</span>
    <button v-on:click="onClick">버튼</button>
    <button @click="onClick">버튼</button>
  </div>
</template>
