<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="wrap">
    <SafePlusSubscribeHeader />
    <div class="container">
      <SafePlusSubscribeTop />
      <div class="content">
        <SafePlusSubscribeContent />
      </div>
    </div>
    <NavigationBar :activeIndex="2" />
  </div>
</template>

<script>
import NavigationBar from '~/components/common/NavigationBar'
import SafePlusSubscribeHeader from '~/components/safeplus/SafePlusSubscribeHeader'
import SafePlusSubscribeTop from '~/components/safeplus/SafePlusSubscribeTop'
import SafePlusSubscribeContent from '~/components/safeplus/SafePlusSubscribeContent'

export default {
  components: {
    NavigationBar,
    SafePlusSubscribeHeader,
    SafePlusSubscribeTop,
    SafePlusSubscribeContent
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
