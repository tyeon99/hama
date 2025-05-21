<template>
  <div class="incomingCall">
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
      <div class="call-action">
        <button @click="goLink('/chat/calling')">
          <img width="74" src="~/assets/img/call/call-accept.png" alt="수락">
        </button>
        <button>
          <img width="74" src="~/assets/img/call/call-refuse.png" alt="거절">
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
.incomingCall{
  @apply w-full h-[100dvh] pt-[30px] pb-[80px] bg-[url(~/assets/img/call/call-bg.png)] bg-cover bg-center bg-no-repeat flex flex-col justify-between items-center;
}
.incomingCall .top{
  @apply w-full flex flex-col justify-start items-center gap-[50px];
}
.incomingCall .top .call-tab{
  @apply w-full flex justify-between items-center px-[56px];
}
.incomingCall .top .call-tab span{
  @apply font-medium text-[16px] leading-[20px] tracking-[-2%] text-[rgba(255,255,255,0.7)];
}
.incomingCall .top .call-profile{
  @apply w-full h-[232px] flex flex-col justify-between items-center;
}
.incomingCall .top .call-profile .txt{
  @apply w-full flex flex-col justify-start items-center gap-[16px];
}
.incomingCall .top .call-profile .txt .name{
  @apply font-bold text-[32px] leading-[38px] text-[#fff];
}
.incomingCall .top .call-profile .txt .number{
  @apply font-medium text-[28px] leading-[28px] tracking-[-2%] text-[#fff];
}
.incomingCall .bottom .call-action{
  @apply w-full flex justify-center items-center gap-[120px];
}
</style>