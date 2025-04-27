<!-- 강력한 방어 -->
<template>
  <div class="strongDefense">
    <div class="top">
      <div class="score">
        <img width="161" src="~/assets/img/end/result-img05.png" alt="강력한 방어">
        <div class="txtNum">
          <span>예방점수</span>
          <p><strong>87</strong> 점</p>
        </div>
      </div>
      <div class="box">
        <div class="title">
          <p>강력한 방어</p>
          <span>(Strong Defense)</span>
        </div>
        <div class="txt">
          높은 수준의 방어력을 갖추었지만, 피싱 공격은 계속 진화하고 있습니다.
        </div>
      </div>
    </div>
    <div class="bottom">
      <p :class="zoomClass">
        피싱 공격에 대한 방어력은 뛰어나지만, 일부 정교한 공격에는 대비가 필요합니다.<br />
        체험을 끝까지 진행하며 최신 피싱 수법에 대비하고 대응력을 더욱 강화하세요!
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
.strongDefense{
  @apply w-full rounded-[16px] translate-y-[-26px] shadow-[0px_0px_12px_0px_rgba(0,0,0,0.5)];
}
.strongDefense .top{
  @apply w-full p-[24px_15px_20px] rounded-t-[16px];
  background: linear-gradient(180deg, #FF7824 0%, #DDB800 100%);
}
.strongDefense .top .score{
  @apply relative w-full flex justify-end items-start pr-[35px] gap-[16px] mb-[28px];
}
.strongDefense .top .score img{
  @apply absolute left-[21px] top-[-60px];
}
.strongDefense .top .score .txtNum{
  @apply flex flex-col justify-start items-center gap-[12px];
}
.strongDefense .top .score .txtNum span{
  @apply rounded-[20px] border-2 border-[#fff] p-[9px_20px_8px] font-extrabold text-[16px] leading-[19px] text-[#fff];
}
.strongDefense .top .score .txtNum p{
  @apply align-bottom font-extrabold text-[18px] leading-[30px] text-[#fff];
}
.strongDefense .top .score .txtNum p strong{
  @apply text-[40px];
}
.strongDefense .top .box{
  @apply w-full bg-[url(~/assets/img/end/result-bg05.png)] bg-center bg-cover bg-no-repeat px-[20px] py-[18px] rounded-[12px] flex flex-col justify-start items-center gap-[8px] shadow-[0px_0px_12px_0px_rgba(0,0,0,0.5)];
}
.strongDefense .top .box .title{
  @apply w-full flex justify-center items-center gap-[8px];
}
.strongDefense .top .box .title p{
  @apply font-[JalnanGothic] font-normal text-[18px] leading-[21px] text-[#fff];
}
.strongDefense .top .box .title span{
  @apply font-semibold text-[16px] leading-[19px] text-[#fff];
}
.strongDefense .top .box .txt{
  @apply font-semibold text-[14px] leading-[18px] text-[#FFF79C] text-center;
}
.strongDefense .top .box .txt strong{
  @apply font-extrabold text-[16px];
}
.strongDefense .bottom{
  @apply w-full min-h-[148px] flex justify-center items-center bg-[#fff] rounded-b-[16px] p-[20px_14px] font-semibold text-[15px] leading-[18px] text-[#8176BC];
}
</style>