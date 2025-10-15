<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="spContent">
    <div class="btn-group">
      <button>앱으로 지금 시작하기</button>
      <button>요금제 보기</button>
      <button>카카오톡 상담</button>
    </div>

    <div class="p-intro">
      <div 
        v-for="(item, idx) in boxes" 
        :key="idx" 
        class="box"
      >
        <img :width="item.width" :src="require(`~/assets/img/safeplus/${item.img}`)">
        <div class="title" v-html="item.title"></div>
        <div class="txt" v-html="item.txt"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      boxes: [
        {
          img: 'sp-pbox-img01.png',
          width: '57',
          title: '30일<br>선공개',
          txt: '30일 먼저 최신 보이스피싱 시나리오를 체험하고, 30일 먼저 예방합니다'
        },
        {
          img: 'sp-pbox-img02.png',
          width: '98',
          title:'최대 500만원<br>보장 보험 제공',
          txt: '30일 먼저 최신 보이스피싱 시나리오를 체험하고, 30일 먼저 예방합니다'
        },
        {
          img: 'sp-pbox-img03.png',
          width: '56',
          title: '심리적<br>안정',
          txt: '경제적 보장을 넘어 심리적 충격까지 완화시켜드립니다'
        },
        {
          img: 'sp-pbox-img04.png',
          width: '66',
          title: '예방+<br>보장 패키지',
          txt: '실속형 가격, 프리미엄 <br>혜택 : 월 2,750원꼴'
        }
      ]
    }
  }
}
</script>

<style scoped>
.spContent{
  @apply w-full;
}
.spContent .btn-group{
  @apply w-full flex flex-col justify-center items-center gap-[16px] px-[24px] mb-[44px];
}
.spContent .btn-group button{
  @apply w-full h-[52px] border-2 border-[#AFB2EC] rounded-[48px] bg-[#fff] font-[JalnanGothic] font-normal text-[16px] leading-[20px] text-[#7139FF] pt-[3px] tracking-wide first:border-[#6B4EFF] first:bg-[#6B4EFF] first:text-[#fff] last:border-[#FEE500] last:bg-[#FEE500] last:text-[#12177A];
  box-shadow: 0px 4px 4px 0px #00000024;
}
.spContent .p-intro{
  @apply w-full px-[16px] grid grid-cols-2 gap-[20px];
}
.spContent .p-intro .box{
  @apply w-full h-[202px] p-[12px] rounded-[12px] bg-[#fff] flex flex-col justify-between items-center gap-[15px];
  box-shadow: 0px 0px 8px 0px #00000014;
}
.spContent .p-intro .box .title{
  @apply text-center font-[JalnanGothic] font-normal text-[18px] leading-[21px] text-[#2B2436];
}
.spContent .p-intro .box .txt{
  @apply text-center font-medium text-[12px] leading-[14px] text-[#6B6D95];
}
</style>