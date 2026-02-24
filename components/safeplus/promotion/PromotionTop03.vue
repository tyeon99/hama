<template>
  <div class="promotionTop">
    <div class="txt">
      <strong>
        현재 보이스피싱 <span>위험</span>에<br />
        <span>무방비로 노출</span>되고 있습니다.
      </strong>
      <p>
        안심플러스 보호막이 사라져 사고 발생 시 도움을 드릴수 없습니다. <br />
        즉시 안전을 복구하세요
      </p>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.promotionTop{
  @apply w-full p-[234px_12px_20px_20px] flex flex-col justify-between items-start gap-[30px] bg-no-repeat bg-cover bg-center bg-[url('~/assets/img/safeplus/promotion/d-plus-bg.png')];
}
.txt{
  @apply w-full flex flex-col justify-center items-start;
}
.txt strong{
  @apply font-bold text-[26px] leading-[31px] tracking-[-6%] text-[#fff] mb-[12px];
}
.txt strong span{
  @apply text-[#F26363];
}
.txt p{
  @apply font-medium text-[13px] leading-[16px] tracking-[-3%] text-[#FF9D9D];
}
.txt p strong{
  @apply block mt-[2px] font-bold text-[18px] leading-[22px] tracking-[-3%] text-[#534B2E];
}
button{
  @apply p-[8px_20px] rounded-[100px] bg-[#ED7127] font-bold text-[16px]  leading-[22px] text-[#fff];
}
</style>