<template>
  <div
    class="modal-overlay animate__animated animate__faster"
    :class="{ animate__fadeIn: isModalAni, animate__fadeOut: !isModalAni }"
    @click="closeSafePlusModal"
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
        <div class="title" :class="zoomClass">안심플러스 우선 체험 기간</div>
        <div class="txt">
          <p :class="zoomClass">
            현재 <span>안심플러스 멤버십 우선 체험 기간</span>입니다.<br />
            일반회원은 30일 후 체험할 수 있어요.
          </p>
        </div>
        <div class="box">
          <strong :class="zoomClass">안심플러스 서비스를 구독하면</strong>
          <div class="p-group">
            <p :class="zoomClass">보이스피싱, 30일 먼저 예방하고</p>
            <p :class="zoomClass">피해 시 최대 500만원 보장</p>
            <p :class="zoomClass">월 2,750원으로 든든한 예방과 보장까지!</p>
          </div>
        </div>
        <button :class="zoomClass">안심플러스 서비스 알아보기</button>
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
      this.closeSafePlusModal()
    },
    closeSafePlusModal() {
      this.$emit('close-safePlusModal')
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
  @apply w-full p-[44px_24px] flex flex-col justify-center items-center;
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
.modal-body .box{
  @apply w-full p-[24px_16px] bg-[#EFECFF] rounded-[16px] flex flex-col justify-center items-center gap-[16px] mb-[24px];
}
.modal-body .box strong{
  @apply font-[JalnanGothic] font-normal text-[14px] leading-[18px] text-[#6F75F2];
}
.modal-body .box .p-group{
  @apply flex flex-col justify-center items-center;
}
.modal-body .box .p-group p{
  @apply leading-[18px] text-[12px] font-extrabold text-[#696194] relative pl-[8px] before:content-[''] before:absolute before:w-[3px] before:h-[3px] before:rounded-full before:top-[7px] before:left-0 before:bg-[#696194];
}
.modal-body button{
  @apply w-[214px] h-[54px] bg-[#FF507A] rounded-[8px] flex justify-center items-center font-extrabold text-[16px] leading-[22px] text-[#fff];
}
</style>