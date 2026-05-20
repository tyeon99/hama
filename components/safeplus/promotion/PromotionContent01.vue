<template>
  <div class="PromotionContent">
    <div class="content-box">
      <p>누구에게나 일어날 수 <br />있는 <strong>피싱피해!</strong></p>
      <span>
        예방 체험과 피해 발생 시<br />최대 500만원 보상 혜택으로<br />대비 하세요!
      </span>
    </div>
    <div class="point-group">
      <div class="point">
        <div class="left">
          <img width="80" src="~/assets/img/safeplus/promotion/point-img01.png">
        </div>
        <div class="right">
          <span>POINT 01</span>
          <strong>최신 보이스피싱 AI체험</strong>
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
      <button>1개월 무료 혜택 받기</button>
    </div>
    <div class="guide">
      보상은 서비스 약관 및 보험 보장 조건에 따라 적용 됩니다.<br /> 
      보이스피싱, 파밍, 스미싱, 메모리해킹 등 사이버금융범죄 피해에만 적용되며, <br />
      일부 피해 유형은 보상 대상에서 제외될 수 있습니다. 
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.PromotionContent{
  @apply relative w-full pt-[20px] px-[20px] pb-[25px] bg-[#fff];
}
.content-box{
  @apply w-full mb-5 rounded-[12px] bg-[#F1E7D9] p-[16px_20px] bg-right bg-[url(https://img.thinkpool.com/hama/img/safeplus/promotion/con-bg01.png)] bg-contain bg-no-repeat;
}
.content-box p{
  @apply mb-[9px] font-bold text-[18px] leading-[24px] text-[#000000];
}
.content-box p strong{
  @apply text-[#983F0C];
}
.content-box span{
  @apply block w-[160px] font-medium text-[14px] leading-[18px] tracking-[-3%] text-[#4D382C];
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
  @apply w-full flex flex-col justify-center items-center gap-[18px] mb-[16px];
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
.guide{
  @apply font-normal text-[11px] leading-[15px] tracking-[-3%] text-[#666666] text-center;
}
</style>