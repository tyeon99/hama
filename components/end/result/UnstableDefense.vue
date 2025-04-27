<!-- 불완전한 방어 -->
<template>
  <div class="unstableDefense">
    <div class="top">
      <div class="score">
        <img width="123" src="~/assets/img/end/result-img03.png" alt="불완전한 방어">
        <div class="txtNum">
          <span>예방점수</span>
          <p><strong>63</strong> 점</p>
        </div>
      </div>
      <div class="box">
        <div class="title">
          <p>불완전한 방어</p>
          <span>(Unstable Defense)</span>
        </div>
        <div class="txt">
          일부 피싱 공격을 사전에 감지할 수 있지만, 완벽한 예방은 어렵습니다.
        </div>
      </div>
    </div>
    <div class="bottom">
      <p :class="zoomClass">
        실전 방어력은 뛰어나지만, 피싱 공격의 패턴을 충분히 경험하지 못했습니다. <br />
        체험을 다시 진행하여 사기 수법을 끝까지 경험하고 실전 대응력을 강화하세요!
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
.unstableDefense{
  @apply w-full rounded-[16px] translate-y-[-26px] shadow-[0px_0px_12px_0px_rgba(0,0,0,0.5)];
}
.unstableDefense .top{
  @apply w-full p-[24px_15px_20px] rounded-t-[16px];
  background: linear-gradient(180deg, #FF6055 0%, #5757F5 100%);
}
.unstableDefense .top .score{
  @apply relative w-full flex justify-end items-start pr-[35px] gap-[16px] mb-[28px];
}
.unstableDefense .top .score img{
  @apply absolute left-[35px] top-[-60px];
}
.unstableDefense .top .score .txtNum{
  @apply flex flex-col justify-start items-center gap-[12px];
}
.unstableDefense .top .score .txtNum span{
  @apply rounded-[20px] border-2 border-[#fff] p-[9px_20px_8px] font-extrabold text-[16px] leading-[19px] text-[#fff];
}
.unstableDefense .top .score .txtNum p{
  @apply align-bottom font-extrabold text-[18px] leading-[30px] text-[#fff];
}
.unstableDefense .top .score .txtNum p strong{
  @apply text-[40px];
}
.unstableDefense .top .box{
  @apply w-full bg-[url(~/assets/img/end/result-bg03.png)] bg-center bg-cover bg-no-repeat px-[20px] py-[18px] rounded-[12px] flex flex-col justify-start items-center gap-[8px] shadow-[0px_0px_12px_0px_rgba(0,0,0,0.5)];
}
.unstableDefense .top .box .title{
  @apply w-full flex justify-center items-center gap-[8px];
}
.unstableDefense .top .box .title p{
  @apply font-[JalnanGothic] font-normal text-[18px] leading-[21px] text-[#fff];
}
.unstableDefense .top .box .title span{
  @apply font-semibold text-[16px] leading-[19px] text-[#fff];
}
.unstableDefense .top .box .txt{
  @apply font-semibold text-[14px] leading-[18px] text-[#FFF79C] text-center;
}
.unstableDefense .top .box .txt strong{
  @apply font-extrabold text-[16px];
}
.unstableDefense .bottom{
  @apply w-full min-h-[148px] flex justify-center items-center bg-[#fff] rounded-b-[16px] p-[20px_14px] font-semibold text-[15px] leading-[18px] text-[#8176BC];
}
</style>