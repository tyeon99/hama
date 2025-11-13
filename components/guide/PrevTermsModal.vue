<!-- eslint-disable vue/no-v-html -->
<template>
  <div
    class="modal-overlay animate__animated animate__faster"
    :class="{ animate__fadeIn: isModalAni, animate__fadeOut: !isModalAni }"
    @click="closePrevTermsModal"
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
        <button @click="closePrevTermsModal">
          <img width="16" src="~/assets/img/safeplus/close-icon.png">
        </button>
      </div>
      <div class="modal-body">
        <div class="title" :class="zoomClass">{{ title }}</div>
        <div class="txtBox" v-html="txt"></div>
      </div>
      <div class="modal-footer">
        <button @click="closePrevTermsModal">확인</button>
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
    },
    title: {
      type: String,
      default: ''
    },
    txt: {
      type: String,
      default: ''
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
    closePrevTermsModal() {
      this.$emit('close-prevtermsModal')
    }
  }
}
</script>

<style scoped>
.modal-overlay {
  @apply fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center z-[9999] px-[16px];
}
.modal-content {
  @apply w-full bg-[#fff] rounded-[4px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.3)] border-b-[5px] border-[#7139FF];
}
.modal-header{
  @apply w-full p-[9px] flex justify-end;
}
.modal-body{
  @apply relative w-full p-[12px_16px_20px];
}
::v-deep .modal-body .title{
  @apply w-full pb-[12px] font-extrabold text-[18px] leading-[22px] text-[#6B6D95] border-b border-[#C0B8E8] text-center mb-[12px];
}
::v-deep .modal-body .txtBox{
  @apply w-full max-h-[400px] overflow-y-auto flex flex-col justify-start items-start gap-[12px];
}
::v-deep .modal-body .txtBox p{
  @apply w-full font-medium text-[14px] leading-[17px] text-[#6B6D95];
}
::v-deep .modal-body .txtBox p span{
  @apply text-[#6F75F2] before:content-none p-0;
}
::v-deep .modal-body .txtBox p strong{
  @apply block mb-[6px] font-extrabold text-[16px] text-[#6F75F2];
}
::v-deep .modal-body .txtBox p span{
  @apply block w-full pl-[20px] relative font-medium text-[14px] leading-[17px] text-[#6B6D95] mt-[4px] before:content-[''] before:w-[3.5px] before:h-[3.5px] before:absolute before:rounded-full before:bg-[#6B6D95] before:left-[6px] before:top-[6px];
}
::v-deep .modal-body .txtBox p em{
  @apply block w-full pl-[40px] relative font-medium text-[14px] leading-[17px] text-[#6B6D95] before:content-[''] before:w-[3.5px] before:h-[3.5px] before:absolute before:rounded-full before:bg-[#6B6D95] before:left-[26px] before:top-[6px];
}
::v-deep .modal-body .txtBox p em.custom{
  @apply block w-full pl-[20px] relative font-medium text-[14px] leading-[17px] text-[#6B6D95] before:content-['1.'] before:w-[10px] before:h-[17px] before:text-[14px] before:font-medium before:absolute before:rounded-full before:left-[4px] before:top-[0px] before:bg-transparent;
}
::v-deep .modal-body .txtBox p em.custom:nth-child(3){
  @apply before:content-['2.'];
}
::v-deep .modal-body .txtBox p em.custom:nth-child(4){
  @apply before:content-['3.'];
}
::v-deep .modal-body .txtBox p em.custom:nth-child(5){
  @apply before:content-['4.'];
}
::v-deep .modal-body .txtBox p em.custom:nth-child(6){
  @apply before:content-['5.'];
}
::v-deep .modal-body .txtBox p em.custom:nth-child(7){
  @apply before:content-['6.'];
}
.modal-footer{
  @apply w-full flex justify-center items-center pb-[15px];
}
.modal-footer button{
  @apply w-[100px] h-[44px] rounded-[15px] bg-[#7139FF] font-bold text-[14px] leading-[17px] text-[#fff];
}
</style>