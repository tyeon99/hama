<template>
  <div class="safePlusIntroTop">
    <div class="left">
      <span>하마터면 안심플러스</span>
      <div class="title">
        <strong>보이스피싱</strong>,<br />
        30일먼저 예방하고<br />
        최대 <strong>500만원</strong>보장
      </div>
      <div class="txt">
        하마터면 프리미엄 서비스 <strong>'안심플러스'</strong>
        최신 사기 수법을 미리 학습하고, 피해 시 즉시 보상
      </div>
    </div>
    <div class="right">
      <img width="140" src="~/assets/img/safeplus/top-img.png">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.safePlusIntroTop{
  @apply w-full flex justify-between items-center bg-[#FF6B6A];
}
.safePlusIntroTop .left{
  @apply pl-[20px];
}
.safePlusIntroTop .left span{
  @apply p-[5px_20px] rounded-[16px] border border-[#fff] mb-[20px] inline-block font-bold text-[14px] leading-[17px] text-[#fff];
}
.safePlusIntroTop .left .title{
  @apply font-[JalnanGothic] font-normal text-[22px] leading-[28px] text-[#fff] mb-[8px];
}
.safePlusIntroTop .left .title strong{
  @apply font-[JalnanGothic] font-normal text-[#FFEE4E];
}
.safePlusIntroTop .left .txt{
  @apply font-medium text-[14px] leading-[17px] text-[#fff];
}
.safePlusIntroTop .right img{
  @apply min-w-[140px];
}
</style>