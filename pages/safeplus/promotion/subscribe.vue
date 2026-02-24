<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="wrap">
    <PromotionSubscribeHeader title="안심플러스 무료구독 신청" />
    <div class="container">
      <PromotionSubscribeTop />
      <div class="content">
        <PromotionSubscribeContent />
      </div>
    </div>
    <NavigationBar :activeIndex="2" />
  </div>
</template>

<script>
import NavigationBar from '~/components/common/NavigationBar'
import PromotionSubscribeHeader from '~/components/safeplus/promotion/PromotionSubscribeHeader'
import PromotionSubscribeTop from '~/components/safeplus/promotion/PromotionSubscribeTop'
import PromotionSubscribeContent from '~/components/safeplus/promotion/PromotionSubscribeContent'

export default {
  components: {
    NavigationBar,
    PromotionSubscribeHeader,
    PromotionSubscribeTop,
    PromotionSubscribeContent
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
