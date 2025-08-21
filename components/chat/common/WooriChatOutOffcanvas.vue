<template>
  <div
    class="offcanvas-overlay animate__animated animate__faster"
    :class="{
      animate__fadeIn: isOffcanvasAni,
      animate__fadeOut: !isOffcanvasAni,
    }"
    @click="closeChatOutOffcanvas"
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
        <img
          width="76"
          src="~/assets/img/common/chatOut-img.png"
          alt="중단하고 나가기"
        />
        <div class="title">
          지금 중단하시면 기록이 모두 삭제됩니다. 그래도 그만 하시겠습니까?
        </div>
      </div>
      <div class="offcanvas-footer">
        <button @click="goLink('/woori/code/main')">네 그만 할래요</button>
        <button @click="closeChatOutOffcanvas">아니요, 좀 더 해볼래요</button>
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
    }
  },
  methods: {
    goLink(path) {
      this.$router.push(path)
    },
    closeChatOutOffcanvas () {
      this.$emit('close-chatOutOffcanvas')
    },
    chatExit() {
      this.closeChatOutOffcanvas()
      setTimeout(() => {
        this.$router.push('/main')
      }, 300) // Offcanvas 닫힌 후 이동
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
        this.closeChatOutOffcanvas()
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
  @apply relative w-full bg-[#fff] p-[0px_48px_35px] rounded-t-[24px];
  transition: transform 0.3s ease;
}
.offcanvas-header {
  @apply flex justify-center items-center p-[8px_0_11px] mb-[22px];
}
.offcanvas-body {
  @apply w-full flex flex-col justify-start items-center mb-[32px];
}
.offcanvas-body .title {
  @apply font-[JalnanGothic] mt-[20px] text-[#2B2436] text-[20px] font-normal leading-[24px] text-center;
}
.offcanvas-footer {
  @apply w-full flex flex-col justify-center items-center gap-[16px];
}
.offcanvas-footer button {
  @apply w-full h-[42px] pt-[3px] rounded-[48px] bg-[#6B4EFF] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.14)] font-[JalnanGothic] text-[14px] font-normal leading-[18px] text-[#fff] last:bg-[#FFD94E] last:text-[#2B2436];
}
</style>