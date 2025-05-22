<template>
  <div :class="['chatVoiceAnimation', 'animate__animated', 'animate__faster', isModalAni]">

    <div class="chatVoiceAnimation__wrapper">
      <div
        v-if="voiceOn"
        class="wave-group animate__animated animate__faster animate__zoomIn"
      >
        <div class="wave wave1"></div>
        <div class="wave wave2"></div>
        <div class="wave wave3"></div>
        <div class="wave wave4"></div>
      </div>

      <div class="circle">듣는 중입니다.</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isModalAni: {
      type: String,
      default: 'animate__zoomIn'
    }
  },
  data() {
    return {
      voiceOn: false
    }
  },
  mounted() {
    setTimeout(() => {
      // 보이스 인식 됐을 때 나옴
      this.voiceOn = true
    }, 1000)
  }
}
</script>

<style scoped>
.chatVoiceAnimation{
  @apply fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[999] bg-transparent flex justify-center items-center;
}
.circle{
  @apply relative w-[180px] h-[180px] rounded-full bg-[#333] flex justify-center items-center font-medium text-[20px] leading-[34px] tracking-[-0.4px] text-[#fff] z-[99];
}
.chatVoiceAnimation__wrapper{
  @apply relative;
}
</style>