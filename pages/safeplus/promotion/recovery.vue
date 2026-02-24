<template>
  <div class="wrap">
    <TopLineAlarm class="alarm03">
      <p>현재 보이스피싱 위험에 <span>안전하지 않습니다.</span></p>
    </TopLineAlarm>
    <div class="container">
      <PromotionTop03 />
      <div class="content">
        <PromotionContent03 />
      </div>
      <PromotionBottom02 />
    </div>
  </div>   
</template>

<script>
import TopLineAlarm from '~/components/safeplus/promotion/TopLineAlarm.vue'
import PromotionTop03 from '~/components/safeplus/promotion/PromotionTop03.vue';
import PromotionContent03 from '~/components/safeplus/promotion/PromotionContent03.vue'
import PromotionBottom02 from '~/components/safeplus/promotion/PromotionBottom02.vue';

export default {
  components: {
    TopLineAlarm,
    PromotionTop03,
    PromotionContent03,
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
