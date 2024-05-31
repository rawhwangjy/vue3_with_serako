<script setup>
import { ref } from 'vue'
const message = ref('')
const checked = ref(false)
const picked = ref('')
const selected = ref('')

import MyInput from '@/components/MyInput.vue'
const myinput = ref('')
const onChangeInput = (value) => {
  console.log('inptu value', value)
}
const listData = ref(['전체', '강남구', '강동구', '용산구'])
</script>

<template>
  <div>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>📌 Props</th>
          <th>📌 Emits</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td>상위에서 하위 컴포넌트로 데이터 전달하기</td>
          <td>하위에서 상위 컴포넌트로 이벤트를 전달하기</td>
        </tr>
        <tr>
          <td>Form v-model</td>
          <td colspan="2">
            <Vue3Prism
              source="const message = ref('')
<input v-model='message' placeholder='메세지 입력하기' />"
            />
          </td>
        </tr>
        <tr>
          <td>컴포넌트 v-model</td>
          <td>
            <strong>부모 컴포넌트</strong>
            <Vue3Prism
              source="const searchText = ref('')
const changeId = (id) => {}
<JyInput v-model='searchText' @change='changeId' />"
            />
          </td>
          <td>
            <strong>자식 컴포넌트</strong>
            <Vue3Prism
              source="<input :value='searchText' @update:model-value='emit('update:modelValue', value) />'"
            />
          </td>
        </tr>
      </tbody>
    </table>
    <div>
      <tabs>
        <tab name="input type='text'">
          <p>메세지 : {{ message }}</p>
          <input v-model="message" placeholder="메세지 입력하기" />

          <Vue3Prism source="<input v-model='message' placeholder='메세지 입력하기' />" />
        </tab>
        <tab name="input type='checkbox'">
          <input type="checkbox" id="checkbox" v-model="checked" />
          <label for="checkbox">체크박스 상태 : {{ checked }}</label>

          <Vue3Prism source="<input type='checkbox' id='checkbox' v-model='checked' />" />
        </tab>
        <tab name="input type='radio'">
          <div>선택한 것 : {{ picked }}</div>

          <input type="radio" id="one" value="하나" v-model="picked" />
          <label for="one">하나</label>

          <input type="radio" id="two" value="둘" v-model="picked" />
          <label for="two">둘</label>

          <Vue3Prism source="<input type='radio' id='one' value='하나' v-model='picked' />" />
        </tab>
        <tab name="textarea">
          <div>
            여러 줄 메세지 :
            <span style="white-space: pre-line">{{ message }}</span>
          </div>

          <textarea v-model="message" placeholder="여러 줄을 추가해보세요"></textarea>

          <Vue3Prism
            source="<textarea v-model='message' placeholder='여러 줄을 추가해보세요'></textarea>"
          />
        </tab>
        <tab name="select">
          <div>선택됨: {{ selected }}</div>

          <select v-model="selected">
            <option disabled value="">다음 중 하나를 선택하세요</option>
            <option value="가가">가</option>
            <option value="나나">나</option>
            <option value="다다">다</option>
          </select>

          <Vue3Prism
            source="<select v-model='selected'>
  <option disabled value=''>다음 중 하나를 선택하세요</option>
  <option value='가가'>가</option>
  <option value='나나'>나</option>
  <option value='다다'>다</option>
</select>"
          />
        </tab>
        <tab name="component">
          <MyInput
            v-model="myinput"
            @update:modelValue="onChangeInput"
            :list="listData"
            :selectedList="2"
            id="myInputId"
            title="인풋의 타이틀~"
            btnDelete
          />
        </tab>
      </tabs>
    </div>
  </div>
</template>

<style>
table {
  border: 1px solid #eee;
  border-collapse: collapse;
}
th,
td {
  padding: 5px;
  border: 1px solid #eee;
}

.tabs-component-tabs {
  display: flex;
  list-style: none;
  margin-top: 50px;
}
.tabs-component-tab {
  border: 1px solid #ddd;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin-left: -1px;
}
.tabs-component-tab:nth-child(1) {
  margin-left: 0;
}
.tabs-component-tab a {
  display: flex;
  padding: 5px;
  font-size: 20px;
}
.tabs-component-panels {
  min-height: 500px;
  margin-top: -1px;
  padding: 30px;
  border-top: 1px solid #ddd;
}

pre.language-javascript {
  margin: initial !important;
  margin-top: 10px !important;
  padding-bottom: 0.8rem !important;
}
.prism-span,
.language-span {
  display: none;
}
</style>
