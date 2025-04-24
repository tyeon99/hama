<template>
  <div
    class="offcanvas-overlay animate__animated animate__faster"
    :class="{
      animate__fadeIn: isOffcanvasAni,
      animate__fadeOut: !isOffcanvasAni,
    }"
    @click="closeUserInfoOffcanvas"
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
          src="~/assets/img/common/userInfo-img.png"
          alt="가상 사용자 정보"
        />
        <div class="title">가상 사용자 정보</div>
        <div class="info-box">
          <div class="info">
            <span>이름</span>
            <p><strong>김철수</strong></p>
          </div>
          <div class="info">
            <span>주민등록번호</span>
            <p><strong>123456-1234567</strong></p>
          </div>
          <div class="info">
            <span>대출 현황</span>
            <p><strong>5,000만원</strong> 한강저축은행</p>
          </div>
        </div>
      </div>
      <div class="offcanvas-footer">
        <button @click="closeUserInfoOffcanvas">확인했어요</button>
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
    closeUserInfoOffcanvas () {
      this.$emit('close-userInfoOffcanvas')
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
        this.closeUserInfoOffcanvas()
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
  @apply font-[JalnanGothic] mt-[20px] mb-[32px] text-[#2B2436] text-[20px] font-normal leading-[24px];
}
.offcanvas-body .info-box{
  @apply w-full p-[24px_20px] rounded-[16px] flex flex-col gap-[8px] justify-start items-start bg-[#F9F5FF] shadow-[0px_1px_8px_0px_rgba(45,39,80,0.2)];
}
.offcanvas-body .info-box .info{
  @apply flex justify-start items-start gap-[12px];
}
.offcanvas-body .info-box .info span{
  @apply min-w-[75px] font-extrabold text-[14px] leading-[24px] text-[#7139FF];
}
.offcanvas-body .info-box .info p{
  @apply font-semibold text-[14px] leading-[17px] text-[#2B2436];
}
.offcanvas-body .info-box .info p strong{
  @apply font-extrabold text-[20px] leading-[20px] text-[#2B2436];
}
.offcanvas-footer {
  @apply w-full flex justify-center items-center px-[28px];
}
.offcanvas-footer button {
  @apply w-full h-[42px] pt-[3px] rounded-[48px] bg-[#6B4EFF] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.14)] font-[JalnanGothic] text-[14px] font-normal leading-[18px] text-[#fff];
}
</style>