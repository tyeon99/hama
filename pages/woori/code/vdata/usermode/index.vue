<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="wrap">
    <WooriHeader />
    <div class="container">
      <div class="content">
        <VDataUserModeContent />
      </div>
    </div>
    <WooriNavigationBar :activeIndex="0" />
  </div>
</template>

<script>
import WooriNavigationBar from '~/components/common/WooriNavigationBar'
import WooriHeader from '~/components/common/WooriHeader'
import VDataUserModeContent from '~/components/vdata/usermode/VDataUserModeContent'

export default {
  components: {
    WooriNavigationBar,
    WooriHeader,
    VDataUserModeContent
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
