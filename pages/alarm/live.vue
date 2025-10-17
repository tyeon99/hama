<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="wrap">
    <SafePlusIntroHeader />
    <div class="container">
      <LiveAlarmTop />
      <div class="content">
        <LiveAlarmContent />
      </div>
    </div>
    <NavigationBar :activeIndex="2" />
  </div>
</template>

<script>
import NavigationBar from '~/components/common/NavigationBar'
import SafePlusIntroHeader from '~/components/safeplus/SafePlusIntroHeader'
import LiveAlarmTop from '~/components/alarm/LiveAlarmTop'
import LiveAlarmContent from '~/components/alarm/LiveAlarmContent'

export default {
  components: {
    NavigationBar,
    SafePlusIntroHeader,
    LiveAlarmTop,
    LiveAlarmContent
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
