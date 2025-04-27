<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="wrap">
    <GuideHeader />
    <div class="container">
      <div class="content">
        <ServiceIntroContent />
      </div>
    </div>
    <NavigationBar :activeIndex="2" />
  </div>
</template>

<script>
import NavigationBar from '~/components/common/NavigationBar'
import GuideHeader from '~/components/guide/GuideHeader'
import ServiceIntroContent from '~/components/guide/ServiceIntroContent'

export default {
  components: {
    NavigationBar,
    GuideHeader,
    ServiceIntroContent
  }  
}
</script>

<style scoped>
.wrap{
@apply w-full max-w-full;
}
.container{
@apply w-full max-w-full;
}
.content{
@apply w-full max-w-full;
}
</style>
