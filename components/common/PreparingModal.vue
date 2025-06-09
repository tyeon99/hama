<template>
  <div
    class="modal-overlay animate__animated animate__faster"
    :class="{ animate__fadeIn: isModalAni, animate__fadeOut: !isModalAni }"
    @click.stop
  >
    <div
      class="modal-content animate__animated animate__faster"
      :class="{
        animate__fadeInDown: isModalAni,
        animate__fadeOutUp: !isModalAni,
      }"
      @click.stop
    >
      <div class="modal-header">
        <!--  -->
      </div>
      <div class="modal-body">
        <div class="title">구글 플레이 스토어 등록<br />준비 중입니다.</div>
        <div class="txt" :class="zoomClass">
          하마터면 앱의 구글 플레이 스토어 등록을 준비중입니다. <br/>
          조금만 기다려 주시면 더 편리하게 앱으로 이용하실 수 있습니다. <br />
          감사합니다!
        </div>
        <button @click="goLink('/main')">하마터면 메인으로 이동하기</button>
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
  methods: {
    goLink(path) {
      this.$router.push(path)
      this.closePreparingModal()
    },
    closePreparingModal() {
      this.$emit('close-preparingModal')
    }
  }
}
</script>

<style scoped>
.modal-overlay {
  @apply fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center z-[9999] px-[10px];
}
.modal-content {
  @apply w-full bg-[#fff] rounded-[24px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.3)];
}
.modal-header {
  @apply w-full h-[22px] rounded-t-[24px] bg-[url(~/assets/img/common/chat_timeout-modal.png)] bg-center bg-cover bg-no-repeat;
}
.modal-body{
  @apply w-full p-[24px] flex flex-col justify-center items-center;
}
.modal-body .title{
  @apply w-full font-[JalnanGothic] font-normal text-[18px] leading-[22px] tracking-[3%] text-[#000000] mb-[4px] text-center;
}
.modal-body .txt{
  @apply w-full font-medium text-[14px] leading-[20px] text-[#000] mb-[12px] text-center;
}
.modal-body button{
  @apply w-[240px] h-[54px] rounded-[8px] bg-[#FF507A] font-extrabold text-[16px] leading-[22px] text-[#fff];
}
</style>