<template>
  <div class="safePlusIntroContent">

    <component
      :is="content"
      v-for="(content, idx) in contents"
      :key="idx"
    />

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
import SPIC001 from '~/components/safeplus/contents/SPIC_001'
import SPIC002 from '~/components/safeplus/contents/SPIC_002'
import SPIC003 from '~/components/safeplus/contents/SPIC_003'
import SPIC004 from '~/components/safeplus/contents/SPIC_004'
import SPIC005 from '~/components/safeplus/contents/SPIC_005'
import SPIC006 from '~/components/safeplus/contents/SPIC_006'
import SPIC007 from '~/components/safeplus/contents/SPIC_007'
import SPIC008 from '~/components/safeplus/contents/SPIC_008'

export default {
  data() {
    return {
      contents: [SPIC001, SPIC002, SPIC003, SPIC004, SPIC005, SPIC006, SPIC007, SPIC008]
    }
  }
}
</script>

<style scoped>
.safePlusIntroContent{
  @apply w-full flex flex-col justify-start items-center gap-[52px] p-[24px_0px_118px];
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