<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="wrap">
    <SafePlusIntroHeader />
    <div class="container">
      <LineBanner />
      <SafePlusIntroTop />
      <div class="content">
        <SafePlusIntroContent />
      </div>
    </div>
    <NavigationBar :activeIndex="2" />
  </div>
</template>

<script>
import NavigationBar from '~/components/common/NavigationBar'
import LineBanner from '~/components/common/LineBanner'
import SafePlusIntroHeader from '~/components/safeplus/SafePlusIntroHeader'
import SafePlusIntroTop from '~/components/safeplus/SafePlusIntroTop'
import SafePlusIntroContent from '~/components/safeplus/SafePlusIntroContent'

export default {
  components: {
    NavigationBar,
    LineBanner,
    SafePlusIntroHeader,
    SafePlusIntroTop,
    SafePlusIntroContent
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
