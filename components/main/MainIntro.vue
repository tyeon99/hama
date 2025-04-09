<template>
  <div class="mainIntro">
    <div class="mainIntro__txt">
      <span>"한 번의 체험, 확실한 예방"</span>
      <strong>AI 피싱 체험으로 <br /><em>방어능력 UP!</em></strong>
      <p>
        대표 피싱 사례를 모았어요. 하나씩 <br />체험하며 대응력을 키워보세요.
      </p>
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
  @apply w-full p-[36px_14px_12px_20px] flex justify-between items-end bg-[#FFA280];
  box-shadow: 0px 0px 2px 0px rgba(23, 26, 31, 0.12), 0px 0px 1px 0px rgba(23, 26, 31, 0.07);
}
.mainIntro__txt{
  @apply flex flex-col justify-start items-start;
}
.mainIntro__txt span{
  @apply block font-[JalnanGothic] font-normal text-[13px] leading-[16px] text-[#fff] mb-[12px];
}
.mainIntro__txt strong{
  @apply block font-[JalnanGothic] font-normal text-[24px] leading-[28px] text-[#12177A] mb-[8px];
}
.mainIntro__txt strong em{
  @apply font-[JalnanGothic] text-[#fff];
}
.mainIntro__txt p{
  @apply font-medium text-[14px] leading-[18px] text-[#12177A] mb-[26px];
}
</style>