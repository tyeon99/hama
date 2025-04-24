<template>
  <div class="kakaoContent">
    <div class="left">
      <div class="back">
        <img width="24" src="~/assets/img/chat/messages/back-icon.png" alt="뒤로가기">
      </div>
      <div class="profile" :class="zoomClass">
        신사임당
        <!-- 3인 이상일 때 -->
        <!-- 그룹채팅 3 -->
      </div>
    </div>
    <div class="right">
      <img width="18" src="~/assets/img/chat/kakao/kakao-icon01.png">
      <img width="18" src="~/assets/img/chat/kakao/kakao-icon02.png">
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
.kakaoContent{
  @apply w-full h-[64px] bg-[#A5C0E2] flex justify-between items-center fixed top-0 left-0 right-0 max-w-[480px] m-[0_auto] z-[996] px-[16px];
}
.kakaoContent .right{
  @apply flex justify-end items-center gap-[16px];
}
.kakaoContent .left{
  @apply flex justify-start items-center gap-[8px];
}
.kakaoContent .left .profile{
  @apply font-semibold text-[18px] leading-[20px] text-[#2B2436];
}
</style>