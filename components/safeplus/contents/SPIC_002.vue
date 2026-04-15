<template>
  <div class="spContent">
    <div class="top">
      <span class="tag" :class="zoomClass">GIFT & CARE</span>
      <div class="title" :class="zoomClass">
        부모님께 <span>안심</span>을 선물하고,<br />
        <strong>마음</strong>까지 지켜드릴 수 있어요
      </div>
    </div>
    <div class="bottom">
      <div class="txt-box">
        <div class="txt">
          <img width="27" src="~/assets/img/safeplus/check-icon.png">
          <p :class="zoomClass">선물받은 구독자의 체험 결과를 공유받아 예방 대응상태를 살피고, 필요한 케어까지 이어갈 수 있습니다.</p>
        </div>
        <div class="txt">
          <img width="27" src="~/assets/img/safeplus/check-icon.png">
          <p :class="zoomClass">피해가 발생하더라도 경제적 보상과 함께 심리적 충격을 덜고다시 안심할 수 있도록 돕습니다.</p>
        </div>
      </div>
      <button>부모님·가족에게 선물하기</button>
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
.spContent{
  @apply w-full min-h-[553px] max-h-[795px] py-[40px] px-[16px] bg-[#E7E7E3] bg-[url('~/assets/img/safeplus/spic02-bg.png')] bg-no-repeat bg-top bg-cover flex flex-col justify-between items-center;
  aspect-ratio: 375 / 553;
}
.top {
  @apply w-full flex flex-col justify-center items-center gap-5;
}
.top span.tag{
  @apply inline-block bg-[#FF2E7B] p-[4px_12px] rounded-[4px] text-[#FFFFFF] font-extrabold text-[13px] leading-[16px];
}
.top .title{
  @apply text-center font-[JalnanGothic] font-normal text-[23px] leading-[26px] text-[#333333];
}
.top .title span{
  @apply text-[#7139FF] font-[JalnanGothic] font-normal;
}
.top .title strong{
  @apply text-[#FF507A] font-[JalnanGothic] font-normal;
}
.bottom{
  @apply w-full flex flex-col justify-center items-center gap-[30px];
}
.bottom .txt-box{
  @apply w-full p-[10px] bg-[#fff] rounded-[10px] flex flex-col justify-start items-start gap-2;
}
.bottom .txt-box .txt{
  @apply w-full flex justify-start items-start gap-[6px];
}
.bottom .txt-box .txt p{
  @apply font-medium text-[13px] leading-[18px] text-[#6B6D95];
}
.bottom button{
  @apply w-full h-[52px] px-2 bg-[#6B4EFF] rounded-[48px] pt-[3px] font-[JalnanGothic] font-normal text-[16px] leading-[19px] text-[#fff];
  box-shadow: 0px 4px 4px 0px #00000024;
}
</style>