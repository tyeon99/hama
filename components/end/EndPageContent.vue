<template>
  <div class="endPageContent">
    <!-- 시나리오 별 배경이미지 's001 ~ s012' -->
    <div class="endPageContent__top s001">
      <span class="cat cat01">가족사칭</span>
      <div class="title text-truncate2" :class="zoomClass">엄마 나 납치됐어!! 빨리 도와줘!!!</div>
      <div class="txt text-truncate2" :class="zoomClass">
        딸의 이름으로 저장된 전화가 걸려..딸의 이름으로 저장된 전화가 걸려..
      </div>
    </div>
    <!-- endPageContent__top -->
    <div class="endPageContent__bottom">
      <!-- 체험 결과 -->
      <!--무방비 상태-->
      <DefenselessState />  
      <!--취약한 방어-->
      <!-- <VulnerableDefense />  -->
      <!--불완전한 방어-->
      <!-- <UnstableDefense />  -->
      <!--강화된 방어-->
      <!-- <EnhancedDefense />  -->
      <!--강력한 방어-->
      <!-- <StrongDefense />  -->
      <!--최상급 방어-->
      <!-- <EliteDefense />   -->
      <!--절대 방어-->
      <!-- <AbsoluteDefense />  -->
      <!-- 체험 결과 -->

      <div class="card-group">
        <div
          v-for="(card, idx) in cards"
          :key="idx"
          class="card"
        >
          <div class="title">
            <img width="24" :src="card.icon" :alt="card.title" />
            <span :class="zoomClass">{{ card.title }}</span>
          </div>
          <div class="txtBox" :class="zoomClass">
            <p
              v-for="(txt, pidx) in card.contents"
              :key="pidx"
            >{{ txt }}</p>
          </div>
        </div>

        <!-- 동영상 -->
        <div class="card">
          <div class="title">
            <img width="24" src="~/assets/img/end/card-icon04.png" alt="동영상">
            <span :class="zoomClass">동영상</span>
          </div>
          <div class="video-group">
            <div class="video">
              <iframe
                width="100%"
                height="200"
                src="https://www.youtube.com/embed/Ip4KRdOfjx4"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <!-- card-group -->
      <div class="endPageContent__btn">
        <button class="fill" @click="goLink('/main')">다른 AI 피싱 체험하기</button>
        <button>이 체험 다시 해보기</button>
      </div>
    </div>
  </div>
</template>

<script>
import DefenselessState from '~/components/end/result/DefenselessState'
// import VulnerableDefense from '~/components/end/result/VulnerableDefense'
// import UnstableDefense from '~/components/end/result/UnstableDefense'
// import EnhancedDefense from '~/components/end/result/EnhancedDefense'
// import StrongDefense from '~/components/end/result/StrongDefense'
// import EliteDefense from '~/components/end/result/EliteDefense'
// import AbsoluteDefense from '~/components/end/result/AbsoluteDefense'

export default {
  components: {
    DefenselessState,
    // VulnerableDefense,
    // UnstableDefense,
    // EnhancedDefense,
    // StrongDefense,
    // EliteDefense,
    // AbsoluteDefense
  },
  data() {
    return {
      cards: [
        {
          icon: require('~/assets/img/end/card-icon01.png'),
          title: '사기수법과 예상피해',
          contents: [
            '자녀 이름으로 저장된 번호로 전화하거나 국제전화 또는 발신번호 조작으로 진짜 자녀처럼 속임',
            '울먹이는 자녀의 목소리로 납치 상황을 연출',
            '자녀의 실제 신상정보(이름, 생일, 학교 등)를 언급해 신뢰 유도',
            '폭력·장기 적출 등 생명 위협 표현으로 극심한 공포심 조성',
            '“지금 당장 결정하라”며 이성적인 판단을 방해하는 시간 압박',
            '피해자는 금전적 손해와 심리적 충격을 입을 수 있습니다.'
          ]
        },
        {
          icon: require('~/assets/img/end/card-icon02.png'),
          title: '대처법',
          contents: [
            '즉시 자녀에게 다른 수단(영상통화 등)으로 직접 연락해 확인​',
            '혼자 판단하지 말고 지인, 가족, 경찰과 즉시 공유​',
            '통화 중에는 감정 조절하며 최대한 녹음 또는 캡처​',
            '전화가 의심되면 절대 송금하지 말고, 금융감독원(1332) 또는 경찰(112)에 신고'
          ]
        },
        {
          icon: require('~/assets/img/end/card-icon03.png'),
          title: '예방법',
          contents: [
            '자녀 정보((학교, 생일, 사진 등)는 SNS·단체방에 노출 최소화​',
            '긴급 상황을 미리 가족 간에 정해진 방식으로 확인하기로 약속​ (예: 암구호 또는 특정 질문으로 본인 확인 등)',
            '국제전화, 저장된 이름의 낯선 발신번호는 항상 의심하기​'
          ]
        }
      ]
    }
  },
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
  },
  methods: {
    goLink(path) {
      this.$router.push(path)
    }
  }
}
</script>

