<template>
  <div class="introContent">
    <div class="swiper introSwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="title">
            보이스 피싱,<br />
            당신은 안전할까요?
          </div>
          <div class="txt">철저한 대비만이 우리의 재산을<br />지킵니다.</div>
        </div>
        <div class="swiper-slide">
          <div class="title">하마터면 당할 뻔!</div>
          <div class="txt">방심은 금물, 지금 바로 대비하세요.</div>
        </div>
        <div class="swiper-slide">
          <div class="title">
            누구나 속지만,<br />
            준비된 사람은 다릅니다.
          </div>
          <div class="txt">AI 시뮬레이션으로 피싱의 위험에서 <br />벗어나세요.</div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div class="start-btn">
      <button @click="goLink('/main')">체험을 시작하세요</button>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.initializeSwiper()
  },
  methods: {
    goLink(path) {
      this.$router.push(path)
    },
    initializeSwiper() {
      this.swiper = new window.Swiper('.introSwiper', {
        slidesPerView: '1',
        spaceBetween: 0,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      })
    },
  }
}
</script>

<style scoped>
.introContent{
  @apply w-full flex flex-col justify-start items-center gap-[68px] bg-[#0F172A];
}
.introSwiper{
  @apply w-full h-[592px];
}
.swiper-slide{
  @apply w-full relative px-[24px] pt-[122px] bg-center bg-[length:100%] bg-no-repeat bg-fixed flex flex-col items-start gap-[20px];
}
.swiper-slide:nth-child(1){
  @apply bg-[url(~/assets/img/intro/intro-bg01.png)] justify-start;
}
.swiper-slide:nth-child(2){
  @apply bg-[url(~/assets/img/intro/intro-bg02.png)] justify-center pb-[40px];
}
.swiper-slide:nth-child(3){
  @apply bg-[url(~/assets/img/intro/intro-bg03.png)] justify-center pb-[92px];
}
.swiper-slide .title{
  @apply font-[JalnanGothic] text-[#fff] text-[32px] font-normal leading-[42px] tracking-[-2px];
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.40);
  font-feature-settings: 'liga' off, 'clig' off;
}
.swiper-slide .txt{
  @apply text-[#fff] text-[20px] font-medium leading-[24px] tracking-[-0.4px];
  text-shadow: 0px 1px 2.8px rgba(0, 0, 0, 0.40);
}
.swiper-pagination{
  @apply w-auto px-[9px] left-[50%] translate-x-[-50%] bottom-[16px] rounded-[16px] bg-[rgba(15,23,42,0.5)];
}
.start-btn{
  @apply w-full flex justify-center items-center px-[40px] pb-[68px];
}
.start-btn button{
  @apply w-full h-[52px] border-[2px] border-[#7139FF] bg-[#0F172A] rounded-[10px] text-[#D1BCFF] text-[18px] font-normal leading-[20px] font-[JalnanGothic] pt-[3px];
}
</style>