<template>
  <div class="wrap">
    <TopLineAlarm class="alarm01">
      <p>[제휴사] 고객님을 위한 특별한 혜택! <span>지금 바로 1개월 무료</span></p>
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
