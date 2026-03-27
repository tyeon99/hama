<template>
  <div class="safePlusIntroTop">
    <div class="left">
      <span class="tag">하마터면 안심플러스</span>
      <div class="title">
        보이스피싱 피해 시<br />
        <span>500만원</span> 보상<br />
        <strong>부모님께 안심을 <br />선물</strong>하세요
      </div>
      <div class="txt">
        나를 위한 <strong>안심 구독,</strong><br />
        부모님을 위한 <strong>안전 선물과<br />케어를 한번에!</strong>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.safePlusIntroTop{
  @apply w-full flex justify-start items-center bg-[#EFDFC5] p-4 bg-[url('~/assets/img/safeplus/top-bg.png')] bg-right bg-[length:375px] bg-no-repeat;
}
.safePlusIntroTop .left .tag{
  @apply p-[5px_20px] rounded-[16px] mb-[12px] inline-block font-bold text-[14px] leading-[17px] text-[#fff] bg-[#FF6B6A];
}
.safePlusIntroTop .left .title{
  @apply font-[JalnanGothic] font-normal text-[23px] leading-[27px] text-[#333333] mb-[8px] pl-1;
}
.safePlusIntroTop .left .title span{
  @apply font-[JalnanGothic] font-normal text-[#7139FF];
}
.safePlusIntroTop .left .title strong{
  @apply font-[JalnanGothic] font-normal text-[#FF507A];
}
.safePlusIntroTop .left .txt{
  @apply font-medium text-[15px] leading-[21px] text-[#333333] pl-1 tracking-[-2%];
}
</style>