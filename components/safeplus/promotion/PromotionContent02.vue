<template>
  <div class="PromotionContent">
    <div class="benefit">
      <div class="title">
        <span>3일 후,</span> 사라지는 핵심 혜택
        <!-- 오늘 종료일 때 -->
        <!-- <span>오늘 밤 12시,</span> 중단되는 핵심 혜택 -->
        <!-- // -->
      </div>
      <div class="box-group">
        <div class="box">
          <div class="top">
            <span>
              3일 후 종료
              <!-- 오늘밤 종료 -->
            </span>
            <img src="~/assets/img/safeplus/promotion/benefit-img01.png">
          </div>
          <div class="bottom">
            <strong>
              최대 500만원 <br />
              피싱 피해보상 보험
            </strong>
            <p>
              예기치 못한 <br />
              금융 사기 피해,<br />
              든든하게 보장해 드립니다.
            </p>
          </div>
        </div>
        <div class="box">
          <div class="top">
            <span>
              3일 후 종료
              <!-- 오늘밤 종료 -->
            </span>
            <img src="~/assets/img/safeplus/promotion/benefit-img02.png">
          </div>
          <div class="bottom">
            <strong>
              30일 빠른 AI 피싱 예방 <br />
              체험 서비스
            </strong>
            <p>
              최신 피싱 수법을 먼저 <br />
              경험하고<br />
              피싱을 예방합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="sale">
      <div class="title">
        <span>할인 구독</span>으로 더 저렴하게!
      </div>
      <div class="box">
        <div class="left">
          <span>17% 할인적용</span>
          <strong>월 3,250원</strong>
          <p>연간 구독 환산가</p>
        </div>
        <div class="right">
          <img width="37" src="~/assets/img/safeplus/promotion/coffee-img.png">
          <p>
            하루 108원,<br />
            커피 한 잔 값보다<br />
            저렴하게<br />
            1년을 지키세요.
          </p>
        </div>
      </div>
    </div>
    <div class="go-extend">
      <button>안전 공백 없이 미리 연장하기</button>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.PromotionContent{
  @apply relative w-full pt-[30px] px-[20px] pb-[40px] bg-[#fff];
}
.benefit{
  @apply w-full flex flex-col justify-center items-center gap-[16px] mb-[30px];
}
.benefit .title{
  @apply font-bold text-[22px] leading-[28px] tracking-[-3%] text-[#121212];
}
.benefit .title span{
  @apply text-[#9E713E];
}
.box-group{
  @apply w-full flex justify-center items-center gap-[12px];
}
.box-group .box{
  @apply rounded-[10px] overflow-hidden border border-[#D9D9D9];
}
.box-group .box .top{
  @apply relative;
}
.box-group .box .top span{
  @apply absolute top-0 right-0 rounded-tr-[10px] rounded-bl-[10px] bg-[#DA2E2E] p-[6px] font-bold text-[12px] leading-[14px] tracking-[-6%] text-[#fff] z-[10];
}
.box-group .box .bottom{
  @apply py-[16px] flex flex-col justify-center items-center gap-[4px];
}
.box-group .box .bottom strong{
  @apply font-bold text-[16px] leading-[22px] tracking-[-4%] text-center;
}
.box-group .box .bottom p{
  @apply font-normal text-[13px] leading-[18px] tracking-[-3%] text-[#4D382C] text-center;
}
.sale{
  @apply w-full flex flex-col justify-center items-center gap-[16px] mb-[40px];
}
.sale .title{
  @apply font-bold text-[22px] leading-[28px] tracking-[-3%] text-[#121212];
}
.sale .title span{
  @apply text-[#9E713E];
}
.sale .box {
  @apply w-full flex justify-center items-center;
  border: 2px solid transparent;
  border-radius: 10px;
  background-image: linear-gradient(#fff, #fff), 
  linear-gradient(93.89deg, #A78341 0.75%, #F3E2B5 43.37%, #B89943 99.25%);
  background-origin: border-box;
  background-clip: padding-box, border-box; 
}
.sale .box .left{
  @apply w-1/2 py-[6px] px-[12px] bg-[#FFFFFF] flex flex-col justify-center items-center gap-[3px] rounded-l-[10px];
}
.sale .box .left span{
  @apply w-full p-[2px_16px] rounded-[100px] bg-[#E48C4E] font-bold text-[14px] leading-[20px] text-[#fff] text-center;
}
.sale .box .left strong{
  @apply font-bold text-[20px] leading-[24px] text-[#121212];
}
.sale .box .left p{
  @apply font-medium text-[11px] leading-[12px] text-[#666666];
}
.sale .box .right{
  @apply w-1/2 py-[10px] bg-[#F8EEE2] flex justify-center items-center gap-[12px] rounded-r-[10px];
}
.sale .box .right p{
  @apply font-semibold text-[12px] leading-[15px] text-[#352519];
}
.go-extend button{
  @apply w-full rounded-[100px] p-[12px_20px] bg-[#A66923] font-bold text-[18px] leading-[24px] text-[#FFFFFF];
}
</style>