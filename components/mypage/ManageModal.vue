<template>
  <div
    class="modal-overlay animate__animated animate__faster"
    :class="{ animate__fadeIn: isModalAni, animate__fadeOut: !isModalAni }"
    @click="closeManageModal"
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
        <button @click="closeManageModal">
          <img width="16" src="~/assets/img/safeplus/close-icon.png">
        </button>
      </div>
      <div class="modal-body">
        <div class="title">
          <strong :class="zoomClass">구독/결제 관리</strong>
          <span :class="zoomClass">안심플러스 구독의 해지/변경은 Google Play에서 처리됩니다.</span>
        </div>
        <div class="txt-box">
          <div class="p-group">
            <p>
              <strong :class="zoomClass">안드로이드 기기</strong>
              <span :class="zoomClass">
                1. Google Play 스토어 앱 실행<br />
                2. 프로필 아이콘 → 결제 및 정기결제 → 정기결제<br />
                3. 안심클럽스 구독 선택 후 구독 취소 또는 옵션 변경
              </span>
            </p>
            <p>
              <strong :class="zoomClass">웹(브라우저)</strong>
              <span :class="zoomClass">
                1. Google Play 구독 관리 페이지 접속<br />
                2. 해당 구독 선택 후 취소/변경
              </span>
            </p>
            <div class="p-box">
              <span :class="zoomClass">모든 결제는 Google Play 스토어를 통해 진행됩니다.</span>
              <span :class="zoomClass">결제 즉시 서비스 사용이 시작되며, 시작된 상품은 환불되지 않습니다.</span>
              <span :class="zoomClass">정기결제(구독)에는 약정이 없고, Google Play에서 언제든지 해지할 수 있습니다.</span>
              <span :class="zoomClass">해지 후에도 결제월 이용기간까지는 서비스가 제공되며 환불은 없습니다.</span>
            </div>
            <p>
              <span :class="zoomClass">결제 및 모든 결제관리는 Google Play 스토어를 통해 진행 됩니다.</span>
              <b :class="zoomClass">해지 시 다음 결제일부터 청구가 중단되며, 환불/과금 정책은 스토어 정책을 따릅니다.</b>
            </p>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button>앱 알림 설정</button>
        <button @click="closeManageModal">닫 기</button>
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
    closeManageModal() {
      this.$emit('close-manageModal')
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
  @apply w-full pb-[20px] border-b border-[#C0B8E8] text-center mb-[20px] flex flex-col justify-start items-center gap-[8px];
}
.modal-body .title strong{
  @apply font-extrabold text-[16px] leading-[19px] text-[#2B2436];
}
.modal-body .title span{
  @apply font-extrabold text-[13px] leading-[16px] text-[#6B6D95] text-left;
}
.modal-body .txt-box{
  @apply w-full max-h-[378px] overflow-y-auto;
}
.modal-body .txt-box .p-group{
  @apply w-full flex flex-col justify-start items-start gap-[16px];
}
.modal-body .txt-box .p-group p{
  @apply w-full flex flex-col justify-start items-start gap-[8px] text-[#6B6D95];
}
.modal-body .txt-box .p-group p strong{
  @apply font-bold text-[14px] leading-[17px];
}
.modal-body .txt-box .p-group p span{
  @apply font-normal text-[12px] leading-[14px];
}
.modal-body .txt-box .p-group p b{
  @apply block w-full relative pl-[18px] font-semibold text-[12px] leading-[14px] text-[#6B6D95] before:content-[''] before:absolute before:left-[8px] before:top-[5px] before:w-[2.5px] before:h-[2.5px] before:rounded-full before:bg-[#6B6D95];
}
.modal-body .txt-box .p-group .p-box{
  @apply w-full rounded-[8px] border border-[#C0B8E8] p-[16px_12px];
}
.modal-body .txt-box .p-group .p-box span{
  @apply block w-full relative pl-[18px] font-normal text-[12px] leading-[14px] text-[#6B6D95] before:content-[''] before:absolute before:left-[8px] before:top-[5px] before:w-[2.5px] before:h-[2.5px] before:rounded-full before:bg-[#6B6D95];
}
.modal-footer{
  @apply w-full flex justify-center items-center gap-[12px] pb-[15px];
}
.modal-footer button{
  @apply w-[115px] h-[44px] rounded-[15px] bg-[#7139FF] border-2 border-[#7139FF] font-bold text-[14px] leading-[17px] text-[#fff] last:bg-[#fff] last:text-[#7139FF] last:w-[100px];
}
</style>