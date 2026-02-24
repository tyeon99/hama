<template>
  <div class="mobileGuideTop">
    <div class="mobileGuideTop__wrap">
      <div class="left">
        <img width="55" src="~/assets/img/guide/guide_intro-img01.png">
        <p>
          <span>하마터면</span><br />
          안심플러스
        </p>
      </div>
      <div class="right">
        <strong>
          <span>안심플러스 무료 체험</span> 신청은<br />
          모바일로 접속하셔야 합니다.
        </strong>
        <p>
          원활한 신청을 위해 사용중인 휴대폰이나<br />
          모바일 기기로 접속해 주세요.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.mobileGuideTop{
  @apply w-full py-[30px] bg-[#fff] flex justify-center items-center;
  box-shadow: 0px 0px 1px 0px #171A1F12;
  box-shadow: 0px 0px 2px 0px #171A1F1F;
}
.mobileGuideTop__wrap{
  @apply w-full max-w-[520px] flex justify-start items-center gap-[20px] px-[16px];
}
.mobileGuideTop__wrap .left{
  @apply flex flex-col justify-center items-start gap-[16px];
}
.mobileGuideTop__wrap .left p{
  @apply font-[JalnanGothic] text-[14px] font-normal leading-[17px] text-[#12177A];
}
.mobileGuideTop__wrap .left p span{
  @apply font-[JalnanGothic] text-[#7139FF];
}
.mobileGuideTop__wrap .right{
  @apply pl-[30px] border-l border-[#D8D8D8] flex flex-col justify-center items-start gap-[8px];
}
.mobileGuideTop__wrap .right strong{
  @apply font-[JalnanGothic] text-[28px] font-normal leading-[36px] text-[#12177A];
}
.mobileGuideTop__wrap .right strong span{
  @apply font-[JalnanGothic] text-[#7139FF];
}
.mobileGuideTop__wrap .right p{
  @apply font-medium text-[18px] leading-[22px] text-[#333];
}
</style>