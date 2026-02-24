<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="spContent">
    <div class="title">안내</div>
    <div class="tabContent">
      <div class="box">
        <p>
          ① 보험은 신청 다음 날부터 적용되며, 최근 1년 내 AI 피싱 체험 5종 완료 시에만 보상됩니다.<br /><br />
          ② 30일 빠른 AI 피싱예방체험 무제한
        </p>
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
.spContent{
  @apply w-full mb-[32px];
}
.tab-group{
  @apply w-full flex justify-start items-center gap-[12px] mb-[16px];
}
.tab-group button{
  @apply w-[100px] h-[44px] rounded-[24px] border border-[#C0B8E8] bg-[#fff] font-bold text-[16px] leading-[20px] text-[#C0B8E8];
  transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
}
.tab-group button.active{
  @apply bg-[#7139FF] text-[#fff] border-[#7139FF];
}
.tab-content{
  @apply w-full;
}
.box{
  @apply p-[16px] border border-[#E3E0F9] rounded-[10px] bg-[#fff];
}
.box p{
  @apply font-normal text-[12px] leading-[14px] text-[#6B6D95];
}
.box p strong{
  @apply font-extrabold;
}
</style>