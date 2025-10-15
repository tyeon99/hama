<template>
  <div class="spContent">
    <div class="box">
      <!-- 이름 -->
      <div class="input-box">
        <div class="input-title">이름</div>
        <div class="input-group">
          <input id="name" type="text" placeholder="이름">
        </div>
      </div>
      <!-- 휴대폰 번호 -->
      <div class="input-box">
        <div class="input-title">휴대폰 번호</div>
        <div class="input-group">
          <input id="number" type="text" placeholder="휴대폰 번호">
          <button>인증요청</button>
        </div>
      </div>
      <!-- 인증번호(휴대폰 번호 입력 후 요청버튼 클릭 시) -->
      <div class="input-box">
        <div class="input-title">인증번호</div>
        <div class="input-group">
          <div class="input-wrap">
            <input id="authorization" type="text" placeholder="인증번호">
            <div class="time">02:32</div>
          </div>
          <button>확인</button>
        </div>
      </div>
      <!-- 이메일 -->
      <div class="input-box">
        <div class="input-title">이메일</div>
        <div class="input-group">
          <input id="email" type="text" placeholder="사용자 이메일">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.spContent{
  @apply w-full;
}
.spContent .box{
  @apply w-full bg-[#fff] border border-[#E3E0F9] rounded-[10px] mb-[24px] p-[24px_10px] flex flex-col justify-start items-start gap-[20px];
}
.spContent .box .input-box{
  @apply w-full flex flex-col justify-start items-start gap-[8px];
}
.spContent .box .input-box .input-title{
  @apply font-bold text-[14px] leading-[17px] text-[#6B6D95];
}
.spContent .box .input-box .input-group{
  @apply w-full flex justify-start items-center gap-[13px];
}
.spContent .box .input-box .input-group input[type=text]{
  @apply w-full h-[44px] border border-[#C0B8E8] rounded-[16px] px-[12px] font-bold text-[14px] leading-[17px] text-[#2B2436] placeholder:font-bold placeholder:text-[14px] placeholder:leading-[17px] placeholder:text-[#C0B8E8];
}
.spContent .box .input-box .input-group button{
  @apply min-w-[100px] h-[44px]
}
</style>