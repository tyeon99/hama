<template>
  <div class="downLoadContent">
    <div class="downLoadContent__top">
      <div class="titleBox">
        <div class="title">
          <span>앱 다운로드</span>
          <img width="120" src="~/assets/img/guide/guide_top-txt01.png" alt="TRY ON MOBILE">
          <p>하마터면 <strong>다운로드</strong></p>
        </div>
      </div>
      <div class="imgBox">
        <img width="327" src="~/assets/img/guide/guide_download.png">
      </div>
    </div>
    <div class="downLoadContent__bottom">
      <button class="download">
        <img width="202" src="~/assets/img/guide/guide_download-button.png" alt="다운로드 버튼">
      </button>
      <div class="copyright">
        Copyright since 1999 © ThinkPool Co.,Ltd. All Rights
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
.downLoadContent{
  @apply w-full h-[calc(100dvh-59px)] bg-[#F7F5FF] pb-[98px];
}
.downLoadContent__top{
  @apply w-full bg-[#FFD6D6] shadow-[0px_0px_2px_0px_rgba(23,26,31,0.12)] p-[28px_36px_0px_8px];
}
.downLoadContent__top .titleBox{
  @apply w-full px-[20px] flex justify-between items-end mb-[20px];
}
.downLoadContent__top .titleBox .title{
  @apply flex flex-col justify-start items-start gap-[20px];
}
.downLoadContent__top .titleBox .title span{
  @apply inline-block p-[6px_12px_5px] bg-[#FF8C3A] rounded-[16px] font-bold text-[14px] leading-[17px] text-[#fff];
}
.downLoadContent__top .titleBox .title p{
  @apply font-[JalnanGothic] font-normal text-[32px] leading-[28px] text-[#242424];
}
.downLoadContent__top .titleBox .title p strong{
  @apply font-[JalnanGothic] font-normal gradient-text;
}
.gradient-text {
  background: linear-gradient(180deg, #8B64F8 0%, #5D68FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}
.downLoadContent__top .imgBox img{
  @apply w-full;
}
.downLoadContent__bottom{
  @apply w-full pt-[28px] pb-[94px] px-[18px] flex flex-col justify-between items-center gap-[28px];
}
.downLoadContent__bottom .download{
  @apply w-full flex flex-col justify-start items-center;
}
.downLoadContent__bottom .copyright{
  @apply w-full text-center font-medium text-[12px] leading-[14px] text-[#6B6D95];
}
</style>