<template>
  <div class="paymentContent">
    <div class="title" :class="zoomClass">결제가 실패했습니다.</div>
    <div class="box">
      <div class="top">
        <div class="icon">
          <img width="38" src="~/assets/img/safeplus/fail.png">
        </div>
        <strong :class="zoomClass">결제 기능을 이용할 수 없습니다.</strong>
        <span :class="zoomClass">결제 처리 중 문제가 발생했습니다.</span>
      </div>
      <div class="bottom">
        <div class="txt-group">
          <p :class="zoomClass">
            Google Play 스토어 앱을 최신 버전으로 업데이트해 주세요.
          </p>
          <p :class="zoomClass">
            Google Play 스토어 앱 > 프로필 > 결제 및 정기결제 > 결제 수단 메뉴에서 등록된 카드·계좌가 정상인지 확인해 주세요.
          </p>
          <p :class="zoomClass">
            그래도 안 되면 하마터면 앱도 최신 버전으로 업데이트한 뒤 다시 시도해 주세요.
          </p>
        </div>
      </div>
    </div>
    <div class="btn-wrap">
      <button :class="zoomClass">다시 결제하기</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    fontSizePercent () {
      return this.$store.state.font.fontSizePercent
    },
    zoomClass () {
      if (this.fontSizePercent === 130) return 'zoom-13'
      if (this.fontSizePercent === 120) return 'zoom-12'
      if (this.fontSizePercent === 110) return 'zoom-11'
      if (this.fontSizePercent === 90) return 'zoom-09'
      if (this.fontSizePercent === 80) return 'zoom-08'
      if (this.fontSizePercent === 70) return 'zoom-07'
      return ''
    }
  }
}
</script>

<style scoped>
.paymentContent{
  @apply w-full min-h-[100dvh] p-[20px] flex flex-col justify-center items-center;
}
.paymentContent .title{
  @apply font-[JalnanGothic] font-normal text-[18px] leading-[22px] text-[#000] mb-[48px];
}
.paymentContent .box{
  @apply w-full mb-[100px];
}
.paymentContent .box .top{
  @apply w-full relative rounded-[16px] p-[36px_20px_12px] flex flex-col justify-center items-center gap-[8px];
  background: linear-gradient(203.66deg, #F10069 0%, #F951FF 100.99%);
}
.paymentContent .box .top .icon{
  @apply w-[50px] h-[50px] absolute bg-[#fff] rounded-full flex justify-center items-center top-[-24px] left-[50%] translate-x-[-50%] z-[9];
  box-shadow: 0px 0px 12px 0px #00000080;
}
.paymentContent .box .top strong{
  @apply font-extrabold text-[18px] leading-[20px] text-[#fff];
}
.paymentContent .box .top span{
  @apply font-medium text-[12px] leading-[14px] text-[#fff];
}
.paymentContent .box .bottom{
  @apply w-full border-2 border-[#F736CD] rounded-[16px] p-[30px_35px];
  box-shadow: 0px 4px 10px 0px #0000004D;
}
.paymentContent .box .bottom .txt-group{
  @apply w-full flex flex-col justify-center items-center gap-[16px];
}
.paymentContent .box .bottom .txt-group p{
  @apply w-full relative pl-[18px] font-medium text-[12px] leading-[14px] text-[#2B2436] before:content-[''] before:absolute before:left-[8px] before:top-[5px] before:w-[2.5px] before:h-[2.5px] before:rounded-full before:bg-[#2B2436];
}
.btn-wrap{
  @apply px-[4px] w-full;
}
.btn-wrap button{
  @apply w-full bg-[#6B4EFF] rounded-[48px] h-[52px] font-[JalnanGothic] font-normal text-[16px] leading-[20px] text-[#fff];
  box-shadow: 0px 4px 4px 0px #00000024;
}
</style>