<!-- eslint-disable vue/no-v-html -->
<template>
  <div
    class="offcanvas-overlay animate__animated animate__faster"
    :class="{
      animate__fadeIn: isOffcanvasAni,
      animate__fadeOut: !isOffcanvasAni,
    }"
    @click="closeDetailOffcanvas"
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
        <div class="title">{{ contentData.detailTitle }}</div>
        <div
          class="txt-box"
          @touchstart.stop 
          @touchmove.stop
        >
          <p 
            v-for="(txt, idx) in contentData.detailTxts" 
            :key="idx"
            v-html="txt"
          ></p>
        </div>
      </div>
      <div class="offcanvas-footer">
        <button @click="closeDetailOffcanvas">닫 기</button>
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
    contentData: {
      type: Object,
      default: () => ({
        detailTitle: '',
        detailTxts: []
      })
    }
  },
  data () {
    return {
      translateY: 0
    }
  },
  mounted() {
    document.body.appendChild(this.$el)
  },
  methods: {
    closeDetailOffcanvas () {
      this.$emit('close-detailOffcanvas')
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
        this.closeDetailOffcanvas()
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
  @apply relative w-full bg-[#fff] p-[0px_16px_35px] rounded-t-[24px] max-h-[calc(100%-59px)] flex flex-col;
  transition: transform 0.3s ease;
}
.offcanvas-header {
  @apply flex justify-center items-center p-[8px_0_11px] mb-[22px];
}
.offcanvas-body {
  @apply w-full flex flex-col justify-start items-center mb-[24px] min-h-0 flex-1;
}
.offcanvas-body .title {
  @apply font-[JalnanGothic] mt-[20px] mb-[32px] text-[#2B2436] text-[20px] font-normal leading-[24px];
}
.offcanvas-body .txt-box{
  @apply flex-1 w-full p-4 bg-[#F2F4F8] rounded-[10px] flex flex-col justify-start items-start gap-2 overflow-y-auto;
}
.offcanvas-body .txt-box p{
  @apply relative w-full pl-[7px] font-medium text-[13px] leading-[18px] text-[#6B6D95] before:content-[''] before:absolute before:left-0 before:top-[6px] before:w-[2.5px] before:h-[2.5px] before:rounded-full before:bg-[#6B6D95];
}
.offcanvas-footer {
  @apply w-full flex justify-center items-center;
}
.offcanvas-footer button {
  @apply w-[280px] h-[42px] pt-[3px] rounded-[48px] bg-[#6B4EFF] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.14)] font-[JalnanGothic] text-[14px] font-normal leading-[18px] text-[#fff];
}
</style>