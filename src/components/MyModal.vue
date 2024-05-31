<script setup>
// Modules
import { onUpdated, ref } from 'vue'
// Declarations
const props = defineProps({
  message: {
    type: String,
    default: ''
  },
  widthClass: {
    type: String,
    default: ''
  },
  state: {
    type: Boolean,
    defatule: false
  }
})
const emit = defineEmits(['close'])
let modalState = ref(false)

const onCloseModal = () => {
  modalState.value = false
  emit('close')
}

onUpdated(() => {
  modalState.value = props.state
})
</script>
<template>
  <teleport to="body">
    <div v-if="modalState" class="sc-modal-wrap">
      <div class="sc-modal">
        <!-- 슬롯 아울렛 -->
        <slot />

        <div v-if="$slots.header" class="sc-modal-header">
          <slot name="header" />
        </div>
        <div v-if="$slots.content" class="sc-modal-content">
          <div class="sc-modal-content-inner">
            <slot name="content" />
          </div>
        </div>
        <div v-if="$slots.footer" class="sc-modal-footer">
          <slot name="footer" />
        </div>

        <!-- 팝업 X 버튼 -->
        <slot v-if="$slots.btnClose" name="btnClose" />
        <button v-else type="button" class="sc-btn-close" @click="onCloseModal">X</button>
        <!-- // 팝업 X 버튼 -->
      </div>
      <span class="dim" @click="onCloseModal" />
    </div>
  </teleport>
</template>

<style scoped lang="scss">
.sc-modal-wrap {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  .sc-modal {
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    width: 70rem;
    min-height: 46.4rem;
    // height: 70%;
    margin: auto;
    border: 0.1rem solid #ddd;
    border-radius: 0.5rem;
    background-color: #fff;
    .sc-modal-header {
      position: relative;
      z-index: 0;
      display: flex;
      align-items: center;
      height: 4.5rem;
      padding: 0 2.5rem;
      border-bottom: 0.1rem solid #ddd;
      background-color: #eee;
      font-weight: bold;
      font-size: 1.4rem;
    }
    .sc-modal-content {
      flex: 1;
      overflow: auto;
      padding: 2.5rem;
      .sc-modal-content-inner {
        height: 100%;
      }
    }
    .sc-modal-footer {
      display: flex;
      align-items: center;
      height: 4.5rem;
      padding: 0 2rem;
      border-top: 0.1rem solid #ddd;
    }
    .sc-btn-close {
      position: absolute;
      top: 0;
      right: 1.6rem;
      z-index: 10;
      display: block;
      height: 4.5rem;
      svg {
        font-size: 2.2rem;
        color: #333;
      }
    }
  }
  .dim {
    position: absolute;
    z-index: 0;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);
  }
}
</style>
