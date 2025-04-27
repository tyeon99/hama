<template>
  <div class="educationContent">
    <div class="educationContent__top">
      <div class="titleBox">
        <div class="title">
          <span>오프라인 교육 소개</span>
          <p><strong>보이스피싱</strong>,<br />이제는 직접 겪어보고<br />대비하자!</p>
        </div>
        <img width="84" src="~/assets/img/guide/guide_top-icon02.png">
      </div>
    </div>
    <div class="educationContent__bottom">
      <div class="txt-group">
        <div class="title" :class="zoomClass">
          <img width="24" src="~/assets/img/guide/guide_bottom-icon01.png">
          ‘하마터면’ 오프라인 교육 프로그램
        </div>
        <div class="txtBox">
          <p :class="zoomClass">
            AI 시뮬레이션을 활용해 실제와 비슷한 보이스피싱 상황을 생생하게 체험하고, 어떻게 대응해야 하는지 직접 배워볼 수 있는 오프라인 교육이에요.
          </p>
          <p :class="zoomClass">
            어렵지 않아요! 함께 보고, 듣고, 이야기하면서 자연스럽게 익힐 수 있는 알찬 수업이에요.
          </p>
          <p :class="zoomClass">
            필요한 교육이 있다면 언제든 편하게 문의해주세요.
          </p>
          <p :class="zoomClass">
            ‘하마터면’이 여러분과 함께 최신 사기 수법을 쉽게 익히고, 내 정보는 스스로 지킬 수 있도록 도와드릴게요!
          </p>
        </div>
      </div>
      <div class="txt-group">
        <div class="title" :class="zoomClass">
          <img width="24" src="~/assets/img/guide/guide_bottom-icon02.png">
          이런 분들께 추천해요
        </div>
        <div class="txtBox">
          <span :class="zoomClass">
            스마트폰은 잘 쓰지만, 피싱에는 아직 자신 없는 시니어
          </span>
          <span :class="zoomClass">
            부모님이나 가족이 혹시 피해를 입지 않을까 걱정되는 가족 보호자
          </span>
          <span :class="zoomClass">
            조직 내에서 직접 보이스피싱 예방 교육을 진행하고 싶은 기관이나 기업
          </span>
          <span :class="zoomClass">
            청소년이나 디지털 약자에게 꼭 필요한 예방 교육을 고민하고 계신 선생님과 교육자분들
          </span>
        </div>
      </div>
      <div class="txt-group">
        <div class="title" :class="zoomClass">
          <img width="24" src="~/assets/img/guide/guide_bottom-icon03.png">
          하마터면 교육 프로그램 안내<br /> (2025년 하반기 예정)
        </div>
        <div class="txtBox">
          <p :class="zoomClass">
            ‘하마터면’은 온라인 사이트 오픈과 함께, 더 많은 분들께 빠르게 다가가기 위해 오프라인 교육도 함께 진행할 예정이에요. 2025년 하반기부터 본격적으로 시작되며, 일정이나 참여 방법이 궁금하시면 언제든지 <span>[CONTACT US]</span>를 통해 문의해주세요!
          </p>
          <p :class="zoomClass">
            <strong>프로그램 1. 공공기관 및 지자체를 위한 맞춤 교육</strong> <br />
            공공기관이나 지방자치단체에 근무하시는 임직원분들, 그리고 각 지자체의 시민분들을 대상으로 <br />
            디지털 금융사기에 대한 이해와 예방법을 쉽고 재미있게 알려드려요. 특히 시니어, 청소년, 사회 초년생처럼 디지털 환경에 익숙하지 않은 분들에게 딱 맞는 구성으로 준비되어 있어요.
          </p>
          <p :class="zoomClass">
            <strong>프로그램 2. 은행 및 금융기관 대상 교육</strong> <br />
            디지털금융사기, 특히 피싱은 금융과는 떼려야 뗄 수 없는 문제죠. 은행이나 금융기관에서는 고객 보호가 무엇보다 중요하니까요. 정기적으로 고객과 직원 모두가 쉽게 이해할 수 있는 교육을 통해, 더 안전한 금융 환경을 만드는 데 도움을 드릴 수 있어요.
          </p>
          <p :class="zoomClass">
            <strong>프로그램 3. 민간 기업을 위한 방문 교육</strong> <br />
            개인이 따로 교육을 찾기는 어렵고 번거로울 수 있죠. 그래서 저희가 직접 찾아갑니다! 회사 안에서 진행할 수 있는 맞춤형 교육으로, 임직원분들이 보이스피싱에 쉽게 노출되지 않도록 도와드릴게요. 기업 특성에 맞춘 구성으로 부담 없이, 재미있게 배워볼 수 있답니다.
          </p>
        </div>
      </div>
      <div class="txt-group">
        <div class="title" :class="zoomClass">
          <img width="24" src="~/assets/img/guide/guide_bottom-icon04.png">
          꼭 알아두세요!
        </div>
        <div class="txtBox">
          <p :class="zoomClass">
            이 교육이 보이스피싱을 완벽하게 막아주는 백신은 아니에요. 하지만 한 번이라도 직접 겪어보면, 실제로 마주쳤을 때 훨씬 덜 당황하고 훨씬 더 잘 대처할 수 있어요. <br />
            ‘하마터면’은 바로 그런 힘을 키워주는 프로그램이에요.
          </p>
          <p :class="zoomClass">
            스스로를 지키는 능력, 함께 키워봐요!
          </p>
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
.educationContent{
  @apply w-full bg-[#F7F5FF] pb-[120px];
}
.educationContent__top{
  @apply w-full bg-[#FFF2E7] shadow-[0px_0px_2px_0px_rgba(23,26,31,0.12)] p-[28px_8px_16px];
}
.educationContent__top .titleBox{
  @apply w-full px-[12px] flex justify-between items-end mb-[25px];
}
.educationContent__top .titleBox .title{
  @apply flex flex-col justify-start items-start gap-[20px];
}
.educationContent__top .titleBox .title span{
  @apply ml-[5px] inline-block p-[6px_12px_5px] bg-[#FF8C3A] rounded-[16px] font-bold text-[14px] leading-[17px] text-[#fff];
}
.educationContent__top .titleBox .title p{
  @apply font-[JalnanGothic] font-normal text-[24px] leading-[28px] text-[#252525];
}
.educationContent__top .titleBox .title p strong{
  @apply font-[JalnanGothic] font-normal text-[#FF7139];
}
.educationContent__top .txtBox{
  @apply w-full rounded-[12px] bg-[#FFD6B8] p-[20px_8px] flex flex-col justify-start items-start gap-[8px];
}
.educationContent__top .txtBox .title{
  @apply w-full pl-[12px] font-[JalnanGothic] font-normal text-[14px] leading-[17px] text-[#9F5A0B];
}
.educationContent__top .txtBox .txt{
  @apply w-full flex flex-col justify-start items-start gap-[4px];
}
.educationContent__top .txtBox .txt p{
  @apply pl-[20px] relative font-semibold text-[14px] leading-[17px] text-[#674B18] before:content-[''] before:w-[3.5px] before:h-[3.5px] before:absolute before:rounded-full before:bg-[#674B18] before:left-[8px] before:top-[6px];
}
.educationContent__top .txtBox .txt p span{
  @apply font-extrabold;
}
.educationContent__bottom{
  @apply w-full pt-[32px] px-[12px] flex flex-col justify-start items-start gap-[32px];
}
.educationContent__bottom .txt{
  @apply px-[4px] w-full font-medium text-[14px] leading-[17px] text-[#6B6D95] mb-[32px];
}
.educationContent__bottom .txt-group{
  @apply w-full flex flex-col justify-start items-center gap-[12px];
}
.educationContent__bottom .txt-group .title{
  @apply w-full px-[12px] font-[JalnanGothic] font-normal text-[16px] leading-[19px] text-[#2b2436] tracking-[3%] flex justify-start items-center gap-[8px];
}
.educationContent__bottom .txt-group .txtBox{
  @apply w-full bg-[#fff] rounded-[12px] p-[16px] flex flex-col justify-start items-start gap-[12px];
}
.educationContent__bottom .txt-group .txtBox p{
  @apply w-full font-medium text-[14px] leading-[17px] text-[#6B6D95];
}
.educationContent__bottom .txt-group .txtBox p span{
  @apply text-[#6F75F2] before:content-none p-0;
}
.educationContent__bottom .txt-group .txtBox p strong{
  @apply font-extrabold text-[16px] text-[#6F75F2];
}
.educationContent__bottom .txt-group .txtBox span{
  @apply w-full pl-[20px] relative font-semibold text-[14px] leading-[17px] text-[#6B6D95] before:content-[''] before:w-[3.5px] before:h-[3.5px] before:absolute before:rounded-full before:bg-[#6B6D95] before:left-[6px] before:top-[6px];
}
</style>