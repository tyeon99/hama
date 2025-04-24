<template>
  <div
    class="modal-overlay animate__animated animate__faster"
    :class="{ animate__fadeIn: isOffcanvasAni, animate__fadeOut: !isOffcanvasAni }"
    @click="closeTimeOutEndModal"
  >
    <div
      class="modal-content animate__animated animate__faster"
      :class="{
        animate__fadeInDown: isOffcanvasAni,
        animate__fadeOutUp: !isOffcanvasAni,
      }"
      @click.stop
    >
      <div class="modal-header">
        <!--  -->
      </div>
      <div class="modal-body">
        <div class="title">30분간 대화가 없어 체험이 종료되었습니다.</div>
        <div class="txt" :class="zoomClass">
          중단된 체험은 저장되지 않으며, 처음부터 다시 진행하실 수 있어요.
        </div>
        <button @click="goLink('/main')">AI 쳇봇 체험 메인으로 이동하기</button>
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
    },
    closeTimeOutEndModal() {
      this.$emit('close-timeOutEndModal')
    }
  }
}
</script>

<style scoped>
.modal-overlay {
  @apply fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center z-[999] px-[10px];
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