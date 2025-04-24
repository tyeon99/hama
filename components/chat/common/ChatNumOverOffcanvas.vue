<template>
  <div
    class="offcanvas-overlay animate__animated animate__faster"
    :class="{
      animate__fadeIn: isOffcanvasAni,
      animate__fadeOut: !isOffcanvasAni,
    }"
    @click="closeChatNumOverOffcanvas"
  >
    <div
      ref="offcanvas"
      class="offcanvas-content animate__animated animate__faster"
      :class="{
        animate__fadeInUp: isOffcanvasAni,
        animate__fadeOutDown: !isOffcanvasAni,
      }"
      :style="{ transform: `translateY(${translateY}px)` }"
      @click.stop
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
    >
      <div class="offcanvas-header">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="5"
          viewBox="0 0 48 5"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 2.5C0 1.11929 1.11929 0 2.5 0H45.5C46.8807 0 48 1.11929 48 2.5C48 3.88071 46.8807 5 45.5 5H2.5C1.11929 5 0 3.88071 0 2.5Z"
            fill="#CDCFD0"
          />
        </svg>
      </div>
      <div class="offcanvas-body">
        <div class="title" :class="zoomClass">🎊 축하드립니다! 🎊</div>
        <div class="txt" :class="zoomClass">
          피싱 대화에 넘어가지 않아, 사기꾼이 <span>대화를 포기했어요.</span> AI 피싱 체험이 종료되었습니다.
        </div>
      </div>
      <div class="offcanvas-footer">
        <button @click="closeChatNumOverOffcanvas">체험 종료하고 예방 점수 보러가기</button>
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
    }
  },
  data () {
    return {
      // fontSizePercent: 100,
      translateY: 0
    }
  },
  computed: {
    fontSizePercent () {
      return this.$store.state.font.fontSizePercent
    },
    zoomClass () {
      if (this.fontSizePercent === 130) return 'zoom-13'
      if (this.fontSizePercent === 120) return 'zoom-12'
      if (this.fontSizePercent === 110) return 'zoom-11'
      if (this.fontSizePercent === 90) return 'zoom-09'
      if (this.fontSizePercent === 80) return 'zoom-08'
      if (this.fontSizePercent === 70) return 'zoom-07'
      return ''
    }
  },
  methods: {
    closeChatNumOverOffcanvas () {
      this.$emit('close-chatNumOverOffcanvas')
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
        this.closeChatNumOverOffcanvas()
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
  @apply relative w-full bg-[#fff] p-[0px_20px_35px] rounded-t-[24px];
  transition: transform 0.3s ease;
}
.offcanvas-header {
  @apply flex justify-center items-center p-[8px_0_11px] mb-[26px];
}
.offcanvas-body {
  @apply w-full flex flex-col justify-start items-center mb-[48px];
}
.offcanvas-body .title {
  @apply font-[JalnanGothic] mb-[12px] text-[#2B2436] text-[20px] font-normal leading-[24px];
}
.offcanvas-body .txt{
  @apply w-full text-center font-semibold text-[16px] leading-[17px] text-[#2B2436];
}
.offcanvas-body .txt span{
  @apply text-[#7139FF];
}
.offcanvas-footer {
  @apply w-full flex justify-center items-center px-[28px];
}
.offcanvas-footer button {
  @apply w-full h-[42px] pt-[3px] rounded-[48px] bg-[#6B4EFF] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.14)] font-[JalnanGothic] text-[14px] font-normal leading-[18px] text-[#fff];
}
</style>