<style scoped>
.endPageContent{
  @apply w-full bg-[#798DFF] pb-[112px];
}
.endPageContent__top{
  @apply relative w-full p-[48px_16px_77px] bg-center bg-cover bg-no-repeat;
}
.endPageContent__top .cat{
  @apply top-[10px] right-[7px] rounded-[12px];
}
.endPageContent__top .title{
  @apply font-extrabold text-[22px] leading-[29px] text-[#fff] mb-[8px];
}
.endPageContent__top .txt{
  @apply font-medium text-[13px] leading-[16px] text-[#fff];
}
.endPageContent__bottom{
  @apply w-full px-[12px];
}
.endPageContent__bottom .card-group{
  @apply w-full pt-[14px] mb-[46px] flex flex-col justify-start items-start gap-[40px];
}
.endPageContent__bottom .card-group .card{
  @apply w-full flex flex-col justify-start items-start gap-[16px];
}
.endPageContent__bottom .card-group .card .title{
  @apply w-full pl-[4px] flex justify-start items-center gap-[8px];
}
.endPageContent__bottom .card-group .card .title span{
  @apply font-[JalnanGothic] font-normal text-[16px] leading-[19px] text-[#fff];
}
.endPageContent__bottom .card-group .card .txtBox{
  @apply w-full bg-[#F5FAFF] p-[16px] rounded-[12px] flex flex-col justify-start items-start gap-[8px];
}
.endPageContent__bottom .card-group .card .txtBox p{
  @apply w-full pl-[20px] relative font-medium text-[14px] leading-[17px] text-[#6B6D95] before:content-[''] before:absolute before:left-[7px] before:top-[7px] before:w-[3px] before:h-[3px] before:bg-[#6B6D95] before:rounded-full;
}
.endPageContent__bottom .card-group .card .video-group {
  @apply w-full flex flex-col justify-start items-center gap-[20px];
}
.endPageContent__bottom .card-group .card .video-group .video{
  @apply w-full;
}
.endPageContent__btn{
  @apply w-full px-[4px] flex flex-col justify-start items-center gap-[16px];
}
.endPageContent__btn button{
  @apply w-full h-[52px] pt-[4px] bg-[#fff] rounded-[48px] border-[2px] border-[#AFB2EC] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.14)] font-[JalnanGothic] font-normal text-[16px] leading-[20px] tracking-[3%] text-[#7139FF];
}
.endPageContent__btn button.fill{
  @apply border-none bg-[#FFE14E];
}

/* 글자크기 */
.endPageContent__bottom .card-group .card .txtBox.zoom-07, .endPageContent__bottom .card-group .card .txtBox.zoom-08, .endPageContent__bottom .card-group .card .txtBox.zoom-09, .endPageContent__bottom .card-group .card .txtBox.zoom-11, .endPageContent__bottom .card-group .card .txtBox.zoom-12, .endPageContent__bottom .card-group .card .txtBox.zoom-13{
  zoom: 1;
}
.endPageContent__bottom .card-group .card .txtBox.zoom-07 p{
  zoom: 0.7;
}
.endPageContent__bottom .card-group .card .txtBox.zoom-08 p{
  zoom: 0.8;
}
.endPageContent__bottom .card-group .card .txtBox.zoom-09 p{
  zoom: 0.9;
}
.endPageContent__bottom .card-group .card .txtBox.zoom-11 p{
  zoom: 1.1;
}
.endPageContent__bottom .card-group .card .txtBox.zoom-12 p{
  zoom: 1.2;
}
.endPageContent__bottom .card-group .card .txtBox.zoom-13 p{
  zoom: 1.3;
}
</style>