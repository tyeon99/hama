<template>
  <div class="promotionTop d-3"> <!--오늘 종료일 때 클래스 'd-3'삭제, 'd-0' 추가-->
    <div class="txt">
      <span>보이스피싱 없는 당신의 안전한 일상,</span>
      <strong>지금 든든하게 보호받고 있습니다. </strong>
      <!-- 오늘 종료일 때 -->
      <!-- <strong>오늘이 지나면 멈출 수 있습니다. </strong> -->
      <p>
        안심플러스 무료 체험이 3일 후 종료됩니다. <br />
        소중한 일상이 멈추지 않도록 미리 준비하세요.
      </p>
      <!-- 오늘 종료일 때 -->
      <!-- <p>
        안심플러스 무료 체험이 오늘 종료됩니다. <br />
        보호 공백 없이 혜택을 계속 누리세요.      
      </p> -->
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.promotionTop{
  @apply w-full p-[234px_12px_20px_20px] flex flex-col justify-between items-start gap-[30px] bg-no-repeat bg-cover bg-center;
}
.promotionTop.d-3{
  background-image: url('~/assets/img/safeplus/promotion/d3-bg.png')
}
.promotionTop.d-0{
  background-image: url('~/assets/img/safeplus/promotion/d0-bg.png')
}
.txt{
  @apply w-full flex flex-col justify-center items-start;
}
.txt span{
  @apply font-bold text-[18px] leading-[22px] tracking-[-3%] text-[#FFE59D] mb-[4px];
}
.txt strong{
  @apply font-bold text-[26px] leading-[31px] tracking-[-6%] text-[#fff] mb-[12px];
}
.txt p{
  @apply font-medium text-[14px] leading-[17px] tracking-[-3%] text-[#FFC39D];
}
.txt p strong{
  @apply block mt-[2px] font-bold text-[18px] leading-[22px] tracking-[-3%] text-[#534B2E];
}
button{
  @apply p-[8px_20px] rounded-[100px] bg-[#ED7127] font-bold text-[16px]  leading-[22px] text-[#fff];
}
</style>