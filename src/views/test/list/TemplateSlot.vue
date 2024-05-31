<script setup>
import { ref } from 'vue'
import MyModal from '@/components/MyModal.vue'
const modalState = ref(false)
</script>

<template>
  <div>
    <h1>Template & Slot & Fallthrough</h1>
    <button @click="modalState = true" title="팝업 열림">누르면 모달 팝업이 열려요~</button>

    <MyModal :state="modalState" @close="modalState = false">
      <!-- 슬롯 콘텐츠 -->
      ㅋㅋㅋ

      <!-- <template v-slot:header> 헤더 </template>
      <template v-slot:content> 내용 </template> -->
    </MyModal>
  </div>
</template>
