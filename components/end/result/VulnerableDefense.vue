<!-- 취약한 방어 -->
<template>
  <div class="vulnerableDefense">
    <div class="top">
      <div class="score">
        <img width="165" src="~/assets/img/end/result-img02.png" alt="취약한 방어">
        <div class="txtNum">
          <span>예방점수</span>
          <p><strong>56</strong> 점</p>
        </div>
      </div>
      <div class="box">
        <div class="title">
          <p>취약한 방어</p>
          <span>(Vulnerable Defense)</span>
        </div>
        <div class="txt">
          <strong>취약한 상태입니다!</strong><br />
          사기 수법을 미리 감지하기 어렵습니다
        </div>
      </div>
    </div>
    <div class="bottom">
      <p :class="zoomClass">
        실전 대응력은 강하지만, 피싱 공격 수법을 깊이 경험하지 못했습니다. <br />
        끝까지 체험해야만 완벽한 방어 전략을 갖출 수 있습니다!
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
.vulnerableDefense{
  @apply w-full rounded-[16px] translate-y-[-26px] shadow-[0px_0px_12px_0px_rgba(0,0,0,0.5)];
}
.vulnerableDefense .top{
  @apply w-full p-[24px_15px_20px] rounded-t-[16px];
  background: linear-gradient(180deg, #FFBC70 0%, #FF6771 100%);
}
.vulnerableDefense .top .score{
  @apply relative w-full flex justify-center items-start gap-[16px] mb-[28px];
}
.vulnerableDefense .top .score img{
  @apply absolute left-[calc(50%-150px)] top-[-60px];
}
.vulnerableDefense .top .score .txtNum{
  @apply flex flex-col justify-start items-center gap-[12px] ml-[150px];
}
.vulnerableDefense .top .score .txtNum span{
  @apply rounded-[20px] border-2 border-[#fff] p-[9px_20px_8px] font-extrabold text-[16px] leading-[19px] text-[#fff];
}
.vulnerableDefense .top .score .txtNum p{
  @apply align-bottom font-extrabold text-[18px] leading-[30px] text-[#fff];
}
.vulnerableDefense .top .score .txtNum p strong{
  @apply text-[40px];
}
.vulnerableDefense .top .box{
  @apply w-full bg-[url(~/assets/img/end/result-bg02.png)] bg-center bg-cover bg-no-repeat px-[20px] py-[18px] rounded-[12px] flex flex-col justify-start items-center gap-[8px] shadow-[0px_0px_12px_0px_rgba(0,0,0,0.5)];
}
.vulnerableDefense .top .box .title{
  @apply w-full flex justify-center items-center gap-[8px];
}
.vulnerableDefense .top .box .title p{
  @apply font-[JalnanGothic] font-normal text-[18px] leading-[21px] text-[#fff];
}
.vulnerableDefense .top .box .title span{
  @apply font-semibold text-[16px] leading-[19px] text-[#fff];
}
.vulnerableDefense .top .box .txt{
  @apply font-semibold text-[14px] leading-[18px] text-[#FFF79C] text-center;
}
.vulnerableDefense .top .box .txt strong{
  @apply font-extrabold text-[16px];
}
.vulnerableDefense .bottom{
  @apply w-full min-h-[148px] flex justify-center items-center bg-[#fff] rounded-b-[16px] p-[20px_14px] font-semibold text-[15px] leading-[18px] text-[#8176BC];
}
</style>