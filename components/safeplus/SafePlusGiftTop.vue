<template>
  <div class="safePlusSubscribeTop">
    <div class="left">
      <div class="title">선물하기 안내</div>
      <div class="txt-group">
        <p :class="zoomClass">결제 후 선물받는 분께 선물받기 카톡 or 문자 발송</p>
        <p :class="zoomClass">선물받기 등록 후 서비스 시작 (5일 내 미등록 시 결제 취소)</p>
        <p :class="zoomClass">체험 후 분석결과 공유 (마이페이지에서 확인)</p>
        <p :class="zoomClass">유료전용 AI피싱 체험 이용</p>
        <p :class="zoomClass">
          최대 500만원 보장보험 (선물받기 등록 후 익일 적용)
          <br/>
          최근 1년 내 구독 중 AI피싱 5종 체험완료 이력 충족 시 적용
        </p>
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
.safePlusSubscribeTop{
  @apply w-full flex justify-between items-center p-[24px_16px] bg-[#FFE8E7];
  box-shadow: 0px 0px 1px 0px #171A1F12;
  box-shadow: 0px 0px 2px 0px #171A1F1F;
}
.safePlusSubscribeTop .left span{
  @apply p-[6px_18px] rounded-[16px] mb-[16px] inline-block font-bold text-[14px] leading-[17px] text-[#fff] bg-[#FF3A78] ml-[8px];
}
.safePlusSubscribeTop .left .title{
  @apply font-[JalnanGothic] font-normal text-[18px] leading-[18px] text-[#2B2436] mb-[12px] pl-[8px];
}
.safePlusSubscribeTop .left .txt-group{
  @apply w-full flex flex-col justify-start items-start gap-0;
}
.safePlusSubscribeTop .left .txt-group p{
  @apply relative pl-[21px] font-medium text-[13px] leading-[18px] text-[#F05B54] before:content-[''] before:w-[3px] before:h-[3px] before:rounded-full before:absolute before:left-[10px] before:top-[8px] before:bg-[#F05B54];
}
</style>
