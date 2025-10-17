<template>
  <div class="laContent">
    <div class="title" :class="zoomClass">오늘의 보이스피싱 경보</div>
    <div class="txt" :class="zoomClass">실시간으로 업데이트 되는 피싱 정보를 확인하세요.</div>
    <div class="box">
      <div class="top">
        <img width="12" src="~/assets/img/alarm/warning-icon.png">
        <em :class="zoomClass">최근 경보</em>
      </div>
      <span :class="zoomClass">2025.09.21 07:00</span>
      <strong :class="zoomClass">신종 AI 음성합성 보이스피싱 급증</strong>
      <p :class="zoomClass">
        기존의 택배 배송 문자 사기가 더욱 교묘해지고 있습니다. <br />
        새로운 수법은 문자에 첨부된 링크를 클릭하도록 유도한 뒤, 먼저 가짜정보를 보여 ‘정상 페이지’처럼 안심시키고 뒤에서 악성 앱 설치를 유도합니다. 
      </p>
      <img width="303" src="~/assets/img/alarm/warning-img.png">
      <p :class="zoomClass">
        이 악성 앱은 통화·문자 내용을 가로채며, 은행 앱을 가짜로 가리앉는 술수로 금전 피해를 유발하고 있습니다. <br />
        이런 경우는 문자로 온 배송조회 링크라면 100% 사기입니다. 
      </p>
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
.laContent{
  @apply w-full;
}
.laContent .title{
  @apply w-full text-center mb-[8px] font-[JalnanGothic] font-normal text-[20px] leading-[24px] text-[#2B2436];
}
.laContent .txt{
  @apply w-full text-center mb-[24px] text-[#6B6D95] font-semibold text-[16px] leading-[20px];
}
.laContent .box{
  @apply w-full bg-[#7139FF] p-[24px_16px] rounded-[12px] flex flex-col justify-start items-start gap-[16px];
}
.laContent .box .top{
  @apply w-full flex justify-start items-center gap-[8px] py-[7px];
}
.laContent .box .top em{
  @apply font-medium text-[16px] leading-[20px] text-[#fff];
}
.laContent .box span{
  @apply p-[4px_8px] bg-[#fff] rounded-[12px] font-medium text-[12px] leading-[14px] text-[#7139FF];
}
.laContent .box strong{
  @apply font-extrabold text-[20px] leading-[24px] text-[#fff];
}
.laContent .box p{
  @apply font-medium text-[13px] leading-[16px] text-[#E3E0F9];
}
</style>