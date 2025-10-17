<template>
  <div class="safePlusSubscribeTop">
    <div class="left">
      <span :class="zoomClass">구독 및 결제</span>
      <div class="title">모든 구독 공동 혜택</div>
      <div class="txt-group">
        <p :class="zoomClass">신종 수법 30일 선체험</p>
        <p :class="zoomClass">최대 500만원 보장보험 (구독 후 익일 적용)</p>
      </div>
    </div>
    <div class="right">
      <img width="72" src="~/assets/img/safeplus/subscribeTop-img.png">
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
.safePlusSubscribeTop{
  @apply w-full flex justify-between items-center p-[24px_16px] bg-[#FFE8E7];
  box-shadow: 0px 0px 1px 0px #171A1F12;
  box-shadow: 0px 0px 2px 0px #171A1F1F;
}
.safePlusSubscribeTop .left span{
  @apply p-[6px_18px] rounded-[16px] mb-[16px] inline-block font-bold text-[14px] leading-[17px] text-[#fff] bg-[#FF3A78] ml-[8px];
}
.safePlusSubscribeTop .left .title{
  @apply font-[JalnanGothic] font-normal text-[24px] leading-[28px] text-[#2B2436] mb-[12px] pl-[8px];
}
.safePlusSubscribeTop .left .txt-group{
  @apply w-full flex flex-col justify-start items-start gap-0;
}
.safePlusSubscribeTop .left .txt-group p{
  @apply relative pl-[21px] font-medium text-[14px] leading-[22px] text-[#F05B54] before:content-[''] before:w-[3px] before:h-[3px] before:rounded-full before:absolute before:left-[10px] before:top-[8px] before:bg-[#F05B54];  
}
</style>