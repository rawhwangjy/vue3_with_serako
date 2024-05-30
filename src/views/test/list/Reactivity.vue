<script setup>
import { onMounted, ref, reactive, computed } from 'vue'

const refData = ref('ref 데이터')
const reactiveData = reactive({
  name: '빵지',
  age: 38
})

let message = '안녕하세요. abc입니다.'
// let message = ref('안녕하세요. abc입니다.')
const reverseMessage = () => {
  // console.log('message', message)
  message = message.split('').reverse().join('')
  // message.value = message.value.split('').reverse().join('')
}
const uppercasedMessage = computed(() => {
  return message.toUpperCase()
  // return message.value.toUpperCase()
})

const count = ref(0)
const watchMsg = ref('')
const incrementCount = () => {
  count.value++
}

// 상단에 watch 추가
// watch(count, (newValue, oldValue) => {
//   watchMsg.value = `count가 ${oldValue}에서 ${newValue}로 변경되었습니다.`
//   if (newValue === 3) {
//     watchMsg.value = '카운트가 3에 도달했습니다!'
//   }
// })
onMounted(() => {
  // console.log('ref의 값은? >', refData.value)
  // console.log('------------------------------------------------------------------')
  // console.log('reactive의 값은? >', reactiveData)
  // console.log('reactive의 name 값은? >', reactiveData.name)
  // console.log('reactive의 age 값은? >', reactiveData.age)
  // console.log('------------------------------------------------------------------')
})
</script>

<template>
  <div>
    <h1>반응형 (Reactivity)</h1>
    <br />
    <h2>ref</h2>
    <div></div>
    <ul>
      <li>ref 객체는 반응형이며, .value 속성에 새 값을 할당한다.</li>
    </ul>
    <div>{{ refData }}</div>
    <br />
    <br />
    <h2>reactive</h2>
    <ul>
      <li>객체의 반응형 프락시(proxy)를 반환한다.</li>
      <li>반응형 변환은 "내부 깊숙이 있는(deep)" 모든 중첩 속성에 영향을 준다.</li>
    </ul>
    <div>{{ reactiveData }}</div>
    <div>{{ reactiveData.name }}</div>
    <div>{{ reactiveData.age }}</div>
    <br />
    <br />
    <h2>computed</h2>
    <ul>
      <li>
        getter 함수를 사용하며, getter로부터 반환된 값을 읽기 전용 반응형 ref 객체로 반환한다.
      </li>
      <li>get과 set 함수가 있는 객체를 사용하면, 쓰기 가능한 ref 객체를 반환한다.</li>
    </ul>
    <br />
    <p>원본 메시지: {{ message }}</p>
    <p>대문자로 변환된 메시지: {{ uppercasedMessage }}</p>
    <button @click="reverseMessage">메시지 뒤집기</button>
    <br />
    <br />
    <h2>watch</h2>
    <ul>
      <li>하나 이상의 반응형 데이터 소스를 감시하고, 소스가 변경되면 콜백 함수를 호출한다.</li>
    </ul>
    <br />
    <p>카운트: {{ count }}</p>
    <p>watch 실행 중이면 문구가 변경된다. > {{ watchMsg }}</p>
    <button @click="incrementCount">카운트 증가</button>
  </div>
</template>
