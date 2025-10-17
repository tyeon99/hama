<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="wrap">
    <SettingHeader />
    <div class="container">
      <div class="content">
        <SettingContent />
      </div>
    </div>
    <NavigationBar :activeIndex="2" />
  </div>
</template>

<script>
import NavigationBar from '~/components/common/NavigationBar'
import SettingHeader from '~/components/alarm/SettingHeader'
import SettingContent from '~/components/alarm/SettingContent'

export default {
  components: {
    NavigationBar,
    SettingHeader,
    SettingContent
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
