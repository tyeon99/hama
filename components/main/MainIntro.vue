<template>
  <div class="mainIntro">
    <div class="mainIntro__txt">
      <span>"피싱의 함정, 미리 알고 피하자!"</span>
      <strong>AI 피싱 체험 안내</strong>
      <p>
        대표적인 흔한 피싱 사례들을 <br />
        하나씩 체험해보세요.
      </p>
      <button>바로 체험해보기</button>
    </div>
    <div class="mainIntro__img">
      <img width="132" src="~/assets/img/main/mainIntro-img.png" alt="메인 인트로 이미지">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.mainIntro{
  @apply w-full p-[32px_14px_12px_20px] flex justify-between items-end bg-[#FF87AD];
  box-shadow: 0px 0px 2px 0px rgba(23, 26, 31, 0.12), 0px 0px 1px 0px rgba(23, 26, 31, 0.07);
}
.mainIntro__txt{
  @apply flex flex-col justify-start items-start;
}
.mainIntro__txt span{
  @apply block font-[JalnanGothic] font-normal text-[13px] leading-[16px] text-[#fff] mb-[12px];
}
.mainIntro__txt strong{
  @apply block font-[JalnanGothic] font-normal text-[24px] leading-[24px] text-[#12177A] mb-[12px];
}
.mainIntro__txt p{
  @apply font-medium text-[14px] leading-[18px] text-[#12177A] mb-[16px];
}
.mainIntro__txt button{
  @apply w-[178px] h-[40px] border border-[#2c2c2c] rounded-[28px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] pt-[3px] font-[JalnanGothic] text-[14px] font-normal text-[#2B2436] leading-[16px] tracking-[0.42px]
}
</style>