<template>
  <div class="wrap">
    <TopLineAlarm class="alarm01">
      <p>더치트 프리미엄 회원 전용 혜택 안심플러스 <span>1개월 무료 체험 제공</span></p>
    </TopLineAlarm>
    <div class="container">
      <PromotionTop01 />
      <div class="content">
        <PromotionContent01 />
      </div>
      <PromotionBottom01 />
    </div>
  </div>   
</template>

<script>
import TopLineAlarm from '~/components/safeplus/promotion/TopLineAlarm.vue'
import PromotionTop01 from '~/components/safeplus/promotion/PromotionTop01.vue';
import PromotionContent01 from '~/components/safeplus/promotion/PromotionContent01.vue'
import PromotionBottom01 from '~/components/safeplus/promotion/PromotionBottom01.vue';

export default {
  components: {
    TopLineAlarm,
    PromotionTop01,
    PromotionContent01,
    PromotionBottom01
  }
}
</script>

<style scoped>
.wrap{
@apply w-full max-w-full bg-[#fff];
}
.container{
@apply w-full max-w-full;
}
.content{
@apply w-full max-w-full;
}
</style>
