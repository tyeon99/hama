<template>
  <div class="safePlusIntroContent">

    <!-- 배너 -->
    <SPICBanner />

    <component
      :is="content"
      v-for="(content, idx) in contents"
      :key="idx"
    />

    <div class="subscribe-btn">
      <button>구독 신청하기</button>
    </div>

    <div class="notice">
      <div class="box">
        <div class="title">NOTICE</div>
        <div class="txt">
          <p>유사한 보상 서비스를 여러 개 가입했더라도 비례 보상 원칙에 따라 실제 손해 비용 내에서 나누어 지급되며, 상세 내용은 서비스 이용약관에 따릅니다.</p>
          <p>보상서비스는 가입자에게 무료로 제공하는 서비스로 서비스 공급사인 (주)씽크풀의 사정에 따라 변경 또는 종료될 수 있으며, 그 내용을 사전에 알려드립니다.</p>
        </div>
      </div>
    </div>

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
import SPICBanner from '~/components/safeplus/contents/SPIC_banner'
import SPIC001 from '~/components/safeplus/contents/SPIC_001'
import SPIC002 from '~/components/safeplus/contents/SPIC_002'
import SPIC003 from '~/components/safeplus/contents/SPIC_003'
import SPIC004 from '~/components/safeplus/contents/SPIC_004'

export default {
  components: {
    SPICBanner
  },
  data() {
    return {
      contents: [SPIC001, SPIC002, SPIC003, SPIC004]
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
.safePlusIntroContent{
  @apply w-full flex flex-col justify-start items-center p-[30px_0px_118px];
}
.subscribe-btn {
  @apply w-full py-10 px-6;
}
.subscribe-btn button{
  @apply w-full h-[52px] px-2 bg-[#6B4EFF] rounded-[48px] pt-[3px] font-[JalnanGothic] font-normal text-[16px] leading-[19px] text-[#fff];
  box-shadow: 0px 4px 4px 0px #00000024;
}
.notice{
  @apply px-4 pb-[55px] w-full;
}
.notice .box{
  @apply w-full bg-[#EDEBFE] rounded-[10px] p-4
}
.notice .box .title{
  @apply pl-2 font-bold text-[13px] leading-[18px] text-[#6B6D95] mb-2;
}
.notice .box .txt{
  @apply w-full flex flex-col justify-start items-start gap-2;
}
.notice .box .txt p{
  @apply relative w-full pl-[7px] font-medium text-[13px] leading-[18px] text-[#6B6D95] before:content-[''] before:absolute before:left-0 before:top-[6px] before:w-[2.5px] before:h-[2.5px] before:rounded-full before:bg-[#6B6D95];
}
.safePlusIntroContent .note{
  @apply w-full flex flex-col justify-start items-center gap-[8px];
}
.safePlusIntroContent .note p{
  @apply w-full flex justify-center items-center gap-[12px];
}
.safePlusIntroContent .note p strong{
  @apply font-extrabold text-[11px] leading-[13px] text-[#ABADC5];
}
.safePlusIntroContent .note p span{
  @apply font-medium text-[11px] leading-[13px] text-[#ABADC5];
}
.safePlusIntroContent .note p button{
  @apply flex justify-start items-center gap-[12px]
}
.safePlusIntroContent .note p button em{
  @apply font-medium text-[11px] leading-[13px] text-[#7139FF];
}
</style>