<template>
  <div
    class="offcanvas-overlay animate__animated animate__faster"
    :class="{
      animate__fadeIn: isOffcanvasAni,
      animate__fadeOut: !isOffcanvasAni,
    }"
    @click="closeFontSizeOffcanvas"
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
          src="~/assets/img/common/fontsize-img.png"
          alt="글씨 크기 조절 이미지"
        />
        <div class="title">글씨 크기를 조절할 수 있어요~</div>
        <div class="control-box">
          <button
            :class="{ disabled: fontSizePercent <= 70 }"
            :disabled="fontSizePercent <= 70"
            @click="decreaseFontSize"
          >
            - 작게
          </button>
          <div class="control">{{ fontSizePercent }}%</div>
          <button
            :disabled="fontSizePercent >= 130"
            :class="{ disabled: fontSizePercent >= 130 }"
            @click="increaseFontSize"
          >
            + 크게
          </button>
        </div>
      </div>
      <div class="offcanvas-footer">
        <button @click="resetFontSize">기본사이즈</button>
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
    closeFontSizeOffcanvas () {
      this.$emit('close-fontSizeOffcanvas')
    },
    increaseFontSize () {
      if (this.fontSizePercent < 130) {
        // this.fontSizePercent += 10
        this.$store.commit('font/setFontSizePercent', this.fontSizePercent + 10)
        this.$eventBus.$emit('fontSizeChange')
      }
    },
    decreaseFontSize () {
      if (this.fontSizePercent > 70) {
        this.$store.commit('font/setFontSizePercent', this.fontSizePercent - 10)
        this.$eventBus.$emit('fontSizeChange')
      }
    },
    resetFontSize () {
      this.$store.commit('font/setFontSizePercent', 100)
      this.$eventBus.$emit('fontSizeChange')
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
        this.closeFontSizeOffcanvas()
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
  @apply relative w-full bg-[#fff] p-[0px_24px_35px] rounded-t-[24px];
  transition: transform 0.3s ease;
}
.offcanvas-header {
  @apply flex justify-center items-center p-[8px_0_11px] mb-[22px];
}
.offcanvas-body {
  @apply w-full flex flex-col justify-start items-center mb-[48px];
}
.offcanvas-body .title {
  @apply font-[JalnanGothic] mt-[20px] mb-[32px] text-[#2B2436] text-[18px] font-normal leading-[20px];
}
.offcanvas-body .control-box {
  @apply w-full flex justify-center items-center gap-[12px];
}
.offcanvas-body .control-box .control {
  @apply w-[109px] h-[52px] flex justify-center items-center border border-[#AFB2EC] bg-[#F3F1FF] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.14)] text-[#7139FF] text-[20px] leading-[24px] font-extrabold;
}
.offcanvas-body .control-box button {
  @apply w-[98px] h-[52px] flex justify-center items-center border border-[#AFB2EC] bg-[#FFF] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.14)] text-[#7139FF] text-[20px] leading-[24px] font-extrabold;
}
.offcanvas-body .control-box button.disabled {
  @apply opacity-[0.3];
}
.offcanvas-footer {
  @apply w-full flex justify-center items-center;
}
.offcanvas-footer button {
  @apply w-[280px] h-[42px] pt-[3px] rounded-[48px] bg-[#6B4EFF] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.14)] font-[JalnanGothic] text-[14px] font-normal leading-[18px] text-[#fff];
}
</style>