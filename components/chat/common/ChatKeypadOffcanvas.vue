<!-- eslint-disable vue/no-v-html -->
<template>
  <div
    class="offcanvas-overlay animate__animated animate__faster"
    :class="{
      animate__fadeIn: isOffcanvasAni,
      animate__fadeOut: !isOffcanvasAni,
    }"
  >
    <div
      ref="offcanvas"
      class="offcanvas-content animate__animated animate__faster"
      :class="{
        animate__fadeInUp: isOffcanvasAni,
        animate__fadeOutDown: !isOffcanvasAni,
      }"
      @click.stop
    >
      <div class="offcanvas-body">
        <div class="title">{{ titleTxt }}</div>
        <div class="input-dot">
          <span
            v-for="(dot, idx) in maxLength"
            :key="idx"
            :class="{ active: inputValues.length > idx }"
          ></span>
        </div>
        <div class="keypad">
          <button
            v-for="(key, idx) in randomKeys"
            :key="idx"
            class="key"
            :disabled="key === 'lock'"
            @click="keyPress(key)"
            v-html="renderKeyContent(key)"
          ></button>

          <!-- 고정 버튼  -->
          <button class="key action" @click="closeChatKeypadOffcanvas">다음</button>
          <button class="key action" @click="keyBackspace">
            <img width="20" src="~/assets/img/common/chat_keypad-back.png">
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOffcanvasAni: {
      type: Boolean,
      default: false
    },
    maxLength: {
      type: Number,
      default: 6 // 기본 6자리
    }
  },
  data () {
    return {
      keys: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'lock', 'lock'],
      inputValues: [],
      translateY: 0
    }
  },
  computed: {
    fontSizePercent () {
      return this.$store.state.font.fontSizePercent
    },
    randomKeys () {
      const keysCopy = [...this.keys]
      for (let i = keysCopy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[keysCopy[i], keysCopy[j]] = [keysCopy[j], keysCopy[i]]
      }
      return keysCopy
    },
    titleTxt () {
      return this.maxLength === 6
        ? '주민등록 번호 앞자리 입력'
        : '주민등록 번호 13자리 입력'
    }
  },
  methods: {
    closeChatKeypadOffcanvas () {
      this.$emit('close-chatKeypadOffcanvas')
    },
    renderKeyContent(key) {
      if (key === 'lock') {
        return `<img width="20" src="${require('~/assets/img/common/chat_keypad-lock.png')}" />`
      }
      return key
    },
    keyPress(key) {
      if (key === 'lock') return

      if (this.inputValues.length < this.maxLength) {
        this.inputValues.push(key)
      }
    },
    keyBackspace() {
      this.inputValues.pop()
    },
    onTouchStart (e) {
      this.touchStartY = e.touches[0].clientY
      this.isDragging = true
    },
    onTouchMove (e) {
      if (!this.isDragging) return
      const touchY = e.touches[0].clientY
      const deltaY = touchY - this.touchStartY
      if (deltaY > 0) {
        this.translateY = deltaY
      }
    },
    onTouchEnd () {
      this.isDragging = false
      if (this.translateY > 100) {
        // 100px 이상 내려가면 닫기
        this.closeChatKeypadOffcanvas()
      } else {
        // 아니면 원래 위치로 복귀
        this.translateY = 0
      }
    }
  }
}
</script>

<style scoped>
.offcanvas-overlay {
  @apply fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.6)] flex justify-start items-end z-[999];
  overscroll-behavior: contain; /* or none */
  touch-action: none; /* 터치로 인한 브라우저 액션 방지 */
}
.offcanvas-content {
  @apply relative w-full bg-[#EFF0F7] pt-[16px] rounded-t-[24px];
  transition: transform 0.3s ease;
}
.offcanvas-body {
  @apply w-full flex flex-col justify-start items-center;
}
.offcanvas-body .title {
  @apply text-[#2B2436] text-[18px] font-semibold leading-[20px] mb-[12px];
}
.offcanvas-body .input-dot{
  @apply w-full flex justify-center items-center gap-[12px] mb-[16px];
}
.offcanvas-body .input-dot span{
  @apply inline-block w-[12px] h-[12px] bg-[#CDD0E4] rounded-full;
}
.offcanvas-body .input-dot span.active{
  @apply bg-[#8a8c99];
}
.offcanvas-body .keypad{
  @apply w-full p-[13px_8px_8px] grid grid-cols-4 gap-[4px];
}
.offcanvas-body .keypad .key{
  @apply h-[44px] flex justify-center items-center bg-[#fff] rounded-[4px] shadow-[1px_1px_1px_0px_rgba(0,0,0,0.15)] font-normal text-[24px] leading-[28px] text-[#2B2436];
}
.offcanvas-body .keypad .key.action{
  @apply col-span-2 text-[20px] leading-[24px];
}
</style>