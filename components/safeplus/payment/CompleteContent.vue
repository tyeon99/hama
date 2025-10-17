<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="paymentContent">
    <div class="title" :class="zoomClass">결제가 완료되었습니다.</div>
    <div class="box">
      <div class="top">
        <div class="icon">
          <img width="38" src="~/assets/img/safeplus/complete.png">
        </div>
        <strong :class="zoomClass">안심플러스 6개월</strong>
        <span :class="zoomClass">구독해 주셔서 감사합니다.</span>
      </div>
      <div class="bottom">
        <div class="payment-list">
          <div
            v-for="(item, idx) in paymentList"
            :key="idx"
            class="list"
          >
            <span :class="zoomClass">{{ item.label }}</span>
            <span :class="zoomClass" v-html="item.value"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="btn-wrap">
      <button :class="zoomClass">하마터면 메인으로</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      paymentList: [
        { label: '결제 금액', value: '<strong>17,600</strong>원' },
        { label: '주문번호', value: 'DFG-1223-1234-6543-78900' },
        { label: '결제 시간', value: '2025-10-02 13:22:33' },
        { label: '다음 결제일', value: '<em>2025-11-02 (자동결제)</em>' }
      ]
    }
  },
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
  background: linear-gradient(203.66deg, #7900F1 0%, #5183FF 100.99%);
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
  @apply w-full border-2 border-[#5F56FA] rounded-[16px] p-[30px_35px];
  box-shadow: 0px 4px 10px 0px #0000004D;
}
.paymentContent .box .bottom .payment-list{
  @apply w-full flex flex-col justify-center items-center;
}
.paymentContent .box .bottom .payment-list .list{
  @apply w-full flex justify-between items-center py-[12px] border-b border-[#C0B8E8] first:pt-0 last:pb-0 last:border-b-0;
}
.paymentContent .box .bottom .payment-list .list span{
  @apply font-medium text-[12px] leading-[14px] text-[#2B2436];
}
.btn-wrap{
  @apply px-[4px] w-full;
}
.btn-wrap button{
  @apply w-full bg-[#6B4EFF] rounded-[48px] h-[52px] font-[JalnanGothic] font-normal text-[16px] leading-[20px] text-[#fff];
  box-shadow: 0px 4px 4px 0px #00000024;
}
</style>