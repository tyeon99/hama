<template>
  <div class="inquiryContent">
    <div class="inquiryContent__top">
      <div class="titleBox">
        <div class="title">
          <span>Contact Us</span>
          <p>"<strong>하마터면</strong>"을<br />좀 더 알고싶어요!</p>
        </div>
        <img width="112" src="~/assets/img/guide/guide_top-icon03.png">
      </div>
      <div class="txtBox">
        <div class="title" :class="zoomClass">
          서비스에 대해 궁금하거나, 오프라인교육에 관심있으신 분은 아래 연락처로 메일 보내주세요.<br />
          단체 교육 및 제휴 문의 및 제안도 환영합니다. 
        </div>
      </div>
    </div>
    <div class="inquiryContent__bottom">
      <div class="btn-group">
        <div>
          <span :class="zoomClass">교육 및 기타 문의 <em>hama@thinkpool.com</em></span>
        </div>
      </div>
      <div class="copyright">
        Copyright since 1999 © ThinkPool Co.,Ltd. All Rights
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
  }
}
</script>

<style scoped>
.inquiryContent{
  @apply w-full h-[calc(100dvh-59px)] bg-[#F7F5FF] pb-[98px];
}
.inquiryContent__top{
  @apply w-full bg-[#FFF2E7] shadow-[0px_0px_2px_0px_rgba(23,26,31,0.12)] p-[28px_8px_16px];
}
.inquiryContent__top .titleBox{
  @apply w-full px-[12px] flex justify-between items-end mb-[25px];
}
.inquiryContent__top .titleBox .title{
  @apply flex flex-col justify-start items-start gap-[20px];
}
.inquiryContent__top .titleBox .title span{
  @apply ml-[5px] inline-block p-[6px_12px_5px] bg-[#FF8C3A] rounded-[16px] font-bold text-[14px] leading-[17px] text-[#fff];
}
.inquiryContent__top .titleBox .title p{
  @apply font-[JalnanGothic] font-normal text-[24px] leading-[28px] text-[#252525];
}
.inquiryContent__top .titleBox .title p strong{
  @apply font-[JalnanGothic] font-normal text-[#FF7139];
}
.inquiryContent__top .txtBox{
  @apply w-full rounded-[12px] bg-[#FFD6B8] p-[20px_8px] flex flex-col justify-start items-start gap-[8px];
}
.inquiryContent__top .txtBox .title{
  @apply w-full pl-[12px] font-[JalnanGothic] font-normal text-[14px] leading-[17px] text-[#9F5A0B];
}
.inquiryContent__top .txtBox .txt{
  @apply w-full flex flex-col justify-start items-start gap-[4px];
}
.inquiryContent__top .txtBox .txt p{
  @apply pl-[20px] relative font-semibold text-[14px] leading-[17px] text-[#674B18] before:content-[''] before:w-[3.5px] before:h-[3.5px] before:absolute before:rounded-full before:bg-[#674B18] before:left-[8px] before:top-[6px];
}
.inquiryContent__top .txtBox .txt p span{
  @apply font-extrabold;
}
.inquiryContent__bottom{
  @apply w-full h-[calc(100%-272px)] pt-[32px] px-[18px] flex flex-col justify-between items-center;
}
.inquiryContent__bottom .btn-group{
  @apply w-full flex flex-col justify-start items-center gap-[12px];
}
.inquiryContent__bottom .btn-group div{
  @apply w-full flex justify-between items-center bg-[#fff] border border-[#AFB2EC] p-[24px_16px] rounded-[8px];
}
.inquiryContent__bottom .btn-group div span{
  @apply font-bold text-[16px] leading-[20px] text-[#2B2436] text-left;
}
.inquiryContent__bottom .btn-group div span em{
  @apply font-medium text-[#2687F5] inline-block underline ml-[12px];
}
.inquiryContent__bottom .copyright{
  @apply w-full text-center font-medium text-[12px] leading-[14px] text-[#6B6D95];
}
</style>