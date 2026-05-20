<template>
  <div class="promotionTop">
    <div class="txt">
      <span>안심플러스 보이스피싱 예방 체험 & 피해보상 서비스</span>
      <strong>
        내 돈은 내가 지킨다.<br />
        <span>더치트 프리미엄 회원은</span>
        <em>1개월 무료</em>
      </strong>
      <p>
        AI 피싱 체험으로 예방하고,<br />
        혹시 피해가 발생해도
        <strong>500만원 보상!</strong>
      </p>
    </div>
    <button>1개월 무료 혜택 받기</button>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.promotionTop{
  @apply w-full p-[50px_20px_28px] flex flex-col justify-between items-start gap-[8px] bg-no-repeat bg-cover bg-center;
  background-image: linear-gradient(89.91deg, #E7E7E3 41.43%, rgba(231, 231, 227, 0) 72.37%), url('~/assets/img/safeplus/promotion/top-bg01.png');
}
.txt{
  @apply w-full flex flex-col justify-center items-start gap-[6px];
}
.txt span{
  @apply font-[500] text-[13px] leading-[16px] tracking-[-3%] text-[#534B2E];
}
.txt strong{
  @apply font-[900] text-[30px] leading-[36px] tracking-[-3%] text-[#3C3229];
}
.txt strong span{
  @apply block font-[900] text-[30px] leading-[30px] tracking-[-3%] text-[#99552B] mt-[5px];
}
.txt strong em{
  @apply font-[900] text-[30px] leading-[30px] tracking-[-3%] text-[#E04C1E];
}
.txt p{
  @apply font-[500] text-[15px] leading-[20px] tracking-[-6%] text-[#534B2E] mt-[6px];
}
.txt p strong{
  @apply block mt-[2px] font-bold text-[18px] leading-[22px] tracking-[-3%] text-[#534B2E];
}
button{
  @apply p-[8px_20px] rounded-[100px] bg-[#ED7127] font-bold text-[16px]  leading-[22px] text-[#fff];
}
</style>