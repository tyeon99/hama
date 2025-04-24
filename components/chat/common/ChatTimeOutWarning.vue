<template>
  <div
    class="chatTimeOutWarning animate__animated animate__faster"
    :class="{
      animate__fadeInUp: isOffcanvasAni,
      animate__fadeOutDown: !isOffcanvasAni,
    }"
  >
    <div class="chatTimeOutWarning__box">
      <img width="40" src="~/assets/img/common/chat_warning-icon.png" alt="경고">
      <p :class="zoomClass">
        오랫동안 응답이 없어 대화가 잠시 멈췄어요. 계속하시려면 메시지를 입력해 주세요. <br />
        10분 동안 입력이 없으면 체험이 자동 종료됩니다.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOffcanvasAni: {
      type: Boolean,
      default: false
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
.chatTimeOutWarning{
  @apply fixed left-0 right-0 bottom-[175px] z-[999] bg-transparent w-full px-[12px];
}
.chatTimeOutWarning__box{
  @apply bg-[rgba(30,18,72,0.75)] w-full p-[14px_8px_14px_16px] flex justify-start items-start gap-[12px] rounded-[4px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.3)];
}
.chatTimeOutWarning__box p{
  @apply font-normal text-[14px] leading-[20px] text-[#fff];
}
</style>