<script setup>
import { onMounted, ref } from 'vue'

const inputRef = ref(null)
// 부모 요소에서 ref 접근
defineExpose({
  inputRef
})
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  btnDelete: {
    type: Boolean,
    default: false
  },
  list: {
    type: Array,
    default: () => []
    // JavaScript의 참조 타입인 객체나 배열을 기본값으로 사용하기 위해서 함수형으로 사용
    // 배열이나 객체를 기본값으로 사용하려면, 그 값을 함수로 반환해야 한다.
    // 그렇지 않으면 모든 인스턴스가 동일한 객체를 참조하게 되어, 하나의 <MyInput /> 컴포넌트가 변경되면, 다른 <MyInput /> 컴포넌트도 변경된다.
  },
  selectedList: {
    type: Number,
    default: 0
  },
  id: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  }
})
const emit = defineEmits(['update:modelValue'])
onMounted(() => {
  console.log('최초 선택된 배열 index >>>', props.selectedList)
  console.log('inputRef >>>', inputRef.value)
})
</script>
<template>
  <div class="input-wrap">
    <label :for="id" class="input-title">{{ title }}</label>
    <div class="input-inner-wrap">
      <input
        ref="inputRef"
        :id="id"
        :value="modelValue"
        @input="(event) => emit('update:modelValue', event.target.value)"
      />
      <template v-if="btnDelete">
        <button type="button" class="btn-delete">삭제</button>
      </template>
    </div>
    <div v-if="list" class="input-list-wrap">
      <ul>
        <li
          v-for="(item, index) in list"
          :key="`list${index}`"
          :class="{ 'selected-list-item': index === selectedList }"
        >
          <span>{{ item }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.input-title {
  display: block;
}
.input-inner-wrap {
  display: flex;
  input {
    height: 40px;
    outline: 0 none;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .btn-delete {
    display: block;
    background-color: black;
    color: white;
  }
}
ul {
  margin-top: 20px;
  width: 200px;
  .selected-list-item {
    span {
      background: blue;
      color: white;
    }
  }
}
</style>
