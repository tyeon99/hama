<template>
  <div class="logInContent">
    <div class="logInContent__top">
      <img width="204" src="~/assets/img/login/top-text.png" alt="Experience our service">
      <div class="title">
        <strong>하마터면</strong>에<br />
        오신 것을 환영합니다!
      </div>
      <div class="txt">안전한 디지털 생활을 위한 보이스피싱 체험 서비스</div>
    </div>
    <div class="logInContent__bottom">
      <div class="btn-group">
        <button>
          <img width="20" src="~/assets/img/login/google-icon.png" alt="구글">
          <span>구글로 계속하기</span>
        </button>
        <button>
          <img width="18" src="~/assets/img/login/kakao-icon.png" alt="카카오">
          <span>카카오로 계속하기</span>
        </button>
        <button>
          <img width="16" src="~/assets/img/login/naver-icon.png" alt="네이버">
          <span>네이버로 계속하기</span>
        </button>
      </div>
      <div class="note">
        <p>
          <strong>㈜씽크풀 </strong>
          <span>사업자 등록번호 116-81-54775</span>
          <span>대표 : 김동진</span>
        </p>
        <p>
          <span>문의 : hama@thinkpool.com</span>
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
.logInContent{
  @apply w-full min-h-[calc(100dvh-61px)] bg-[#F7F5FF] flex flex-col justify-between items-center;
}
.logInContent__top{
  @apply w-full h-[calc(100dvh-356px)] min-h-[390px] p-[32px_29px] bg-[url(~/assets/img/login/top-img.png)] bg-bottom bg-[length:375px] bg-no-repeat bg-[#FFEDC8] flex flex-col justify-start items-center;
  box-shadow: 0px 0px 1px 0px #171A1F12;
  box-shadow: 0px 0px 2px 0px #171A1F1F;
}
.logInContent__top .title{
  @apply w-full text-center mt-[24px] font-[JalnanGothic] font-normal text-[32px] leading-[36px] text-[#242424];
}
.logInContent__top .title strong{
  @apply font-[JalnanGothic] font-normal text-[32px] leading-[36px] text-[#7139FF];
}
.logInContent__top .txt{
  @apply w-full text-center mt-[16px] font-semibold text-[16px] leading-[20px] text-[#6B6D95];
}
.logInContent__bottom{
  @apply w-full;
}
.logInContent__bottom .btn-group{
  @apply w-full p-[36px_28px] flex flex-col justify-center items-center gap-[16px];
}
.logInContent__bottom .btn-group button{
  @apply w-full h-[45px] flex justify-center items-center gap-[8px] rounded-[6px] bg-[#FEE500] first:bg-[#fff] last:bg-[#03C75A];
  box-shadow: 0px 5px 35px 0px #1212120D;
}
.logInContent__bottom .btn-group button span{
  @apply font-semibold text-[15px] leading-[18px] text-[#121212];
}
.logInContent__bottom .btn-group button:last-child span{
  @apply text-[#fff];
}
.logInContent__bottom .note{
  @apply w-full flex flex-col justify-start items-center gap-[6px] pb-[24px];
}
.logInContent__bottom .note p{
  @apply w-full flex justify-center items-center gap-[12px];
}
.logInContent__bottom .note p strong{
  @apply font-extrabold text-[11px] leading-[13px] text-[#6B6D95];
}
.logInContent__bottom .note p span{
  @apply font-medium text-[11px] leading-[13px] text-[#6B6D95];
}
</style>