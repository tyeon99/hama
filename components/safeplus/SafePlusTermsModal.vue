<template>
  <div
    class="modal-overlay animate__animated animate__faster"
    :class="{ animate__fadeIn: isModalAni, animate__fadeOut: !isModalAni }"
    @click="closeTermsModal"
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
        <button @click="closeTermsModal">
          <img width="16" src="~/assets/img/safeplus/close-icon.png">
        </button>
      </div>
      <div class="modal-body">
        <div class="title" :class="zoomClass">안심플러스 피해보상 보험 약관</div>
        <div class="txt-box">
          <p :class="zoomClass">
            본 문서는 서비스 편의를 위해 제공되는 약관 얼람용 페이지입니다. 실제 효력은 보험사에서 제공하는 정식 약관에 따릅니다. <br /><br />

            <strong>1. 보장 개요</strong> <br />
            - 보장명: 안심플러스 피해보상 보험 <br />
            - 보장한도: 최대 500만원<br />
            - 보장범위: 서비스 약정에 따라 인정되는 금융사기 피해에 한함 <br /><br />
            
            <strong>2. 보장 제외 사항</strong> <br />
            - 고의 또는 중대한 과실에 해당하는 경우<br />
            - 약관상 정한 신고/서류 제출 기한을 준수하지 않은 경우 등<br /><br />

            <strong>3. 보험금 청구 절차</strong><br />
            1) 고객센터(1588-0000)로 연락하여 접수<br />
            2) 관련 서류 제출(피해경위서, 피해사실 확인서 등)<br /><br />

            <strong>4. 유의사항</strong><br />
            - 구독 상태가 유효하고, 보장기간 내 발생한 사고에 한하여 보장됩니다. <br />
            - 해당 내용은 예시이며 보험사 정책에 따라 변동될 수 있습니다.
          </p>
        </div>
      </div>
      <div class="modal-footer">
        <button @click="closeTermsModal">확인</button>
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
    closeTermsModal() {
      this.$emit('close-termsModal')
    }
  }
}
</script>

<style scoped>
.modal-overlay {
  @apply fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center z-[9999] px-[30px];
}
.modal-content {
  @apply w-full bg-[#fff] rounded-[4px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.3)] border-b-[5px] border-[#7139FF];
}
.modal-header{
  @apply w-full p-[9px] flex justify-end;
}
.modal-body{
  @apply relative w-full p-[30px_16px_52px];
}
.modal-body .title{
  @apply w-full pb-[20px] font-extrabold text-[16px] leading-[19px] text-[#6B6D95] border-b border-[#C0B8E8] text-center mb-[20px];
}
.modal-body .title .txt-box{
  @apply w-full;
}
.modal-body .txt-box p{
  @apply w-full font-normal text-[12px] leading-[14px] text-[#6B6D95];
}
.modal-body .txt-box p strong{
  @apply font-extrabold;
}
.modal-footer{
  @apply w-full flex justify-center items-center pb-[15px];
}
.modal-footer button{
  @apply w-[100px] h-[44px] rounded-[15px] bg-[#7139FF] font-bold text-[14px] leading-[17px] text-[#fff];
}
</style>