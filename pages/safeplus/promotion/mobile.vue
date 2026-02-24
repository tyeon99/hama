<template>
  <div class="wrap">
    <DetailHeader />
    <div class="container">
      <MobileGuideTop />
      <div class="content">
        <MobileGuideContent />
      </div>
    </div>
  </div>   
</template>

<script>
import DetailHeader from '~/components/main/detail/DetailHeader.vue'
import MobileGuideTop from '~/components/safeplus/promotion/MobileGuideTop.vue'
import MobileGuideContent from '~/components/safeplus/promotion/MobileGuideContent.vue'

export default {
  components: {
    DetailHeader,
    MobileGuideTop,
    MobileGuideContent
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
