<template>
  <div class="spContent">
    <div class="box">
      <img width="105" src="~/assets/img/safeplus/sp-pbox-img13.png">
      <div class="txt">
        <strong :class="zoomClass">
          돈만 보상하는 게 아닙니다.<br />
          마음까지 지켜드립니다.
        </strong>
        <p :class="zoomClass">
          보이스피싱 피해자는 단순한 금전 손실이 아니라 가족에 대한 죄책감과 자기비난 때문에 심리적 절망에 빠지기도 합니다.<br />
          미리미리 마음을 지켜주는 대비책을 세워둬야 합니다.
        </p>
        <span :class="zoomClass">
          “20대 취업준비생, 보이스피싱 피해 후 죄책감에 극단적 선택” (일요서울 2020) <br />
          “학비를 잃은 자책감… 여대생의 극단적 선택” (이뉴스투데이 2016) <br />
          “부산 사건 계기, 보이스피싱 피해자 심리지원 제도 첫 도입” (노컷뉴스 2022)
        </span>
      </div>
      <div class="s-group">
        <div class="square">
          <strong :class="zoomClass">경제적 보상</strong>
          <span :class="zoomClass">최대 500만원 피해 보장</span>
        </div>
        <div class="square">
          <strong :class="zoomClass">심리적 안심</strong>
          <span :class="zoomClass">가족에 대한 죄책감 완화, 절망감 예방</span>
        </div>
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
.spContent{
  @apply w-full px-[16px];
}
.spContent .box{
  @apply w-full rounded-[20px] bg-[#fff] p-[24px_32px] flex flex-col justify-center items-center gap-[24px];
  box-shadow: 0px 0px 8px 0px #00000014;
}
.spContent .box .txt{
  @apply w-full flex flex-col justify-center items-center gap-[16px];
}
.spContent .box .txt strong{
  @apply text-center font-extrabold text-[20px] leading-[24px] text-[#2B2436];
}
.spContent .box .txt p{
  @apply font-extrabold text-[12px] leading-[18px] text-[#9597BC] text-center;
}
.spContent .box .txt span{
  @apply font-medium text-[13px] leading-[16px] text-[#9597BC] text-center;
}
.spContent .box .s-group{
  @apply w-full flex flex-col justify-center items-center gap-[12px];
}
.spContent .box .s-group .square{
  @apply w-full py-[11px] rounded-[7px] flex flex-col justify-center items-center gap-[8px] bg-[#FFF4D4] last:bg-[#FFEFDD];
}
.spContent .box .s-group .square strong{
  @apply font-[JalnanGothic] text-center font-normal text-[14px] leading-[17px] text-[#D15B00];
}
.spContent .box .s-group .square span{
  @apply text-center font-medium text-[12px] leading-[14px] text-[#D15B00];
}
</style>