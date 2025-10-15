<template>
  <div class="safePlusSubscribeContent">

    <component
      :is="content"
      v-for="(content, idx) in contents"
      :key="idx"
    />

    <!-- 결제하기 버튼 -->
    <div class="payment">
      <button>결제하기</button>
    </div>

    <div class="note">
      <p>
        <strong>㈜씽크풀 </strong>
        <span>사업자 등록번호 116-81-54775</span>
        <span>대표 : 김동진</span>
      </p>
      <p>
        <strong>안심플러스 고객센터</strong>
        <button>
          <img width="18" src="~/assets/img/safeplus/kakao-logo.png">
          <em>카카오채널 채팅문의</em>
        </button>
      </p>
    </div>
  </div>
</template>

<script>
import SPSC001 from '~/components/safeplus/contents/SPSC_001'
import SPSC002 from '~/components/safeplus/contents/SPSC_002'
import SPSC003 from '~/components/safeplus/contents/SPSC_003'
import SPSC004 from '~/components/safeplus/contents/SPSC_004'

export default {
  data() {
    return {
      contents: [SPSC001, SPSC002, SPSC003, SPSC004]
    }
  }
}
</script>

<style scoped>
.safePlusSubscribeContent{
  @apply w-full flex flex-col justify-start items-center p-[36px_16px_118px];
}
.safePlusSubscribeContent .payment{
  @apply w-full pb-[72px];
}
.safePlusSubscribeContent .payment button{
  @apply w-full h-[52px] border-2 border-[#6B4EFF] rounded-[48px] bg-[#6B4EFF] font-[JalnanGothic] font-normal text-[16px] leading-[20px] text-[#fff] pt-[3px] tracking-wide;
  box-shadow: 0px 4px 4px 0px #00000024;
}
.safePlusSubscribeContent .note{
  @apply w-full flex flex-col justify-start items-center gap-[8px];
}
.safePlusSubscribeContent .note p{
  @apply w-full flex justify-center items-center gap-[12px];
}
.safePlusSubscribeContent .note p strong{
  @apply font-extrabold text-[11px] leading-[13px] text-[#ABADC5];
}
.safePlusSubscribeContent .note p span{
  @apply font-medium text-[11px] leading-[13px] text-[#ABADC5];
}
.safePlusSubscribeContent .note p button{
  @apply flex justify-start items-center gap-[12px]
}
.safePlusSubscribeContent .note p button em{
  @apply font-medium text-[11px] leading-[13px] text-[#7139FF];
}
</style>