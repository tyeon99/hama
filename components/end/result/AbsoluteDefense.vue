<!-- 절대 방어 -->
<template>
  <div class="absoluteDefense">
    <div class="top">
      <div class="score">
        <img width="179" src="~/assets/img/end/result-img07.png" alt="절대 방어">
        <div class="txtNum">
          <span>예방점수</span>
          <p><strong>100</strong> 점</p>
        </div>
      </div>
      <div class="box">
        <div class="title">
          <p>절대 방어</p>
          <span>(Absolute Defense)</span>
        </div>
        <div class="txt">
          완벽한 방어력과 예방력을 갖춘 최상의 보안 상태입니다.
        </div>
      </div>
    </div>
    <div class="bottom">
      <p :class="zoomClass">
        피싱 공격을 완벽히 차단할 수 있는 최고의 대응력을 갖추었습니다.<br />
        하지만 보안 위협은 계속 변합니다. 다양한 유형의 체험을 통해 대응 태세를 유지하세요!
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
.absoluteDefense{
  @apply w-full rounded-[16px] translate-y-[-26px] shadow-[0px_0px_12px_0px_rgba(0,0,0,0.5)];
}
.absoluteDefense .top{
  @apply w-full p-[24px_15px_20px] rounded-t-[16px];
  background: linear-gradient(180deg, #FF8A73 0%, #620458 52.88%, #6D97FF 100%);
}
.absoluteDefense .top .score{
  @apply relative w-full flex justify-end items-start pr-[35px] gap-[16px] mb-[28px];
}
.absoluteDefense .top .score img{
  @apply absolute left-0 top-[-60px];
}
.absoluteDefense .top .score .txtNum{
  @apply flex flex-col justify-start items-center gap-[12px];
}
.absoluteDefense .top .score .txtNum span{
  @apply rounded-[20px] border-2 border-[#fff] p-[9px_20px_8px] font-extrabold text-[16px] leading-[19px] text-[#fff];
}
.absoluteDefense .top .score .txtNum p{
  @apply align-bottom font-extrabold text-[18px] leading-[30px] text-[#fff];
}
.absoluteDefense .top .score .txtNum p strong{
  @apply text-[40px];
}
.absoluteDefense .top .box{
  @apply w-full bg-[url(~/assets/img/end/result-bg07.png)] bg-center bg-cover bg-no-repeat px-[20px] py-[18px] rounded-[12px] flex flex-col justify-start items-center gap-[8px] shadow-[0px_0px_12px_0px_rgba(0,0,0,0.5)];
}
.absoluteDefense .top .box .title{
  @apply w-full flex justify-center items-center gap-[8px];
}
.absoluteDefense .top .box .title p{
  @apply font-[JalnanGothic] font-normal text-[18px] leading-[21px] text-[#fff];
}
.absoluteDefense .top .box .title span{
  @apply font-semibold text-[16px] leading-[19px] text-[#fff];
}
.absoluteDefense .top .box .txt{
  @apply font-semibold text-[14px] leading-[18px] text-[#FFF79C] text-center;
}
.absoluteDefense .top .box .txt strong{
  @apply font-extrabold text-[16px];
}
.absoluteDefense .bottom{
  @apply w-full min-h-[148px] flex justify-center items-center bg-[#fff] rounded-b-[16px] p-[20px_14px] font-semibold text-[15px] leading-[18px] text-[#8176BC];
}
</style>