<!-- 무방비 상태 -->
<template>
  <div class="defenselessState">
    <div class="top">
      <div class="score">
        <img width="140" src="~/assets/img/end/result-img01.png" alt="무방비 상태">
        <div class="txtNum">
          <span>예방점수</span>
          <p><strong>44</strong> 점</p>
        </div>
      </div>
      <div class="box">
        <div class="title">
          <p>무방비 상태</p>
          <span>(Defenseless State)</span>
        </div>
        <div class="txt">
          <strong>위험합니다!</strong><br />
          피싱 공격에 속을 가능성이 매우 높습니다.
        </div>
      </div>
    </div>
    <div class="bottom">
      <p :class="zoomClass">
        이번 체험에서는 피싱 공격을 막지 못한 채 진행됐습니다. <br />
        높은 경험치를 가졌지만, 중요한 단서를 놓쳐 피싱 공격을 막아내지 못했습니다.<br />
        사소한 방심도 치명적일 수 있으므로, 더욱 신중하게 대응하세요! 
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
.defenselessState{
  @apply w-full rounded-[16px] translate-y-[-26px] shadow-[0px_0px_12px_0px_rgba(0,0,0,0.5)];
}
.defenselessState .top{
  @apply w-full p-[24px_15px_20px] rounded-t-[16px];
  background: linear-gradient(180deg, #FF7072 0%, #FF5ABA 100%);
}
.defenselessState .top .score{
  @apply relative w-full flex justify-end items-start pr-[35px] gap-[16px] mb-[28px];
}
.defenselessState .top .score img{
  @apply absolute left-[34px] top-[-60px];
}
.defenselessState .top .score .txtNum{
  @apply flex flex-col justify-start items-center gap-[12px];
}
.defenselessState .top .score .txtNum span{
  @apply rounded-[20px] border-2 border-[#fff] p-[9px_20px_8px] font-extrabold text-[16px] leading-[19px] text-[#fff];
}
.defenselessState .top .score .txtNum p{
  @apply align-bottom font-extrabold text-[18px] leading-[30px] text-[#fff];
}
.defenselessState .top .score .txtNum p strong{
  @apply text-[40px];
}
.defenselessState .top .box{
  @apply w-full bg-[url(~/assets/img/end/result-bg01.png)] bg-center bg-cover bg-no-repeat px-[20px] py-[18px] rounded-[12px] flex flex-col justify-start items-center gap-[8px] shadow-[0px_0px_12px_0px_rgba(0,0,0,0.5)];
}
.defenselessState .top .box .title{
  @apply w-full flex justify-center items-center gap-[8px];
}
.defenselessState .top .box .title p{
  @apply font-[JalnanGothic] font-normal text-[18px] leading-[21px] text-[#fff];
}
.defenselessState .top .box .title span{
  @apply font-semibold text-[16px] leading-[19px] text-[#fff];
}
.defenselessState .top .box .txt{
  @apply font-semibold text-[14px] leading-[18px] text-[#FFF79C] text-center;
}
.defenselessState .top .box .txt strong{
  @apply font-extrabold text-[16px];
}
.defenselessState .bottom{
  @apply w-full min-h-[148px] flex justify-center items-center bg-[#fff] rounded-b-[16px] p-[20px_14px] font-semibold text-[15px] leading-[18px] text-[#8176BC];
}
</style>