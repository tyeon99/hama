<template>
  <div class="serviceIntroContent">
    <div class="serviceIntroContent__top">
      <div class="titleBox">
        <div class="title">
          <span>하마터면 소개</span>
          <p>"여휴, <strong>하마터면</strong> <br />진짜 큰일 날 뻔했네."</p>
        </div>
        <img width="100" src="~/assets/img/guide/guide_top-icon01.png">
      </div>
      <div class="txtBox">
        <div class="title" :class="zoomClass">하마터면으로 키울 수 있는 능력!</div>
        <div class="txt">
          <p :class="zoomClass">나선 상황에서도 침착하게 판단하는 <span>상황 대처력</span></p>
          <p :class="zoomClass">수상한 연락을 걸러내는 <span>의심 감지력</span></p>
          <p :class="zoomClass">새로운 피싱에 흔들리지 않는 <span>디지털 금융 감각</span></p>
        </div>
      </div>
    </div>
    <div class="serviceIntroContent__bottom">
      <div class="txt" :class="zoomClass">
        “하마터면”은 한 끗 차이로 피싱을 피한 그 아찔한 순간에서 따온 이름입니다. <br />
        ‘하마터면’은 AI 기반 보이스피싱 시뮬레이션 체험 서비스로 실제 사례를 바탕으로 한 생생한 시나리오를 통해 피싱 상황을 직접 겪어보며 자연스럽게 대처법을 익힐 수 있어요. <br /><br />

        음성, 문자, 영상 등 다양한 수법을 반영해 실감 나고, 반복 체험으로 위험에 대한 감각도 높아집니다.<br />  
        시니어부터 누구나 쉽게 쓸 수 있도록 편하고 직관적인 구성으로 되어 있고, 교육기관이나 지자체와 함께 활용할 수 있는 공익적인 서비스랍니다.
      </div>
      <div class="txt-group">
        <img width="243" src="~/assets/img/guide/guide_intro-img01.png">
        <div class="title" :class="zoomClass">
          침착하고, 단단하게. 그리고 영리하게. <br />
          ‘하마터면’의 마스코트 하마를 소개합니다.
        </div>
        <div class="txtBox">
          <p :class="zoomClass">
            하마는 흔히 느긋하고 묵직한 동물로 알려져 있지만, 사실은 굉장히 민감하고 상황 판단이 빠른, 한마디로 영리한 생존자입니다.<br />
            아프리카에서도 천적이 없을 정도의 강인함, 웬만한 공격도 버텨내는 두꺼운 피부,그리고 무엇보다 위협을 빠르게 감지하고, 정확하게 반응하는 영리함까지.
          </p>
          <p :class="zoomClass">
            하마는 결코 허둥대지 않아요. <br />
            턱대고 나서지 않지만, 필요한 순간엔 누구보다 정확하게 행동하죠.<br />
            그런 점에서, <span>‘하마터면’ 서비스가 지향하는 모습</span>과 참 많이 닮았습니다.
          </p>
          <p :class="zoomClass">
            ‘하마터면’은 보이스피싱을 미리 겪어보는 <span>AI 시뮬레이션 기반 체험 서비스</span>예요.<br />
            단순히 겁주거나 지식만 전달하는 교육이 아니라, 직접 겪어봄으로써 실제 상황이 왔을 때 <span>어떻게 판단하고 대응해야 하는지를 익히는 훈련</span>이죠.
          </p>
          <p :class="zoomClass">
            피해를 ‘예방’하는 게 아니라, <span>상황을 빠르게 읽고, 침착하게 대처할 수 있는 힘과 감각을 기르는 것.</span><br />
            이런 점에서 하마는  우리 서비스가 전하고 싶은 태도, <span>차분하게 생각하고, 필요할 땐 정확하게 반응하는 지혜롭고 단단한 존재</span>를 상징합니다.
          </p>
          <p :class="zoomClass">
            현실을 꿰뚫는 냉정함과, 그럼에도 유쾌함을 잃지 않는 영리하고 든든한 친구,  <span>하마터면은 여러분께 그런 존재</span>가 되고자 합니다 
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
.serviceIntroContent{
  @apply w-full bg-[#F7F5FF] pb-[120px];
}
.serviceIntroContent__top{
  @apply w-full bg-[#FFF2E7] shadow-[0px_0px_2px_0px_rgba(23,26,31,0.12)] p-[28px_8px_16px];
}
.serviceIntroContent__top .titleBox{
  @apply w-full px-[12px] flex justify-between items-end mb-[25px];
}
.serviceIntroContent__top .titleBox .title{
  @apply flex flex-col justify-start items-start gap-[20px];
}
.serviceIntroContent__top .titleBox .title span{
  @apply ml-[5px] inline-block p-[6px_12px_5px] bg-[#FF8C3A] rounded-[16px] font-bold text-[14px] leading-[17px] text-[#fff];
}
.serviceIntroContent__top .titleBox .title p{
  @apply font-[JalnanGothic] font-normal text-[24px] leading-[28px] text-[#252525];
}
.serviceIntroContent__top .titleBox .title p strong{
  @apply font-[JalnanGothic] font-normal text-[#FF7139];
}
.serviceIntroContent__top .txtBox{
  @apply w-full rounded-[12px] bg-[#FFD6B8] p-[20px_8px] flex flex-col justify-start items-start gap-[8px];
}
.serviceIntroContent__top .txtBox .title{
  @apply w-full pl-[12px] font-[JalnanGothic] font-normal text-[14px] leading-[17px] text-[#9F5A0B];
}
.serviceIntroContent__top .txtBox .txt{
  @apply w-full flex flex-col justify-start items-start gap-[4px];
}
.serviceIntroContent__top .txtBox .txt p{
  @apply pl-[20px] relative font-semibold text-[14px] leading-[17px] text-[#674B18] before:content-[''] before:w-[3.5px] before:h-[3.5px] before:absolute before:rounded-full before:bg-[#674B18] before:left-[8px] before:top-[6px];
}
.serviceIntroContent__top .txtBox .txt p span{
  @apply font-extrabold;
}
.serviceIntroContent__bottom{
  @apply w-full pt-[32px] px-[12px] flex flex-col justify-start items-start gap-[32px];
}
.serviceIntroContent__bottom .txt{
  @apply px-[4px] w-full font-medium text-[14px] leading-[17px] text-[#6B6D95];
}
.serviceIntroContent__bottom .txt-group{
  @apply w-full flex flex-col justify-start items-center gap-[12px];
}
.serviceIntroContent__bottom .txt-group .title{
  @apply w-full px-[12px] font-[JalnanGothic] font-normal text-[16px] leading-[19px] text-[#2b2436] tracking-[3%];
}
.serviceIntroContent__bottom .txt-group .txtBox{
  @apply w-full bg-[#fff] rounded-[12px] p-[16px] flex flex-col justify-start items-start gap-[12px];
}
.serviceIntroContent__bottom .txt-group .txtBox p{
  @apply w-full font-medium text-[14px] leading-[17px] text-[#6B6D95];
}
.serviceIntroContent__bottom .txt-group .txtBox p span{
  @apply text-[#6F75F2];
}
</style>