<script setup>
import { ref, reactive } from 'vue'
const stringArr = ref(['a', 'b', 'c'])
const objectArr = reactive([
  {
    name: 'a',
    age: 24
  },
  {
    name: 'b',
    age: 11
  },
  {
    name: 'c',
    age: 33
  }
])
</script>

<template>
  <div>
    <h1>리스트 렌더링</h1>
    <h2>단순 배열</h2>
    <br />
    <ul>
      <li v-for="(item, index) in stringArr" :key="`arrString${index}`">
        {{ item }}
      </li>
    </ul>
    <br />
    <br />
    <h2>Object 배열</h2>
    <br />
    <ul>
      <li v-for="(item, index) in objectArr" :key="`arrObject${index}`">
        이름은 {{ item.name }}<br />
        나이는 {{ item.age }}살
      </li>
    </ul>
  </div>
</template>
