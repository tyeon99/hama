<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="wrap">
    <WooriHeader />
    <div class="container">
      <div class="content">
        <PartnerContent />
      </div>
    </div>
    <WooriNavigationBar :activeIndex="1" />
  </div>
</template>

<script>
import WooriNavigationBar from '~/components/common/WooriNavigationBar'
import WooriHeader from '~/components/common/WooriHeader'
import PartnerContent from '~/components/guide/PartnerContent'

export default {
  components: {
    WooriNavigationBar,
    WooriHeader,
    PartnerContent
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
