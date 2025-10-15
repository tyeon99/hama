<template>
  <div class="spContent">
    <div class="title">합리적인 요금제</div>
    <div class="txt">하루 커피값으로 500만원을 지키세요.</div>
    <button>카카오톡 상담</button>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.spContent{
  @apply w-full px-[16px];
}
.spContent .title{
  @apply font-[JalnanGothic] font-normal text-[20px] leading-[24px] text-[#2B2436] mb-[8px] text-center;
}
.spContent .txt{
  @apply w-full text-center mb-[24px] font-semibold text-[16px] leading-[20px] text-[#6B6D95];
}
.spContent button{
  @apply w-full h-[52px] border-2 rounded-[48px] font-[JalnanGothic] font-normal text-[16px] leading-[20px] pt-[3px] tracking-wide border-[#FEE500] bg-[#FEE500] text-[#12177A];
  box-shadow: 0px 4px 4px 0px #00000024;
}
</style>