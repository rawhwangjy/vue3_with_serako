<script setup>
import { ref } from 'vue'
const definition = ref(
  '표현식 => 어떤 값으로 이행하는 임의의 유효한 코드 단위, 값을 평가하고 결과를 생성, 반환하는 코드 조각, 표현식은 항상 어떤 값으로 평가된다.'
)
const number = ref(0)
const ok = ref(true)
const message = ref('안녕. 뷰! 리액트!')

/*
  filter 메서드는 새로운 배열을 반환하기 때문에, 이미 주어진 배열(array)을 변경하지 않는다.
  따라서 array.filter 앞에 return을 붙여주지 않으면 아무 것도 반환하지 않는다.
  반환값을 받으려면 array.filter 메서드를 호출한 결과를 반환해야 한다.
*/
const filterArr = (array) => {
  return array.filter((item) => {
    console.log('a', item)
    return item < 10
  })
}
</script>

<template>
  <div>
    <h1>Javascript 표현식 사용</h1>
    <div>{{ definition }}</div>
    <div>&#123;&#123; 데이터 바인딩 &#125;&#125; 내에서 모든 표현식 가능</div>
    {{ number + 1 }}<br />
    {{ ok ? '예' : '아니오' }}<br />
    {{ message.split('').reverse().join('') }}<br />
    {{ filterArr([2, 4, 20, 9, 40, 55]) }}
  </div>
</template>
