<template>
  <div class="spContent">
    <div class="top">
      <span class="tag" :class="zoomClass">WHY NOW</span>
      <div class="title" :class="zoomClass">
        <strong>왜 지금</strong><br />
        <span>안심플러스</span>가 필요할까요?
      </div>
    </div>
    <div class="bottom">
      <img width="203" src="~/assets/img/safeplus/safe-icon.png">
      <div class="txt-box">
        <p :class="zoomClass">
          <span>돈만</span> 보상하는 게 아닙니다.<br />
          <strong>마음</strong>까지 지켜드립니다.
        </p>
        <span :class="zoomClass">
          보이스피싱 피해는 <strong>단순한 금전 손실</strong>로<br />
          <strong>끝나지 않습니다.</strong><br />
          죄책감과 자기비난, 불안까지 이어질 수<br />
          있기 때문에 <strong>미리 대비해야 합니다.</strong>
        </span>
      </div>
      <div class="box-group">
        <div class="box">
          <img width="50" src="~/assets/img/safeplus/spic03-icon01.png">
          <div class="title">안심플러스 없이<br />피해를 당하면</div>
          <div class="txt">
            <p :class="zoomClass">피해금 회복이 어렵습니다.</p>
            <p :class="zoomClass">가족에 대한 죄책감과 자책이 커질 수 있습니다.</p>
            <p :class="zoomClass">가족 관계와 일상이 흔들릴 수 있습니다.</p>
          </div>
        </div>
        <div class="box">
          <img width="50" src="~/assets/img/safeplus/spic03-icon02.png">
          <div class="title">안심플러스가<br />있다면</div>
          <div class="txt">
            <p :class="zoomClass">피해 시 500만원 보상으로 경제적 부담을 덜 수 있습니다.</p>
            <p :class="zoomClass">심리적 충격을 줄이고 다시 안심할 수 있도록 돕습니다.</p>
            <p :class="zoomClass">예방 체험과 교육으로 재발 방지를 준비할 수 있습니다.</p>
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
  @apply w-full py-[40px] px-[16px] bg-[#fff];
}
.top {
  @apply w-full flex flex-col justify-center items-center gap-5 mb-[10px];
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
.bottom{
  @apply w-full flex flex-col justify-center items-center;
}
.bottom .txt-box{
  @apply mt-6 flex flex-col justify-center items-center gap-[20px];
}
.bottom .txt-box p{
  @apply text-center font-[JalnanGothic] font-normal text-[18px] leading-[21px] text-[#333333];
}
.bottom .txt-box p span{
  @apply text-[#7139FF] font-[JalnanGothic] font-normal;
}
.bottom .txt-box p strong{
  @apply text-[#FF507A] font-[JalnanGothic] font-normal;
}
.bottom .txt-box span{
  @apply text-[#6B6D95] text-center font-medium text-[18px] leading-[25px];
}
.box-group{
  @apply w-full grid grid-cols-2 mt-[30px] gap-3;
}
.box-group .box{
  @apply flex flex-col justify-start items-center gap-[15px] rounded-[12px] p-[16px_12px];
  box-shadow: 0px 0px 8px 0px #00000014;
}
.box-group .box:first-child{
  @apply border-2 border-[#EBBCBC];
  background: linear-gradient(0deg, #FFFFFF 0%, #FFEAEA 100%);
}
.box-group .box:last-child{
  @apply border-2 border-[#C3D4EA];
  background: linear-gradient(360deg, #FFFFFF 0%, #EAF7FF 100%);
}
.box .title{
  @apply font-[JalnanGothic] font-normal text-[16px] leading-[19px] text-[#2B2436] text-center;
}
.box .txt{
  @apply w-full flex flex-col justify-start items-start gap-[3px];
}
.box .txt p{
  @apply relative w-full pl-[7px] font-medium text-[13px] leading-[16px] text-[#6B6D95] tracking-tighter before:content-[''] before:absolute before:left-0 before:top-[6px] before:w-[2.5px] before:h-[2.5px] before:rounded-full before:bg-[#6B6D95];
}
</style>