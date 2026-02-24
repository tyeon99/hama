<template>
  <div class="PromotionContent">
    <div class="content-img">
      <img width="315" src="~/assets/img/safeplus/promotion/content-img01.png">
    </div>
    <div class="point-group">
      <div class="point">
        <div class="left">
          <img width="80" src="~/assets/img/safeplus/promotion/point-img01.png">
        </div>
        <div class="right">
          <span>POINT 01</span>
          <strong>30일 빠른 보이스피싱 AI체험</strong>
          <p>최신 피싱 수법을 가장 먼저 체험하고 예방할 수 있습니다.</p>
        </div>
      </div>
      <div class="point">
        <div class="left">
          <img width="80" src="~/assets/img/safeplus/promotion/point-img02.png">
        </div>
        <div class="right">
          <span>POINT 02</span>
          <strong>만약의 피해에도 든든하게 보상</strong>
          <p>혹시 모를 피싱 피해가 발생해도, 최대 500만원 보상보험</p>
        </div>
      </div>
    </div>
    <div class="go-experience">
      <p>
        이 모든 든든함을 <br />
        지금 <span>'0원'</span>으로 누리세요
      </p>
      <button>안심플러스 1개월 무료체험</button>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.PromotionContent{
  @apply relative w-full pt-[185px] px-[20px] pb-[40px] bg-[#fff];
}
.content-img{
  @apply w-[315px] absolute top-[35px] left-[50%] translate-x-[-50%] z-0;
}
.point-group{
  @apply relative z-[1] w-full flex flex-col justify-center items-center gap-[12px] mb-[25px];
}
.point{
  @apply w-full flex justify-start items-center gap-[16px] border border-[#D9D9D9] rounded-[12px] p-[16px] bg-[#fff];
}
.point .left{
  @apply min-w-[80px];
}
.point .right{
  @apply flex flex-col justify-start items-start gap-[4px];
}
.point .right span{
  @apply p-[4px_10px] rounded-[100px] bg-[#897260] font-bold text-[10px] leading-[12px] text-[#FFFFFF];
}
.point .right strong{
  @apply font-bold text-[16px] leading-[22px] text-[#000000];
}
.point .right p{
  @apply font-medium text-[14px] leading-[18px] tracking-[-3%] text-[#4D382C];
}
.go-experience{
  @apply w-full flex flex-col justify-center items-center gap-[18px];
}
.go-experience p{
  @apply font-bold text-[18px] leading-[24px] text-[#121212] text-center;
}
.go-experience p span{
  @apply text-[#ED7127];
}
.go-experience button{
  @apply w-full rounded-[100px] p-[12px_20px] bg-[#ED7127] font-bold text-[18px] leading-[24px] text-[#FFFFFF];
}
</style>