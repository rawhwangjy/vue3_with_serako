<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

// ES6
const onClick = (id) => {
  // path: '/about/:id',
  router.push({
    path: `/about/${id}`
  })
}
// function onClick2 (id) {
//   router.push({
//     path: `/about/${id}`
//   })
// }
</script>

<template>
  <div>
    <h1>This is an about page1</h1>
    <br />
    리스트
    <br />
    <ul>
      <li>
        <button type="button" v-on:click="onClick('1')">ID : 1</button>
      </li>
      <li>
        <button type="button" v-on:click="onClick('2')">ID : 2</button>
      </li>
      <li>
        <button type="button" v-on:click="onClick('3')">ID : 3</button>
      </li>
      <li>
        <button type="button" v-on:click="onClick('4')">ID : 4</button>
      </li>
    </ul>
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
