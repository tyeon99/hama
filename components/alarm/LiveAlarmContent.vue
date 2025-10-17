<template>
  <div class="liveAlarmContent">
    <div class="app-download">
      <button>
        <img width="25" src="~/assets/img/alarm/app-download.png">
        <span>하마터면 안드로이드 앱 다운로드 바로가기</span>
      </button>
    </div>

    <component
      :is="content"
      v-for="(content, idx) in contents"
      :key="idx"
    />

    <div class="note">
      <p>
        <strong :class="zoomClass">㈜씽크풀 </strong>
        <span :class="zoomClass">사업자 등록번호 116-81-54775</span>
        <span :class="zoomClass">대표 : 김동진</span>
      </p>
      <p>
        <strong :class="zoomClass">안심플러스 고객센터</strong>
        <button>
          <img width="18" src="~/assets/img/safeplus/kakao-logo.png">
          <em :class="zoomClass">카카오채널 채팅문의</em>
        </button>
      </p>
    </div>
  </div>
</template>

<script>
import LAC001 from '~/components/alarm/contents/LAC_001'
import LAC002 from '~/components/alarm/contents/LAC_002'

export default {
  data() {
    return {
      contents: [LAC001, LAC002]
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
.liveAlarmContent{
  @apply w-full flex flex-col justify-start items-center gap-[52px] p-[24px_8px_118px];
}
.app-download{
  @apply w-full px-[8px];
}
.app-download button{
  @apply w-full gradient-border rounded-[10px] bg-[#090914] flex justify-start items-center gap-[12px] p-[16px_20px];
}
.app-download button span{
  @apply font-extrabold text-[16px] leading-[20px] text-[#fff];
}
.gradient-border {
  border: 1px solid transparent;
  background-image: linear-gradient(#090914, #090914),
    linear-gradient(98.24deg, #6DDCFF 0%, #7F60F9 100%);
  background-origin: border-box;
  background-clip: padding-box, border-box;
}
.liveAlarmContent .note{
  @apply w-full flex flex-col justify-start items-center gap-[8px];
}
.liveAlarmContent .note p{
  @apply w-full flex justify-center items-center gap-[12px];
}
.liveAlarmContent .note p strong{
  @apply font-extrabold text-[11px] leading-[13px] text-[#ABADC5];
}
.liveAlarmContent .note p span{
  @apply font-medium text-[11px] leading-[13px] text-[#ABADC5];
}
.liveAlarmContent .note p button{
  @apply flex justify-start items-center gap-[12px]
}
.liveAlarmContent .note p button em{
  @apply font-medium text-[11px] leading-[13px] text-[#7139FF];
}
</style>