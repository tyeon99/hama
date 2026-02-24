<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="wrap">
    <PromotionSubscribeHeader title="안심플러스 무료체험 신청" />
    <div class="container">
      <PromotionTrialTop />
      <div class="content">
        <PromotionTrialContent />
      </div>
    </div>
    <NavigationBar :activeIndex="2" />
  </div>
</template>

<script>
import NavigationBar from '~/components/common/NavigationBar'
import PromotionSubscribeHeader from '~/components/safeplus/promotion/PromotionSubscribeHeader'
import PromotionTrialTop from '~/components/safeplus/promotion/PromotionTrialTop'
import PromotionTrialContent from '~/components/safeplus/promotion/PromotionTrialContent'

export default {
  components: {
    NavigationBar,
    PromotionSubscribeHeader,
    PromotionTrialTop,
    PromotionTrialContent
  }  
}
</script>

<style scoped>
.wrap{
@apply w-full max-w-full bg-[#F7F5FF];
}
.container{
@apply w-full max-w-full;
}
.content{
@apply w-full max-w-full;
}
</style>
