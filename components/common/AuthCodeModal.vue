<template>
  <div
    class="modal-overlay animate__animated animate__faster"
    :class="{ animate__fadeIn: isModalAni, animate__fadeOut: !isModalAni }"
    @click="closeAuthCodeModal"
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
        <!-- 무료회원 1일 체험 제한 -->
        <span>해당 체험 무료회원 1일 체험 한도 초과 !</span>

        <div class="title">기업회원 참여코드를 입력해주세요.<br />(8자리)</div>
        <div class="code-input">
          <!-- 코드 존재하지 않을 때 input, button에 각각 'noCode' 클래스 추가 -->
          <input id="code" class="" type="text" autocomplete="off">
          <!-- noCode 일 때 텍스트 '재입력'으로 바뀜 -->
          <button class="" @click="closeAuthCodeModal">확 인</button>
        </div>
      </div>
      <div class="modal-footer">
        <!--  -->
        <!-- 코드 존재하지않을 때 -->
        <p>기간만료 또는 없는 참여코드입니다.</p>
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
      this.closeAuthCodeModal()
    },
    closeAuthCodeModal() {
      this.$emit('close-authCodeModal')
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
  @apply w-full p-[22px] flex flex-col justify-center items-center;
}
.modal-body span{
  @apply w-full text-center mb-[4px] text-[#FF507A] font-normal font-[JalnanGothic] text-[14px] leading-[17px] tracking-[0.4px] underline;
}
.modal-body .title{
  @apply w-full font-[JalnanGothic] font-normal text-[18px] leading-[22px] tracking-[0.4px] text-[#000000] mb-[12px] text-center;
}
.modal-body .txt{
  @apply w-full font-medium text-[14px] leading-[20px] text-[#000] mb-[12px] text-center;
}
.modal-body .code-input{
  @apply w-full flex justify-start items-center gap-[8px];
}
.modal-body .code-input input[type=text]{
  @apply w-[calc(100%-80px)] h-[54px] border border-[#6B6D95] rounded-[8px] p-[4px_16px] font-thin text-[32px] tracking-[2px] leading-[45px] text-[#000] outline-none caret-[#333];
}
.modal-body .code-input input[type=text]:focus-visible{
  @apply border-2 border-[#FF507A];
  box-shadow: 0px 1px 5.4px 2px rgba(0, 0, 0, 0.15) inset;
}
.modal-body .code-input input[type=text].noCode{
  @apply bg-[#F0F0F0];
}
.modal-body .code-input button{
  @apply w-[72px] h-[54px] rounded-[8px] bg-[#FF507A] font-extrabold text-[16px] leading-[22px] text-[#fff];
}
.modal-body .code-input button.noCode{
  @apply bg-[#5A5A5A];
}
.modal-footer{
  @apply w-full h-[40px] bg-[#fff] pb-[20px] rounded-b-[32px];
}
.modal-footer p{
  @apply w-full text-center font-semibold text-[16px] leading-[20px] text-[#FF507A];
}
</style>