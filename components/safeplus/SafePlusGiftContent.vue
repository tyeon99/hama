<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="safePlusSubscribeContent">
    <component
      :is="content"
      v-for="(content, idx) in contents"
      :key="idx"
    />

    <!-- 웹 정기결제 안내(모바일 앱에서 비노출) -->
    <div class="guide">
      <strong>※ 웹 정기결제는 BC카드를 지원하지 않습니다.</strong>
      <p>BC카드 이용 시 하마터면 앱에서 인앱결제를 이용해 주세요.</p>
    </div>

    <!-- 결제하기 버튼 -->
    <div class="payment">
      <button>
        결제하기
      </button>
    </div>

    <div class="note">
      <p>
        <strong>(주)씽크풀 </strong>
        <span>사업자 등록번호 116-81-54775</span>
        <span>대표 : 김동진</span>
      </p>
      <p>
        <strong>안심플러스 고객센터</strong>
        <button>
          <img width="18" src="~/assets/img/safeplus/kakao-logo.png" />
          <em>카카오채널 채팅문의</em>
        </button>
      </p>
    </div>
  </div>
</template>

<script>
import SPSC001Gift from '~/components/safeplus/contents/SPSC_001_Gift'
import SPSC002Gift from '~/components/safeplus/contents/SPSC_002_Gift'
import SPSC003 from '~/components/safeplus/contents/SPSC_003'
import SPSC004 from '~/components/safeplus/contents/SPSC_004'

export default {
  data() {
    return {
      contents: [SPSC001Gift, SPSC002Gift, SPSC003, SPSC004]
    }
  }
}
</script>

<style scoped>
.safePlusSubscribeContent {
  @apply w-full flex flex-col justify-start items-center p-[36px_16px_46px];
}
.safePlusSubscribeContent .payment {
  @apply w-full pb-[72px] px-[8px];
}
.safePlusSubscribeContent .payment button {
  @apply w-full h-[52px] border-2 border-[#6B4EFF] rounded-[48px] bg-[#6B4EFF] font-[JalnanGothic] font-normal text-[16px] leading-[20px] text-[#fff] pt-[3px] tracking-wide;
  box-shadow: 0px 4px 4px 0px #00000024;
  transition: background-color 0.3s ease, border-color 0.3s ease,
    opacity 0.3s ease;
}
.safePlusSubscribeContent .payment button.disabled {
  @apply bg-[#D2D4EF] border-[#D2D4EF] cursor-not-allowed opacity-60;
}
.safePlusSubscribeContent .note {
  @apply w-full flex flex-col justify-start items-center gap-[8px];
}
.safePlusSubscribeContent .note p {
  @apply w-full flex justify-center items-center gap-[12px];
}
.safePlusSubscribeContent .note p strong {
  @apply font-extrabold text-[11px] leading-[13px] text-[#ABADC5];
}
.safePlusSubscribeContent .note p span {
  @apply font-medium text-[11px] leading-[13px] text-[#ABADC5];
}
.safePlusSubscribeContent .note p button {
  @apply flex justify-start items-center gap-[12px];
}
.safePlusSubscribeContent .note p button em {
  @apply font-medium text-[11px] leading-[13px] text-[#7139FF];
}
.safePlusSubscribeContent .guide{
  @apply w-full flex flex-col justify-center items-center gap-1 mb-[20px];
}
.safePlusSubscribeContent .guide strong{
  @apply font-extrabold text-[12px] leading-[14px] text-[#6B6D95] tracking-[-2%];
}
.safePlusSubscribeContent .guide p{
  @apply font-medium text-[12px] leading-[14px] text-[#6B6D95] tracking-[-2%];
}
</style>
