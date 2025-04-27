<!-- 최상급 방어 -->
<template>
  <div class="eliteDefense">
    <div class="top">
      <div class="score">
        <img width="172" src="~/assets/img/end/result-img06.png" alt="최상급 방어">
        <div class="txtNum">
          <span>예방점수</span>
          <p><strong>92</strong> 점</p>
        </div>
      </div>
      <div class="box">
        <div class="title">
          <p>최상급 방어</p>
          <span>(Elite Defense)</span>
        </div>
        <div class="txt">
          최상급 수준의 대응력을 갖추었지만, 변칙적인 공격에는 더욱 세밀한 대응이 필요합니다.
        </div>
      </div>
    </div>
    <div class="bottom">
      <p :class="zoomClass">
        최상급 수준의 대응력을 보유하고 있지만, 보안 위협은 계속 변화하고 있습니다.<br />
        완벽한 대응력을 유지하기 위해 정기적인 훈련과 학습을 지속하세요!
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
.eliteDefense{
  @apply w-full rounded-[16px] translate-y-[-26px] shadow-[0px_0px_12px_0px_rgba(0,0,0,0.5)];
}
.eliteDefense .top{
  @apply w-full p-[24px_15px_20px] rounded-t-[16px];
  background: linear-gradient(180deg, #FF2491 0%, #049BAB 100%);
}
.eliteDefense .top .score{
  @apply relative w-full flex justify-end items-start pr-[35px] gap-[16px] mb-[28px];
}
.eliteDefense .top .score img{
  @apply absolute left-[13px] top-[-60px];
}
.eliteDefense .top .score .txtNum{
  @apply flex flex-col justify-start items-center gap-[12px];
}
.eliteDefense .top .score .txtNum span{
  @apply rounded-[20px] border-2 border-[#fff] p-[9px_20px_8px] font-extrabold text-[16px] leading-[19px] text-[#fff];
}
.eliteDefense .top .score .txtNum p{
  @apply align-bottom font-extrabold text-[18px] leading-[30px] text-[#fff];
}
.eliteDefense .top .score .txtNum p strong{
  @apply text-[40px];
}
.eliteDefense .top .box{
  @apply w-full bg-[url(~/assets/img/end/result-bg06.png)] bg-center bg-cover bg-no-repeat px-[20px] py-[18px] rounded-[12px] flex flex-col justify-start items-center gap-[8px] shadow-[0px_0px_12px_0px_rgba(0,0,0,0.5)];
}
.eliteDefense .top .box .title{
  @apply w-full flex justify-center items-center gap-[8px];
}
.eliteDefense .top .box .title p{
  @apply font-[JalnanGothic] font-normal text-[18px] leading-[21px] text-[#fff];
}
.eliteDefense .top .box .title span{
  @apply font-semibold text-[16px] leading-[19px] text-[#fff];
}
.eliteDefense .top .box .txt{
  @apply font-semibold text-[14px] leading-[18px] text-[#FFF79C] text-center;
}
.eliteDefense .top .box .txt strong{
  @apply font-extrabold text-[16px];
}
.eliteDefense .bottom{
  @apply w-full min-h-[148px] flex justify-center items-center bg-[#fff] rounded-b-[16px] p-[20px_14px] font-semibold text-[15px] leading-[18px] text-[#8176BC];
}
</style>