<template>
  <div class="liveAlarmTop">
    <div class="left">
      <div class="title">실시간 알림 안내</div>
      <div class="txt" :class="zoomClass">
        앱을 사용하시면 새로운 정보가<br />
        등록될 때마다 실시간으로 알려드립니다.
      </div>
    </div>
    <div class="right">
      <img width="111" src="~/assets/img/alarm/livealarm-img.png">
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
.liveAlarmTop{
  @apply w-full bg-[#FFE8AF] flex justify-between items-center p-[28px_12px_24px_24px];
  box-shadow: 0px 0px 1px 0px #171A1F12;
  box-shadow: 0px 0px 2px 0px #171A1F1F;
}
.liveAlarmTop .title{
  @apply mb-[12px] font-[JalnanGothic] font-normal text-[24px] leading-[28px] text-[#2B2436];
}
.liveAlarmTop .txt{
  @apply font-medium text-[14px] leading-[17px] text-[#D18324];
}
</style>