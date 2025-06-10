<template>
  <div class="callingHeader">
    <div class="callingHeader__img">
      <img width="40" src="~/assets/img/chat/calling/calling-img.png" alt="전화 아이콘">
    </div>
    <div class="callingHeader__txt">
      <span>국제전화</span> <!--아는번호일 때 생략-->
      <p>0068210-332-3232</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.callingHeader{
  @apply w-full h-[64px] bg-[url(~/assets/img/chat/calling/calling-header.png)] bg-center bg-cover bg-no-repeat flex justify-center items-center gap-[12px] fixed top-0 left-0 right-0 z-[996];
}
.callingHeader__txt{
  @apply flex justify-start items-center gap-[8px];
}
.callingHeader__txt span{
  @apply font-normal text-[16px] leading-[20px] text-[#2B2436];
}
.callingHeader__txt p{
  @apply font-extrabold text-[20px] leading-[24px] text-[#2B2436];
}
</style>