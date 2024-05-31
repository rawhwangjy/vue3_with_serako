<script setup>
import { ref } from 'vue'
const list = ref([
  {
    name: '텍스트 보간법',
    url: '/test/textMustach'
  },
  {
    name: 'v-html',
    url: '/test/VHTML'
  },
  {
    name: '속성 바인딩',
    url: '/test/binding'
  },
  {
    name: 'Javascript 표현식 사용',
    url: '/test/expression'
  },
  {
    name: '디렉티브',
    url: '/test/directive'
  },
  {
    name: '스타일 바인딩',
    url: '/test/styleBinding'
  },
  {
    name: '클래스 바인딩',
    url: '/test/classBinding'
  },
  {
    name: '반응형',
    url: '/test/reactivity'
  },
  {
    name: '조건부 렌더링',
    url: '/test/vIf'
  },
  {
    name: '리스트 렌더링',
    url: '/test/vFor'
  },
  {
    name: 'Template & Slot & Fallthrough',
    url: '/test/templateSlot'
  },
  {
    name: 'Props & Emits',
    url: '/test/propsEmits'
  }
])
</script>

<template>
  <div>
    <h1>This is an project page</h1>
    <br />
    <ul>
      <li v-for="(item, index) in list" :key="`text${index}`">
        <router-link :to="item.url">
          {{ item.name }}
        </router-link>
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
