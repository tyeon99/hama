<template>
  <div class="wooriFooter animate__animated animate__fadeInUp animate__delay-04s">
    <img width="138" src="~/assets/img/common/coalition-logo.png" alt="제휴사로고">
    <p>
      <span>하마터면 서비스는 우리은행 제휴사인 (주)씽크풀이 제공합니다.</span>
      <span>우리은행은 하마터면 서비스 페이지에 연결하는 역할만 하며, 서비스의 제공과 그 책임은 (주)씽크풀에 있습니다.</span>
      <span>관련 문의 : hama@thinkpool.com</span>
    </p>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.wooriFooter{
  @apply w-full bg-[#F7F5FF] pb-[90px] px-[22px] flex flex-col justify-start items-center gap-[12px];
}
.wooriFooter p{
  @apply w-full flex flex-col justify-start items-start gap-[4px];
}

.wooriFooter p span{
  @apply block relative pl-[18px] font-normal text-[12px] leading-[14px] text-[#6B6D95] before:content-[''] before:w-[2.5px] before:h-[2.5px] before:rounded-full before:bg-[#6b6d95] before:absolute before:top-[5px] before:left-[8px];
}
</style>