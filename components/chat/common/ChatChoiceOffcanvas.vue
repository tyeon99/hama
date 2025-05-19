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
      <!-- <div class="offcanvas-header">
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
      </div> -->
      <div class="offcanvas-body">
        <img
          width="88"
          src="~/assets/img/common/chat_choice-img.png"
        />
        <div class="title">납치범이 송금을 요구하고 있습니다. 어떻게 하시겠습니까?</div>
      </div>
      <div class="offcanvas-footer">
        <button @click="closeChatChoiceOffcanvas">
          <img width="12" src="~/assets/img/common/chat_choice-arrow.png">
          <span>즉시 송금하고 딸을 찾는다.</span>
        </button>
        <button>
          <img width="12" src="~/assets/img/common/chat_choice-arrow.png">
          <span>제3자에게 요청하여 딸과 통화를 시도하거나, 즉시 경찰에 신고하여 협조를 요청한다.</span>
        </button>
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
  // mounted () {
  //   this.calcHeight()
  // },
  // updated () {
  //   this.calcHeight()
  // },
  mounted () {
    // 애니메이션 끝난 후 정확한 높이 측정
    this.$refs.offcanvas?.addEventListener('animationend', this.calcHeight)
  },
  beforeDestroy () {
    this.$refs.offcanvas?.removeEventListener('animationend', this.calcHeight)
  },
  methods: {
    closeChatChoiceOffcanvas () {
      this.$emit('close-chatChoiceOffcanvas')
    },
    calcHeight() {
      this.$nextTick(() => {
        const height = this.$refs.offcanvas.offsetHeight
        this.$emit('update-height', height)
      })
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
        this.closeChatChoiceOffcanvas()
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
  @apply relative w-full bg-[#fff] p-[25px_20px_35px] rounded-t-[24px];
  transition: transform 0.3s ease;
}
.offcanvas-header {
  @apply flex justify-center items-center p-[8px_0_11px] mb-[22px];
}
.offcanvas-body {
  @apply w-full flex flex-col justify-start items-center mb-[36px];
}
.offcanvas-body .title {
  @apply font-[JalnanGothic] mt-[20px] text-[#2B2436] text-[20px] font-normal leading-[24px];
}
.offcanvas-footer {
  @apply w-full flex flex-col justify-center items-center gap-[20px] px-[4px];
}
.offcanvas-footer button {
  @apply w-full p-[14px_12px_14px_20px] flex justify-start items-start gap-[12px] bg-[#fff] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.14)] border border-[#AFB2EC] text-[18px] font-bold leading-[20px] text-[#2B2436] text-left;
}
.offcanvas-footer button img{
  @apply mt-[4px];
}
</style>