<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="vDataContent">
    <div class="vDataContent__img animate__animated animate__fadeInUp">
      <img width="145" src="~/assets/img/vdata/vData-user-img.png">
    </div>
    <div class="vDataContent__notice animate__animated animate__fadeInUp animate__delay-01s">
      <p :class="zoomClass">
        체험에서 사용할 <span>가상 사용자 정보가 생성</span> 되었어요. <br />
        이 정보는 허구의 사용자 정보로 <span>실제 개인정보는 들어가 있지 않아요.</span>
      </p>
    </div>
    <div class="vDataContent__info animate__animated animate__fadeInUp animate__delay-02s">
      <div class="title" :class="zoomClass">🗒️ 가상 사용자 정보</div>
      <div class="info-box">
        <div class="info">
          <span :class="zoomClass">이름</span>
          <p :class="zoomClass"><strong>김철수</strong></p>
        </div>
        <div class="info">
          <span :class="zoomClass">주민등록번호</span>
          <p :class="zoomClass"><strong>123456-1234567</strong></p>
        </div>
        <div class="info">
          <span :class="zoomClass">대출 현황</span>
          <p :class="zoomClass"><strong>5,000만원</strong> 한강저축은행</p>
        </div>
      </div>
    </div>
    <div class="vDataContent__btn animate__animated animate__fadeInUp animate__delay-03s">
      <button class="fill" @click="goLink('/woori/code/vdata/complete')">다음 단계 넘어가기</button>
      <button @click="goLink('/woori/code/vdata')">가상 정보 다시 고를래요</button>
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
  },
  methods: {
    goLink(path) {
      this.$router.push(path)
    }
  }
}
</script>

<style scoped>
.vDataContent{
  @apply w-full pb-[86px] bg-[url(~/assets/img/vdata/vData-bg.png)] bg-cover bg-center bg-no-repeat;
}
.vDataContent__img{
  @apply w-full flex justify-center items-center mb-[9px];
}
.vDataContent__notice{
  @apply w-full mb-[16px] px-[24px];
}
.vDataContent__notice p{
  @apply w-full text-center font-[JalnanGothic] text-[16px] leading-[22px] text-[#2B2436];
}
.vDataContent__notice p span{
  @apply font-[JalnanGothic] text-[#7139FF];
}
.vDataContent__info{
  @apply w-full p-[20px] flex flex-col justify-center items-center gap-[12px] mb-[20px];
  background: linear-gradient(125.37deg, #8789F6 27.74%, #4F71F0 89.24%);
}
.vDataContent__info .title{
  @apply font-[JalnanGothic] font-normal text-[18px] leading-[20px] text-[#fff];
}
.vDataContent__info .info-box{
  @apply w-full p-[16px_20px] rounded-[16px] flex flex-col gap-[8px] justify-start items-start bg-[#fff] shadow-[0px_1px_8px_0px_rgba(45,39,80,0.2)];
}
.vDataContent__info .info-box .info{
  @apply flex justify-start items-start gap-[12px];
}
.vDataContent__info .info-box .info span{
  @apply min-w-[75px] font-extrabold text-[14px] leading-[24px] text-[#7139FF];
}
.vDataContent__info .info-box .info p{
  @apply font-semibold text-[14px] leading-[17px] text-[#2B2436];
}
.vDataContent__info .info-box .info p strong{
  @apply font-extrabold text-[20px] leading-[20px] text-[#2B2436];
}
.vDataContent__btn{
  @apply w-full px-[24px] flex flex-col justify-start items-center gap-[16px];
}
.vDataContent__btn button{
  @apply w-full h-[50px] pt-[4px] bg-[#fff] rounded-[48px] border-[2px] border-[#AFB2EC] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.14)] font-[JalnanGothic] font-normal text-[16px] leading-[20px] tracking-[3%] text-[#7139FF];
}
.vDataContent__btn button.fill{
  @apply border-none bg-[#6B4EFF] text-[#fff];
}
</style>