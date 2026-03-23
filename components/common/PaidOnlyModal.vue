<template>
  <div
    class="modal-overlay animate__animated animate__faster"
    :class="{ animate__fadeIn: isModalAni, animate__fadeOut: !isModalAni }"
    @click="closePaidOnlyModal"
  >
    <div
      class="modal-content animate__animated animate__faster"
      :class="{
        animate__fadeInDown: isModalAni,
        animate__fadeOutUp: !isModalAni,
      }"
      @click.stop
    >
      <div class="modal-body">
        <div class="title" :class="zoomClass">안심플러스 구독 전용 컨텐츠입니다</div>
        <div class="txt">
          <p :class="zoomClass">
            지금 안심플러스를 구독하시면 최신 무제한 <br />
            체험은 물론, <span>500만원 피해 보상 혜택</span> 까지 <br />
            받으실 수 있습니다.<br />
            안심플러스 소개로 이동하시겠습니까?
          </p>
        </div>
        <div class="btn-group">
          <button :class="zoomClass">이동하기</button>
          <button :class="zoomClass" @click="closePaidOnlyModal">닫기</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isModalAni: {
      type: Boolean,
      default: false
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
  mounted() {
    document.body.appendChild(this.$el)
  },
  methods: {
    goLink(path) {
      this.$router.push(path)
      this.closePaidOnlyModal()
    },
    closePaidOnlyModal() {
      this.$emit('close-paidOnlyModal')
    }
  }
}
</script>

<style scoped>
.modal-overlay {
  @apply fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center z-[9999] px-[10px];
}
.modal-content {
  @apply w-full bg-[#fff] rounded-[32px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.3)];
}
.modal-body{
  @apply w-full p-[40px_24px] flex flex-col justify-center items-center;
}
.modal-body .title{
  @apply font-[JalnanGothic] font-normal text-[18px] leading-[22px] text-[#2B2436] mb-[16px];
}
.modal-body .txt{
  @apply text-center font-medium text-[14px] leading-[20px] text-[#2B2436] mb-[24px];
}
.modal-body .txt span{
  @apply text-[#6F75F2] font-extrabold;
}
.modal-body .btn-group{
  @apply w-full flex justify-center items-center gap-[12px];
}
.modal-body .btn-group button{
  @apply flex-1 w-full h-[54px] bg-[#FF507A] rounded-[8px] flex justify-center items-center font-extrabold text-[16px] leading-[22px] text-[#fff] last:bg-[#fff] last:text-[#FF507A] last:border-2 last:border-[#FF507A];
}
</style>