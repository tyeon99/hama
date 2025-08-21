<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="wrap">
    <WooriHeader />
    <div class="container">
      <div class="content">
        <InquiryContent />
      </div>
    </div>
    <WooriNavigationBar :activeIndex="1" />
  </div>
</template>

<script>
import WooriNavigationBar from '~/components/common/WooriNavigationBar'
import WooriHeader from '~/components/common/WooriHeader'
import InquiryContent from '~/components/guide/InquiryContent'

export default {
  components: {
    WooriNavigationBar,
    WooriHeader,
    InquiryContent
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
