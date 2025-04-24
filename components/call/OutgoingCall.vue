<template>
  <div class="outgoingCall">
    <div class="top">
      <div class="call-tab">
        <span>최근통화</span>
        <span>연락처</span>
        <span>즐겨찾기</span>
      </div>
      <div class="call-profile">
        <div class="img">
          <!-- 모르는 번호일 때 이미지만 생략(div 생략 X) -->
          <img width="120" src="~/assets/img/call/call-profile.png" alt="프로필 이미지">
        </div>
        <div class="txt">
          <div class="name">홍길동</div>  <!-- 모르는번호일 때 생략 -->
          <div class="number">국제전화 0108110133333333</div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="call-btn">
        <img width="232" src="~/assets/img/call/call-btn.png" alt="통화 버튼들">
      </div>
      <div class="call-action">
        <button>
          <img width="75" src="~/assets/img/call/call-end.png" alt="통화종료">
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      this.goLink('/chat/calling')
    }, 4000)
  },
  methods: {
    goLink(path) {
      this.$router.push(path)
    }
  }
}
</script>

<style scoped>
.outgoingCall{
  @apply w-full h-[100dvh] pt-[30px] pb-[30px] bg-[url(~/assets/img/call/call-bg.png)] bg-cover bg-center bg-no-repeat flex flex-col justify-between items-center;
}
.outgoingCall .top{
  @apply w-full flex flex-col justify-start items-center gap-[50px];
}
.outgoingCall .top .call-tab{
  @apply w-full flex justify-between items-center px-[56px];
}
.outgoingCall .top .call-tab span{
  @apply font-medium text-[16px] leading-[20px] tracking-[-2%] text-[rgba(255,255,255,0.7)];
}
.outgoingCall .top .call-profile{
  @apply w-full h-[232px] flex flex-col justify-between items-center;
}
.outgoingCall .top .call-profile .txt{
  @apply w-full flex flex-col justify-start items-center gap-[16px];
}
.outgoingCall .top .call-profile .txt .name{
  @apply font-bold text-[32px] leading-[38px] text-[#fff];
}
.outgoingCall .top .call-profile .txt .number{
  @apply font-medium text-[20px] leading-[24px] tracking-[-2%] text-[#fff];
}
.outgoingCall .bottom{
  @apply w-full flex flex-col justify-start items-center gap-[50px];
}
.outgoingCall .bottom .call-action{
  @apply w-full flex justify-center items-center gap-[120px];
}
</style>