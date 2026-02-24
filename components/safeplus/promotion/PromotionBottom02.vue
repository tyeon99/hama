<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="promotionBottom">
    <div class="txt">
      <p>
        하마터면 안심플러스
      </p>
    </div>
    <div class="copyright">
      <p>본 페이지의 인물 모델은 AI로 생성되었습니다. </p>
      <p>Copyright since 1999 © ThinkPool Co.,Ltd. All Rights Reserved.</p>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.promotionBottom{
  @apply w-full p-[12px_0px] bg-[#F4F4F4] flex flex-col justify-center items-center gap-[2px];
}
.txt p{
  @apply font-normal text-[12px] leading-[20px] text-[#999999] text-center;
}
.copyright{
  @apply w-full flex flex-col justify-center items-center gap-[2px];
}
.copyright p{
  @apply font-normal text-[10px] leading-[13px] tracking-[-3%] text-[#999];
}
</style>