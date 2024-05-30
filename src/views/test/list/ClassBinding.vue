<script setup>
import { ref, computed } from 'vue'

// 객체 구문
// 변수
const isActive = ref(true)

// 객체
const classObject = {
  myClassName: true
}

// computed
const isError = ref(false)
const computedObject = computed(() => {
  return {
    myClassName: isActive.value && !isError.value,
    myError: isError.value
  }
})

// 배열 구문
const activeClass = ref('myClassName')
const errorClass = ref('myError')
</script>

<template>
  <div>
    <h1>클래스 바인딩</h1>
    <br />
    <h2>객체 구문</h2>
    <h3>* Boolean 조건에 따라 바인딩</h3>
    <div :class="{ myClassName: isActive }">객체 구문 Boolean 조건에 따라 바인딩</div>
    <div class="myClassName"></div>
    <br />
    <h3>* 삼항연산자 조건에 따라 바인딩</h3>
    <div :class="isActive ? 'colorBlue' : 'colorRed'">객체 구문 삼항연산자 조건에 따라 바인딩</div>
    <br />
    <h3>* 단순 객체 바인딩</h3>
    <div :class="classObject">단순 객체 바인딩</div>
    <br />
    <h3>* 객체를 반환하는 computed 함수 바인딩</h3>
    <div :class="computedObject">객체를 반환하는 computed 함수 바인딩</div>
    <br />
    <br />
    <h2>배열 구문</h2>
    <h3>* Boolean 조건에 따라 바인딩</h3>
    <div :class="[activeClass, errorClass]">배열 구문 Boolean 조건에 따라 바인딩</div>
    <br />
    <h3>* 삼항연산자 조건에 따라 바인딩</h3>
    <div :class="[isActive ? 'colorBlue' : 'colorRed']">
      배열 구문 삼항연산자 조건에 따라 바인딩
    </div>
    <br />
    <h3>* 배열 내에서 객체 구문 사용</h3>
    <div :class="[{ myClassName: isActive }, errorClass]">배열 내에서 객체 구문 사용</div>
  </div>
</template>

<style>
.myClassName {
  color: red;
}
.colorRed {
  color: red;
}
.colorBlue {
  color: blue;
}
.myError {
  text-decoration: line-through;
}
</style>
