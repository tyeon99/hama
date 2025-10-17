<template>
  <div class="lineBanner">
    <div class="left">
      <img width="20" src="~/assets/img/common/line-banner-img.png">
      <p>오늘도 <strong>137</strong>명이 피해를 입었습니다.</p>
    </div>
    <div class="right">
      <p>평균 피해액&nbsp; <strong>625</strong>만원</p>
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
.lineBanner{
  @apply w-full h-[36px] px-[20px] flex justify-between items-center bg-[#43496F];
}
.lineBanner .left{
  @apply flex justify-start items-center gap-[4px]
}
.lineBanner .left p{
  @apply font-medium text-[11px] leading-[13px] text-[#fff];
}
.lineBanner .left p strong{
  @apply font-extrabold;
}
.lineBanner .right{
  @apply font-mono text-[12px] leading-[14px] text-[#FF8A8A];
}
.lineBanner .right strong{
  @apply font-extrabold;
}
</style>