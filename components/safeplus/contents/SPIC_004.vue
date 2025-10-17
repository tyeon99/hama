<template>
  <div class="spContent">
    <div class="title" :class="zoomClass">특히 이런 분들께 필요합니다.</div>
    <div class="txt" :class="zoomClass">가장 소중한 분께, 안심플러스를 선물하세요.</div>
    <div class="box-group">
      <div
        v-for="(item, idx) in boxes"
        :key="idx"
        class="box"
      >
        <div class="top">
          <img :width="item.width" :src="require(`~/assets/img/safeplus/${item.img}`)">
          <div class="per">
            <p>
              <span>위험도</span><br />
              <strong>{{ item.per }}</strong><span>%</span>
            </p>
          </div>
        </div>
        <div class="bottom">
          <strong :class="zoomClass">{{ item.strong }}</strong>
          <p :class="zoomClass">{{ item.p }}</p>
          <em :class="zoomClass">{{ item.em }}</em>
          <span :class="zoomClass">{{ item.span }}</span>
        </div>
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
          img: 'sp-pbox-img09.png',
          width: '101',
          per: '87',
          strong: '60대 이상 부모님',
          p: '“고령층 부모님, 전화 금융사기에 반복적으로 노출”',
          em: '(머니투데이, 2021)',
          span: '평균 피해액 890만원, 반복 피해 확률 높음'
        },
        {
          img: 'sp-pbox-img10.png',
          width: '141',
          per: '72',
          strong: '20대 사회초년생',
          p: '“사회초년생, 경험 부족으로 보이스피싱 피해 다수”',
          em: '(연합뉴스, 2024)',
          span: '평균 피해액 420만원, 경제활동 시작기 타격'
        },
        {
          img: 'sp-pbox-img11.png',
          width: '91',
          per: '68',
          strong: '자영업자·소상공인',
          p: '“자영업자, 대출·세금 연체 빌미 보이스피싱 증가”',
          em: '(연합뉴스, 2024)',
          span: '평균 피해액 420만원, 경제활동 시작기 타격'
        },
        {
          img: 'sp-pbox-img12.png',
          width: '75',
          per: '77',
          strong: '그리고 "하마터면 나도!"',
          p: '“누구나 당할 수 있다! 사칭 보이스피싱”',
          em: '(대한민국 정책브리핑, 2023)'
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
  }
}
</script>

<style scoped>
.spContent{
  @apply w-full px-[16px];
}
.spContent .title{
  @apply font-[JalnanGothic] font-normal text-[20px] leading-[24px] text-[#2B2436] mb-[8px] text-center;
}
.spContent .txt{
  @apply w-full text-center mb-[24px] font-semibold text-[16px] leading-[20px] text-[#6B6D95];
}
.spContent .box-group{
  @apply w-full flex flex-col justify-start items-center gap-[16px];
}
.spContent .box-group .box{
  @apply w-full bg-[#DCE8FF] p-[16px_12px_14px] rounded-[16px] flex flex-col justify-center items-center gap-[16px];
  box-shadow: 0px 0px 8px 0px #00000014;
}
.spContent .box-group .box .top{
  @apply w-full px-[calc((100%-243px)/2)] flex justify-between items-end;
}
.spContent .box-group .box .top .per{
  @apply w-[61px] h-[61px] flex justify-center items-center bg-[#FF2E7B] rounded-[8px];
}
.spContent .box-group .box .top .per span{
  @apply font-[JalnanGothic] font-normal text-[12px] leading-[15px] text-[#fff];
}
.spContent .box-group .box .top .per strong{
  @apply font-[JalnanGothic] font-normal text-[20px] leading-[18px] text-[#fff];
}
.spContent .box-group .box .bottom{
  @apply w-full flex flex-col justify-center items-center gap-[8px];
}
.spContent .box-group .box .bottom strong{
  @apply font-extrabold text-[20px] leading-[24px] text-[#061C3D];
}
.spContent .box-group .box .bottom p{
  @apply font-medium text-[16px] leading-[19px] text-[#6B6D95];
}
.spContent .box-group .box .bottom em{
  @apply font-extrabold text-[12px] leading-[14px] text-[#6B6D95];
}
.spContent .box-group .box .bottom span{
  @apply font-bold text-[14px] leading-[17px] text-[#FF2E7B];
}
</style>