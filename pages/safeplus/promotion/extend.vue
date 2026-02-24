<template>
  <div class="wrap">
    <TopLineAlarm class="alarm02">
      <p>안심플러스 무료체험이 <span>3일 후 종료</span> 됩니다</p>
      <!-- 오늘 종료일 때 -->
      <!-- <p>안심플러스 무료체험이 <span>오늘 종료</span> 됩니다</p> -->
      <!-- // -->
    </TopLineAlarm>
    <div class="container">
      <PromotionTop02 />
      <div class="content">
        <PromotionContent02 />
      </div>
      <PromotionBottom02 />
    </div>
  </div>   
</template>

<script>
import TopLineAlarm from '~/components/safeplus/promotion/TopLineAlarm.vue'
import PromotionTop02 from '~/components/safeplus/promotion/PromotionTop02.vue';
import PromotionContent02 from '~/components/safeplus/promotion/PromotionContent02.vue'
import PromotionBottom02 from '~/components/safeplus/promotion/PromotionBottom02.vue';

export default {
  components: {
    TopLineAlarm,
    PromotionTop02,
    PromotionContent02,
    PromotionBottom02
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
