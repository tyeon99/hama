<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="wrap">
    <GuideHeader />
    <div class="container">
      <div class="content">
        <DownLoadContent />
      </div>
    </div>
    <NavigationBar :activeIndex="2" />
  </div>
</template>

<script>
import NavigationBar from '~/components/common/NavigationBar'
import GuideHeader from '~/components/guide/GuideHeader'
import DownLoadContent from '~/components/guide/DownLoadContent'

export default {
  components: {
    NavigationBar,
    GuideHeader,
    DownLoadContent
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
