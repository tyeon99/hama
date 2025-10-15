<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="spContent">
    <div
      v-for="(plan, idx) in plans"
      :key="plan.id"
      class="card-wrap"
      :class="[`card0${idx + 1}`, plan.hasBadge ? 'pt-[28px]' : '']"
    >
      <!-- 추천 배지 (두 번째 카드만 표시됨) -->
      <div v-if="plan.hasBadge" class="recommend">추천</div>

      <div class="card">
        <div class="line"></div>
        <div class="top">
          <div class="num">
            <div class="icon">
              <img width="80" :src="require(`~/assets/img/safeplus/pri-img0${idx + 1}.png`)">
            </div>
            <div class="pri">
              <strong>{{ plan.price }}</strong>
              <span>{{ plan.period }}</span>
            </div>
          </div>
          <div class="txt">
            <strong v-html="plan.title"></strong>
            <p v-html="plan.desc"></p>
          </div>
          <button>
            <span>앱으로 구독신청하기</span>
            <img width="24" :src="require(`~/assets/img/safeplus/arrow0${idx + 1}.png`)">
          </button>
        </div>
        <!-- top -->
        <div class="bottom">
          <div
            v-for="(txt, tidx) in plan.benefits"
            :key="tidx"
            class="txt"
          >
            <span>
              <img width="14" src="~/assets/img/safeplus/check.png" />
            </span>
            <p v-html="txt"></p>
          </div>
        </div>
      </div>
      <!-- card -->
    </div>
    <!-- card-wrap -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      plans: [
        {
          id: 'month',
          hasBadge: false,
          price: '₩3,300',
          period: '/월',
          title: '월간 구독',
          desc: '월간 구독으로 선체험과 보험혜택을 누리세요.',
          benefits: ['신종 수법 30일 선체험', '최대 500만원 보장보험']
        },
        {
          id: 'year',
          hasBadge: true, // 두 번째 카드만 추천 배지 표시
          price: '￦33,000',
          period: '/년',
          title: '연간 구독',
          desc: '연간 구독을 하시면 <span>17%</span>의 할인 혜택이 주어집니다.',
          benefits: ['모든 월간 혜택 포함', '정기구독 17% 할인 | 월 2,750원 (연간 결제)']
        },
        {
          id: 'half',
          hasBadge: false,
          price: '₩17,600',
          period: '/년',
          title: '6개월 구독 <span>(월 2,933원)</span>',
          desc: '6개월 구독을 하시면 <span>11%</span>의 할인 혜택이 주어집니다.',
          benefits: ['모든 월간 혜택 포함', '정기구독 11% 할인∣월 2,933원 (6개월 결제)']
        }
      ]
    }
  }
}
</script>

<style scoped>
.spContent{
  @apply w-full flex flex-col justify-center items-center gap-[36px] px-[16px];
}
.card-wrap{
  @apply relative;
}
.card-wrap .recommend{
  @apply absolute top-0 left-[50%] translate-x-[-50%] bg-[#7139FF] rounded-t-[12px] p-[9px_16px_2px] font-[JalnanGothic] font-normal text-[14px] leading-[17px] text-[#fff];
}
.card{
  @apply relative w-full bg-[#fff] rounded-[20px] p-[32px_20px] overflow-hidden;
  box-shadow: 0px 0px 8px 0px #00000014;
}
.card .line{
  @apply absolute top-0 left-0 right-0 w-full h-[4px];
}
.card .top{
  @apply w-full border-b border-[#E6E8EC] pb-[32px] mb-[24px];
}
.card .top .num{
  @apply w-full flex justify-start items-center gap-[20px] mb-[32px];
}
.card .top .num .pri{
  @apply flex justify-start items-end gap-0;
}
.card .top .num .pri strong{
  @apply font-[JalnanGothic] font-normal text-[28px] leading-[33px];
}
.card .top .num .pri span{
  @apply font-bold text-[14px] leading-[18px] text-[#2B2436] pb-[4px];
}
.card .top .txt{
  @apply w-full flex flex-col justify-start items-start gap-[8px] mb-[24px];
}
.card .top .txt strong{
  @apply w-full font-extrabold text-[20px] leading-[24px] text-[#061C3D];
}
.card .top .txt p{
  @apply w-full font-medium text-[16px] leading-[19px] text-[#42526B];
}
.card .top button{
  @apply flex justify-center items-center gap-[12px] p-[12px_32px] border-2 rounded-[32px];
}
.card .top button span{
  @apply font-extrabold text-[16px] leading-[19px];
}
.card .bottom{
  @apply w-full flex flex-col justify-start items-start gap-[12px];
}
.card .bottom .txt{
  @apply w-full flex justify-start items-center gap-[12px];
}
.card .bottom .txt span{
  @apply w-[24px] h-[24px] flex justify-center items-center rounded-full;
}
.card .bottom .txt p{
  @apply font-medium text-[14px] leading-[17px] text-[#6B6D95];
}
</style>