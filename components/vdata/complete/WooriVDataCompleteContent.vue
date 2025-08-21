<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="vDataContent">
    <div class="vDataContent__img animate__animated animate__fadeInUp">
      <img width="140" src="~/assets/img/vdata/vData-complete-img.png">
    </div>
    <div class="vDataContent__notice animate__animated animate__fadeInUp animate__delay-01s">
      <strong :class="zoomClass">자! 수고하셨습니다.</strong>
      <p :class="zoomClass">
        이제 체험을 위한 모든 준비가 끝났습니다. <br />
        자 그럼 이제 진짜 AI피싱 체험을 시작해볼까요?
      </p>
    </div>
    <div class="vDataContent__tip animate__animated animate__fadeInUp animate__delay-02s">
      <span>체험 중 TIP</span>
      <div class="tip-box">
        <div class="tip">
          <img width="48" src="~/assets/img/vdata/tip-img01.png" alt="팁 이미지01">
          <div class="txt">
            <strong :class="zoomClass">체험 중 사용자 정보가 기억나지 않을 때</strong>
            <p :class="zoomClass">어떤 사람으로 체험하는지 알 수 있어요~</p>
          </div>
        </div>
        <div class="tip">
          <img width="48" src="~/assets/img/vdata/tip-img02.png" alt="팁 이미지02">
          <div class="txt">
            <strong :class="zoomClass">체험 중 글자가 너무 작거나 클 때</strong>
            <p :class="zoomClass">버튼을 눌러 체험 중에도 글자 크기를 조절할 수 있어요~</p>
          </div>
        </div>
      </div>
    </div>
    <div class="vDataContent__btn animate__animated animate__fadeInUp animate__delay-03s">
      <button class="fill" @click="goLink('/woori/code/vdata/ready')">이제 진짜 가상 체험 하러 출발!</button>
      <button @click="goLink('/woori/code/main')">AI 피싱 체험 메인으로 가기</button>
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
  @apply w-full p-[20px_20px] pb-[86px] bg-[url(~/assets/img/vdata/vData-bg.png)] bg-cover bg-center bg-no-repeat;
}
.vDataContent__img{
  @apply w-full flex justify-center items-center mb-[8px];
}
.vDataContent__notice{
  @apply w-full mb-[16px];
}
.vDataContent__notice strong{
  @apply block w-full text-center mb-[4px] font-[JalnanGothic] font-normal text-[20px] leading-[28px] text-[#7139FF];
}
.vDataContent__notice p{
  @apply w-full text-center font-[JalnanGothic] text-[14px] leading-[20px] text-[#2B2436];
}
.vDataContent__tip{
  @apply relative w-full p-[50px_20px_12px] rounded-[16px] bg-[#fff] border border-[#DEE1E6] mb-[20px];
}
.vDataContent__tip span{
  @apply absolute top-[8px] left-[8px] p-[7px_17px_5px] bg-[#ECEBFF] rounded-[12px] font-[JalnanGothic] font-normal text-[14px] leading-[17px] text-[#7139FF];
}
.vDataContent__tip .tip-box{
  @apply w-full flex flex-col justify-start items-start gap-[12px];
}
.vDataContent__tip .tip-box .tip{
  @apply w-full flex justify-start items-center gap-[15px];
}
.vDataContent__tip .tip-box .tip .txt{
  @apply flex flex-col justify-start items-start gap-[4px];
}
.vDataContent__tip .tip-box .tip .txt strong{
  @apply font-[JalnanGothic] font-normal text-[14px] leading-[17px] text-[#2B2436] tracking-[3%];
}
.vDataContent__tip .tip-box .tip .txt p{
  @apply font-semibold text-[14px] leading-[17px] text-[#6B6D95];
}
.vDataContent__btn{
  @apply w-full px-[4px] flex flex-col justify-start items-center gap-[16px];
}
.vDataContent__btn button{
  @apply w-full h-[50px] pt-[4px] bg-[#fff] rounded-[48px] border-[2px] border-[#AFB2EC] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.14)] font-[JalnanGothic] font-normal text-[16px] leading-[20px] tracking-[3%] text-[#7139FF];
}
.vDataContent__btn button.fill{
  @apply border-none bg-[#6B4EFF] text-[#fff];
}
</style>