<template>
  <div class="spContent">
    <div class="top">
      <span class="tag" :class="zoomClass">FOR WHO</span>
      <div class="title" :class="zoomClass">
        나를 위한 <span>안심</span>부터,<br />
        가족을 위한 <strong>케어</strong>까지
      </div>
    </div>
    <div class="bottom">
      <div class="box-group">
        <div class="box">
          <img width="60" src="~/assets/img/safeplus/spic04-icon01.png">
          <div class="txt">
            <strong>나를 위한 안심</strong>
            <p>사고당 최대 500만원 피싱·스미싱 피해 보상 <br />(본인부담금 5만원)</p>
          </div>
        </div>
        <div class="box">
          <img width="60" src="~/assets/img/safeplus/spic04-icon02.png">
          <div class="txt">
            <strong>부모님을 위한 안심 선물</strong>
            <p>안심을 선물하고 체험 결과까지 함께 챙기고 싶은 분</p>
          </div>
        </div>
        <div class="box">
          <img width="60" src="~/assets/img/safeplus/spic04-icon03.png">
          <div class="txt">
            <strong>가족을 위한 케어</strong>
            <p>가족의 예방 대응 상태를 꾸준히 살피고 싶은 분</p>
          </div>
        </div>
        <div class="box">
          <img width="60" src="~/assets/img/safeplus/spic04-icon04.png">
          <div class="txt">
            <strong>커피 한잔 값으로 시작하는 안심플러스</strong>
            <p>
              <span>[추천]</span>
              연간구독 월 3,250원(↓17%)<br />
              월간구독 월 3,900원
            </p>
          </div>
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
  @apply w-full py-[40px] px-[16px] bg-[#E3EAF8];
}
.top {
  @apply w-full flex flex-col justify-center items-center gap-5 mb-[30px];
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
.box-group{
  @apply w-full flex flex-col justify-start items-start gap-3;
}
.box-group .box{
  @apply w-full p-[12px_16px] flex justify-start items-center gap-[15px] rounded-[12px] bg-[#fff];
  box-shadow: 0px 0px 8px 0px #00000014;
}
.box-group .box .txt{
  @apply flex flex-col justify-start items-start gap-2;
}
.box-group .box .txt strong{
  @apply font-[JalnanGothic] font-normal text-[16px] leading-[19px] text-[#2B2436];
}
.box-group .box .txt p{
  @apply w-full flex justify-start items-start gap-1 font-medium text-[13px] leading-[16px] text-[#6B6D95];
}
.box-group .box .txt p span{
  @apply font-bold text-[#FF2E7B];
}
</style>