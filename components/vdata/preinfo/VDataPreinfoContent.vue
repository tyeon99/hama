<template>
  <div class="vDataContent">
    <div class="w-full">
      <div class="vDataContent__title animate__animated animate__fadeInUp">
        <span>사전 상황</span> 설명
      </div>
      <div class="vDataContent__preinfo animate__animated animate__fadeInUp animate__delay-01s">
        <!-- 사전상황 내용 -->
      </div>
    </div>
    <div class="vDataContent__btn animate__animated animate__fadeInUp animate__delay-02s">
      <button>확 인</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    fontSizePercent() {
      return this.$store.state.font.fontSizePercent
    },
    zoomClass() {
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
.vDataContent {
  @apply w-full h-[100dvh] p-[40px_20px] bg-[url(~/assets/img/vdata/vData-bg.png)] bg-cover bg-center bg-no-repeat flex flex-col justify-between items-start;
}
.vDataContent__title{
  @apply w-full mb-[24px] font-[JalnanGothic] text-[20px] leading-[20px] text-[#2B2436] font-normal;
}
.vDataContent__title span{
  @apply font-[JalnanGothic] text-[#7139FF];
}
.vDataContent__preinfo{
  @apply w-full p-[20px] rounded-[16px] bg-[#fff] mb-[24px];
}
.vDataContent__btn{
  @apply w-full px-[4px] flex flex-col justify-start items-center gap-[16px];
}
.vDataContent__btn button{
  @apply w-full h-[52px] pt-[4px] bg-[#fff] rounded-[48px] border-[2px] border-[#AFB2EC] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.14)] font-[JalnanGothic] font-normal text-[16px] leading-[20px] tracking-[3%] text-[#7139FF];
}
</style>