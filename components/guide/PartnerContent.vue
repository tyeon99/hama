<template>
  <div class="partnerContent">
    <div class="partnerContent__top">
      <div class="titleBox">
        <div class="title">
          <span>협력 파트너</span>
          <p>"<strong>하마터면</strong>"과<br />같이 하는 사람들</p>
        </div>
        <img width="112" src="~/assets/img/guide/guide_top-icon03.png">
      </div>
      <div class="txtBox">
        <div class="title" :class="zoomClass">하마터면은 많은 사람들과 함께 만들어졌습니다. 앞으로도 지속적인 교육과 확장을 위해 파트너십을 더 넓혀나갈 예정입니다. </div>
      </div>
    </div>
    <div class="partnerContent__bottom">
      <div class="btn-group">
        <button>
          <img width="120" src="~/assets/img/guide/partner_logo-img01.png">
          <span :class="zoomClass">AI 금융회사 씽크풀</span>
        </button>
        <button>
          <img width="120" src="~/assets/img/guide/partner_logo-img02.png">
          <span :class="zoomClass">금융교육 앞장서는<br /> 금융과행복네트워크</span>
        </button>
        <button>
          <img width="120" src="~/assets/img/guide/partner_logo-img03.png">
          <span :class="zoomClass">교육을 서비스로 누리는<br /> 세상을 만드는 에듀올랩</span>
        </button>
        <button>
          <img width="120" src="~/assets/img/guide/partner_logo-img04.png">
          <span :class="zoomClass">기업의 성공적인 디지털 <br />전환을 돕는 엔터플</span>
        </button>
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
.partnerContent{
  @apply w-full bg-[#F7F5FF] pb-[98px];
}
.partnerContent__top{
  @apply w-full bg-[#FFF2E7] shadow-[0px_0px_2px_0px_rgba(23,26,31,0.12)] p-[28px_8px_16px];
}
.partnerContent__top .titleBox{
  @apply w-full px-[12px] flex justify-between items-end mb-[25px];
}
.partnerContent__top .titleBox .title{
  @apply flex flex-col justify-start items-start gap-[20px];
}
.partnerContent__top .titleBox .title span{
  @apply ml-[5px] inline-block p-[6px_12px_5px] bg-[#FF8C3A] rounded-[16px] font-bold text-[14px] leading-[17px] text-[#fff];
}
.partnerContent__top .titleBox .title p{
  @apply font-[JalnanGothic] font-normal text-[24px] leading-[28px] text-[#252525];
}
.partnerContent__top .titleBox .title p strong{
  @apply font-[JalnanGothic] font-normal text-[#FF7139];
}
.partnerContent__top .txtBox{
  @apply w-full rounded-[12px] bg-[#FFD6B8] p-[20px_8px] flex flex-col justify-start items-start gap-[8px];
}
.partnerContent__top .txtBox .title{
  @apply w-full pl-[12px] font-[JalnanGothic] font-normal text-[14px] leading-[17px] text-[#9F5A0B];
}
.partnerContent__top .txtBox .txt{
  @apply w-full flex flex-col justify-start items-start gap-[4px];
}
.partnerContent__top .txtBox .txt p{
  @apply pl-[20px] relative font-semibold text-[14px] leading-[17px] text-[#674B18] before:content-[''] before:w-[3.5px] before:h-[3.5px] before:absolute before:rounded-full before:bg-[#674B18] before:left-[8px] before:top-[6px];
}
.partnerContent__top .txtBox .txt p span{
  @apply font-extrabold;
}
.partnerContent__bottom{
  @apply w-full pt-[32px] px-[18px];
}
.partnerContent__bottom .btn-group{
  @apply w-full flex flex-col justify-start items-center gap-[12px];
}
.partnerContent__bottom .btn-group button{
  @apply w-full flex justify-between items-center bg-[#fff] border border-[#AFB2EC] p-[17px_12px] rounded-[8px];
}
.partnerContent__bottom .btn-group button span{
  @apply font-bold text-[16px] leading-[20px] text-[#2B2436] text-left;
}
</style>