<template>
  <div class="safePlusSubscribeTop">
    <div class="top">
      <strong>부담없이 <span>0원</span>으로 안심 시작!</strong>
      <p>AI 피싱 예방 체험 + 500만원 보상 플랜 시작</p>
    </div>
    <div class="bottom">
      <span>월 3,900원</span>
      <p>→</p>
      <p>
        <strong>0원</strong> (1개월 무료)
      </p>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.safePlusSubscribeTop{
  @apply w-full;
}
.top{
  @apply w-full p-[25px_24px_9px] bg-[#FFFFFF] flex flex-col justify-center items-center gap-[4px];
}
.top strong{
  @apply font-[JalnanGothic] font-normal text-[22px] leading-[28px] text-[#333333];
}
.top strong span{
  @apply font-[JalnanGothic] text-[#7139FF];
}
.top p{
  @apply font-bold text-[18px] leading-[28px] tracking-[-3%] text-[#333333];
}
.bottom{
  @apply w-full py-[10px] flex justify-center items-center gap-[8px] bg-[#FFE8E7];
  box-shadow: 0px 0px 1px 0px #171A1F12;
  box-shadow: 0px 0px 2px 0px #171A1F1F;
}
.bottom span{
  @apply font-medium text-[18px] leading-[24px] line-through text-[#333];
}
.bottom p{
  @apply font-medium text-[18px] leading-[24px] text-[#333];
}
.bottom p strong{
  @apply text-[#F05B54];
}
</style>