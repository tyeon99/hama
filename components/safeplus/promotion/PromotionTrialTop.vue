<template>
  <div class="safePlusSubscribeTop">
    <strong>전국민 보이스피싱 안심 프로젝트</strong>
    <p>AI  피싱 예방 체험 + 500만원 보상 플랜 시작</p>
    <span>
      <img width="25" src="~/assets/img/safeplus/promotion/safe-icon.png">
      1개월 완전 무료
    </span>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.safePlusSubscribeTop{
  @apply w-full p-[25px_24px_30px] bg-[#FFE8E7] flex flex-col justify-center items-center;
  box-shadow: 0px 0px 1px 0px #171A1F12;
  box-shadow: 0px 0px 2px 0px #171A1F1F;
}
.safePlusSubscribeTop strong{
  @apply font-normal font-[JalnanGothic] text-[22px] leading-[28px] text-[#F05B54] mb-[4px];
}
.safePlusSubscribeTop p{
  @apply font-bold text-[18px] leading-[28px] tracking-[-3%] text-[#333];
}
.safePlusSubscribeTop span{
  @apply p-[8px_20px] bg-[#F05B54] rounded-[10px] flex justify-center items-center gap-[10px] mt-[18px] font-bold text-[20px] leading-[24px] text-[#fff];
}
</style>